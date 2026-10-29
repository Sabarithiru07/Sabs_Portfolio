'use client';
import { useLayoutEffect, useRef } from 'react';
import { INTRO_FLAG } from '@/lib/intro';
import { fireParticles } from '@/lib/blast';

/**
 * The blast continues on the portfolio page. The intro hands over a glowing core on a dark screen; here the same core
 * explodes: a circular hole opens in the dark cover and reveals the portfolio, shockwave rings and light rays race outward
 * and particles burst. The intro sets a sessionStorage flag just before navigating; this layout effect (it runs before the
 * browser paints) sees it, marks <html data-intro> and CSS does the rest. Direct visitors never have the flag, so they see
 * none of it and crawlers get the page untouched.
 */
export function EnterReveal() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const done = useRef(false);
  useLayoutEffect(() => {
    if (done.current) return; // StrictMode runs effects twice in development
    const root = document.documentElement;
    try {
      if (sessionStorage.getItem(INTRO_FLAG)) { root.setAttribute('data-intro', '1'); sessionStorage.removeItem(INTRO_FLAG); }
    } catch { /* storage unavailable: no arrival effect */ }
    if (!root.hasAttribute('data-intro')) return;
    done.current = true;
    if (canvas.current) fireParticles(canvas.current, 1500);
    window.setTimeout(() => root.removeAttribute('data-intro'), 2600);
  }, []);
  return (
    <div className="enter-fx" aria-hidden="true">
      <div className="enter-reveal" />
      <div className="er-rays" />
      <span className="er-ring e1" /><span className="er-ring e2" /><span className="er-ring e3" />
      <div className="er-core" />
      <canvas ref={canvas} className="er-canvas" />
    </div>
  );
}
