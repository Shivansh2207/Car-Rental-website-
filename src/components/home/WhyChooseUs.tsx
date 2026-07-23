import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading';
import SectionReveal from '@/components/common/SectionReveal';
import SmartImage from '@/components/common/SmartImage';
import { buildImage, images } from '@/data/images';
import Icon from '@/components/common/Icon';
import useReducedMotion from '@/hooks/useReducedMotion';

const reasons = [
  {
    icon: 'Car',
    title: 'Professionally Maintained Fleet',
    body: 'Vehicles are regularly cleaned, inspected and maintained to support comfortable and dependable journeys.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Verified Drivers',
    body: 'Drivers are selected for experience, local route knowledge, professionalism and customer-friendly behaviour.',
  },
  {
    icon: 'MessageSquare',
    title: 'Transparent Communication',
    body: 'Customers receive clear information about the vehicle, journey and applicable charges before confirming an enquiry.',
  },
  {
    icon: 'Headset',
    title: '24/7 Assistance',
    body: 'Our team remains available for early airport departures, late-night arrivals and urgent travel requirements.',
  },
  {
    icon: 'Route',
    title: 'Local Route Expertise',
    body: 'Experienced drivers understand Mumbai traffic, airport routes, business districts and popular outstation destinations.',
  },
  {
    icon: 'SlidersHorizontal',
    title: 'Flexible Travel Solutions',
    body: 'Choose transportation based on passenger count, luggage, occasion, route and comfort requirements.',
  },
];

export default function WhyChooseUs() {
  const reduced = useReducedMotion();
  const detail = buildImage(images.company.carCare, { w: 900, h: 1200 });

  return (
    <section className="relative overflow-hidden bg-graphite-900 py-24 text-soft-white md:py-32">
      {/* faint grid background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:48px_48px] opacity-40" aria-hidden="true" />

      <div className="container-px relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          {/* Image side */}
          <SectionReveal className="lg:col-span-5" delay={0.1}>
            <div className="relative">
              <div className="overflow-hidden rounded-5xl">
                <SmartImage
                  src={detail}
                  alt="Close-up of a premium vehicle being cleaned and inspected"
                  wrapperClassName="aspect-[3/4]"
                  className="h-full w-full object-cover"
                />
              </div>
              <motion.div
                initial={reduced ? { opacity: 0 } : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-6 -right-4 max-w-[200px] rounded-3xl border border-white/10 bg-charcoal/90 p-5 backdrop-blur-md sm:-right-6"
              >
                <p className="font-heading text-3xl font-bold text-accent">4.9<span className="text-base text-soft-white/70">/5</span></p>
                <p className="mt-1 text-xs text-soft-white/70">Average customer rating from our travellers</p>
              </motion.div>
            </div>
          </SectionReveal>

          {/* Reasons side */}
          <div className="lg:col-span-7">
            <SectionReveal>
              <SectionHeading
                tone="light"
                align="left"
                eyebrow="Why Choose Us"
                title="Confidence Behind Every Kilometre"
                subtitle="We combine a well-kept fleet, experienced drivers and clear communication so every journey feels dependable."
              />
            </SectionReveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {reasons.map((r, i) => (
                <SectionReveal key={r.title} delay={i * 0.07}>
                  <div className="group flex h-full gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-accent/40 hover:bg-white/10">
                    <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-soft-white">
                      <Icon name={r.icon} className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-bold text-soft-white">{r.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-soft-white/65">{r.body}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
