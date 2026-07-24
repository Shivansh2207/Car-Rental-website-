import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
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
import Carousel from '@/components/common/Carousel';
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

      <section className="page-hero relative overflow-hidden bg-graphite-900 py-28 text-soft-white md:py-36">
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
  const [activeImage, setActiveImage] = useState(0);
  const similar = getSimilarVehicles(vehicle);
  const wa = whatsappLink(`Hello ${siteData.company.name}, I'd like to enquire about the ${vehicle.name} (${vehicle.category}).`);

  const specs = [
    { icon: Users, label: 'Seating', value: vehicle.seating },
    { icon: Briefcase, label: 'Luggage', value: vehicle.luggage },
    { icon: Snowflake, label: 'AC', value: vehicle.airConditioning ? 'Yes' : 'No' },
    { icon: ArrowRightLeft, label: 'Transmission', value: vehicle.transmission },
  ];
  const vehicleImages = vehicle.images.filter(Boolean);
  const currentImage = vehicleImages[activeImage] ?? vehicleImages[0];

  function stepImage(direction: number) {
    setActiveImage((index) => (index + direction + vehicleImages.length) % vehicleImages.length);
  }

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

          <div className="grid items-start gap-10 lg:grid-cols-2">
            {/* Images */}
            <SectionReveal>
              <div className="group relative overflow-hidden rounded-5xl border border-graphite-200/70 bg-graphite-100 shadow-card">
                <SmartImage
                  src={currentImage}
                  alt={vehicle.imageAlt}
                  wrapperClassName="aspect-[16/11]"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-graphite-950/65 to-transparent px-5 pb-5 pt-12 text-soft-white">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em]">{vehicle.tier} collection</span>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur-sm">{activeImage + 1} / {vehicleImages.length}</span>
                </div>
                {vehicleImages.length > 1 && (
                  <>
                    <button type="button" onClick={() => stepImage(-1)} aria-label="Previous vehicle image" className="absolute left-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-soft-white/90 text-graphite-900 opacity-0 shadow-soft transition-all group-hover:opacity-100 hover:bg-white"><ChevronLeft className="h-5 w-5" /></button>
                    <button type="button" onClick={() => stepImage(1)} aria-label="Next vehicle image" className="absolute right-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-soft-white/90 text-graphite-900 opacity-0 shadow-soft transition-all group-hover:opacity-100 hover:bg-white"><ChevronRight className="h-5 w-5" /></button>
                  </>
                )}
              </div>
              {vehicleImages.length > 1 && (
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {vehicleImages.map((image, index) => (
                    <button key={image} type="button" onClick={() => setActiveImage(index)} aria-label={`View vehicle image ${index + 1}`} aria-pressed={activeImage === index} className={`relative aspect-[16/9] overflow-hidden rounded-2xl border-2 transition-all ${activeImage === index ? 'border-accent shadow-glow' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                      <img src={image} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </SectionReveal>

            {/* Details */}
            <SectionReveal delay={0.1} className="lg:sticky lg:top-28">
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

              <div className="mt-8 rounded-3xl border border-graphite-200/70 bg-ivory/50 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-graphite-800"><Sparkles className="h-4 w-4 text-accent" /> Ready for a tailored recommendation?</div>
                <p className="mt-2 text-xs leading-relaxed text-graphite-500">Share your route and date. We’ll confirm availability, driver details and the best-fit quote.</p>
                <div className="mt-4 flex flex-wrap gap-3">
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" /> Request a Quote
                </a>
                <Link to="/contact" className="btn-secondary group">
                  Talk to Our Team <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Features */}
          <SectionReveal className="mt-14">
            <div className="flex items-end justify-between gap-4"><div><span className="eyebrow">Included with your journey</span><h2 className="mt-2 font-heading text-xl font-bold text-graphite-900">Comfort Features</h2></div><span className="hidden text-xs font-semibold uppercase tracking-wide text-graphite-400 sm:inline">Prepared for the road</span></div>
            <div className="mt-4 flex flex-wrap gap-2">
              {vehicle.features.map((f) => (
                <span key={f} className="inline-flex items-center gap-2 rounded-full border border-graphite-200 bg-soft-white px-4 py-2 text-sm text-graphite-700 shadow-soft"><CheckCircle2 className="h-4 w-4 text-accent" />
                  {f}
                </span>
              ))}
            </div>
          </SectionReveal>

          {/* Similar vehicles */}
          {similar.length > 0 && (
            <SectionReveal className="mt-14">
              <h2 className="font-heading text-xl font-bold text-graphite-900">Similar Vehicles</h2>
              <Carousel ariaLabel="Similar vehicles" className="mt-6" trackClassName="px-1 pb-3">
                {similar.map((v) => (
                  <div key={v.id} className="w-[84%] flex-none snap-start sm:w-[48%] lg:w-[31.5%]">
                    <FleetCard vehicle={v} />
                  </div>
                ))}
              </Carousel>
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
