'use client';
import dynamic from 'next/dynamic';

// Loaded after hydration and only on the client, so it never blocks the first paint.
const Constellation = dynamic(() => import('./Constellation'), { ssr: false });
export const HeroBackground = () => <div className="hero-bg" aria-hidden="true"><Constellation /></div>;
