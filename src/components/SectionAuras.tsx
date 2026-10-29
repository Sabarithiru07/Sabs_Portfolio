'use client';
import { useEffect } from 'react';

/** Each section has its own drifting light layer (CSS). This only runs it while the section is near the viewport. */
export function SectionAuras() {
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.target.setAttribute('data-live', String(e.isIntersecting))), { rootMargin: '200px' });
    document.querySelectorAll('section.aura').forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);
  return null;
}
