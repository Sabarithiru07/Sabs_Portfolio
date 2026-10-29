import { Brain, Cpu, Eye, Languages, MessageSquareText, Plug, Sparkles, type LucideIcon } from 'lucide-react';
import { BrandIcon, type BrandKey } from './BrandIcons';

const GENERIC: Record<string, LucideIcon> = { brain: Brain, sparkles: Sparkles, eye: Eye, message: MessageSquareText, cpu: Cpu, languages: Languages, plug: Plug };

function Icon({ name }: { name: string }) {
  const G = GENERIC[name];
  return G ? <G size={20} className="mq-ico mq-generic" aria-hidden="true" /> : <BrandIcon name={name as BrandKey} size={20} className="mq-ico" />;
}

/** Endlessly scrolling skill chips with their icons. The list is rendered twice and the track slides by exactly half, so the loop is seamless. */
export function SkillsMarquee({ items }: { items: { name: string; icon: string }[] }) {
  const set = (hidden: boolean) => (
    <ul className="marquee-set" style={{ listStyle: 'none', margin: 0, padding: 0 }} {...(hidden ? { 'aria-hidden': true } : {})}>
      {items.map(t => <li key={t.name} className="mq-chip"><Icon name={t.icon} />{t.name}</li>)}
    </ul>
  );
  return (
    <div className="marquee" role="region" aria-label="Core skills">
      <div className="marquee-track">{set(false)}{set(true)}</div>
    </div>
  );
}
