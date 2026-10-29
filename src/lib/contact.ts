import { profile } from './content';
import { BREVO, brevoReady } from './brevo';

export class ContactError extends Error {
  constructor(message: string, public fields?: Record<string, string[]>) { super(message); }
}
export type ContactData = { name: string; email: string; message: string; website: string };

const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
const esc = (t: string) =>
  t.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

function openMailto(d: ContactData, subject: string): 'mailto' {
  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${d.message}\n\n${d.name} <${d.email}>`)}`;
  return 'mailto';
}

export async function sendContact(d: ContactData): Promise<'sent' | 'mailto'> {
  if (d.website) return 'sent'; // honeypot
  const subject = `Portfolio message from ${d.name}`;

  // 1) Brevo
  if (brevoReady()) {
    try {
      const res = await fetch(BREVO.url, {
        method: 'POST',
        headers: { 'api-key': BREVO.apiKey, 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          sender: { name: BREVO.senderName, email: BREVO.senderEmail },
          to: [{ email: BREVO.toEmail || profile.email, name: profile.name }],
          replyTo: { email: d.email, name: d.name },
          subject,
          htmlContent: `<h3>New message from your portfolio</h3><p><b>Name:</b> ${esc(d.name)}<br><b>Email:</b> ${esc(d.email)}</p><p>${esc(d.message).replace(/\n/g, '<br>')}</p>`,
          textContent: `${d.message}\n\n${d.name} <${d.email}>`,
        }),
      });
      if (res.ok) return 'sent';
      if (res.status === 429) throw new ContactError('Too many messages. Try again later.');
      const body = await res.text();
      console.error(`[contact] Brevo failed ${res.status}:`, body);
    } catch (e) {
      if (e instanceof ContactError) throw e;
      console.error('[contact] Brevo request error (CORS / network / blocked):', e);
    }
    return openMailto(d, subject); // Brevo failed -> still let the visitor reach you
  }

  console.warn('[contact] Brevo env vars are EMPTY in this build. Add NEXT_PUBLIC_BREVO_* in Render and rebuild with cleared cache.');

  // 2) Optional external endpoint
  if (ENDPOINT) {
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: d.name, email: d.email, subject, message: d.message }),
      });
      if (res.ok) return 'sent';
      if (res.status === 429) throw new ContactError('Too many messages. Try again later.');
    } catch (e) {
      if (e instanceof ContactError) throw e;
    }
  }

  // 3) mailto
  return openMailto(d, subject);
}