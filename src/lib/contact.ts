import { profile } from './content';
import { BREVO, brevoReady } from './brevo';

export class ContactError extends Error {
  constructor(message: string, public fields?: Record<string, string[]>) { super(message); }
}
export type ContactData = { name: string; email: string; message: string; website: string };

/**
 * Delivery order:
 *  1. Brevo (set the keys in .env.local, see lib/brevo.ts)
 *  2. NEXT_PUBLIC_CONTACT_ENDPOINT (Formspree / Web3Forms ...)
 *  3. The visitor's email app (mailto), so the form always works.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
const esc = (t: string) => t.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

export async function sendContact(d: ContactData): Promise<'sent' | 'mailto'> {
  if (d.website) return 'sent'; // honeypot filled: pretend success, send nothing
  const subject = `Portfolio message from ${d.name}`;

  if (brevoReady()) {
    let res: Response;
    try {
      res = await fetch(BREVO.url, {
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
    } catch { throw new ContactError('Network error. Please try again.'); }
    if (res.ok) return 'sent';
    if (res.status === 429) throw new ContactError('Too many messages. Try again later.');
    throw new ContactError('Could not send your message. Please try again, or email me directly.');
  }

  if (!ENDPOINT) {
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${d.message}\n\n${d.name} <${d.email}>`)}`;
    return 'mailto';
  }
  let res: Response;
  try {
    res = await fetch(ENDPOINT, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name: d.name, email: d.email, subject, message: d.message }),
    });
  } catch { throw new ContactError('Network error. Please try again.'); }
  if (res.ok) return 'sent';
  if (res.status === 429) throw new ContactError('Too many messages. Try again later.');
  throw new ContactError('Could not send your message. Please try again, or email me directly.');
}
