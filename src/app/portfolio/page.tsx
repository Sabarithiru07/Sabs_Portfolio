import { AppWindow, Bot, Brain, Eye, Briefcase, Rocket, ArrowRight, ArrowUp, ArrowUpRight, BookOpen, Check, Download, GraduationCap, Globe, Mail, MapPin, Target, Award, Palette, Sparkles, Trophy, Phone, MessageCircle, type LucideIcon } from 'lucide-react';
import { profile, facts, skills, LEVELS, timeline, design, designProjects, marqueeSkills, stats } from '@/lib/content';
import { SkillsMarquee } from '@/components/SkillsMarquee';
import { TransitionLink } from '@/components/TransitionLink';
import { services, servicesIntro } from '@/lib/services';
import { fallbackProjects } from '@/lib/fallback';
import { Navbar } from '@/components/Navbar';
import { Reveal } from '@/components/Reveal';
import { GlassCard } from '@/components/GlassCard';
import { TiltCard } from '@/components/TiltCard';
import { Timeline } from '@/components/Timeline';
import { ScrollBand } from '@/components/ScrollBand';
import { ProjectGrid } from '@/components/ProjectGrid';
import { ContactForm } from '@/components/ContactForm';
import { RoleRotator } from '@/components/RoleRotator';
import { Magnetic } from '@/components/Magnetic';
import { Parallax } from '@/components/Parallax';
import { HeroOrbit } from '@/components/HeroOrbit';
import { AboutProfile } from '@/components/AboutProfile';
import { AboutReveal } from '@/components/AboutReveal';
import { RippleField } from '@/components/RippleField';
import { ResumeViewer } from '@/components/ResumeViewer';
import { DesignCover } from '@/components/DesignCover';
import { AchievementCarousel } from '@/components/AchievementCarousel';
import { RollingNumber } from '@/components/RollingNumber';
import { LocationMap } from '@/components/LocationMap';
import { FooterReveal } from '@/components/FooterReveal';
import { CollisionReveal } from '@/components/CollisionReveal';
import { BrandIcon } from '@/components/BrandIcons';
import { SkillCard } from '@/components/SkillCard';
import { SectionAuras } from '@/components/SectionAuras';
import { EnterReveal } from '@/components/EnterReveal';
import { pageMeta } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMeta({ title: `${profile.title} Portfolio`, description: profile.intro, path: '/portfolio/' });
const FACT_ICONS: Record<string, LucideIcon> = { pin: MapPin, grad: GraduationCap, target: Target, book: BookOpen };
const ACH_ICONS: Record<string, LucideIcon> = { award: Award, grad: GraduationCap, rocket: Rocket, palette: Palette, sparkles: Sparkles, trophy: Trophy };
const SERVICE_ICONS: Record<string, LucideIcon> = { globe: Globe, app: AppWindow, brain: Brain, eye: Eye, bot: Bot };

