import { motion } from 'framer-motion';
import { ShieldCheck, Car, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal, ImageReveal } from '@/components/motion';
import { buildImage, images } from '@/data/images';
import useReducedMotion from '@/hooks/useReducedMotion';
import { siteData } from '@/data/siteData';

const trustPoints = [
  { icon: ShieldCheck, label: 'Verified and experienced drivers' },
  { icon: Car, label: 'Regularly inspected vehicles' },
  { icon: Sparkles, label: 'Transparent and professional service' },
];

export default function IntroSection() {
  const reduced = useReducedMotion();
  const img1 = buildImage(images.fleet.sedan, { w: 700, h: 500 });
  const img2 = buildImage(images.gallery.interior, { w: 500, h: 400 });
  const img3 = buildImage(images.gallery.chauffeur, { w: 500, h: 600 });

  return (
    <section className="section-py bg-soft-white">
      <div className="container-px grid items-center gap-14 lg:grid-cols-2">
        {/* Left: text */}
        <Reveal direction="right">
          <span className="eyebrow">Your Travel Partner</span>
          <h2 className="mt-4 text-balance text-3xl font-bold leading-[1.1] text-graphite-900 sm:text-4xl md:text-[2.6rem]">
            More Than a Rental. A Travel Partner You Can Rely On.
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-graphite-500">
            {siteData.company.name} provides dependable car rental solutions for individuals, families,
            businesses and visitors across Mumbai. Our focus is simple: well-maintained vehicles,
            professional service and journeys that feel safe, comfortable and organised from beginning
            to end.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {trustPoints.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-medium text-graphite-800">{label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/about" className="btn-primary group">
              About {siteData.company.shortName}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Talk to Our Team
            </Link>
          </div>
        </Reveal>

        {/* Right: image collage (clip-path reveal) + floating badge */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <ImageReveal
              src={img1}
              alt="Premium vehicle exterior ready for a journey"
              from="left"
              eager
              wrapperClassName="col-span-2 aspect-[16/10] rounded-4xl"
            />
            <ImageReveal
              src={img2}
              alt="Clean and comfortable vehicle interior"
              from="up"
              eager
              wrapperClassName="aspect-[5/4] rounded-4xl"
            />
            <ImageReveal
              src={img3}
              alt="Professional chauffeur preparing a vehicle"
              from="down"
              eager
              wrapperClassName="aspect-[5/4] rounded-4xl"
            />
          </div>

          {/* Floating experience badge */}
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-3xl border border-graphite-200/70 bg-soft-white px-5 py-4 shadow-card sm:-left-6"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-graphite-900 font-heading text-lg font-bold text-accent">
              10+
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-graphite-900">Serving Travellers</p>
              <p className="text-xs text-graphite-500">for More Than 10 Years</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
