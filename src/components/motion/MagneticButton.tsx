import { useRef, type ReactNode, type PointerEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/utils/cn';
import useReducedMotion from '@/hooks/useReducedMotion';
import useIsMobile from '@/hooks/useIsMobile';
import { magneticSpring } from '@/utils/motionVariants';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  /** how far the element leans toward the pointer (px) */
  strength?: number;
}

/**
 * MagneticButton — wraps an interactive element so it leans subtly toward the
 * pointer, adding premium tactile feedback. A pure enhancement layer: it adds
 * no semantics, so put a real <button>/<a>/<Link> inside.
 *
 * Disabled on touch devices and under reduced motion (renders inert).
 */
export default function MagneticButton({
  children,
  className,
  strength = 18,
}: MagneticButtonProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  const xRaw = useMotionValue(0);
  const yRaw = useMotionValue(0);
  const x = useSpring(xRaw, magneticSpring);
  const y = useSpring(yRaw, magneticSpring);

  const active = !reduced && !isMobile;

  function onMove(e: PointerEvent<HTMLSpanElement>) {
    if (!active) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    xRaw.set(relX * strength * 2);
    yRaw.set(relY * strength * 2);
  }

  function reset() {
    xRaw.set(0);
    yRaw.set(0);
  }

  return (
    <motion.span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={active ? { x, y } : undefined}
      className={cn('inline-flex', className)}
    >
      {children}
    </motion.span>
  );
}
