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
    hidden: reduced
      ? { opacity: 0 }
      : { opacity: 0, y: 34, scale: 0.975, filter: 'blur(7px)' },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: reduced ? 0.01 : 0.72,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  };

  return (
    <MotionTag
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08, margin: '0px 0px -8% 0px' }}
    >
      {children}
    </MotionTag>
  );
}
