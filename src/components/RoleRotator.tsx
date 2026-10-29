'use client';
import { useEffect, useState } from 'react';

export function RoleRotator({ roles }: { roles: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI(x => (x + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, [roles.length]);
  return (
    <>
      <span className="sr-only">{roles.join(', ')}</span>
      <span key={i} className="rise role-word" aria-hidden="true">{roles[i]}</span>
    </>
  );
}
