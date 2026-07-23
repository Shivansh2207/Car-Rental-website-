import { Link } from 'react-router-dom';
import { Users, Briefcase, Snowflake, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Vehicle } from '@/types/site';
import SmartImage from '@/components/common/SmartImage';
import { whatsappLink, siteData } from '@/data/siteData';
import { cn } from '@/utils/cn';

interface FleetCardProps {
  vehicle: Vehicle;
  className?: string;
}

export default function FleetCard({ vehicle, className }: FleetCardProps) {
  const wa = whatsappLink(
    `Hello ${siteData.company.name}, I'd like to enquire about the ${vehicle.name} (${vehicle.category}).`,
  );

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-4xl border border-graphite-200/70 bg-soft-white shadow-soft hover:shadow-card',
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <SmartImage
          src={vehicle.images[0]}
          alt={vehicle.imageAlt}
          wrapperClassName="absolute inset-0 h-full w-full"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/30 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-soft-white/90 px-3 py-1 text-xs font-semibold text-graphite-900 backdrop-blur-sm">
          {vehicle.category}
        </span>
        {vehicle.tier === 'Premium' && (
          <span className="absolute right-4 top-4 rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-soft-white">
            Premium
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-xl font-bold text-graphite-900">{vehicle.name}</h3>
        <p className="mt-1 text-xs font-medium text-graphite-500">{vehicle.idealFor}</p>

        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <Spec icon={Users} label="Seating" value={vehicle.seating} />
          <Spec icon={Briefcase} label="Luggage" value={vehicle.luggage} />
          <Spec icon={Snowflake} label="AC" value={vehicle.airConditioning ? 'Yes' : 'No'} />
          <Spec icon={ArrowRight} label="Transmission" value={vehicle.transmission} />
        </dl>

        <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-graphite-500">{vehicle.description}</p>

        <div className="mt-6 flex items-center gap-2 pt-2">
          <Link
            to={`/fleet/${vehicle.slug}`}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-graphite-200 px-4 py-2.5 text-sm font-semibold text-graphite-800 transition-colors hover:border-graphite-900 hover:bg-ivory"
          >
            View Details
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Request a quote for ${vehicle.name}`}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-soft-white transition-colors hover:bg-accent-hover"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Request a Quote</span>
            <span className="sm:hidden">Quote</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function Spec({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Users;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-ivory text-graphite-600">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-wide text-graphite-400">{label}</span>
        <span className="text-sm font-medium text-graphite-800">{value}</span>
      </span>
    </div>
  );
}
