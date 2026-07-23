/**
 * Motion system — single import surface for the site's animation primitives.
 *
 *   import { Reveal, StaggerContainer, StaggerItem, ImageReveal } from '@/components/motion';
 *
 * RouteLine and AnimatedCounter live in components/common (widely imported
 * already) and are re-exported here so the motion namespace is complete.
 */
export { default as Reveal } from './Reveal';
export type { RevealProps } from './Reveal';
export { default as FadeUp } from './FadeUp';
export { default as StaggerContainer } from './StaggerContainer';
export { default as StaggerItem } from './StaggerItem';
export { default as ImageReveal } from './ImageReveal';
export { default as TextReveal } from './TextReveal';
export { default as ParallaxImage } from './ParallaxImage';
export { default as ScrollProgress } from './ScrollProgress';
export { default as ScrollToTop } from './ScrollToTop';
export { default as MagneticButton } from './MagneticButton';

export { default as RouteLine } from '@/components/common/RouteLine';
export { default as AnimatedCounter } from '@/components/common/AnimatedCounter';

export { motionConfig, EASE } from '@/utils/motionVariants';
