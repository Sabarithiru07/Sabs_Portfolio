'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * About-section entrance. When it scrolls into view the profile picture first appears large in the middle of the section,
 * then travels left into its normal spot, and only then do the about details slide in.
 * Stages: 0 armed (hidden) -> 1 profile pops in at centre -> 2 profile travels left -> 3 details revealed.
 * Before JavaScript runs, and under reduced motion, the section is simply laid out normally.
 */
export function AboutReveal({ profile, children }: { profile: ReactNode; children: ReactNode }) {
  const grid = useRef<HTMLDivElement>(null);
  const slot = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<'static' | 0 | 1 | 2 | 3>('static');

  useEffect(() => {
    const g = grid.current, s = slot.current;
    if (!g || !s || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const measure = () => {
      const gr = g.getBoundingClientRect(), sr = s.getBoundingClientRect();
      g.style.setProperty('--dx', `${Math.round(gr.left + gr.width / 2 - (sr.left + sr.width / 2))}px`); // slot centre -> grid centre
    };
    measure(); setStage(0);
    window.addEventListener('resize', measure);
    const timers: number[] = [];
    const io = new IntersectionObserver(es => {
      if (!es.some(e => e.isIntersecting)) return;
      io.disconnect(); measure(); setStage(1);
      timers.push(window.setTimeout(() => setStage(2), 1200), window.setTimeout(() => setStage(3), 2150));
    }, { threshold: 0.4 });
    io.observe(g);
    return () => { io.disconnect(); window.removeEventListener('resize', measure); timers.forEach(clearTimeout); };
  }, []);

  return (
    <div ref={grid} className="about about-reveal" data-stage={stage}>
      <div ref={slot} className="about-slot"><div className="about-mover">{profile}</div></div>
      <div className="about-details">{children}</div>
    </div>
  );
}
