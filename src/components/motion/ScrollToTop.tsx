import { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import useReducedMotion from '@/hooks/useReducedMotion';

/**
 * ScrollToTop — floating button that appears after the visitor has scrolled a
 * meaningful distance and returns them to the top.
 *
 * Placement avoids the contact controls: bottom-right on desktop (the WhatsApp
 * panel sits on the left), and lifted above the mobile bottom contact bar.
 * Uses Framer's shared scroll (no extra scroll listener).
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 700);
  });

  function toTop() {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Scroll back to top"
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 8 }}
          transition={{ duration: reduced ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reduced ? undefined : { y: -3 }}
          className="fixed bottom-[76px] right-4 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full border border-graphite-200 bg-soft-white/90 text-graphite-800 shadow-card backdrop-blur-md transition-colors hover:border-accent hover:text-accent lg:bottom-6 lg:right-6"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
