import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Page not found', robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <main className="py-32 text-center">
      <h1 className="doc-title" style={{ margin: 0 }}>Page not found</h1>
      <p className="sub">The page you are looking for does not exist or has moved.</p>
      <div className="btn-row" style={{ justifyContent: 'center', marginTop: 20 }}>
        <Link className="btn btn-primary" href="/portfolio/">Go home</Link>
        <Link className="btn btn-glass" href="/services/web-application-development">Services</Link>
        <Link className="btn btn-glass" href="/portfolio/#projects">Projects</Link>
      </div>
    </main>
  );
}
