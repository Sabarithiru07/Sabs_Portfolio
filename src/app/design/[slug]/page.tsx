import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { designProjects, type DesignProject } from '@/lib/content';
import { Reveal } from '@/components/Reveal';
import { GlassCard } from '@/components/GlassCard';
import { DesignCover } from '@/components/DesignCover';
import { pageMeta } from '@/lib/seo';

export const dynamicParams = false;
export const generateStaticParams = () => designProjects.map(d => ({ slug: d.slug }));
type Props = { params: Promise<{ slug: string }> };
function load(slug: string): DesignProject { const d = designProjects.find(x => x.slug === slug); if (!d) notFound(); return d; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const d = load((await params).slug);
  return pageMeta({ title: `${d.title} UI/UX Design`, description: `${d.tagline}. ${d.overview}`, path: `/design/${d.slug}/`, image: d.cover });
}

export default async function DesignPage({ params }: Props) {
  const d = load((await params).slug);
  const idx = designProjects.findIndex(x => x.slug === d.slug);
  const more = designProjects.filter(x => x.slug !== d.slug);
  return (
    <main className="py-16 page-enter">
      <Link href="/portfolio/#design" className="btn btn-glass btn-sm"><ArrowLeft size={16} /> All designs</Link>
      <header className="doc-head">
        <span className="tag">{d.tagline}</span>
        <h1 className="doc-title">{d.title}</h1>
        <p className="sub" style={{ maxWidth: 720, maxHeight: 720, fontSize: '1.15rem' }}>{d.role} · {d.year}</p>
        <div className="chips">{d.tools.map(t => <span key={t} className="tag">{t}</span>)}</div>
      </header>
      <Reveal><div className="cs-cover glass dz-cover"><DesignCover src={d.cover} alt={`${d.title} design preview`} variant={idx} /></div></Reveal>

      <div className="doc-grid">
        <Reveal><GlassCard><h2>Overview</h2><p>{d.overview}</p></GlassCard></Reveal>
        <Reveal><GlassCard><h2>The challenge</h2><p>{d.problem}</p></GlassCard></Reveal>
      </div>

      <div className="doc-block"><h2>Design process</h2><ol className="steps">
        {d.process.map((s, i) => <Reveal key={s} delay={i * 0.06}><li className="glass"><span className="step-no">{i + 1}</span><p>{s}</p></li></Reveal>)}
      </ol></div>

      <div className="doc-block"><h2>Key design features</h2><div className="grid">
        {d.features.map((f, i) => <Reveal key={f} delay={i * 0.05}><GlassCard><div className="feature"><span className="icon-chip sm"><Check size={18} /></span><p>{f}</p></div></GlassCard></Reveal>)}
      </div></div>

      <div className="doc-block"><h2>Outcome</h2><GlassCard><p style={{ margin: 0 }}>{d.outcome}</p></GlassCard></div>

      <div className="doc-cta glass">
        <div><h2 style={{ margin: 0 }}>See the full design on Behance</h2><p className="sub" style={{ margin: '6px 0 0' }}>Screens, prototypes and more of my UI/UX work.</p></div>
        <div className="btn-row"><a href={d.behance} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on Behance <ArrowUpRight size={18} /></a></div>
      </div>

      <div className="doc-block"><h2>More designs</h2><div className="btn-row">
        {more.map(m => <Link key={m.slug} href={`/design/${m.slug}/`} className="btn btn-glass btn-sm">{m.title} <ArrowRight size={16} /></Link>)}
      </div></div>
    </main>
  );
}
