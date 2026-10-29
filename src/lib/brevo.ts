// NEXT_PUBLIC_ vars must be written out literally like this so Next.js can inline them at build time.
const API_KEY = process.env.NEXT_PUBLIC_BREVO_API_KEY ?? '';
const SENDER_EMAIL = process.env.NEXT_PUBLIC_BREVO_SENDER_EMAIL ?? '';
const TO_EMAIL = process.env.NEXT_PUBLIC_BREVO_TO_EMAIL ?? '';

export const BREVO = {
  apiKey: API_KEY.trim(),
  senderEmail: SENDER_EMAIL.trim(),
  toEmail: TO_EMAIL.trim(),
  senderName: 'Portfolio Contact Form',
  url: 'https://api.brevo.com/v3/smtp/email',
};

export const brevoReady = () => !!(BREVO.apiKey && BREVO.senderEmail);