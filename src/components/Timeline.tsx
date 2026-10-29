'use client';
import { useRef } from 'react';
import { m, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { Award, Briefcase, Check, GraduationCap, Palette } from 'lucide-react';

export interface TimelineEntry { when?: string; what: string; where: string; details?: string[] }

const kindOf = (e: TimelineEntry) => {
  const k = `${e.what} ${e.where}`.toLowerCase();
  if (/ui\/ux|design course/.test(k)) return { label: 'Course', Icon: Palette };
  if (/b\.sc|university|degree/.test(k)) return { label: 'Education', Icon: GraduationCap };
  if (/certif|workshop/.test(k)) return { label: 'Certifications', Icon: Award };
  return { label: 'Experience', Icon: Briefcase };
};

/** Experience and education timeline: each entry is a card with a type icon, role, organisation, date chip and tick-point details. */
export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <ol ref={ref} className="timeline tl2">
      <span className="tl-track" aria-hidden="true" />
      <m.span className="tl-line" aria-hidden="true" style={{ scaleY: reduce ? 1 : scaleY }} />
      {entries.map((e, i) => {
        const { label, Icon } = kindOf(e);
        return (
          <m.li key={i} className={`tl-item tl-${label.toLowerCase()}`}
            initial={reduce ? false : { opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.55 }}>
            <span className="tl-node tl-badge" aria-hidden="true"><Icon size={16} /></span>
            <article className="glass tl-card">
              <header className="tl-top">
                <span className="tl-kind">{label}</span>
                {e.when && <span className="tl-when">{e.when}</span>}
              </header>
              <h3 className="tl-role">{e.what}</h3>
              <p className="tl-org">{e.where}</p>
              {e.details && <ul className="tl-points">{e.details.map(d => <li key={d}><Check size={15} />{d}</li>)}</ul>}
            </article>
          </m.li>
        );
      })}
    </ol>
  );
}