export default function PortfolioPage() {
  const showDesign = design.enabled && designProjects.length > 0;
  const links = ['about', 'skills', 'services', 'projects', 'experience', ...(showDesign ? ['design'] : []), 'achievements', 'contact'];
  const projects = fallbackProjects;
  return (
    <>
      <EnterReveal />
      <div id="top" />
      <SectionAuras />
      <Navbar monogram={profile.name} links={links} />
      <main>
        <section className="hero aura a1">
          <div className="hero-grid">
            <Parallax speed={0.12}>
              <div className="rise"><span className="tag">{profile.status}</span></div>
              <h1 className="hero-name rise grad" style={{ animationDelay: '0.1s' }}>{profile.name}</h1>
              <h2 className="role-line rise" style={{ animationDelay: '0.2s' }}>{profile.title}, building <RoleRotator roles={profile.roles} /></h2>
              <p className="sub rise" style={{ maxWidth: 540, animationDelay: '0.35s' }}>{profile.intro}</p>
              <div className="btn-row rise" style={{ animationDelay: '0.45s' }}>
                <Magnetic><a className="btn btn-primary" href="#projects">View Projects <ArrowRight size={18} /></a></Magnetic>
                <Magnetic><a className="btn btn-glass" href="#contact">Contact Me</a></Magnetic>
                <Magnetic><ResumeViewer /></Magnetic>
              </div>
              <ul className="hero-stats rise" style={{ animationDelay: '0.6s' }}>
                {stats.map(st => <li key={st.label}><strong><RollingNumber value={st.value} suffix={st.suffix} /></strong><span>{st.label}</span></li>)}
              </ul>
            </Parallax>
            <div className="hero-avatar"><Parallax speed={-0.08}><HeroOrbit /></Parallax></div>
          </div>
        </section>

        <SkillsMarquee items={marqueeSkills} />

        <section id="about" className="aura a3"><h2>About</h2>
          <AboutReveal profile={<AboutProfile />}>
            <div>
              <Reveal><GlassCard>
                <p style={{ margin: 0 }}>{profile.bio}</p>
                <div className="btn-row" style={{ marginTop: 20 }}>
                  <a className="btn btn-primary" href={profile.resume} download><Download size={18} /> Download Resume</a>
                </div>
              </GlassCard></Reveal>
              <div className="facts">
                {facts.map((f, i) => {
                  const Icon = FACT_ICONS[f.icon] ?? Target;
                  return (
                    <Reveal key={f.label} delay={i * 0.08}><GlassCard>
                      <div className="card-head"><span className="icon-chip sm"><Icon size={18} /></span><p className="fact-label">{f.label}</p></div>
                      <p className="fact-value">{f.value}</p>
                    </GlassCard></Reveal>
                  );
                })}
              </div>
            </div>
          </AboutReveal>
        </section>

        <CollisionReveal id="skills" className="aura a2" title="Skills" a={<BrandIcon name="python" size={38} />} b={<BrandIcon name="django" size={38} />}>
          <ul className="sk-legend" aria-label="Skill level key"><li><span className="sk-meter lv3"><i /><i /><i /></span> Strong</li><li><span className="sk-meter lv2"><i /><i /><i /></span> Working</li><li><span className="sk-meter lv1"><i /><i /><i /></span> Learning</li></ul>
          <div className="grid skills-grid">
          {Object.entries(skills).map(([cat, g], i) => (
            <Reveal key={cat} delay={i * 0.07}><TiltCard>
              <SkillCard title={cat} icon={g.icon} items={g.items.map(s => ({ name: s.name, label: LEVELS[s.level].label, pct: LEVELS[s.level].pct }))} />
            </TiltCard></Reveal>
          ))}
        </div></CollisionReveal>

        <CollisionReveal id="services" className="aura a1" title="Services" a={<Globe size={36} color="#22D3EE" />} b={<AppWindow size={36} color="#A855F7" />}>
          <p className="sub" style={{ maxWidth: 640, marginTop: -8 }}>{servicesIntro}</p>
          <div className="grid services-grid" style={{ marginTop: 24 }}>
            {services.map((s, i) => {
              const Icon = SERVICE_ICONS[s.icon] ?? Globe;
              return (
                <Reveal key={s.slug} delay={i * 0.1}><TiltCard><article className="glass svc-card">
                  <span className="svc-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <span className="svc-icon"><Icon size={30} /></span>
                  <h3>{s.title}</h3>
                  <p className="sub">{s.summary}</p>
                  <ul className="svc-list">{s.bullets.map(b => <li key={b}><Check size={15} />{b}</li>)}</ul>
                  <TransitionLink className="btn btn-primary btn-sm" href={`/services/${s.slug}/`}>View details <ArrowRight size={16} /></TransitionLink>
                </article></TiltCard></Reveal>
              );
            })}
          </div>
        </CollisionReveal>

        <CollisionReveal id="projects" className="aura a3" title="Projects" a={<Brain size={36} color="#C4B5FD" />} b={<Bot size={36} color="#22D3EE" />}><ProjectGrid projects={projects} /></CollisionReveal>
        <ScrollBand text={profile.title} />
        <CollisionReveal id="experience" className="aura a2" title="Experience & Education" a={<Briefcase size={36} color="#C4B5FD" />} b={<Rocket size={36} color="#22D3EE" />}><Timeline entries={timeline} /></CollisionReveal>

        {showDesign && (
          <CollisionReveal id="design" className="aura a1" title={design.heading} a={<BrandIcon name="figma" size={38} />} b={<BrandIcon name="adobexd" size={38} />}><div className="grid">
            {designProjects.map((it, i) => (
              <Reveal key={it.slug} delay={i * 0.08}><TiltCard><article className="glass dz-card">
                <div className="dz-media">
                  <DesignCover src={it.cover} alt={`${it.title} design preview`} variant={i} />
                  <span className="dz-badge"><BrandIcon name="figma" size={22} /></span>
                </div>
                <div className="dz-body">
                  <div className="chips">{it.tools.map(t => <span key={t} className="tag">{t}</span>)}</div>
                  <h3>{it.title}</h3><p className="sub">{it.tagline}. {it.overview.split('. ')[0]}.</p>
                  <div className="btn-row">
                    <TransitionLink className="btn btn-primary btn-sm" href={`/design/${it.slug}/`}>View details <ArrowRight size={16} /></TransitionLink>
                    <a className="btn btn-glass btn-sm" href={it.behance} target="_blank" rel="noopener noreferrer">Behance <ArrowUpRight size={16} /></a>
                  </div>
                </div>
              </article></TiltCard></Reveal>
            ))}
          </div></CollisionReveal>
        )}

        <section id="achievements" className="aura a2"><h2>Achievements</h2>
          <ul className="ach-stats">
            {stats.map(st => <li key={st.label} className="glass"><strong><RollingNumber value={st.value} suffix={st.suffix} duration={2.2} /></strong><span>{st.label}</span></li>)}
          </ul>
          <AchievementCarousel />
        </section>

        <section id="contact" className="aura a3"><h2>Contact</h2>
          <div className="discuss glass">
            <div className="discuss-text"><strong>Have a project in mind?</strong><span>Let&apos;s discuss it. Call me, or send a quick message.</span></div>
            <div className="discuss-btns">
              <a className="btn btn-primary discuss-call" href={`tel:+${profile.whatsapp}`}><Phone size={18} /> Call {profile.whatsappLabel}</a>
              <a className="btn btn-glass discuss-msg" href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent("Hi Sabari, I'd like to discuss a project with you.")}`} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> Message me</a>
            </div>
          </div>
          <RippleField><ContactForm /></RippleField><LocationMap /></section>
      </main>

      <FooterReveal>
        <p className="sub foot-item" style={{ margin: 0, ['--i' as string]: 0 }}>© {new Date().getFullYear()} {profile.name}</p>
        <div className="btn-row">
          <a className="btn btn-glass btn-sm foot-item" style={{ ['--i' as string]: 1 }} href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a>
          <a className="btn btn-glass btn-sm foot-item" style={{ ['--i' as string]: 2 }} href={profile.linkedin} rel="noopener noreferrer"><span className="brand">in</span> LinkedIn</a>
          <a className="btn btn-glass btn-sm foot-item" style={{ ['--i' as string]: 3 }} href={profile.behance} rel="noopener noreferrer"><span className="brand">Bē</span> Behance</a>
          <a className="btn btn-glass btn-sm wa foot-item" style={{ ['--i' as string]: 4 }} href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent('Hi Sabari, I saw your portfolio.')}`} rel="noopener noreferrer" aria-label={`Chat on WhatsApp ${profile.whatsappLabel}`}><BrandIcon name="whatsapp" size={16} /> WhatsApp {profile.whatsappLabel}</a>
          <a className="to-top foot-item" style={{ ['--i' as string]: 5 }} href="#top" aria-label="Back to top"><ArrowUp size={20} /></a>
        </div>
      </FooterReveal>
    </>
  );
}
