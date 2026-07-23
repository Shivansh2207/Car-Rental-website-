import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';
import useReducedMotion from '@/hooks/useReducedMotion';

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** stagger delay between children */
  stagger?: number;
  /** initial delay */
  delay?: number;
}

/**
 * Container that staggers the entrance of its direct children when they
 * scroll into view. Pair each child with <StaggerItem>.
 */
export default function Stagger({ children, className, stagger = 0.1, delay = 0 }: StaggerProps) {
  const reduced = useReducedMotion();
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : stagger,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  const item: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
