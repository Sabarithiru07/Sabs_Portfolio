'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Play } from 'lucide-react';
import { profile, orbitIcons } from '@/lib/content';
import { BrandIcon, type BrandKey } from '@/components/BrandIcons';
import { INTRO_FLAG, PORTFOLIO_PATH } from '@/lib/intro';

const VIDEO_SRC = '/Intro.mp4';
const POSTER = '/intro-poster.jpg';
const NAVIGATE_AT = 950;      // ms after the blast starts: the screen shows only the glowing core, so swap to the portfolio now

type Phase = 'fetching' | 'opening' | 'gate' | 'playing' | 'blast';
const FETCH_MIN_MS = 3200;    // the "fetching portfolio" animation always runs at least this long
const FETCH_MAX_MS = 7000;    // ...and never waits longer than this for the video to buffer
const OPEN_MS = 1100;         // frame-opening animation before the video starts
const LOG = ['Resolving portfolio host', 'Locating server', 'Opening secure connection', 'Fetching profile, skills and projects', 'Ready'];
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&@';

export function WelcomeIntro() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>('fetching');
  const [pct, setPct] = useState(0);
  const [title, setTitle] = useState(() => 'FETCHING PORTFOLIO'.replace(/[A-Z]/g, '·'));
  const videoReady = useRef(false);
  const [progress, setProgress] = useState(0);
  const [failed, setFailed] = useState(false);
  const blasted = useRef(false);

  useEffect(() => { router.prefetch(PORTFOLIO_PATH); }, [router]);

  const blast = useCallback(() => {
    if (blasted.current) return;
    blasted.current = true;
    videoRef.current?.pause();
    try { sessionStorage.setItem(INTRO_FLAG, '1'); } catch { /* private mode: portfolio simply opens without the arrival effect */ }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { router.push(PORTFOLIO_PATH); return; }
    setPhase('blast');
    window.setTimeout(() => router.push(PORTFOLIO_PATH), NAVIGATE_AT);
  }, [router]);

  // Autoplays with no click. First it tries WITH sound. Browsers refuse sound-autoplay for first-time visitors, so in that case the
  // video still starts by itself (silent) and the sound switches on at the visitor's very first tap / click / key press anywhere.
  const start = useCallback(async () => {
    const v = videoRef.current; if (!v) return false;
    v.muted = false;
    try { await v.play(); setPhase('playing'); return true; } catch { /* sound autoplay refused */ }
    try {
      v.muted = true; await v.play(); setPhase('playing');
      const unmute = () => { v.muted = false; v.volume = 1; off(); };
      const evs = ['pointerdown', 'touchend', 'keydown', 'click'] as const;
      const off = () => evs.forEach(e => window.removeEventListener(e, unmute));
      evs.forEach(e => window.addEventListener(e, unmute, { once: false }));
      return true;
    } catch { return false; }
  }, []);

  // 1) "Fetching portfolio" animation (progress + decoding title). It finishes when the bar reaches 100% AND the video has buffered.
  useEffect(() => {
    const v = videoRef.current;
    const ready = () => { videoReady.current = true; };
    if (v && v.readyState >= 3) ready();
    v?.addEventListener('canplaythrough', ready); v?.addEventListener('canplay', ready);
    const t0 = performance.now(); let raf = 0, done = false;
    const target = 'FETCHING PORTFOLIO';
    const tick = (now: number) => {
      const t = now - t0;
      const eased = Math.min(1, t / FETCH_MIN_MS); const p = Math.round((1 - Math.pow(1 - eased, 2.2)) * 100);
      setPct(p);
      const shown = Math.floor((t / (FETCH_MIN_MS * 0.8)) * target.length);
      setTitle(target.split('').map((c, i) => c === ' ' ? ' ' : i < shown ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0]).join(''));
      if (!done && p >= 100 && (videoReady.current || t > FETCH_MAX_MS)) { done = true; setTitle(target); setPhase(ph => (ph === 'fetching' ? 'opening' : ph)); return; }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); v?.removeEventListener('canplaythrough', ready); v?.removeEventListener('canplay', ready); };
  }, []);

  // 2) Frame opens, then 3) the video plays straight away, with sound. Browsers only allow sound-autoplay for visitors who have
  // interacted with the site before; if it is refused we show the "Tap to begin" gate (one tap = plays with sound).
  useEffect(() => {
    if (phase !== 'opening') return;
    let alive = true;
    const id = window.setTimeout(async () => {
      if (!alive) return;
      if (!(await start()) && alive) setPhase('gate');
    }, OPEN_MS);
    return () => { alive = false; window.clearTimeout(id); };
  }, [phase, start]);

  return (
    <div className={`intro phase-${phase}`}>
      <div className="intro-bg intro-aurora" aria-hidden="true" />
      <div className="intro-bg intro-stars" aria-hidden="true" />
      <div className="intro-bg intro-grid" aria-hidden="true" />
      <div className="intro-bg intro-floor" aria-hidden="true" />
      <span className="intro-bg intro-orb o1" aria-hidden="true" /><span className="intro-bg intro-orb o2" aria-hidden="true" />

      <div className="intro-stage">
        <div className="intro-center">
          <p className="intro-eyebrow fade-target">Welcome to the portfolio of</p>
          <h1 className="intro-name grad fade-target">{profile.name}</h1>

          <div className="fetch" aria-live="polite" aria-hidden={phase !== 'fetching'}>
            <div className="radar" aria-hidden="true">
              <span className="r-ring a" /><span className="r-ring b" /><span className="r-ring c" /><span className="r-cross" /><span className="r-sweep" />
              <span className="r-blip p1" /><span className="r-blip p2" /><span className="r-blip p3" /><span className="r-pin"><i /></span>
            </div>
            <p className="fetch-title">{title}</p>
            <ul className="fetch-log">
              {LOG.map((l, i) => { const at = i * 25; const state = pct >= at + (i === 4 ? 0 : 25) || (i === 4 && pct >= 100) ? 'ok' : pct >= at ? 'run' : 'wait';
                return <li key={l} className={`fl-${state}`}><span className="fl-mark">{state === 'ok' ? '✓' : state === 'run' ? '›' : '·'}</span>{l}{state === 'run' && <em>{i === 3 ? ` ${pct}%` : '…'}</em>}</li>; })}
            </ul>
            <div className="fetch-bar"><span style={{ transform: `scaleX(${pct / 100})` }} /></div>
          </div>
          <div className="intro-frame-wrap">
            <span className="ring r1" aria-hidden="true" /><span className="ring r2" aria-hidden="true" /><span className="ring r3" aria-hidden="true" />
            {orbitIcons.map((k, i) => <span key={k} className="frame-orbit" style={{ ['--i' as string]: i }} aria-hidden="true"><BrandIcon name={k as BrandKey} size={24} /></span>)}
            <i className="corner tl" aria-hidden="true" /><i className="corner tr" aria-hidden="true" /><i className="corner bl" aria-hidden="true" /><i className="corner br" aria-hidden="true" />
            <div className="intro-frame">
              <video ref={videoRef} src={VIDEO_SRC} poster={POSTER} playsInline preload="auto" className="intro-video"
                aria-label={`Welcome video from ${profile.name}`}
                onTimeUpdate={e => { const v = e.currentTarget; if (v.duration) setProgress(v.currentTime / v.duration); }}
                onEnded={blast} onError={() => { setFailed(true); setPhase('gate'); }} />
              <div className="intro-sheen" aria-hidden="true" />
              <span className="intro-badge" aria-hidden="true"><i /></span>
              {phase === 'gate' && (
                <button className="intro-play" onClick={() => (failed ? blast() : void start())}
                  aria-label={failed ? 'Enter portfolio' : 'Play welcome video'}>
                  <span className="pulse" aria-hidden="true" />
                  {failed ? <ArrowRight size={34} /> : <Play size={34} fill="currentColor" />}
                  <span className="intro-play-label">{failed ? 'Enter portfolio' : 'Tap to begin'}</span>
                </button>
              )}
            </div>
          </div>

          <div className="intro-bar fade-target" role="progressbar" aria-label="Welcome video progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)}>
            <span style={{ transform: `scaleX(${progress})` }} />
          </div>

          <div className="intro-actions fade-target">
            <button className="intro-chip skip" onClick={blast}>Skip intro <ArrowRight size={16} /></button>
          </div>
          <noscript><a className="btn btn-primary" href={PORTFOLIO_PATH}>Enter portfolio</a></noscript>
        </div>

      </div>

      <div className="blast-core" aria-hidden="true" />
    </div>
  );
}
