import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import SectionReveal from '@/components/common/SectionReveal';
import SmartImage from '@/components/common/SmartImage';
import Icon from '@/components/common/Icon';
import Carousel from '@/components/common/Carousel';
import { services } from '@/data/servicesData';

export default function ServicesOverview() {
  // Six featured services for the homepage
  const featured = services.slice(0, 6);

  return (
    <section className="section-py bg-ivory/40">
      <div className="container-px">
        <SectionReveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Driven Around Your Needs"
            subtitle="Flexible rental solutions for everyday travel, important occasions and long-distance journeys."
          />
        </SectionReveal>

        <Carousel ariaLabel="Featured rental services" className="mt-14" trackClassName="px-1 pb-3">
          {featured.map((service, i) => (
            <SectionReveal key={service.slug} delay={i * 0.06} className="w-[84%] flex-none snap-start sm:w-[48%] lg:w-[31.5%]">
              <article className="group flex h-full flex-col overflow-hidden rounded-4xl border border-graphite-200/70 bg-soft-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <SmartImage
                    src={service.image}
                    alt={service.imageAlt}
                    wrapperClassName="absolute inset-0 h-full w-full"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/40 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-soft-white/95 text-accent shadow-soft backdrop-blur-sm">
                    <Icon name={service.icon} className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-bold text-graphite-900">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite-500">{service.excerpt}</p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </SectionReveal>
          ))}
        </Carousel>

        <SectionReveal className="mt-12 flex justify-center" delay={0.1}>
          <Link to="/services" className="btn-secondary group">
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}
