import { type ReactNode } from 'react';
import { cn } from '@/utils/cn';
import { useGsap } from '@/hooks/useGsap';

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
  /** classes for the flex track */
  trackClassName?: string;
}

/**
 * HorizontalScroll — a horizontal image/card band that drifts sideways as the
 * section passes through the viewport (GSAP ScrollTrigger, scrubbed).
 *
 * Deliberately NOT pinned, so it never traps the scroll: normal vertical
 * scrolling continues and the band simply reveals more of itself. On mobile
 * and under reduced motion it degrades to a native swipeable row.
 */
export default function HorizontalScroll({
  children,
  className,
  trackClassName,
}: HorizontalScrollProps) {
  const ref = useGsap<HTMLDivElement>(({ self, gsap }) => {
    const track = self.querySelector<HTMLElement>('[data-track]');
    if (!track) return;
    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      const distance = () => track.scrollWidth - self.offsetWidth;
      gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: self,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });
    });
  });

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <div
        data-track
        className={cn(
          // mobile: native swipe (w-full + scroll). desktop: GSAP drives x on the full-width track.
          'no-scrollbar flex w-full gap-6 overflow-x-auto md:w-max md:overflow-visible',
          trackClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
