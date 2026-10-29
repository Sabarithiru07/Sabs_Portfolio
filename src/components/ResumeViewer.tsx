'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FileText, Download, X, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { profile, skills, timeline, facts } from '@/lib/content';
import { fallbackProjects } from '@/lib/fallback';

/** "Resume" button for the hero: opens a full-screen, scrollable resume view with a Download button. */
export function ResumeViewer() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow; document.body.style.overflow = 'hidden';
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', key);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', key); };
  }, [open]);

  return (
    <>
      <button type="button" className="btn btn-glass btn-resume" onClick={() => setOpen(true)}><FileText size={18} /> Resume</button>
      {mounted && open && createPortal(
        <div className="rv" role="dialog" aria-modal="true" aria-label="Resume" onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}>
          <div className="rv-sheet">
            <div className="rv-bar">
              <strong>Resume</strong>
              <div className="rv-actions">
                <a className="btn btn-primary btn-sm" href={profile.resume} download="Sabari_T_Resume.pdf"><Download size={16} /> Download Resume</a>
                <button type="button" className="rv-close" onClick={() => setOpen(false)} aria-label="Close resume"><X size={20} /></button>
              </div>
            </div>
            <div className="rv-body">
              <header className="rv-head">
                <img src="/sabari.jpg" alt="" width={96} height={96} className="rv-photo" />
                <div>
                  <h2>{profile.name}</h2>
                  <p className="rv-role">{profile.title}</p>
                  <ul className="rv-contact">
                    <li><Mail size={14} /> {profile.email}</li>
                    <li><Phone size={14} /> {profile.whatsappLabel}</li>
                    <li><MapPin size={14} /> {profile.location}</li>
                    <li><ExternalLink size={14} /> LinkedIn</li>
                  </ul>
                </div>
              </header>
              <section className="rv-sec"><h3>Summary</h3><p>{profile.bio}</p></section>
              <section className="rv-sec"><h3>Skills</h3>
                <div className="rv-skills">{Object.entries(skills).map(([g, v]) => (
                  <div key={g}><h4>{g}</h4><div className="chips">{v.items.map(i => <span key={i.name} className="tag">{i.name}</span>)}</div></div>
                ))}</div>
              </section>
              <section className="rv-sec"><h3>Experience &amp; Education</h3>
                <ol className="rv-time">{timeline.map(t => (
                  <li key={t.what + t.where}>
                    <div className="rv-t-head"><strong>{t.what}</strong><span>{t.where}{t.when ? ` · ${t.when}` : ''}</span></div>
                    {t.details && <ul>{t.details.map(d => <li key={d}>{d}</li>)}</ul>}
                  </li>
                ))}</ol>
              </section>
              <section className="rv-sec"><h3>Projects</h3>
                <ul className="rv-proj">{fallbackProjects.map(p => <li key={p.slug}><strong>{p.title}</strong><span>{p.summary}</span></li>)}</ul>
              </section>
              <section className="rv-sec"><h3>Quick facts</h3>
                <ul className="rv-proj">{facts.map(f => <li key={f.label}><strong>{f.label}</strong><span>{f.value}</span></li>)}</ul>
              </section>
              <div className="rv-foot"><a className="btn btn-primary" href={profile.resume} download="Sabari_T_Resume.pdf"><Download size={18} /> Download Resume (PDF)</a></div>
            </div>
          </div>
        </div>, document.body)}
    </>
  );
}
