/**
 * ====================  BREVO SETTINGS  ====================
 * Put your values in a file called `.env.local` in the project root (never commit it):
 *
 *   NEXT_PUBLIC_BREVO_API_KEY=xkeysib-...your key...
 *   NEXT_PUBLIC_BREVO_SENDER_EMAIL=you@your-verified-domain.com   (must be a verified sender in Brevo)
 *   NEXT_PUBLIC_BREVO_TO_EMAIL=sabariarasu54@gmail.com            (where the messages arrive; optional, defaults to the resume email)
 *
 * IMPORTANT: this site is static (no server), so anything starting with NEXT_PUBLIC_ ends up in the browser and can be read by visitors.
 * To limit the risk, create a dedicated Brevo API key just for this form, and in Brevo > Security > Authorised IPs / domain
 * restrictions lock it down. For full safety put the key behind a tiny serverless function and set NEXT_PUBLIC_CONTACT_ENDPOINT instead.
 */
export const BREVO = {
  apiKey: process.env.NEXT_PUBLIC_BREVO_API_KEY ?? '',
  senderEmail: process.env.NEXT_PUBLIC_BREVO_SENDER_EMAIL ?? '',
  toEmail: process.env.NEXT_PUBLIC_BREVO_TO_EMAIL ?? '',
  senderName: 'Portfolio Contact Form',
  url: 'https://api.brevo.com/v3/smtp/email',
};
export const brevoReady = () => !!(BREVO.apiKey && BREVO.senderEmail);
