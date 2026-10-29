'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';

/** Footer that shows its items one by one, left to right, when scrolled into view (items carry class "foot-item" and a --i index). Visible without JS / with reduced motion. */
export function FooterReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState('');
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    setState('armed');
    const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { setState('armed in'); io.disconnect(); } }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <footer ref={ref} className={`footer ${state}`}>{children}</footer>;
}
