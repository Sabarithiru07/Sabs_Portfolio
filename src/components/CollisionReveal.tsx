'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = { id: string; className?: string; title: string; a: ReactNode; b: ReactNode; children: ReactNode };

/**
 * Scroll-triggered section intro: two icons fly in from opposite sides, collide in the middle (flash, shockwave, sparks, shake),
 * the section title pops out of the impact and the section content bursts into view.
 * Before JavaScript runs, and under reduced motion, everything is simply visible.
 */
export function CollisionReveal({ id, className = '', title, a, b, children }: Props) {
  const stage = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<'static' | 'armed' | 'play'>('static');

  useEffect(() => {
    const el = stage.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    setState('armed');
    const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { setState('play'); io.disconnect(); } },
      { threshold: 0.35, rootMargin: '0px 0px -12% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} className={`${className} collide ${state}`}>
      <div ref={stage} className="cr-stage">
        <span className="cr-icon cr-a" style={{ ['--dx' as string]: -1 }} aria-hidden="true">{a}</span>
        <span className="cr-icon cr-b" style={{ ['--dx' as string]: 1 }} aria-hidden="true">{b}</span>
        <span className="cr-flash" aria-hidden="true" /><span className="cr-ring" aria-hidden="true" />
        {Array.from({ length: 14 }, (_, i) => <i key={i} className="cr-spark" style={{ ['--r' as string]: `${i * (360 / 14)}deg` }} aria-hidden="true" />)}
        <h2 className="cr-title grad">{title}</h2>
      </div>
      <div className="cr-body">{children}</div>
    </section>
  );
}
