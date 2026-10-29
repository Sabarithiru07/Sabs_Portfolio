import Image from 'next/image';
import { BrandIcon, type BrandKey } from './BrandIcons';
import { orbitIcons } from '@/lib/content';

/** Hero art: gradient circle, the avatar standing in front of it (head and raised hand pop out of the circle), skill icons orbiting around. */
export function HeroOrbit() {
  const n = orbitIcons.length;
  return (
    <div className="orbit" style={{ ['--n' as string]: n }}>
      <span className="orb-glow" aria-hidden="true" />
      <span className="orb-dash d1" aria-hidden="true" /><span className="orb-dash d2" aria-hidden="true" />
      <div className="orb-ring" aria-hidden="true">
        {orbitIcons.map((k, i) => (
          <span key={k} className="orb-item" style={{ ['--i' as string]: i }}>
            <span className="orb-chip"><BrandIcon name={k as BrandKey} size={26} /></span>
          </span>
        ))}
      </div>
      <span className="orb-circle" aria-hidden="true"><i className="orb-spin" /></span>
      <div className="orb-avatar">
        <Image src="/avatar-hero.webp" alt="Cartoon avatar of Sabari waving hello" width={640} height={962} priority sizes="(max-width: 900px) 70vw, 340px" />
      </div>
      <span className="orb-spark s1" aria-hidden="true" /><span className="orb-spark s2" aria-hidden="true" /><span className="orb-spark s3" aria-hidden="true" />
    </div>
  );
}
