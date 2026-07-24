import { useLayoutEffect, useRef, type DependencyList, type RefObject } from 'react';
import { gsap } from '@/lib/gsap';
import useReducedMotion from './useReducedMotion';

interface GsapContext {
  /** the scoped root element */
  self: HTMLElement;
  gsap: typeof gsap;
}

/**
 * useGsap — run GSAP animations scoped to a returned ref.
 *
 * All selectors inside `setup` resolve within the ref element, and every
 * tween/ScrollTrigger created is automatically reverted on cleanup (via
 * gsap.context). Animations are skipped entirely under reduced motion, so the
 * static layout is what remains.
 *
 *   const ref = useGsap(({ self }) => {
 *     gsap.from(self.querySelectorAll('.card'), { y: 40, opacity: 0, stagger: 0.1,
 *       scrollTrigger: { trigger: self, start: 'top 80%' } });
 *   });
 *   return <div ref={ref}>…</div>;
 */
export function useGsap<T extends HTMLElement = HTMLDivElement>(
  setup: (ctx: GsapContext) => void,
  deps: DependencyList = [],
): RefObject<T> {
  const scope = useRef<T>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    const el = scope.current;
    if (!el || reduced) return;
    const ctx = gsap.context(() => setup({ self: el, gsap }), el);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, ...deps]);

  return scope;
}

export default useGsap;
