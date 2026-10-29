'use client';
import { useMemo, useState } from 'react';
import { TransitionLink } from './TransitionLink';
import { AnimatePresence, m } from 'motion/react';
import { ArrowUpRight, Star, Bot, Briefcase, Car, HeartPulse, ScanEye, TrainFront, type LucideIcon } from 'lucide-react';
import type { Project, ProjectDetail } from '@/lib/types';
import { coverOf } from '@/lib/fallback';

function spotlight(e: React.MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
}
const iconFor = (p: Project): LucideIcon => {
  const k = `${p.slug} ${p.title}`.toLowerCase();
  if (/medical|ulcer|health/.test(k)) return HeartPulse;
  if (/railway|train/.test(k)) return TrainFront;
  if (/accident|road/.test(k)) return Car;
  if (/detect|smok/.test(k)) return ScanEye;
  if (/resume|job|recruit/.test(k)) return Briefcase;
  return Bot;
};

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [tag, setTag] = useState('All');
  const tags = useMemo(() => ['All', ...new Set(projects.flatMap(p => p.technologies))], [projects]);
  const shown = tag === 'All' ? projects : projects.filter(p => p.technologies.includes(tag));
  if (!projects.length) return <p className="sub">No published projects yet.</p>;
  return (
    <>
      <div role="group" aria-label="Filter projects" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
        {tags.map(t => (
          <button key={t} className="tag filter" aria-pressed={t === tag} onClick={() => setTag(t)}>{t}</button>
        ))}
      </div>
      <m.div layout className="grid">
        <AnimatePresence mode="popLayout">
          {shown.map((p, idx) => {
            const Icon = iconFor(p);
            const cover = coverOf(p);
            const domain = (p as Partial<ProjectDetail>).case_study_content?.Domain;
            return (
              <m.article layout key={p.slug} className="glass spot pj-card" onMouseMove={spotlight} whileHover={{ y: -8 }}
                initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.3 }}>
                <div className="pj-media">
                  {cover
                    // eslint-disable-next-line @next/next/no-img-element
                    ? <img src={cover} alt={`${p.title} cover`} width={1200} height={800} loading="lazy" />
                    : <span className="pj-ph"><Icon size={52} strokeWidth={1.3} aria-hidden="true" /></span>}
                  <span className="pj-shade" aria-hidden="true" />
                  <span className="pj-no" aria-hidden="true">{String(idx + 1).padStart(2, '0')}</span>
                  {typeof domain === 'string' && <span className="pj-domain">{domain}</span>}
                  {p.featured && <span className="pj-star"><Star size={13} fill="currentColor" /> Featured</span>}
                  <TransitionLink href={`/projects/${p.slug}/`} className="pj-open" aria-label={`Open case study: ${p.title}`}><ArrowUpRight size={22} /></TransitionLink>
                </div>
                <div className="pj-body">
                  <h3>{p.title}</h3>
                  <p className="sub">{p.summary}</p>
                  <div className="chips">
                    {p.technologies.slice(0, 4).map(t => <span key={t} className="tag">{t}</span>)}
                    {p.technologies.length > 4 && <span className="tag more">+{p.technologies.length - 4}</span>}
                  </div>
                  <div className="pj-foot">
                    <TransitionLink href={`/projects/${p.slug}/`} className="btn btn-primary btn-sm">Case study <ArrowUpRight size={16} /></TransitionLink>
                    {p.github_url && <a href={p.github_url} rel="noopener noreferrer" className="btn btn-glass btn-sm">GitHub</a>}
                    {p.live_demo_url && <a href={p.live_demo_url} rel="noopener noreferrer" className="btn btn-glass btn-sm">Live demo</a>}
                  </div>
                </div>
              </m.article>
            );
          })}
        </AnimatePresence>
      </m.div>
    </>
  );
}
