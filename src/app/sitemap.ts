import type { MetadataRoute } from 'next';
import { fallbackProjects } from '@/lib/fallback';
import { designProjects } from '@/lib/content';
import { services } from '@/lib/services';
import { abs } from '@/lib/seo';

export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: abs('/portfolio/'), lastModified, changeFrequency: 'monthly', priority: 1 },
    ...services.map(s => ({ url: abs(`/services/${s.slug}/`), lastModified, changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...fallbackProjects.map(p => ({ url: abs(`/projects/${p.slug}/`), lastModified, changeFrequency: 'monthly' as const, priority: 0.7 })),
    ...designProjects.map(d => ({ url: abs(`/design/${d.slug}/`), lastModified, changeFrequency: 'monthly' as const, priority: 0.6 })),
  ];
}
