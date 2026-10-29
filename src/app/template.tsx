'use client';
import { useEffect, type ReactNode } from 'react';

// A template re-mounts on every navigation: if a TransitionLink covered the screen, lift the curtain now.
export default function Template({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains('pt-cover')) return;
    root.classList.remove('pt-cover'); root.classList.add('pt-reveal');
    window.setTimeout(() => root.classList.remove('pt-reveal'), 800); // intentionally not cleared on cleanup (StrictMode)
  }, []);
  return children;
}
