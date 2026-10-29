'use client';
import { LazyMotion } from 'motion/react';
import type { ReactNode } from 'react';

// Motion's feature bundle is loaded asynchronously so it stays out of the initial JS.
const loadFeatures = () => import('./motionFeatures').then(mod => mod.default);
export const MotionProvider = ({ children }: { children: ReactNode }) => <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
