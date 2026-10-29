'use client';
import { useRef, useState, type FormEvent } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import { ContactError, sendContact } from '@/lib/contact';
import { profile } from '@/lib/content';

type State = { kind: 'idle' | 'loading' | 'success' | 'mailto' } | { kind: 'error'; message: string };

export function ContactForm() {
  const [state, setState] = useState<State>({ kind: 'idle' });
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget, f = new FormData(form);
    setState({ kind: 'loading' });
    try {
      const r = await sendContact({ name: String(f.get('name')), email: String(f.get('email')), message: String(f.get('message')), website: String(f.get('website') ?? '') });
      form.reset(); setState({ kind: r === 'mailto' ? 'mailto' : 'success' });
    } catch (err) { setState({ kind: 'error', message: err instanceof ContactError ? err.message : 'Something went wrong.' }); }
  }

  // Opens WhatsApp with whatever has been typed so far already filled in.
  function openWhatsApp() {
    const f = new FormData(formRef.current!);
    const name = String(f.get('name') || '').trim(), msg = String(f.get('message') || '').trim();
    const text = `Hi Sabari, ${msg || 'I saw your portfolio and would like to connect.'}${name ? `\n\n- ${name}` : ''}`;
    window.open(`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="glass pad cf">
      <p className="cf-title">Let&apos;s talk</p>
      <div className="cf-row">
        <label>Name<input name="name" type="text" placeholder="Your name" required maxLength={100} autoComplete="name" /></label>
        <label>Email<input name="email" type="email" placeholder="you@email.com" required maxLength={100} autoComplete="email" /></label>
      </div>
      <label>Message<textarea name="message" rows={4} placeholder="How can I help you?" required minLength={10} maxLength={3000} /></label>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="btn btn-primary cf-send" disabled={state.kind === 'loading'}><Send size={18} /> {state.kind === 'loading' ? 'Sending…' : 'Send message'}</button>
      <div className="cf-or"><span>or</span></div>
      <button type="button" className="btn cf-wa" onClick={openWhatsApp}><MessageCircle size={18} /> Message me on WhatsApp</button>
      <div aria-live="polite" className="cf-status">
        {state.kind === 'success' && <p style={{ color: 'var(--cyan)' }}>Thanks! Your message was sent.</p>}
        {state.kind === 'mailto' && <p style={{ color: 'var(--cyan)' }}>Your email app should open with the message ready to send.</p>}
        {state.kind === 'error' && <p className="err">{state.message}</p>}
      </div>
    </form>
  );
}
