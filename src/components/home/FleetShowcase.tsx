import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import SectionReveal from '@/components/common/SectionReveal';
import Carousel from '@/components/common/Carousel';
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
                  'flex-none px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-all duration-300',
                  active === tab.value
                    ? 'bg-graphite-900 text-soft-white shadow-soft'
                    : 'border border-graphite-200 bg-soft-white text-graphite-600 hover:border-graphite-900 hover:text-graphite-900',
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Carousel of fleet cards (arrows on desktop, swipe on touch) */}
        {filtered.length === 0 ? (
          <p className="mt-10 border border-dashed border-graphite-200 p-10 text-center text-graphite-500">
            No vehicles match the selected filters. Try another category or{' '}
            <Link to="/contact" className="font-semibold text-accent">contact our team</Link> for assistance.
          </p>
        ) : (
          <Carousel ariaLabel="Fleet vehicles" className="mt-10">
            {filtered.map((v) => (
              <div key={v.id} className="w-[82%] flex-none snap-start sm:w-[46%] lg:w-[360px]">
                <FleetCard vehicle={v} />
              </div>
            ))}
          </Carousel>
        )}

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
