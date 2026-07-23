import { useState } from 'react';
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

/** clip-path that hides the whole image, keyed by reveal edge. */
const closedClip: Record<RevealFrom, string> = {
  left: 'inset(0 100% 0 0)',
  right: 'inset(0 0 0 100%)',
  up: 'inset(100% 0 0 0)',
  down: 'inset(0 0 100% 0)',
};
const openClip = 'inset(0 0 0 0)';

/**
 * ImageReveal — premium reveal for important imagery.
 * A clip-path wipe uncovers the image while it settles from a slight
 * over-scale (1.08 → 1). Reserve for hero / collage / feature images — not
 * small icons. Collapses to a plain fade under reduced motion.
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
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn('relative overflow-hidden bg-graphite-200/40', wrapperClassName)}>
      <motion.div
        className="absolute inset-0"
        initial={reduced ? { opacity: 0 } : { clipPath: closedClip[from] }}
        whileInView={reduced ? { opacity: 1 } : { clipPath: openClip }}
        viewport={{ once, amount: 0.25 }}
        transition={{ duration: reduced ? 0.3 : 0.9, ease: EASE }}
      >
        <motion.img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          initial={reduced ? false : { scale: 1.08 }}
          whileInView={reduced ? undefined : { scale: 1 }}
          viewport={{ once, amount: 0.25 }}
          transition={{ duration: reduced ? 0 : 1.2, ease: EASE }}
          className={cn(
            'h-full w-full object-cover transition-opacity duration-500',
            loaded ? 'opacity-100' : 'opacity-0',
            className,
          )}
        />
      </motion.div>
      {children}
    </div>
  );
}
