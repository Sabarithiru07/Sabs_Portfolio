
'use client';

import Image from 'next/image';
import { avatar } from '@/lib/content';

type AvatarProps = {
  greeting: string;
};

export function Avatar({ greeting }: AvatarProps) {
  return (
    <div className="avatar" aria-hidden="true">
      <div className="avatar-drop">
        <div className="avatar-bob">
          <div className="avatar-tilt">
            <Image
              src={avatar.body}
              alt="Avatar"
              width={420}
              height={560}
              priority
              className="avatar-img"
            />
          </div>
        </div>
      </div>

      <span className="avatar-ring" />
      <span className="avatar-shadow" />

      {greeting && (
        <div className="bubble">
          {greeting}
        </div>
      )}
    </div>
  );
}
