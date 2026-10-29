'use client';
import { useEffect, useRef, useState } from 'react';

/** Odometer-style number: each digit is a reel that rolls into place when the number scrolls into view. */
export function RollingNumber({ value, suffix = '', duration = 1.8 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setOn(true); return; }
    const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { setOn(true); io.disconnect(); } }, { threshold: 0.4 });
    io.observe(el); return () => io.disconnect();
  }, []);
  const digits = String(value).split('');
  return (
    <span ref={ref} className="roll" aria-label={`${value}${suffix}`}>
      {digits.map((d, i) => (
        <span key={i} className="roll-col" aria-hidden="true">
          <span className="roll-reel" style={{ transform: `translateY(${on ? -(10 + Number(d)) : 0}em)`, transitionDuration: `${duration + i * 0.35}s` }}>
            {Array.from({ length: 20 }, (_, n) => <span key={n}>{n % 10}</span>)}
          </span>
        </span>
      ))}
      {suffix && <span className="roll-suffix" aria-hidden="true">{suffix}</span>}
    </span>
  );
}
