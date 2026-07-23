import { useEffect, useState } from 'react';

/**
 * Returns true once the window has scrolled past `threshold` px.
 * Used to switch the navbar from transparent to solid/blur on scroll.
 */
export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}

export default useScrolled;
