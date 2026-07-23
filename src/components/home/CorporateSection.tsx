import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import SectionReveal from '@/components/common/SectionReveal';
import SmartImage from '@/components/common/SmartImage';
import { buildImage, images } from '@/data/images';

const offerings = [
  'Executive travel',
  'Airport transfers',
  'Client and delegate transport',
  'Corporate events',
  'Employee movement',
  'Monthly rental requirements',
  'Dedicated travel coordination',
  'Multi-vehicle arrangements',
];

export default function CorporateSection() {
  const img = buildImage(images.company.executive, { w: 1000, h: 1200 });

  return (
    <section className="section-py bg-soft-white">
      <div className="container-px grid items-center gap-14 lg:grid-cols-2">
        <SectionReveal className="order-2 lg:order-1">
          <span className="eyebrow">Corporate Travel</span>
          <h2 className="mt-4 text-balance text-3xl font-bold leading-[1.1] text-graphite-900 sm:text-4xl md:text-[2.6rem]">
            Professional Mobility for Modern Businesses
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-graphite-500">
            From executive airport transfers and client visits to employee transportation and corporate
            events, Apex Drive Rentals provides organised travel support for businesses of every size.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {offerings.map((o) => (
              <li key={o} className="flex items-center gap-2.5 text-sm font-medium text-graphite-700">
                <span className="inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {o}
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Link to="/corporate" className="btn-primary group">
              Discuss Corporate Requirements
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </SectionReveal>

        <SectionReveal className="order-1 lg:order-2" delay={0.15}>
          <div className="relative overflow-hidden rounded-5xl">
            <SmartImage
              src={img}
              alt="Executive passenger and chauffeur near a premium sedan at an office entrance"
              wrapperClassName="aspect-[4/5]"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/40 to-transparent" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
