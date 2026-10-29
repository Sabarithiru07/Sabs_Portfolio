import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

async function fill() {
  const u = userEvent.setup();
  await u.type(screen.getByLabelText(/name/i), 'Ada');
  await u.type(screen.getByLabelText(/email/i), 'ada@example.com');
  await u.type(screen.getByLabelText(/subject/i), 'Hello');
  await u.type(screen.getByLabelText(/message/i), 'A long enough message.');
  await u.click(screen.getByRole('button', { name: /send message/i }));
}
const json = (status: number, body: unknown) => new Response(JSON.stringify(body), { status });
// The endpoint is read at import time, so each test imports a fresh copy of the form.
async function load(endpoint?: string) {
  vi.resetModules();
  if (endpoint) vi.stubEnv('NEXT_PUBLIC_CONTACT_ENDPOINT', endpoint);
  return (await import('@/components/ContactForm')).ContactForm;
}

describe('ContactForm', () => {
  afterEach(() => { vi.unstubAllGlobals(); vi.unstubAllEnvs(); });

  it('shows loading and no success until the form service responds', async () => {
    let respond!: (r: Response) => void;
    vi.stubGlobal('fetch', () => new Promise<Response>(r => { respond = r; }));
    const ContactForm = await load('https://forms.example/f/abc'); render(<ContactForm />);
    await fill();
    expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled();
    expect(screen.queryByText(/was received/i)).toBeNull();
    respond(json(200, { ok: true }));
    expect(await screen.findByText(/was received/i)).toBeInTheDocument();
  });

  it('shows field errors returned by the form service and no success message', async () => {
    vi.stubGlobal('fetch', () => Promise.resolve(json(422, { errors: [{ field: 'email', message: 'Enter a valid email address.' }] })));
    const ContactForm = await load('https://forms.example/f/abc'); render(<ContactForm />);
    await fill();
    expect(await screen.findByText('Enter a valid email address.')).toBeInTheDocument();
    expect(screen.queryByText(/was received/i)).toBeNull();
  });

  it('shows a rate-limit message on 429', async () => {
    vi.stubGlobal('fetch', () => Promise.resolve(json(429, {})));
    const ContactForm = await load('https://forms.example/f/abc'); render(<ContactForm />);
    await fill();
    expect(await screen.findByText(/too many messages/i)).toBeInTheDocument();
  });

  it('shows a safe message on network failure', async () => {
    vi.stubGlobal('fetch', () => Promise.reject(new TypeError('Failed to fetch')));
    const ContactForm = await load('https://forms.example/f/abc'); render(<ContactForm />);
    await fill();
    expect(await screen.findByText(/network error/i)).toBeInTheDocument();
    expect(screen.queryByText(/failed to fetch/i)).toBeNull();
  });

  it('falls back to the email app when no endpoint is configured', async () => {
    const fetchSpy = vi.fn(); vi.stubGlobal('fetch', fetchSpy);
    const loc = { href: '' }; vi.stubGlobal('location', loc);
    const ContactForm = await load(); render(<ContactForm />);
    await fill();
    expect(await screen.findByText(/email app should open/i)).toBeInTheDocument();
    expect(loc.href).toMatch(/^mailto:sabariarasu54@gmail\.com\?subject=Hello/);
    expect(fetchSpy).not.toHaveBeenCalled();
  });
});
