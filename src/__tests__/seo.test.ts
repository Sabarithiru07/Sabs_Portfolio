import { describe, it, expect } from 'vitest';
import { abs, breadcrumbJsonLd, personJsonLd, pageMeta, serviceJsonLd, siteGraph } from '@/lib/seo';
import { services } from '@/lib/services';

describe('seo helpers', () => {
  it('builds absolute URLs from the site URL', () => { expect(abs('/x')).toMatch(/^https?:\/\/.+\/x$/); });
  it('describes the person with profile links and location', () => {
    const p = personJsonLd();
    expect(p['@type']).toBe('Person'); expect(p.sameAs.length).toBe(2); expect(p.address.addressCountry).toBe('IN');
  });
  it('produces a valid structured-data graph', () => {
    const g = siteGraph(); expect(g['@graph'].map(n => n['@type'])).toEqual(['WebSite', 'Person']);
    expect(() => JSON.parse(JSON.stringify(g))).not.toThrow();
  });
  it('numbers breadcrumb items from 1', () => {
    const b = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Services', path: '/portfolio/#services' }]);
    expect(b.itemListElement.map(i => i.position)).toEqual([1, 2]);
  });
  it('gives each page its own canonical URL and share card', () => {
    const m = pageMeta({ title: 'T', description: 'D', path: '/services/x' });
    expect(m.alternates?.canonical).toBe('/services/x'); expect(m.openGraph?.images).toBeTruthy();
  });
  it('has a service description for every service', () => { services.forEach(s => expect(serviceJsonLd(s).description.length).toBeGreaterThan(40)); });
});
