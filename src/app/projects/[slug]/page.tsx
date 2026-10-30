import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, Info } from 'lucide-react';
import type { ProjectDetail } from '@/lib/types';
import { fallbackProjects, coverOf } from '@/lib/fallback';
import { Reveal } from '@/components/Reveal';
import { GlassCard } from '@/components/GlassCard';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMeta, projectJsonLd } from '@/lib/seo';

export const dynamicParams = false;
export const generateStaticParams = () => fallbackProjects.map(p => ({ slug: p.slug }));
type Props = { params: Promise<{ slug: string }> };

async function load(slug: string): Promise<ProjectDetail> {
  const p = fallbackProjects.find(x => x.slug === slug);
  if (!p) notFound();
  return p;
}
const text = (v: unknown) => (typeof v === 'string' ? v : undefined);
const items = (v: unknown) => (Array.isArray(v) ? (v as string[]) : []);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await load((await params).slug);
  return pageMeta({ title: `${p.title} Case Study`, description: `${p.summary} Built with ${p.technologies.join(', ')}.`, path: `/projects/${p.slug}/`, image: coverOf(p) });
}

export default async function ProjectPage({ params }: Props) {
  const p = await load((await params).slug);
  const cs = p.case_study_content ?? {}; const cover = coverOf(p);
  const more = fallbackProjects.filter(x => x.slug !== p.slug);
  return (
    <main className="py-16 page-enter">
      <JsonLd data={[projectJsonLd(p, cover), breadcrumbJsonLd([{ name: 'Home', path: '/portfolio/' }, { name: 'Projects', path: '/portfolio/#projects' }, { name: p.title, path: `/projects/${p.slug}/` }])]} />
      <Link href="/portfolio/#projects" className="btn btn-glass btn-sm"><ArrowLeft size={16} /> All projects</Link>
      <header className="doc-head">
        {text(cs.Domain) && <span className="tag">{text(cs.Domain)}</span>}
        <h1 className="doc-title">{p.title}</h1>
        <p className="sub" style={{ maxWidth: 720, fontSize: '1.15rem' }}>{p.summary}</p>
        <div className="chips">{p.technologies.map(t => <span key={t} className="tag">{t}</span>)}</div>
        {(p.github_url || p.live_demo_url) && <div className="btn-row" style={{ marginTop: 16 }}>
          {p.github_url && <a href={p.github_url} rel="noopener noreferrer" className="btn btn-glass btn-sm">GitHub</a>}
          {p.live_demo_url && <a href={p.live_demo_url} rel="noopener noreferrer" className="btn btn-primary btn-sm">Live demo</a>}
        </div>}
      </header>
      {cover && <Reveal><div className="cs-cover glass"><img src={cover} alt={`${p.title} cover`} width={1200} height={800} /></div></Reveal>}

      <div className="doc-grid">
        <Reveal><GlassCard><h2>Overview</h2><p>{text(cs.Overview) ?? p.description}</p></GlassCard></Reveal>
        {text(cs.Problem) && <Reveal><GlassCard><h2>The problem</h2><p>{text(cs.Problem)}</p></GlassCard></Reveal>}
      </div>

      {items(cs['Key features']).length > 0 && (
        <div className="doc-block"><h2>Key features</h2><div className="grid">
          {items(cs['Key features']).map((f, i) => <Reveal key={f} delay={i * 0.05}><GlassCard><div className="feature"><span className="icon-chip sm"><Check size={18} /></span><p>{f}</p></div></GlassCard></Reveal>)}
        </div></div>
      )}

      {items(cs['How it works']).length > 0 && (
        <div className="doc-block"><h2>How it works</h2><ol className="steps">
          {items(cs['How it works']).map((s, i) => <Reveal key={s} delay={i * 0.06}><li className="glass"><span className="step-no">{i + 1}</span><p>{s}</p></li></Reveal>)}
        </ol></div>
      )}

      {items(cs['Technology stack']).length > 0 && (
        <div className="doc-block"><h2>Technology stack</h2><div className="grid">
          {items(cs['Technology stack']).map((t, i) => {
            const [name, role] = t.split(' — ');
            return <Reveal key={t} delay={i * 0.05}><GlassCard><h3 style={{ margin: 0 }}>{name}</h3>{role && <p className="sub" style={{ margin: '6px 0 0' }}>{role}</p>}</GlassCard></Reveal>;
          })}
        </div></div>
      )}

      {text(cs.Note) && <div className="callout"><Info size={18} /><p>{text(cs.Note)}</p></div>}

      <div className="doc-block"><h2>More projects</h2><div className="btn-row">
        {more.map(m => <Link key={m.slug} href={`/projects/${m.slug}`} className="btn btn-glass btn-sm">{m.title} <ArrowRight size={16} /></Link>)}
      </div></div>
      <div className="doc-cta glass"><div><h2 style={{ margin: 0 }}>Need something similar?</h2><p className="sub" style={{ margin: '6px 0 0' }}>I build web applications and AI-powered tools as a freelancer.</p></div>
        <div className="btn-row"><Link href="/portfolio/#services" className="btn btn-glass">See the service</Link><Link href="/portfolio/#contact" className="btn btn-primary">Start a project <ArrowRight size={18} /></Link></div></div>
    </main>
  );
}
