const COLORS = ['#A855F7', '#22D3EE', '#C4B5FD', '#F5F3FF', '#6D28D9'];

/** Firework burst from the screen centre (time-based, so it runs at the same speed on slow phones). */
export function fireParticles(canvas: HTMLCanvasElement, duration = 1700) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = (canvas.width = window.innerWidth * dpr), h = (canvas.height = window.innerHeight * dpr);
  const cx = w / 2, cy = h / 2, reach = Math.hypot(w, h) / 2;
  const ps = Array.from({ length: 720 }, (_, i) => {
    const a = Math.random() * Math.PI * 2, big = i % 23 === 0, streak = i % 3 === 0;
    const sp = (big ? 0.25 : 0.3 + Math.random() * 1.1) * reach / 46;
    return { x: cx, y: cy, px: cx, py: cy, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, streak,
      r: (big ? 9 + Math.random() * 7 : 2.4 + Math.random() * 3.6) * dpr, c: COLORS[(Math.random() * COLORS.length) | 0], life: 0.7 + Math.random() * 0.5 };
  });
  const t0 = performance.now(); let last = t0;
  const tick = (now: number) => {
    const t = (now - t0) / duration, k = Math.min((now - last) / 16.67, 4); last = now;
    const drag = Math.pow(0.985, k);
    ctx.globalCompositeOperation = 'destination-out'; ctx.globalAlpha = Math.min(0.12 * k, 0.5); ctx.fillStyle = '#000'; ctx.fillRect(0, 0, w, h); // fade old frames = trails
    ctx.globalCompositeOperation = 'lighter';
    for (const p of ps) {
      p.px = p.x; p.py = p.y; p.x += p.vx * k; p.y += p.vy * k; p.vx *= drag; p.vy *= drag; p.vy += 0.015 * dpr * k;
      const a = Math.max(0, 1 - t / p.life); if (a <= 0) continue;
      ctx.globalAlpha = a; ctx.fillStyle = ctx.strokeStyle = p.c;
      if (p.streak) { ctx.lineWidth = p.r * 0.8; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(p.px - p.vx * 4, p.py - p.vy * 4); ctx.lineTo(p.x, p.y); ctx.stroke(); }
      else {
        const r = p.r * (0.5 + a);
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha = a * 0.25; ctx.beginPath(); ctx.arc(p.x, p.y, r * 2.6, 0, Math.PI * 2); ctx.fill(); // cheap glow (shadowBlur is too slow)
      }
    }
    if (t < 1.1) requestAnimationFrame(tick); else { ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1; ctx.clearRect(0, 0, w, h); }
  };
  requestAnimationFrame(tick);
}
