'use client';
import { useState, type ReactNode, type MouseEvent } from 'react';
import { useRouter } from 'next/navigation';

/**
 * A link that gives instant feedback: the button shows a spinner, a plain dark loading screen fades in, the next page loads
 * underneath and the curtain lifts away (see app/template.tsx). Falls back to a normal link for new-tab clicks,
 * reduced motion and no-JS.
 */
export function TransitionLink({ href, className = '', children }: { href: string; className?: string; children: ReactNode }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    e.preventDefault();
    const root = document.documentElement;
    setBusy(true); root.classList.add('pt-cover');
    window.setTimeout(() => router.push(href), 450);
    window.setTimeout(() => { root.classList.remove('pt-cover'); setBusy(false); }, 6000); // safety net if navigation stalls
  }
  return (
    <a href={href} onClick={onClick} className={`${className}${busy ? ' busy' : ''}`} aria-busy={busy}>
      {children}{busy && <span className="btn-spin" aria-hidden="true" />}
    </a>
  );
}
