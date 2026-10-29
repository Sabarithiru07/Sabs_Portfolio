import Image from 'next/image';
import { BrandIcon, type BrandKey } from './BrandIcons';
import { orbitIcons } from '@/lib/content';

/** About-section art: the same gradient circle and orbiting skill icons as the hero, but with the real photo (background removed) standing in front of the circle. */
export function AboutProfile() {
  const n = orbitIcons.length;
  return (
    <div className="orbit about-orbit" style={{ ['--n' as string]: n }}>
      <span className="orb-glow" aria-hidden="true" />
      <span className="orb-dash d1" aria-hidden="true" /><span className="orb-dash d2" aria-hidden="true" />
      <div className="orb-ring orb-ring-rev" aria-hidden="true">
        {orbitIcons.map((k, i) => (
          <span key={k} className="orb-item" style={{ ['--i' as string]: i }}>
            <span className="orb-chip"><BrandIcon name={k as BrandKey} size={26} /></span>
          </span>
        ))}
      </div>
      <span className="orb-circle" aria-hidden="true"><i className="orb-spin" /></span>
      <div className="orb-avatar ap-avatar">
        <Image src="/sabari.png" alt="Portrait of Sabari Thirunavukkarasu" width={760} height={799} sizes="(max-width: 900px) 60vw, 280px" />
      </div>
      <span className="orb-spark s1" aria-hidden="true" /><span className="orb-spark s2" aria-hidden="true" /><span className="orb-spark s3" aria-hidden="true" />
    </div>
  );
}
