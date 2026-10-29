'use client';
import { useEffect, useRef } from 'react';

/** A glowing cyan/purple ring that glides after the mouse (eased), plus a small dot that sticks to the pointer. Desktop mice only. */
export function CursorRing() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const r = ring.current!, d = dot.current!, root = document.documentElement;
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0, shown = false;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    root.classList.add('has-cursor');
    const move = (e: PointerEvent) => {
      x = e.clientX; y = e.clientY;
      d.style.transform = `translate3d(${x}px,${y}px,0)`;
      if (!shown) { shown = true; rx = x; ry = y; r.classList.add('on'); d.classList.add('on'); }
      const t = (e.target as Element | null)?.closest?.('a,button,[role="button"],input,textarea,select,label,summary,.btn');
      r.classList.toggle('hover', !!t && !(t as HTMLElement).matches('input,textarea,select'));
      r.classList.toggle('text', !!t && (t as HTMLElement).matches('input,textarea,select'));
    };
    const down = () => r.classList.add('press'), up = () => r.classList.remove('press');
    const leave = () => { shown = false; r.classList.remove('on'); d.classList.remove('on'); };
    const tick = () => {
      const k = reduce ? 1 : 0.16;
      rx += (x - rx) * k; ry += (y - ry) * k;
      r.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerdown', down); window.addEventListener('pointerup', up);
    document.documentElement.addEventListener('mouseleave', leave);
    return () => {
      cancelAnimationFrame(raf); root.classList.remove('has-cursor');
      window.removeEventListener('pointermove', move); window.removeEventListener('pointerdown', down); window.removeEventListener('pointerup', up);
      document.documentElement.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (<><div ref={ring} className="cursor-ring" aria-hidden="true"><i /></div><div ref={dot} className="cursor-dot" aria-hidden="true" /></>);
}
