'use client';
import { useSyncExternalStore } from 'react';

/**
 * Returns true when animations should be simplified for performance.
 * Triggers on:
 *  - Small screens (≤ 1024px)
 *  - OS-level "prefers-reduced-motion" setting
 *
 * Uses useSyncExternalStore to avoid hydration flicker — the value is
 * resolved synchronously on the client's first render pass.
 */

function getSnapshot(): boolean {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth <= 1024;
  return prefersReduced || isMobile;
}

function getServerSnapshot(): boolean {
  // On the server we assume full motion (desktop). This matches the
  // initial client render on desktop, preventing a hydration mismatch.
  return false;
}

function subscribe(callback: () => void): () => void {
  window.addEventListener('resize', callback);
  const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
  mql.addEventListener('change', callback);

  return () => {
    window.removeEventListener('resize', callback);
    mql.removeEventListener('change', callback);
  };
}

export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
