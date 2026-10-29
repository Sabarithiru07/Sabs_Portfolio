import type { Metadata, Viewport } from 'next';
import './globals.css';
import { JsonLd } from '@/components/JsonLd';
import { PageBackground } from '@/components/PageBackground';
import { ScrollOrbs } from '@/components/Parallax';
import { ScrollProgress } from '@/components/ScrollProgress';
import { CursorRing } from '@/components/CursorRing';
import { MotionProvider } from '@/components/MotionProvider';
import { baseMetadata, siteGraph } from '@/lib/seo';

export const metadata: Metadata = baseMetadata;
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#080612', colorScheme: 'dark' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <JsonLd data={siteGraph()} />
        <div className="ambient" aria-hidden="true" />
        <div className="curtain" aria-hidden="true"><span /><i /><em>Loading</em></div>
        <CursorRing />
        <ScrollOrbs />
        <PageBackground />
        <MotionProvider><ScrollProgress />{children}</MotionProvider>
      </body>
    </html>
  );
}
