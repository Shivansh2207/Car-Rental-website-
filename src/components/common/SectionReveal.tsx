import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';
import useReducedMotion from '@/hooks/useReducedMotion';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  /** optional id (e.g. for anchor targets) */
  id?: string;
  /** delay in seconds */
  delay?: number;
  /** render as a different element via `as` */
  as?: 'div' | 'section' | 'li' | 'article' | 'span';
}

/**
 * Fade-and-rise section reveal on scroll into view.
 * Respects prefers-reduced-motion (renders static content).
 */
export default function SectionReveal({
  children,
  className,
  id,
  delay = 0,
  as = 'div',
}: SectionRevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
    },
  };

  return (
    <MotionTag
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  );
}
