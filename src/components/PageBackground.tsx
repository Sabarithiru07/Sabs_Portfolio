'use client';
import dynamic from 'next/dynamic';

// One fixed, page-wide animated constellation behind every section. Loaded client-side after hydration.
const Constellation = dynamic(() => import('./Constellation'), { ssr: false });
export const PageBackground = () => <div className="page-bg" aria-hidden="true"><Constellation /></div>;
