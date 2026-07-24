import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';

interface CarouselProps {
  children: ReactNode;
  /** accessible label for the scroll region */
  ariaLabel: string;
  className?: string;
  /** classes for the scrolling track */
  trackClassName?: string;
  /** px scrolled per arrow click (defaults to ~one card) */
  step?: number;
}

/**
 * Carousel — accessible horizontal carousel built on native scroll-snap.
 *
 * Keeps normal, momentum scrolling and trackpad/touch swipe intact (no
 * hijacking) while adding prev/next buttons that fade out at the track ends.
 * Buttons are hidden entirely when the content fits without scrolling.
 */
export default function Carousel({
  children,
  ariaLabel,
  className,
  trackClassName,
  step = 360,
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [overflowing, setOverflowing] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setOverflowing(max > 8);
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft >= max - 8);
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div className={cn('relative', className)}>
      <div
        ref={trackRef}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        className={cn(
          'no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2',
          trackClassName,
        )}
      >
        {children}
      </div>

      {overflowing && (
        <>
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
            disabled={atStart}
            className="absolute -left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-graphite-200 bg-soft-white text-graphite-800 shadow-soft transition-all hover:border-graphite-900 disabled:pointer-events-none disabled:opacity-0 md:inline-flex"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next"
            disabled={atEnd}
            className="absolute -right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-graphite-200 bg-soft-white text-graphite-800 shadow-soft transition-all hover:border-graphite-900 disabled:pointer-events-none disabled:opacity-0 md:inline-flex"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </>
      )}
    </div>
  );
}
