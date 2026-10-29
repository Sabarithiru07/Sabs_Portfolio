import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AppWindow, ArrowLeft, ArrowRight, Check, Globe, type LucideIcon } from 'lucide-react';
import { getService, services } from '@/lib/services';
import { coverOf, fallbackProjects } from '@/lib/fallback';
import { Reveal } from '@/components/Reveal';
import { GlassCard } from '@/components/GlassCard';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMeta, serviceJsonLd } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };
const ICONS: Record<string, LucideIcon> = { globe: Globe, app: AppWindow };
export const dynamicParams = false;
export const generateStaticParams = () => services.map(s => ({ slug: s.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return { title: 'Service' };
  const full = `${s.summary} Freelance work by Sabari Thirunavukkarasu, Erode, India.`;
  return pageMeta({ title: `${s.title} Services`, description: full.length <= 160 ? full : s.summary, path: `/services/${s.slug}/` });
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug); if (!s) notFound();
  const Icon = ICONS[s.icon] ?? Globe;
  const related = fallbackProjects.filter(p => s.related.includes(p.slug));
  return (
    <main className="py-16 page-enter">
      <JsonLd data={[serviceJsonLd(s), breadcrumbJsonLd([{ name: 'Home', path: '/portfolio/' }, { name: 'Services', path: '/portfolio/#services' }, { name: s.title, path: `/services/${s.slug}/` }])]} />
      <Link href="/portfolio/#services" className="btn btn-glass btn-sm"><ArrowLeft size={16} /> All services</Link>
      <header className="doc-head">
        <span className="icon-chip"><Icon size={24} /></span>
        <h1 className="doc-title">{s.title}</h1>
        <p className="sub" style={{ maxWidth: 720, fontSize: '1.15rem' }}>{s.summary}</p>
        <div className="btn-row"><Link href="/portfolio/#contact" className="btn btn-primary">Start a project <ArrowRight size={18} /></Link></div>
      </header>

      <Reveal><GlassCard><h2>Overview</h2><p style={{ maxWidth: 800 }}>{s.overview}</p></GlassCard></Reveal>

      <div className="doc-block"><h2>What you get</h2><div className="grid">
        {s.deliver.map((d, i) => <Reveal key={d} delay={i * 0.05}><GlassCard><div className="feature"><span className="icon-chip sm"><Check size={18} /></span><p>{d}</p></div></GlassCard></Reveal>)}
      </div></div>

      <div className="doc-block"><h2>How we work together</h2><ol className="steps">
        {s.process.map((p, i) => <Reveal key={p.title} delay={i * 0.06}><li className="glass"><span className="step-no">{i + 1}</span><div><h3>{p.title}</h3><p>{p.text}</p></div></li></Reveal>)}
      </ol></div>

      <div className="doc-block"><h2>Technology stack</h2><div className="grid">
        {s.stack.map((t, i) => {
          const [name, role] = t.split(' — ');
          return <Reveal key={t} delay={i * 0.04}><GlassCard><h3 style={{ margin: 0 }}>{name}</h3>{role && <p className="sub" style={{ margin: '6px 0 0' }}>{role}</p>}</GlassCard></Reveal>;
        })}
      </div></div>

      <div className="doc-block"><h2>Good fit for</h2><div className="chips">{s.goodFor.map(g => <span key={g} className="tag big">{g}</span>)}</div></div>

      <div className="doc-block"><h2>Reference screenshots</h2><div className="gallery">
        {s.shots.map(sh => (
          <figure key={sh.src} className="shot glass">
            <a href={sh.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full size: ${sh.caption}`}>
              <img src={sh.src} alt={sh.alt} width={sh.w} height={sh.h} loading="lazy" />
            </a>
            <figcaption>{sh.caption}</figcaption>
          </figure>
        ))}
      </div></div>

      {related.length > 0 && (
        <div className="doc-block"><h2>Related projects</h2><div className="grid">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}><Link href={`/projects/${p.slug}`} className="glass related">
              {coverOf(p) && <img src={coverOf(p)!} alt={`${p.title} cover`} width={1200} height={800} loading="lazy" />}
              <span>{p.title}<ArrowRight size={16} /></span>
            </Link></Reveal>
          ))}
        </div></div>
      )}

      <div className="doc-cta glass"><div><h2 style={{ margin: 0 }}>Have a project in mind?</h2><p className="sub" style={{ margin: '6px 0 0' }}>Tell me what you need and I will get back to you.</p></div>
        <Link href="/portfolio/#contact" className="btn btn-primary">Start a project <ArrowRight size={18} /></Link></div>
    </main>
  );
}
