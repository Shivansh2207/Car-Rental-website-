import { useState, useCallback, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import SectionReveal from '@/components/common/SectionReveal';
import { testimonials } from '@/data/testimonialsData';
import useReducedMotion from '@/hooks/useReducedMotion';

const AUTOPLAY_MS = 7000;

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const count = testimonials.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % count), [count]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + count) % count), [count]);

  // Autoplay: only when motion is allowed and not paused. Each tick is skipped
  // while the tab is hidden or the visitor is selecting text, so testimonials
  // never change out from under an interaction.
  const currentRef = useRef(current);
  currentRef.current = current;
  useEffect(() => {
    if (reduced || paused || count <= 1) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      const selection = window.getSelection?.()?.toString() ?? '';
      if (selection.length > 0) return;
      setCurrent((currentRef.current + 1) % count);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [reduced, paused, count]);

  const t = testimonials[current];

  return (
    <section className="section-py bg-soft-white">
      <div className="container-px">
        <SectionReveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Journeys Remembered for the Right Reasons"
            subtitle="Sample testimonials from travellers who have used our service. Replace with genuine customer reviews when available."
          />
        </SectionReveal>

        <SectionReveal className="mt-14" delay={0.1}>
          {/* Pause autoplay on hover and while keyboard focus is inside */}
          <div
            className="relative mx-auto max-w-3xl text-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <Quote className="mx-auto h-10 w-10 text-accent/20" aria-hidden="true" />

            <div className="relative min-h-[200px]" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, x: -24 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Stars */}
                  <div className="mt-6 flex items-center justify-center gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <blockquote className="mt-6 text-lg leading-relaxed text-graphite-700 sm:text-xl">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="mt-6">
                    <p className="font-heading font-bold text-graphite-900">{t.name}</p>
                    <p className="text-sm text-graphite-500">{t.role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-graphite-200 text-graphite-600 transition-colors hover:bg-ivory"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === current ? 'true' : undefined}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'w-8 bg-accent' : 'w-2 bg-graphite-300 hover:bg-graphite-500'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-graphite-200 text-graphite-600 transition-colors hover:bg-ivory"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
