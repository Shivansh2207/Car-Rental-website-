import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '@/components/common/Seo';
import SectionReveal from '@/components/common/SectionReveal';
import FleetCard from '@/components/fleet/FleetCard';
import FinalCta from '@/components/common/FinalCta';
import { fleet, fleetTabs, getVehicleBySlug, getSimilarVehicles } from '@/data/fleetData';
import { siteData } from '@/data/siteData';
import { breadcrumbLd } from '@/utils/jsonLd';
import { cn } from '@/utils/cn';
import type { VehicleCategory } from '@/types/site';
import SmartImage from '@/components/common/SmartImage';
import { whatsappLink } from '@/data/siteData';
import { MessageCircle, Snowflake, Users, Briefcase, ArrowRightLeft } from 'lucide-react';

export default function FleetPage() {
  const { slug } = useParams();
  const vehicle = slug ? getVehicleBySlug(slug) : undefined;

  if (vehicle) return <VehicleDetail vehicle={vehicle} />;

  return (
    <>
      <Seo
        title={`Our Fleet — ${siteData.company.name}`}
        description="Browse our fleet of sedans, SUVs, MUVs, luxury vehicles and traveller vans for car rental across Mumbai, Navi Mumbai and Thane."
        path="/fleet"
        jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Our Fleet', path: '/fleet' }])}
      />

      <section className="bg-graphite-900 py-28 text-soft-white md:py-36">
        <div className="container-px">
          <span className="eyebrow text-accent-soft">Our Fleet</span>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-tight sm:text-5xl">
            Choose the Right Vehicle for Your Journey
          </h1>
          <p className="mt-5 max-w-xl text-lg text-soft-white/70">
            Practical sedans, spacious MUVs, premium SUVs, luxury vehicles and group travellers —
            each maintained for comfort and dependability.
          </p>
        </div>
      </section>

      <FleetListing />
      <FinalCta />
    </>
  );
}

function FleetListing() {
  const [category, setCategory] = useState<VehicleCategory | 'All'>('All');
  const filtered = category === 'All' ? fleet : fleet.filter((v) => v.categoryTab === category);

  return (
    <section className="section-py bg-soft-white">
      <div className="container-px">
        <div className="no-scrollbar -mx-5 flex snap-x gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
          {fleetTabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setCategory(tab.value)}
              aria-pressed={category === tab.value}
              className={cn(
                'flex-none rounded-none px-5 py-2.5 text-sm font-semibold transition-all',
                category === tab.value
                  ? 'bg-graphite-900 text-soft-white shadow-soft'
                  : 'border border-graphite-200 bg-soft-white text-graphite-600 hover:border-graphite-400',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((v, i) => (
            <SectionReveal key={v.id} delay={(i % 3) * 0.08}>
              <FleetCard vehicle={v} />
            </SectionReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 rounded-3xl border border-dashed border-graphite-200 p-10 text-center text-graphite-500">
            No vehicles match the selected filters. Try another category or{' '}
            <Link to="/contact" className="font-semibold text-accent">contact our team</Link> for assistance.
          </p>
        )}
      </div>
    </section>
  );
}

function VehicleDetail({ vehicle }: { vehicle: NonNullable<ReturnType<typeof getVehicleBySlug>> }) {
  const similar = getSimilarVehicles(vehicle);
  const wa = whatsappLink(`Hello ${siteData.company.name}, I'd like to enquire about the ${vehicle.name} (${vehicle.category}).`);

  const specs = [
    { icon: Users, label: 'Seating', value: vehicle.seating },
    { icon: Briefcase, label: 'Luggage', value: vehicle.luggage },
    { icon: Snowflake, label: 'AC', value: vehicle.airConditioning ? 'Yes' : 'No' },
    { icon: ArrowRightLeft, label: 'Transmission', value: vehicle.transmission },
  ];

  return (
    <>
      <Seo
        title={`${vehicle.name} — ${siteData.company.name} Fleet`}
        description={vehicle.description}
        path={`/fleet/${vehicle.slug}`}
        jsonLd={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Our Fleet', path: '/fleet' },
          { name: vehicle.name, path: `/fleet/${vehicle.slug}` },
        ])}
      />

      <section className="section-py bg-soft-white">
        <div className="container-px mx-auto max-w-5xl">
          <Link to="/fleet" className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-graphite-500 hover:text-accent">
            <ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" /> Back to Fleet
          </Link>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Images */}
            <SectionReveal>
              <div className="overflow-hidden rounded-5xl">
                <SmartImage
                  src={vehicle.images[0]}
                  alt={vehicle.imageAlt}
                  wrapperClassName="aspect-[16/11]"
                  className="h-full w-full object-cover"
                />
              </div>
              {vehicle.images[1] && (
                <div className="mt-4 overflow-hidden rounded-3xl">
                  <SmartImage
                    src={vehicle.images[1]}
                    alt={`${vehicle.name} alternative view`}
                    wrapperClassName="aspect-[16/9]"
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
            </SectionReveal>

            {/* Details */}
            <SectionReveal delay={0.1}>
              <span className="inline-flex rounded-none bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                {vehicle.category} {vehicle.tier === 'Premium' ? '· Premium' : ''}
              </span>
              <h1 className="mt-3 font-heading text-3xl font-bold text-graphite-900 sm:text-4xl">
                {vehicle.name}
              </h1>
              <p className="mt-2 text-sm font-medium text-graphite-500">{vehicle.idealFor}</p>
              <p className="mt-5 text-pretty leading-relaxed text-graphite-600">{vehicle.description}</p>

              <dl className="mt-8 grid grid-cols-2 gap-4">
                {specs.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 rounded-2xl border border-graphite-200/70 bg-ivory/50 p-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-soft-white text-graphite-600 shadow-soft">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-[10px] uppercase tracking-wide text-graphite-400">{label}</dt>
                      <dd className="text-sm font-semibold text-graphite-800">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" /> Request a Quote
                </a>
                <Link to="/contact" className="btn-secondary group">
                  Talk to Our Team <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </SectionReveal>
          </div>

          {/* Features */}
          <SectionReveal className="mt-14">
            <h2 className="font-heading text-xl font-bold text-graphite-900">Comfort Features</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {vehicle.features.map((f) => (
                <span key={f} className="rounded-none border border-graphite-200 bg-soft-white px-4 py-2 text-sm text-graphite-700">
                  {f}
                </span>
              ))}
            </div>
          </SectionReveal>

          {/* Similar vehicles */}
          {similar.length > 0 && (
            <SectionReveal className="mt-14">
              <h2 className="font-heading text-xl font-bold text-graphite-900">Similar Vehicles</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {similar.map((v) => (
                  <FleetCard key={v.id} vehicle={v} />
                ))}
              </div>
            </SectionReveal>
          )}

          <p className="mt-14 rounded-3xl border border-graphite-200/70 bg-ivory/50 p-6 text-center text-sm text-graphite-500">
            Vehicle model, colour and exact configuration may vary depending on availability. The team will
            confirm the assigned vehicle during enquiry coordination.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
