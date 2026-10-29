import type { Metadata } from 'next';
import { profile } from './content';
import type { Service } from './services';
import type { ProjectDetail } from './types';

// Set NEXT_PUBLIC_SITE_URL to the real domain in production: canonical URLs, sitemap and structured data are built from it.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '');
export const abs = (path = '') => `${siteUrl}${path}`;

const title = `${profile.name} | AI / GenAI & Django Developer`;
const description = 'AI / GenAI developer and freelance full-stack web developer in Erode, India. Python, Django, Claude and ChatGPT integrations, computer vision and web apps.';
const keywords = ['Sabari Thirunavukkarasu', 'AI developer', 'GenAI developer', 'Python developer', 'Django developer', 'LLM integration', 'Claude', 'ChatGPT',
  'prompt engineering', 'computer vision', 'freelance web developer', 'web application development', 'website development', 'full stack developer', 'Erode', 'India'];
const share = [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `${profile.name}: ${profile.title}` }];

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${profile.name}` },
  description, keywords, authors: [{ name: profile.name, url: siteUrl }], creator: profile.name, category: 'technology',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'en_IN', url: '/', siteName: profile.name, title, description, images: share },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-image.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

/** Per-page metadata: own title, description, canonical URL and share card (child pages replace the parent's openGraph). */
export function pageMeta(o: { title: string; description: string; path: string; image?: string | null }): Metadata {
  const image = o.image || '/og-image.jpg'; const full = `${o.title} | ${profile.name}`;
  return {
    title: o.title, description: o.description, alternates: { canonical: o.path },
    openGraph: { type: 'website', locale: 'en_IN', url: o.path, siteName: profile.name, title: full, description: o.description, images: [{ url: image }] },
    twitter: { card: 'summary_large_image', title: full, description: o.description, images: [image] },
  };
}

const personId = abs('/#person');
export const personJsonLd = () => ({
  '@type': 'Person', '@id': personId, name: profile.name, jobTitle: profile.title, url: siteUrl, image: abs('/sabari.jpg'), email: profile.email, description,
  sameAs: [profile.linkedin, profile.behance],
  address: { '@type': 'PostalAddress', addressLocality: 'Erode', addressCountry: 'IN' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Bharathidasan University' },
  knowsAbout: ['Generative AI', 'Large language models', 'Prompt engineering', 'Python', 'Django', 'REST APIs', 'Computer vision', 'Web application development', 'UI/UX design'],
});
export const websiteJsonLd = () => ({ '@type': 'WebSite', '@id': abs('/#website'), url: siteUrl, name: `${profile.name} Portfolio`, inLanguage: 'en', publisher: { '@id': personId } });
export const siteGraph = () => ({ '@context': 'https://schema.org', '@graph': [websiteJsonLd(), personJsonLd()] });

export const serviceJsonLd = (s: Service) => ({
  '@context': 'https://schema.org', '@type': 'Service', name: s.title, serviceType: s.title, description: s.overview, url: abs(`/services/${s.slug}/`), provider: { '@id': personId },
});
export const projectJsonLd = (p: ProjectDetail, image: string | null) => ({
  '@context': 'https://schema.org', '@type': 'CreativeWork', name: p.title, description: p.summary, url: abs(`/projects/${p.slug}/`), keywords: p.technologies.join(', '),
  author: { '@id': personId }, ...(image ? { image: abs(image) } : {}),
});
export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
});
