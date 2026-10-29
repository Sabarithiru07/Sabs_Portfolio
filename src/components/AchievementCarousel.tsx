'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Award, ChevronLeft, ChevronRight, GraduationCap, Globe, Megaphone, Mic, Palette, TrendingUp, X, MousePointerClick, Check, type LucideIcon } from 'lucide-react';
import { achievements, type Achievement } from '@/lib/content';

const ICONS: Record<string, LucideIcon> = { mic: Mic, grad: GraduationCap, palette: Palette, megaphone: Megaphone, globe: Globe, trending: TrendingUp };

/** Coverflow-style carousel of achievements. Click the centre card to read the full description (and see photos). */
export function AchievementCarousel() {
  const n = achievements.length;
  const [i, setI] = useState(0);
  const [open, setOpen] = useState<Achievement | null>(null);
  const [paused, setPaused] = useState(false);
  const drag = useRef<{ x: number; moved: boolean } | null>(null);
  const go = useCallback((d: number) => setI(v => (v + d + n) % n), [n]);

  useEffect(() => {
    if (paused || open || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = window.setInterval(() => go(1), 5200);
    return () => window.clearInterval(t);
  }, [paused, open, go]);

  const rel = (k: number) => { let d = k - i; if (d > n / 2) d -= n; if (d < -n / 2) d += n; return d; };

  return (
    <div className="ac" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onKeyDown={e => { if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1); }}>
      <div className="ac-stage" tabIndex={0} aria-roledescription="carousel" aria-label="Achievements"
        onPointerDown={e => { drag.current = { x: e.clientX, moved: false }; }}
        onPointerMove={e => { if (drag.current && Math.abs(e.clientX - drag.current.x) > 8) drag.current.moved = true; }}
        onPointerUp={e => { const d = drag.current; drag.current = null; if (d && Math.abs(e.clientX - d.x) > 50) go(e.clientX < d.x ? 1 : -1); }}>
        {achievements.map((a, k) => {
          const d = rel(k), Icon = ICONS[a.icon] ?? Award, active = d === 0, far = Math.abs(d) > 2;
          return (
            <article key={a.id} className={`ac-card${active ? ' active' : ''}`} aria-hidden={far}
              style={{ ['--d' as string]: d, ['--abs' as string]: Math.abs(d), zIndex: 10 - Math.abs(d), opacity: far ? 0 : 1, pointerEvents: far ? 'none' : 'auto' }}
              onClick={() => { if (drag.current?.moved) return; active ? setOpen(a) : setI(k); }}>
              <span className="ac-badge">{a.badge}</span>
              <span className="ac-icon"><Icon size={30} /></span>
              <h3>{a.title}</h3>
              <p className="ac-sub">{a.subtitle}</p>
              <p className="ac-date">{a.date}</p>
              <p className="ac-sum">{a.summary}</p>
              <button type="button" className="ac-cta" tabIndex={active ? 0 : -1} onClick={e => { e.stopPropagation(); active ? setOpen(a) : setI(k); }}>
                <MousePointerClick size={15} /> Click &amp; view
              </button>
            </article>
          );
        })}
      </div>
      <div className="ac-nav">
        <button type="button" onClick={() => go(-1)} aria-label="Previous achievement"><ChevronLeft size={20} /></button>
        <div className="ac-dots" role="tablist" aria-label="Choose achievement">
          {achievements.map((a, k) => <button key={a.id} type="button" role="tab" aria-selected={k === i} aria-label={a.title} className={k === i ? 'on' : ''} onClick={() => setI(k)} />)}
        </div>
        <button type="button" onClick={() => go(1)} aria-label="Next achievement"><ChevronRight size={20} /></button>
      </div>
      {open && <AchievementModal a={open} onClose={() => setOpen(null)} />}
    </div>
  );
}

function AchievementModal({ a, onClose }: { a: Achievement; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [light, setLight] = useState<number | null>(null);
  const g = a.gallery ?? [];
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const prev = document.body.style.overflow; document.body.style.overflow = 'hidden';
    const key = (e: KeyboardEvent) => {
      if (light !== null) {
        if (e.key === 'Escape') setLight(null);
        if (e.key === 'ArrowRight') setLight(v => (v === null ? v : (v + 1) % g.length));
        if (e.key === 'ArrowLeft') setLight(v => (v === null ? v : (v - 1 + g.length) % g.length));
      } else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', key);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', key); };
  }, [light, g.length, onClose]);
  if (!mounted) return null;
  const Icon = ICONS[a.icon] ?? Award;
  return createPortal(
    <div className="rv am" role="dialog" aria-modal="true" aria-label={a.title} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="rv-sheet am-sheet">
        <div className="rv-bar"><strong className="am-bar-title"><Icon size={18} /> {a.badge}</strong>
          <button type="button" className="rv-close" onClick={onClose} aria-label="Close"><X size={20} /></button></div>
        <div className="rv-body">
          <div className={`am-head${a.poster ? ' has-poster' : ''}`}>
            {a.poster && <button type="button" className="am-poster" onClick={() => setLight(-1)} aria-label="View invitation larger">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.poster} alt={`Invitation: ${a.title}`} width={480} height={720} /></button>}
            <div>
              <h2>{a.title}</h2>
              <p className="am-meta">{a.subtitle} · {a.date}</p>
              {a.tags && <div className="chips">{a.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>}
              {a.details.map(p => <p key={p} className="am-p">{p}</p>)}
            </div>
          </div>
          <h3 className="am-h">Highlights</h3>
          <ul className="am-list">{a.highlights.map(h => <li key={h}><Check size={16} />{h}</li>)}</ul>
          {g.length > 0 && (<>
            <h3 className="am-h">Photo gallery</h3>
            <div className="am-gallery">{g.map((im, k) => (
              <button key={im.src} type="button" onClick={() => setLight(k)} aria-label={`Open photo ${k + 1}: ${im.alt}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={im.src} alt={im.alt} loading="lazy" /></button>))}</div>
          </>)}
        </div>
      </div>
      {light !== null && (
        <div className="lb" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={e => { e.stopPropagation(); if (e.target === e.currentTarget) setLight(null); }}>
          <button type="button" className="lb-x" onClick={() => setLight(null)} aria-label="Close photo"><X size={22} /></button>
          {light >= 0 && g.length > 1 && <button type="button" className="lb-n prev" onClick={() => setLight((light - 1 + g.length) % g.length)} aria-label="Previous photo"><ChevronLeft size={26} /></button>}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={light === -1 ? a.poster! : g[light].src} alt={light === -1 ? `Invitation: ${a.title}` : g[light].alt} />
          {light >= 0 && g.length > 1 && <button type="button" className="lb-n next" onClick={() => setLight((light + 1) % g.length)} aria-label="Next photo"><ChevronRight size={26} /></button>}
          {light >= 0 && <p className="lb-cap">{g[light].alt} · {light + 1} / {g.length}</p>}
        </div>
      )}
    </div>, document.body);
}
