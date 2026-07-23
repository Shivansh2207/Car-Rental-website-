import { type ElementType, type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import useReducedMotion from '@/hooks/useReducedMotion';
import { motionConfig, staggerContainer } from '@/utils/motionVariants';

type StaggerTag = 'div' | 'ul' | 'ol' | 'section';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  /** delay between children (s) */
  stagger?: number;
  /** delay before the first child (s) */
  delayChildren?: number;
  /** portion visible to trigger (0-1) */
  amount?: number;
  once?: boolean;
  as?: StaggerTag;
}

/**
 * StaggerContainer — reveals its <StaggerItem> children one after another as
 * the group scrolls into view. The sequence is kept short so the final item
 * never lags far behind the first.
 */
export default function StaggerContainer({
  children,
  className,
  stagger = motionConfig.stagger.normal,
  delayChildren = 0,
  amount = 0.15,
  once = true,
  as = 'div',
}: StaggerContainerProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as ElementType;
  const variants: Variants = staggerContainer(stagger, delayChildren, reduced);

  return (
    <MotionTag
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
