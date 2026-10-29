'use client';
import { m, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

export const ease = [0.22, 1, 0.36, 1] as const;

/** Depth reveal: content rises out of the page, tilting upright with a slight scale-up. */
export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number; blur?: boolean }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <m.div style={{ transformPerspective: 900 }} initial={{ opacity: 0, y: 56, rotateX: 12, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }} viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.75, ease, delay }}>{children}</m.div>
  );
}
