'use client';
import type { MouseEvent, ReactNode } from 'react';

/** Pulls its child a few pixels toward the cursor. Desktop pointers only; inert under reduced motion. */
export function Magnetic({ children }: { children: ReactNode }) {
  const move = (e: MouseEvent<HTMLSpanElement>) => {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = e.currentTarget, r = el.getBoundingClientRect();
    const clamp = (v: number) => Math.max(-10, Math.min(10, v));
    el.style.transform = `translate(${clamp((e.clientX - r.left - r.width / 2) * 0.25)}px, ${clamp((e.clientY - r.top - r.height / 2) * 0.25)}px)`;
  };
  return <span className="magnetic" onMouseMove={move} onMouseLeave={e => { e.currentTarget.style.transform = ''; }}>{children}</span>;
}
