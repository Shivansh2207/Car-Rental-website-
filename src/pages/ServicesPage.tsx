import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import Seo from '@/components/common/Seo';
import SectionReveal from '@/components/common/SectionReveal';
import Icon from '@/components/common/Icon';
import FaqAccordion from '@/components/common/FaqAccordion';
import FinalCta from '@/components/common/FinalCta';
import SmartImage from '@/components/common/SmartImage';
import { services, getServiceBySlug } from '@/data/servicesData';
import { whatsappLink, siteData } from '@/data/siteData';
import { breadcrumbLd } from '@/utils/jsonLd';

export default function ServicesPage() {
  const { slug } = useParams();
  const service = slug ? getServiceBySlug(slug) : undefined;

  // Service detail page
  if (service) return <ServiceDetail service={service} />;

  // Overview page
  return (
    <>
      <Seo
        title={`Our Services — ${siteData.company.name}`}
        description="Comprehensive car rental services: airport transfers, local travel, outstation journeys, corporate mobility, wedding cars and more across Mumbai."
        path="/services"
        jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }])}
      />

      {/* Hero */}
      <section className="bg-graphite-900 py-28 text-soft-white md:py-36">
        <div className="container-px">
          <span className="eyebrow text-accent-soft">What We Offer</span>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-tight sm:text-5xl">
            Flexible Rental Services for Every Kind of Journey
          </h1>
          <p className="mt-5 max-w-xl text-lg text-soft-white/70">
            From airport pickups and business travel to family holidays and special occasions — choose a
            service and let us handle the rest.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section-py bg-soft-white">
        <div className="container-px">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <SectionReveal key={s.slug} delay={i * 0.06}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-4xl border border-graphite-200/70 bg-soft-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <SmartImage
                      src={s.image}
                      alt={s.imageAlt}
                      wrapperClassName="absolute inset-0 h-full w-full"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/40 to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-soft-white/95 text-accent shadow-soft">
                      <Icon name={s.icon} className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-heading text-xl font-bold text-graphite-900">{s.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite-500">{s.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:text-accent-hover">
                      Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Service detail sub-page                                                     */
/* -------------------------------------------------------------------------- */
function ServiceDetail({ service }: { service: NonNullable<ReturnType<typeof getServiceBySlug>> }) {
  const wa = whatsappLink(`Hello ${siteData.company.name}, I'd like to enquire about ${service.title}.`);

  return (
    <>
      <Seo
        title={`${service.title} — ${siteData.company.name}`}
        description={service.excerpt}
        path={`/services/${service.slug}`}
        jsonLd={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] overflow-hidden bg-graphite-900">
        <img src={service.image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/90 to-graphite-900/50" />
        <div className="container-px relative py-28 md:py-36">
          <span className="eyebrow text-accent-soft">Service</span>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-tight text-soft-white sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-soft-white/70">{service.excerpt}</p>
        </div>
      </section>

      {/* Detail */}
      <section className="section-py bg-soft-white">
        <div className="container-px mx-auto max-w-4xl">
          <SectionReveal>
            <p className="text-pretty text-lg leading-relaxed text-graphite-600">{service.description}</p>
          </SectionReveal>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <SectionReveal>
              <h2 className="font-heading text-xl font-bold text-graphite-900">Who This Service Is For</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {service.whoFor.map((w) => (
                  <li key={w} className="flex items-start gap-2.5 text-sm text-graphite-600">
                    <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {w}
                  </li>
                ))}
              </ul>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h2 className="font-heading text-xl font-bold text-graphite-900">Key Benefits</h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-graphite-600">
                    <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </SectionReveal>
          </div>

          <SectionReveal className="mt-14" delay={0.1}>
            <h2 className="font-heading text-xl font-bold text-graphite-900">Common Use Cases</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.useCases.map((u) => (
                <span key={u} className="rounded-none border border-graphite-200 bg-ivory px-4 py-2 text-sm text-graphite-700">
                  {u}
                </span>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal className="mt-14" delay={0.1}>
            <h2 className="font-heading text-xl font-bold text-graphite-900">Suitable Vehicles</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.suitableVehicles.map((v) => (
                <span key={v} className="rounded-none border border-accent/30 bg-accent/5 px-4 py-2 text-sm font-medium text-accent">
                  {v}
                </span>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal className="mt-14" delay={0.1}>
            <h2 className="font-heading text-xl font-bold text-graphite-900">Frequently Asked Questions</h2>
            <FaqAccordion items={service.faqs} className="mt-6" />
          </SectionReveal>

          <SectionReveal className="mt-14 text-center" delay={0.1}>
            <h2 className="font-heading text-xl font-bold text-graphite-900">Request a Customised Quote</h2>
            <p className="mt-3 text-sm text-graphite-500">Share your requirements and our team will respond with a suitable option.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Enquire on WhatsApp
              </a>
              <Link to="/contact" className="btn-secondary group">
                Contact Us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
