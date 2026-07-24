import { cn } from '@/utils/cn';
import { useGsap } from '@/hooks/useGsap';

interface GsapParallaxProps {
  src: string;
  alt: string;
  /** parallax travel as a % of image height (kept subtle) */
  amount?: number;
  wrapperClassName?: string;
  className?: string;
  eager?: boolean;
  children?: React.ReactNode;
}

/**
 * GsapParallax — GSAP ScrollTrigger scrub parallax for a feature image.
 * The image is oversized (130% tall, centered) so it can drift without ever
 * revealing an edge. Runs on desktop only (gsap.matchMedia) and is skipped
 * under reduced motion; otherwise the image is simply static and centered.
 */
export default function GsapParallax({
  src,
  alt,
  amount = 10,
  wrapperClassName,
  className,
  eager = false,
  children,
}: GsapParallaxProps) {
  const ref = useGsap<HTMLDivElement>(
    ({ self, gsap }) => {
      const img = self.querySelector('[data-parallax-img]');
      if (!img) return;
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
        gsap.fromTo(
          img,
          { yPercent: -amount },
          {
            yPercent: amount,
            ease: 'none',
            scrollTrigger: {
              trigger: self,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        );
      });
    },
    [amount],
  );

  return (
    <div ref={ref} className={cn('relative overflow-hidden bg-graphite-200/40', wrapperClassName)}>
      <img
        data-parallax-img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={cn('absolute inset-x-0 top-[-15%] h-[130%] w-full object-cover', className)}
      />
      {children}
    </div>
  );
}
