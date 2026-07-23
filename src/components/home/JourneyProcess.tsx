import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import SectionReveal from '@/components/common/SectionReveal';
import useReducedMotion from '@/hooks/useReducedMotion';

const steps = [
  {
    n: '01',
    title: 'Tell Us Your Requirement',
    body: 'Share your location, destination, travel date, passenger count and preferred vehicle.',
  },
  {
    n: '02',
    title: 'Receive the Right Recommendation',
    body: 'Our team suggests a suitable vehicle and shares the relevant journey details.',
  },
  {
    n: '03',
    title: 'Travel With Confidence',
    body: 'Your assigned vehicle and driver arrive as coordinated for a comfortable journey.',
  },
];

export default function JourneyProcess() {
  const reduced = useReducedMotion();

  return (
    <section className="section-py bg-soft-white">
      <div className="container-px">
        <SectionReveal>
          <SectionHeading
            eyebrow="How It Works"
            title="A Simple, Human Way to Arrange Your Ride"
            subtitle="This is an enquiry process — not an online booking flow. We help you choose the right vehicle, then coordinate the rest directly."
          />
        </SectionReveal>

        <div className="relative mt-16">
          {/* Animated road line connecting the steps */}
          <div className="absolute inset-x-0 top-12 hidden md:block">
            <motion.svg
              viewBox="0 0 1000 40"
              preserveAspectRatio="none"
              className="h-10 w-full"
              fill="none"
              aria-hidden="true"
            >
              <line
                x1="80"
                y1="20"
                x2="920"
                y2="20"
                stroke="#70757D"
                strokeOpacity="0.25"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <motion.line
                x1="80"
                y1="20"
                x2="920"
                y2="20"
                stroke="#F97316"
                strokeWidth="3"
                strokeLinecap="round"
                initial={reduced ? false : { pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </motion.svg>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <SectionReveal key={step.n} delay={i * 0.15} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center">
                  <span className="absolute inset-0 rounded-full border border-graphite-200 bg-soft-white" />
                  <span className="absolute inset-2 rounded-full bg-graphite-900" />
                  <span className="relative font-heading text-2xl font-bold text-accent">{step.n}</span>
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-graphite-900">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-graphite-500">{step.body}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
