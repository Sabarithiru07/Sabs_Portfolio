'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Brain, Cpu, Eye, Languages, MessageSquareText, Palette, Plug, ScanEye, Server, Sparkles, Workflow, type LucideIcon } from 'lucide-react';
import { BrandIcon, type BrandKey } from './BrandIcons';

const ICONS: Record<string, LucideIcon> = { brain: Brain, sparkles: Sparkles, server: Server, scan: ScanEye, palette: Palette };
export interface SkillRow { name: string; label: string; pct: number }

/** Picks a brand logo (or a generic icon) for a skill from its name. */
function skillIcon(name: string): ReactNode {
  const n = name.toLowerCase();
  const brand: [RegExp, BrandKey][] = [[/python/, 'python'], [/django/, 'django'], [/^git$/, 'git'], [/mysql/, 'mysql'], [/figma/, 'figma'], [/claude/, 'claude'],
    [/chatgpt|openai/, 'openai'], [/hugging/, 'huggingface'], [/langchain/, 'langchain'], [/javascript/, 'javascript'], [/html/, 'html5'], [/php/, 'php']];
  for (const [re, k] of brand) if (re.test(n)) return <BrandIcon name={k} size={20} />;
  const generic: [RegExp, LucideIcon][] = [[/llm|prompt/, MessageSquareText], [/rest|api/, Plug], [/vision|detection/, Eye], [/medical|image/, ScanEye], [/automation|workflow/, Workflow],
    [/ml|model/, Cpu], [/nlp|language/, Languages], [/responsive|ui/, Palette]];
  for (const [re, I] of generic) if (re.test(n)) return <I size={20} />;
  return <Sparkles size={20} />;
}

/** Skill group card: header, then a tile per skill with its logo, level name and an animated level bar (fills when the card scrolls into view). */
export function SkillCard({ title, icon, items }: { title: string; icon: string; items: SkillRow[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(el); return () => io.disconnect();
  }, []);
  const Icon = ICONS[icon] ?? Sparkles;
  return (
    <div ref={ref} className={`glass skill-card sk2${on ? ' on' : ''}`}>
      <div className="sk-head">
        <span className="sk-icon"><Icon size={24} /></span>
        <div><h3>{title}</h3><p>{items.length} skills</p></div>
      </div>
      <ul className="sk-tiles">
        {items.map((s, i) => (
          <li key={s.name} className={`sk-tile lv${s.pct >= 80 ? 3 : s.pct >= 50 ? 2 : 1}`} style={{ ['--pct' as string]: `${s.pct}%`, ['--dl' as string]: `${i * 90}ms` }}>
            <span className="sk-logo">{skillIcon(s.name)}</span>
            <div className="sk-info">
              <div className="sk-line"><span className="sk-name">{s.name}</span><em className="sk-lvl">{s.label}</em></div>
              <span className="sk-bar" role="img" aria-label={`${s.name}: ${s.label}`}><i /></span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
