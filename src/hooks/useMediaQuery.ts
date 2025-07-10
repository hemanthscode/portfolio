// src/hooks/useMediaQuery.ts
import { useState, useEffect, useCallback } from 'react';

/**
 * Hook to track the result of a CSS media query.
 * @param query - The CSS media query string (e.g., '(max-width: 768px)').
 * @returns Boolean indicating if the media query matches.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  const handleChange = useCallback((e: MediaQueryListEvent) => {
    setMatches(e.matches);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(query);
    setMatches(media.matches);

    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, [query, handleChange]);

  return matches;
}

/**
 * Common media query breakpoints for convenience.
 */
export enum Breakpoint {
  SM = '(max-width: 640px)',
  MD = '(max-width: 768px)',
  LG = '(max-width: 1024px)',
  XL = '(max-width: 1280px)',
}