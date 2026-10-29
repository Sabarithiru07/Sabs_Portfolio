'use client';
import { useEffect, useRef, type ReactNode } from 'react';

// One shared rAF-throttled scroll loop drives every parallax layer on the page.
const subs = new Set<() => void>(); let raf = 0, bound = false;
const tick = () => { raf = 0; subs.forEach(f => f()); };
const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
function subscribe(f: () => void) {
  if (!bound) { addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll); bound = true; }
  subs.add(f); f();
  return () => { subs.delete(f); if (!subs.size) { removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll); bound = false; } };
}
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Moves its children at a different rate than the page. speed > 0 drifts slower (far layer), speed < 0 faster (near layer). */
export function Parallax({ speed = 0.1, className = '', innerClassName = '', children }:
  { speed?: number; className?: string; innerClassName?: string; children: ReactNode }) {
  const outer = useRef<HTMLDivElement>(null), inner = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduced()) return;
    return subscribe(() => {
      const o = outer.current, i = inner.current; if (!o || !i) return;
      const r = o.getBoundingClientRect(); // outer is never transformed, so measuring it is stable
      i.style.transform = `translate3d(0,${(-(r.top + r.height / 2 - innerHeight / 2) * speed).toFixed(1)}px,0)`;
    });
  }, [speed]);
  return <div ref={outer} className={className}><div ref={inner} className={innerClassName} style={{ willChange: 'transform' }}>{children}</div></div>;
}

const ORBS = [{ fx: 700, fy: 900, ax: 90, ay: 140 }, { fx: 1000, fy: 650, ax: 120, ay: 110 }, { fx: 800, fy: 1100, ax: 70, ay: 170 }];
/** Three blurred light orbs that drift as you scroll, giving the background depth. */
export function ScrollOrbs() {
  const els = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    if (reduced()) return;
    return subscribe(() => {
      const y = scrollY;
      els.current.forEach((el, k) => {
        if (!el) return; const o = ORBS[k];
        el.style.transform = `translate3d(${(Math.cos(y / o.fx + k * 2) * o.ax).toFixed(1)}px,${(Math.sin(y / o.fy + k) * o.ay).toFixed(1)}px,0)`;
      });
    });
  }, []);
  return <div className="orbs" aria-hidden="true">{ORBS.map((_, k) => <div key={k} ref={el => { els.current[k] = el; }} className={`orb o${k + 1}`} />)}</div>;
}
