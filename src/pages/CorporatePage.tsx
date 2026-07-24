import { Check } from 'lucide-react';
import Seo from '@/components/common/Seo';
import SectionHeading from '@/components/common/SectionHeading';
import SectionReveal from '@/components/common/SectionReveal';
import EnquiryForm from '@/components/common/EnquiryForm';
import FinalCta from '@/components/common/FinalCta';
import SmartImage from '@/components/common/SmartImage';
import { buildImage, images } from '@/data/images';
import { siteData } from '@/data/siteData';
import { breadcrumbLd } from '@/utils/jsonLd';

const services = [
  'Executive travel',
  'Employee transportation',
  'Client and guest travel',
  'Conferences and events',
  'Airport coordination',
  'Monthly rental requirements',
  'Multi-city travel support',
  'Dedicated relationship coordination',
];

const process = [
  {
    n: '01',
    title: 'Requirement Assessment',
    body: 'We understand your travel patterns, volume, preferred vehicle types and coordination expectations.',
  },
  {
    n: '02',
    title: 'Vehicle Planning',
    body: 'We recommend suitable vehicles and create a plan that matches your schedule and standards.',
  },
  {
    n: '03',
    title: 'Driver Coordination',
    body: 'Professional drivers are assigned and briefed on your routes, schedules and expectations.',
  },
  {
    n: '04',
    title: 'Journey Monitoring',
    body: 'We track ongoing travel to ensure punctuality and address any needs in real time.',
  },
  {
    n: '05',
    title: 'Consolidated Communication',
    body: 'A single point of contact handles all coordination so your team does not have to manage multiple drivers.',
  },
  {
    n: '06',
    title: 'Feedback and Ongoing Support',
    body: 'We gather feedback and continuously refine the arrangement to serve your business better.',
  },
];

export default function CorporatePage() {
  const heroImg = buildImage(images.company.executive, { w: 1800, h: 900, q: 65 });

  return (
    <>
      <Seo
        title={`Corporate Travel — ${siteData.company.name}`}
        description="Professional ground transportation for businesses: executive travel, employee movement, client transport and event coordination across Mumbai."
        path="/corporate"
        jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Corporate Travel', path: '/corporate' }])}
      />

      {/* Hero */}
      <section className="page-hero relative min-h-[50vh] overflow-hidden bg-graphite-900">
        <img src={heroImg} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/90 to-graphite-900/60" />
        <div className="container-px relative py-28 md:py-36">
          <span className="eyebrow text-accent-soft">Corporate</span>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-tight text-soft-white sm:text-5xl">
            Reliable Ground Transportation for Your Business
          </h1>
          <p className="mt-5 max-w-xl text-lg text-soft-white/70">
            Dependable executive and employee travel with consistent standards, professional drivers
            and a single point of coordination.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-py bg-soft-white">
        <div className="container-px grid items-center gap-14 lg:grid-cols-2">
          <SectionReveal>
            <SectionHeading align="left" title="What We Offer to Businesses" />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-2.5 text-sm font-medium text-graphite-700">
                  <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <div className="overflow-hidden rounded-5xl border border-graphite-200/70 shadow-card">
              <SmartImage
                src={buildImage(images.company.executive, { w: 1000, h: 700 })}
                alt="Executive passenger and chauffeur at an office entrance"
                wrapperClassName="aspect-[4/3]"
                className="h-full w-full object-cover"
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Process */}
      <section className="section-py bg-ivory/40">
        <div className="container-px">
          <SectionReveal>
            <SectionHeading eyebrow="How We Support You" title="How We Support Businesses" />
          </SectionReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <SectionReveal key={p.n} delay={i * 0.07}>
                <div className="flex h-full gap-4 rounded-3xl border border-graphite-200/70 bg-soft-white p-6 shadow-soft">
                  <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-graphite-900 font-heading text-sm font-bold text-accent">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold text-graphite-900">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-graphite-500">{p.body}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Enquiry Form */}
      <section className="section-py bg-soft-white">
        <div className="container-px mx-auto max-w-3xl">
          <SectionReveal>
            <SectionHeading title="Discuss Your Corporate Requirements" subtitle="Share your business travel needs and our team will get back with a suitable arrangement." />
          </SectionReveal>
          <SectionReveal className="mt-10 rounded-5xl border border-graphite-200/70 bg-ivory/30 p-8 shadow-soft md:p-10" delay={0.1}>
            <EnquiryForm defaultService="Corporate Travel" />
          </SectionReveal>
          <p className="mt-6 text-center text-xs text-graphite-400">
            Submitting opens WhatsApp with your enquiry. No booking is confirmed.
          </p>
        </div>
      </section>

      <FinalCta heading="Professional Mobility Starts With a Conversation." />
    </>
  );
}
