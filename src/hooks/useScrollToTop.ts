import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to the top of the page on route change, unless a hash anchor exists.
 * Respects reduced motion via the global CSS.
 */
export function useScrollToTop(): void {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);
}

export default useScrollToTop;
