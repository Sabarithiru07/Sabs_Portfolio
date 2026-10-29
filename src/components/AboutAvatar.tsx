import Image from 'next/image';
import { BrandIcon } from './BrandIcons';

/** Circular profile for the About section: avatar inside a gradient circle with a spinning light ring; hover/focus swaps to the real photo. */
export function AboutAvatar() {
  return (
    <div className="about-orb" tabIndex={0} aria-label="Profile picture: avatar, shows the real photo on hover">
      <span className="ao-glow" aria-hidden="true" />
      <span className="ao-ring" aria-hidden="true" />
      <span className="ao-dots" aria-hidden="true" />
      <div className="ao-disc">
        <Image className="ao-avatar" src="/avatar-hero.webp" alt="Cartoon avatar of Sabari" width={640} height={962} sizes="(max-width: 900px) 70vw, 340px" />
        <Image className="ao-photo" src="/sabari.jpg" alt="Portrait of Sabari Thirunavukkarasu" width={760} height={963} sizes="(max-width: 900px) 70vw, 340px" />
      </div>
      <span className="ao-badge b1" aria-hidden="true"><BrandIcon name="python" size={18} /></span>
      <span className="ao-badge b2" aria-hidden="true"><BrandIcon name="claude" size={18} /></span>
      <span className="ao-badge b3" aria-hidden="true"><BrandIcon name="django" size={18} /></span>
    </div>
  );
}
