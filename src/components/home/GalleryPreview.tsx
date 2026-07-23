import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import SectionReveal from '@/components/common/SectionReveal';
import { gallery, galleryCategories } from '@/data/galleryData';
import { cn } from '@/utils/cn';

export default function GalleryPreview() {
  const [active, setActive] = useState<string>('All');

  const filtered = active === 'All' ? gallery.slice(0, 8) : gallery.filter((g) => g.category === active).slice(0, 8);

  // masonry-style: alternate aspect ratios
  const heights: Record<number, string> = {
    0: 'h-72',
    1: 'h-56',
    2: 'h-64',
    3: 'h-48',
    4: 'h-72',
    5: 'h-56',
    6: 'h-64',
    7: 'h-52',
  };

  return (
    <section className="section-py bg-ivory/40">
      <div className="container-px">
        <SectionReveal>
          <SectionHeading
            eyebrow="Gallery"
            title="On the Road With Apex Drive"
            subtitle="A collection of our vehicles, journeys and travel experiences."
          />
        </SectionReveal>

        <SectionReveal className="mt-10" delay={0.1}>
          <div className="no-scrollbar -mx-5 flex snap-x gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={cn(
                  'flex-none rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300',
                  active === cat
                    ? 'bg-graphite-900 text-soft-white'
                    : 'border border-graphite-200 bg-soft-white text-graphite-600 hover:border-graphite-400',
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionReveal>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filtered.map((item, i) => (
            <SectionReveal key={item.id} delay={(i % 3) * 0.08}>
              <div className="group relative mb-4 overflow-hidden rounded-3xl break-inside-avoid">
                <div className={cn(heights[i % 8], 'overflow-hidden rounded-3xl')}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-soft-white backdrop-blur-sm">
                    {item.category}
                  </span>
                  <p className="mt-2 text-sm text-soft-white">{item.caption}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-12 flex justify-center" delay={0.1}>
          <Link to="/gallery" className="btn-secondary group">
            View Full Gallery
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}
