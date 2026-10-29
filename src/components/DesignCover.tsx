'use client';
import { useState } from 'react';

/** Cover image for a design project. If the file is missing, a coloured placeholder with frames is shown instead. */
export function DesignCover({ src, alt, variant = 0 }: { src: string; alt: string; variant?: number }) {
  const [bad, setBad] = useState(false);
  if (bad) {
    return (
      <div className={`dz-art dz-${variant % 3}`} role="img" aria-label={alt}>
        <span className="dz-frame f1" /><span className="dz-frame f2" /><span className="dz-frame f3" />
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="dz-img" src={src} alt={alt} width={1200} height={700} loading="lazy" onError={() => setBad(true)} />;
}
