import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import SectionReveal from '@/components/common/SectionReveal';
import FleetCard from '@/components/fleet/FleetCard';
import { fleet, fleetTabs } from '@/data/fleetData';
import type { VehicleCategory } from '@/types/site';
import { cn } from '@/utils/cn';

export default function FleetShowcase() {
  const [active, setActive] = useState<VehicleCategory | 'All'>('All');

  const filtered = active === 'All' ? fleet : fleet.filter((v) => v.categoryTab === active);

  return (
    <section className="section-py bg-soft-white">
      <div className="container-px">
        <SectionReveal>
          <SectionHeading
            eyebrow="Our Fleet"
            title="A Vehicle for Every Kind of Journey"
            subtitle="Choose from practical sedans, spacious SUVs, premium vehicles and group transportation options."
          />
        </SectionReveal>

        {/* Category tabs */}
        <SectionReveal className="mt-10" delay={0.1}>
          <div className="no-scrollbar -mx-5 flex snap-x gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
            {fleetTabs.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActive(tab.value)}
                aria-pressed={active === tab.value}
                className={cn(
                  'flex-none rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300',
                  active === tab.value
                    ? 'bg-graphite-900 text-soft-white shadow-soft'
                    : 'border border-graphite-200 bg-soft-white text-graphite-600 hover:border-graphite-400 hover:text-graphite-900',
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Desktop: horizontal scroll showcase with arrow controls */}
        <div className="mt-10 hidden lg:block">
          <HorizontalShowcase vehicles={filtered} />
        </div>

        {/* Mobile/tablet: swipeable carousel (snap scroll) */}
        <div className="mt-10 lg:hidden">
          <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4">
            {filtered.map((v) => (
              <div key={v.id} className="w-[80%] flex-none snap-center sm:w-[45%]">
                <FleetCard vehicle={v} />
              </div>
            ))}
          </div>
        </div>

        <SectionReveal className="mt-12 flex justify-center" delay={0.1}>
          <Link to="/fleet" className="btn-secondary group">
            View Full Fleet
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}

function HorizontalShowcase({ vehicles }: { vehicles: typeof fleet }) {
  const scrollRef = (node: HTMLDivElement | null) => {
    if (node) (scrollRef as unknown as { current: HTMLDivElement }).current = node;
  };

  function scrollBy(dir: number) {
    const el = (scrollRef as unknown as { current: HTMLDivElement }).current;
    if (el) el.scrollBy({ left: dir * 360, behavior: 'smooth' });
  }

  if (vehicles.length === 0) {
    return (
      <p className="rounded-3xl border border-dashed border-graphite-200 p-10 text-center text-graphite-500">
        No vehicles match the selected filters. Try another category or{' '}
        <Link to="/contact" className="font-semibold text-accent">contact our team</Link> for assistance.
      </p>
    );
  }

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {vehicles.map((v) => (
          <div key={v.id} className="w-[340px] flex-none">
            <FleetCard vehicle={v} />
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => scrollBy(-1)}
        aria-label="Scroll fleet left"
        className="absolute -left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-graphite-200 bg-soft-white text-graphite-700 shadow-soft transition-colors hover:bg-ivory"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => scrollBy(1)}
        aria-label="Scroll fleet right"
        className="absolute -right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-graphite-200 bg-soft-white text-graphite-700 shadow-soft transition-colors hover:bg-ivory"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
