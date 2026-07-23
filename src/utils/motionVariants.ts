/**
 * motionVariants.ts
 * ---------------------------------------------------------------------------
 * CENTRAL MOTION CONFIGURATION for the whole site.
 *
 * Every animation component references these values so the motion language
 * stays consistent: one easing curve, a small set of durations, distances and
 * stagger delays. Do not invent per-section easing/timing — extend this file
 * instead so the system remains coherent.
 * ---------------------------------------------------------------------------
 */
import type { SpringOptions, Variants } from 'framer-motion';

/** Premium ease-out curve used across the site. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const motionConfig = {
  easing: EASE,
  durations: {
    fast: 0.3,
    normal: 0.55,
    slow: 0.85,
  },
  /** translation distances in px */
  distances: {
    small: 12,
    normal: 28,
    large: 48,
  },
  /** delay between staggered children in seconds */
  stagger: {
    fast: 0.06,
    normal: 0.1,
    slow: 0.16,
  },
  /** default viewport trigger — start shortly before fully in view, once only */
  viewport: { once: true, amount: 0.2 } as const,
} as const;

export type RevealDirection =
  | 'up'
  | 'down'
  | 'left'
  | 'right'
  | 'scale'
  | 'blur'
  | 'clip'
  | 'none';

interface RevealOptions {
  direction?: RevealDirection;
  /** movement distance in px (overrides the default) */
  distance?: number;
  duration?: number;
  delay?: number;
  /** collapse motion to a simple fade when reduced motion is preferred */
  reduced?: boolean;
}

type MotionState = Record<string, string | number>;

/**
 * Build the hidden state for a directional reveal.
 * When reduced motion is requested we only ever animate opacity.
 */
function hiddenState(direction: RevealDirection, distance: number, reduced: boolean): MotionState {
  if (reduced) return { opacity: 0 };
  switch (direction) {
    case 'up':
      return { opacity: 0, y: distance };
    case 'down':
      return { opacity: 0, y: -distance };
    case 'left':
      return { opacity: 0, x: distance };
    case 'right':
      return { opacity: 0, x: -distance };
    case 'scale':
      return { opacity: 0, scale: 0.94 };
    case 'blur':
      return { opacity: 0, filter: 'blur(12px)' };
    case 'clip':
      return { opacity: 0, clipPath: 'inset(0 0 100% 0)' };
    case 'none':
    default:
      return { opacity: 0 };
  }
}

function visibleState(direction: RevealDirection, reduced: boolean): MotionState {
  const base: MotionState = { opacity: 1 };
  if (reduced) return base;
  switch (direction) {
    case 'up':
    case 'down':
      base.y = 0;
      break;
    case 'left':
    case 'right':
      base.x = 0;
      break;
    case 'scale':
      base.scale = 1;
      break;
    case 'blur':
      base.filter = 'blur(0px)';
      break;
    case 'clip':
      base.clipPath = 'inset(0 0 0% 0)';
      break;
  }
  return base;
}

/**
 * Variants for a single directional reveal element.
 * Keys map to the `initial`/`whileInView` (or animate) state names.
 */
export function revealVariants({
  direction = 'up',
  distance = motionConfig.distances.normal,
  duration = motionConfig.durations.normal,
  delay = 0,
  reduced = false,
}: RevealOptions = {}): Variants {
  return {
    hidden: hiddenState(direction, distance, reduced),
    visible: {
      ...visibleState(direction, reduced),
      transition: {
        duration: reduced ? 0.01 : duration,
        ease: EASE,
        delay: reduced ? 0 : delay,
      },
    },
  } as Variants;
}

/** Parent variants for staggered children. */
export function staggerContainer(
  stagger: number = motionConfig.stagger.normal,
  delayChildren = 0,
  reduced = false,
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : stagger,
        delayChildren: reduced ? 0 : delayChildren,
      },
    },
  };
}

/** Child variants used inside a stagger container. */
export function staggerItem(
  direction: RevealDirection = 'up',
  distance: number = motionConfig.distances.normal,
  reduced = false,
): Variants {
  return {
    hidden: hiddenState(direction, distance, reduced),
    visible: {
      ...visibleState(direction, reduced),
      transition: {
        duration: reduced ? 0.01 : motionConfig.durations.normal,
        ease: EASE,
      },
    },
  } as Variants;
}

/** Shared spring for magnetic / pointer-follow interactions (for useSpring). */
export const magneticSpring: SpringOptions = {
  stiffness: 200,
  damping: 18,
  mass: 0.6,
};

export default motionConfig;
