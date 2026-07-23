import { type ElementType } from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '@/utils/cn';
import useReducedMotion from '@/hooks/useReducedMotion';
import { EASE, motionConfig } from '@/utils/motionVariants';

type TextTag = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';

interface TextRevealProps {
  /** the text to reveal, one entry per visual line */
  lines: string[];
  as?: TextTag;
  className?: string;
  /** class applied to each animated line */
  lineClassName?: string;
  /** run on mount (hero) instead of on scroll into view */
  animateOnMount?: boolean;
  delay?: number;
  /** stagger between lines (s) */
  stagger?: number;
  once?: boolean;
}

/**
 * TextReveal — line-based heading reveal. Each line slides up from behind an
 * overflow-hidden mask, giving a cinematic "typeset" entrance.
 *
 * Accessibility: the real text stays inside a single semantic element (no
 * duplicated/hidden copies and no per-letter splitting), so screen readers and
 * SEO read it normally. Under reduced motion the text renders statically.
 */
export default function TextReveal({
  lines,
  as = 'h2',
  className,
  lineClassName,
  animateOnMount = false,
  delay = 0,
  stagger = motionConfig.stagger.slow,
  once = true,
}: TextRevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as ElementType;

  // Static render for reduced motion — content is never withheld.
  if (reduced) {
    const Tag: ElementType = as;
    return (
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className={cn('block', lineClassName)}>
            {line}
          </span>
        ))}
      </Tag>
    );
  }

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
  const lineVariant: Variants = {
    hidden: { y: '110%' },
    visible: { y: '0%', transition: { duration: 0.8, ease: EASE } },
  };

  const activation = animateOnMount
    ? { animate: 'visible' as const }
    : { whileInView: 'visible' as const, viewport: { once, amount: 0.5 } };

  return (
    <MotionTag className={className} variants={container} initial="hidden" {...activation}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span className={cn('block', lineClassName)} variants={lineVariant}>
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
