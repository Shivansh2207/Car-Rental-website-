import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '@/utils/cn';
import type { FaqItem } from '@/types/site';

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

/**
 * Accessible FAQ accordion:
 * - Keyboard accessible (native button)
 * - aria-expanded / aria-controls
 * - smooth height animation
 * - respects reduced motion via framer + global CSS
 */
export default function FaqAccordion({ items, className }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-btn-${i}`;
        return (
          <div
            key={i}
            className={cn(
              'overflow-hidden rounded-3xl border transition-colors',
              isOpen ? 'border-accent/40 bg-soft-white shadow-soft' : 'border-graphite-200 bg-soft-white',
            )}
          >
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-base font-semibold text-graphite-900">{item.q}</span>
                <span
                  className={cn(
                    'inline-flex h-8 w-8 flex-none items-center justify-center rounded-full transition-all duration-300',
                    isOpen ? 'rotate-45 bg-accent text-soft-white' : 'bg-graphite-100 text-graphite-600',
                  )}
                  aria-hidden="true"
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm leading-relaxed text-graphite-500">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
