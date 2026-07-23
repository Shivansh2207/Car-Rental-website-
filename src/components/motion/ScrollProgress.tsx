import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ScrollProgress — thin accent bar showing total page-scroll progress.
 * Fixed to the very top edge of the viewport (above the sticky navbar), it
 * never intercepts pointer events and stays out of the way of navigation.
 *
 * The spring smooths the fill so fast flicks don't look jumpy.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[3px] origin-left bg-accent"
    />
  );
}
