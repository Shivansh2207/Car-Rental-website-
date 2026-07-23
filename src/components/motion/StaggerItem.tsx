import { type ElementType, type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import useReducedMotion from '@/hooks/useReducedMotion';
import { motionConfig, staggerItem, type RevealDirection } from '@/utils/motionVariants';

type StaggerItemTag = 'div' | 'li' | 'article' | 'span';

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  /** direction the item enters from */
  direction?: RevealDirection;
  distance?: number;
  as?: StaggerItemTag;
}

/**
 * StaggerItem — a single child of <StaggerContainer>. Inherits its timing from
 * the parent's `staggerChildren`, so it takes no delay of its own.
 */
export default function StaggerItem({
  children,
  className,
  direction = 'up',
  distance = motionConfig.distances.normal,
  as = 'div',
}: StaggerItemProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as ElementType;
  const variants: Variants = staggerItem(direction, distance, reduced);

  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
