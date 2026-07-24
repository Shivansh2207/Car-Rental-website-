import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import useReducedMotion from '@/hooks/useReducedMotion';
import { EASE } from '@/utils/motionVariants';

type RevealFrom = 'left' | 'right' | 'up' | 'down';

interface ImageRevealProps {
  src: string;
  alt: string;
  /** which edge the reveal opens from */
  from?: RevealFrom;
  /** classes for the (aspect-ratio) wrapper — put rounding & aspect here */
  wrapperClassName?: string;
  /** classes for the <img> */
  className?: string;
  eager?: boolean;
  /** overlay content rendered above the image (e.g. gradient, caption) */
  children?: React.ReactNode;
  once?: boolean;
}

/**
 * ImageReveal — premium imagery wrapper with a subtle settle animation.
 * Images are painted immediately so content is never hidden behind an
 * animation or a delayed load event. Reserve for hero / collage / feature
 * images — not small icons.
 *
 * Structure: the outer element owns rounding + `overflow-hidden` so corners
 * stay rounded; a separate inner element runs the clip-path animation (which
 * would otherwise square the corners).
 */
export default function ImageReveal({
  src,
  alt,
  from = 'left',
  wrapperClassName,
  className,
  eager = false,
  children,
  once = true,
}: ImageRevealProps) {
  const reduced = useReducedMotion();
  return (
    <div
      className={cn('relative overflow-hidden bg-graphite-200/40', wrapperClassName)}
      data-reveal-from={from}
      data-reveal-once={once}
    >
      <div className="absolute inset-0">
        <motion.img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          initial={reduced ? false : { scale: 1.08 }}
          whileInView={reduced ? undefined : { scale: 1 }}
          viewport={{ once, amount: 0.25 }}
          transition={{ duration: reduced ? 0 : 1.2, ease: EASE }}
          className={cn('h-full w-full object-cover', className)}
        />
      </div>
      {children}
    </div>
  );
}
