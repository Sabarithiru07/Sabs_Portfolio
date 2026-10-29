'use client';
import type { MouseEvent, ReactNode } from 'react';

const canTilt = () =>
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Gentle 3D tilt (max 6deg) on desktop pointers only; inert on touch and under reduced motion. */
export function TiltCard({ children }: { children: ReactNode }) {
  const move = (e: MouseEvent<HTMLDivElement>) => {
    if (!canTilt()) return;
    const el = e.currentTarget, r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`;
  };
  const leave = (e: MouseEvent<HTMLDivElement>) => { e.currentTarget.style.transform = ''; };
  return <div className="tilt h-full" onMouseMove={move} onMouseLeave={leave}>{children}</div>;
}
