'use client';
import { useEffect, useRef } from 'react';

/** GSAP owns only this element's x-transform. Loaded only when the band nears the viewport; skipped under reduced motion. */
export function ScrollBand({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let cleanup = () => {};
    let cancelled = false;
    const start = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const tween = gsap.fromTo(el, { xPercent: 5 }, {
        xPercent: -35, ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
      });
      cleanup = () => { tween.scrollTrigger?.kill(); tween.kill(); };
    };
    const io = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) { io.disconnect(); void start(); }
    }, { rootMargin: '600px 0px' });
    io.observe(el);
    return () => { cancelled = true; io.disconnect(); cleanup(); };
  }, []);
  return (
    <div className="band" aria-hidden="true"><div ref={ref} className="band-text">{`${text} · `.repeat(6)}</div></div>
  );
}
