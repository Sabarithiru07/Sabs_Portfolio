'use client';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar({ monogram, links }: { monogram: string; links: string[] }) {
  const LINKS = links;
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' });
    LINKS.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => { obs.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, [LINKS]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const items = LINKS.map(id => (
    <a key={id} href={`#${id}`} onClick={() => setOpen(false)} aria-current={active === id ? 'true' : undefined}
      className={`navlink${active === id ? ' active' : ''}`}>{id}</a>
  ));
  return (
    <nav className={`top${scrolled ? ' scrolled' : ''}`} aria-label="Primary">
      <div>
        <a href="#top" className="mono">{monogram}</a>
        <div className="links">{items}</div>
        <button ref={toggleRef} className="menu-btn" aria-expanded={open} aria-controls="drawer"
          aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(o => !o)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && <div id="drawer" className="drawer">{items}</div>}
    </nav>
  );
}
