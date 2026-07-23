import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import SectionReveal from '@/components/common/SectionReveal';
import { destinations } from '@/data/destinationsData';
import useReducedMotion from '@/hooks/useReducedMotion';

export default function FeaturedDestinations() {
  // Show 8 on home
  const featured = destinations.slice(0, 8);
  const reduced = useReducedMotion();

  return (
    <section className="section-py relative overflow-hidden bg-ivory/40">
      {/* faint animated map-grid background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:64px_64px] opacity-50" aria-hidden="true" />

      <div className="container-px relative">
        <SectionReveal>
          <SectionHeading
            eyebrow="Popular Routes"
            title="From Mumbai to Wherever the Road Leads"
            subtitle="A few of the destinations our travellers head to most. Travel time depends on route, traffic and weather."
          />
        </SectionReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((d, i) => (
            <SectionReveal key={d.slug} delay={(i % 4) * 0.08}>
              <DestinationCard slug={d.slug} name={d.name} image={d.image} alt={d.imageAlt} bestFor={d.bestFor} description={d.description} reduced={reduced} />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-12 flex justify-center" delay={0.1}>
          <Link to="/destinations" className="btn-secondary group">
            Explore All Destinations
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}

function DestinationCard({
  slug,
  name,
  image,
  alt,
  bestFor,
  description,
  reduced,
}: {
  slug: string;
  name: string;
  image: string;
  alt: string;
  bestFor: string;
  description: string;
  reduced: boolean;
}) {
  // subtle cursor parallax on the image (desktop only)
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function onMove(e: React.MouseEvent) {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setOffset({ x: px * 12, y: py * 12 });
  }

  return (
    <Link
      ref={ref}
      to={`/destinations#${slug}`}
      onMouseMove={onMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      className="group relative block h-80 overflow-hidden rounded-4xl border border-graphite-200/60 shadow-soft"
    >
      <img
        src={image}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(1.06)` }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/90 via-graphite-950/25 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 text-soft-white">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide backdrop-blur-sm">
          <MapPin className="h-3 w-3" aria-hidden="true" /> {bestFor}
        </span>
        <h3 className="mt-3 font-heading text-2xl font-bold">{name}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-soft-white/75">{description}</p>
        <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Explore Destination <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </p>
      </div>
    </Link>
  );
}
