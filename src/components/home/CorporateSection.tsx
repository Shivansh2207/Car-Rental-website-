import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Reveal, GsapParallax, StaggerContainer, StaggerItem } from '@/components/motion';
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
    <section className="section-py relative overflow-hidden bg-soft-white">
      {/* faint structural grid — organised, business-like backdrop */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:56px_56px] opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        aria-hidden="true"
      />

      <div className="container-px relative grid items-center gap-14 lg:grid-cols-2">
        <Reveal direction="right" className="order-2 lg:order-1">
          <span className="eyebrow">Corporate Travel</span>
          <h2 className="mt-4 text-balance text-3xl font-bold leading-[1.1] text-graphite-900 sm:text-4xl md:text-[2.6rem]">
            Professional Mobility for Modern Businesses
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-graphite-500">
            From executive airport transfers and client visits to employee transportation and corporate
            events, Apex Drive Rentals provides organised travel support for businesses of every size.
          </p>

          <StaggerContainer as="ul" className="mt-8 grid gap-3 sm:grid-cols-2" stagger={0.07}>
            {offerings.map((o) => (
              <StaggerItem
                as="li"
                key={o}
                direction="left"
                className="flex items-center gap-2.5 text-sm font-medium text-graphite-700"
              >
                <span className="inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {o}
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-9">
            <Link to="/corporate" className="btn-primary group">
              Discuss Corporate Requirements
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <GsapParallax
            src={img}
            alt="Executive passenger and chauffeur near a premium sedan at an office entrance"
            amount={8}
            wrapperClassName="aspect-[4/5]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/40 to-transparent" />
          </GsapParallax>
        </div>
      </div>
    </section>
  );
}
