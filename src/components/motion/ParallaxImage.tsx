import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/utils/cn';
import useReducedMotion from '@/hooks/useReducedMotion';
import useIsMobile from '@/hooks/useIsMobile';

interface ParallaxImageProps {
  src: string;
  alt: string;
  /** vertical travel in px across the scroll range (kept ~20–80) */
  distance?: number;
  wrapperClassName?: string;
  className?: string;
  eager?: boolean;
  /** overlay content (gradients, badges) rendered above the image */
  children?: React.ReactNode;
}

/**
 * ParallaxImage — scroll-linked vertical parallax for a limited set of large,
 * important images (hero, intro, corporate, safety, CTA). The image is slightly
 * oversized so it never reveals an edge as it drifts.
 *
 * Parallax is disabled on mobile and under reduced motion, where it renders as
 * a stable, static image — protecting scroll performance.
 */
export default function ParallaxImage({
  src,
  alt,
  distance = 60,
  wrapperClassName,
  className,
  eager = false,
  children,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  const [loaded, setLoaded] = useState(false);

  const active = !reduced && !isMobile;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  return (
    <div ref={ref} className={cn('relative overflow-hidden bg-graphite-200/40', wrapperClassName)}>
      <motion.img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        style={
          active
            ? { y, height: '120%', top: '-10%', willChange: 'transform' }
            : { height: '100%', top: 0 }
        }
        className={cn(
          'absolute inset-x-0 w-full object-cover transition-opacity duration-500',
          loaded ? 'opacity-100' : 'opacity-0',
          className,
        )}
      />
      {children}
    </div>
  );
}
