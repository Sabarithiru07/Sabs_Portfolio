'use client';
import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Water-ripple backdrop for the contact section, driven by scrolling: while the section is on screen, every bit of scroll
 * (up or down) drops a ripple, so the page feels like a stone skipping across water. Nothing plays while you are not scrolling.
 */
export function RippleField({ children }: { children: ReactNode }) {
  const layer = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = root.current?.closest('section') ?? root.current, l = layer.current;
    if (!host || !l || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let lastY = window.scrollY, acc = 0, lastT = 0;
    const drop = () => {
      const r = l.getBoundingClientRect(), h = host.getBoundingClientRect();
      const top = Math.max(h.top, 0), bottom = Math.min(h.bottom, window.innerHeight);
      const el = document.createElement('span');
      el.className = 'rf-drop';
      el.style.left = `${window.innerWidth * (0.15 + Math.random() * 0.7) - r.left}px`;
      el.style.top = `${top + (bottom - top) * (0.15 + Math.random() * 0.7) - r.top}px`;
      el.style.setProperty('--sz', `${280 + Math.random() * 180}px`);
      l.appendChild(el);
      el.addEventListener('animationend', e => { if (e.target === el) el.remove(); });
      while (l.querySelectorAll('.rf-drop').length > 12) l.querySelector('.rf-drop')?.remove();
    };
    const onScroll = () => {
      const y = window.scrollY, d = Math.abs(y - lastY); lastY = y;
      const h = host.getBoundingClientRect();
      if (h.bottom < 0 || h.top > window.innerHeight) { acc = 0; return; }
      acc += d;
      const now = performance.now();
      if (acc >= 70 && now - lastT > 140) { acc = 0; lastT = now; drop(); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={root} className="ripple-field">
      <div ref={layer} className="rf-layer" aria-hidden="true" />
      {children}
    </div>
  );
}
