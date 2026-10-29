import type { ReactNode } from 'react';
export const GlassCard = ({ children, className = '' }: { children: ReactNode; className?: string }) =>
  <div className={`glass pad ${className}`}>{children}</div>;
