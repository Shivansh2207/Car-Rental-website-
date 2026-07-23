import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import SectionReveal from '@/components/common/SectionReveal';
import { ImageReveal } from '@/components/motion';
import { buildImage, images } from '@/data/images';
import useReducedMotion from '@/hooks/useReducedMotion';

const checklist = [
  'Vehicle cleanliness inspection',
  'Tyre and fluid checks',
  'Air-conditioning check',
  'Interior sanitisation',
  'Driver coordination',
  'Route and pickup confirmation',
  'Emergency support availability',
  'Vehicle documentation check',
];

export default function SafetySection() {
  const reduced = useReducedMotion();
  const img = buildImage(images.company.carCare, { w: 1200, h: 900 });

  return (
    <section className="section-py bg-ivory/40">
      <div className="container-px">
        <SectionReveal>
          <SectionHeading
            eyebrow="Safety & Care"
            title="Prepared Before Every Journey"
            subtitle="Every vehicle and driver is checked and coordinated before departure so your journey starts reliably."
          />
        </SectionReveal>

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-2">
          {/* Image side — clip-path reveal */}
          <ImageReveal
            src={img}
            alt="Vehicle being cleaned and inspected before a journey"
            from="left"
            wrapperClassName="aspect-[4/3] rounded-5xl border border-graphite-200/70 shadow-card"
          />

          {/* Checklist side */}
          <SectionReveal delay={0.15}>
            <ul className="flex flex-col gap-3">
              {checklist.map((item, i) => (
                <motion.li
                  key={item}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex items-center gap-4 rounded-2xl border border-graphite-200/60 bg-soft-white px-5 py-3.5 shadow-soft transition-colors hover:border-accent/30"
                >
                  <motion.span
                    initial={reduced ? { scale: 1 } : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.3 }}
                    className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-accent text-soft-white"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <motion.path
                        d="M5 13l4 4L19 7"
                        initial={reduced ? false : { pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.06, duration: 0.35 }}
                      />
                    </svg>
                  </motion.span>
                  <span className="text-sm font-medium text-graphite-800">{item}</span>
                </motion.li>
              ))}
            </ul>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
