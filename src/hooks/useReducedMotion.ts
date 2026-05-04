'use client';
import { useState, useEffect } from 'react';

/**
 * Returns true when animations should be simplified for performance.
 * Triggers on:
 *  - Small screens (≤ 1024px)
 *  - OS-level "prefers-reduced-motion" setting
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const check = () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isMobile = window.innerWidth <= 1024;
      setReduced(prefersReduced || isMobile);
    };

    check();
    window.addEventListener('resize', check);
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    mql.addEventListener('change', check);

    return () => {
      window.removeEventListener('resize', check);
      mql.removeEventListener('change', check);
    };
  }, []);

  return reduced;
}
