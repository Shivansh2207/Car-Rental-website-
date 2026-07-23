import { type ElementType, type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import useReducedMotion from '@/hooks/useReducedMotion';
import { motionConfig, revealVariants, type RevealDirection } from '@/utils/motionVariants';

type RevealTag = 'div' | 'section' | 'article' | 'li' | 'span' | 'header' | 'figure';

export interface RevealProps {
  children: ReactNode;
  /** Direction / style of the reveal. */
  direction?: RevealDirection;
  className?: string;
  id?: string;
  /** delay in seconds */
  delay?: number;
  /** movement distance in px (overrides the config default) */
  distance?: number;
  /** duration in seconds */
  duration?: number;
  /** portion of the element that must be visible to trigger (0-1) */
  amount?: number;
  /** replay every time it enters the viewport (default: once) */
  once?: boolean;
  as?: RevealTag;
}

/**
 * Reveal — the primary scroll-into-view animation primitive.
 *
 * Supports fade up/down/left/right, scale, blur and clip-path reveals through
 * a single, config-driven API. Respects prefers-reduced-motion by collapsing
 * to a quick opacity fade so content is never withheld.
 *
 *   <Reveal direction="up" delay={0.1}><Content /></Reveal>
 */
export default function Reveal({
  children,
  direction = 'up',
  className,
  id,
  delay = 0,
  distance,
  duration,
  amount = motionConfig.viewport.amount,
  once = true,
  as = 'div',
}: RevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as ElementType;

  const variants: Variants = revealVariants({
    direction,
    distance,
    duration,
    delay,
    reduced,
  });

  return (
    <MotionTag
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </MotionTag>
  );
}
