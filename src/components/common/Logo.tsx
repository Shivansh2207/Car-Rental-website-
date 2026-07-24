import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';
import siteData from '@/data/siteData';

interface LogoProps {
  /** 'light' for dark backgrounds (navbar over hero), 'dark' for light backgrounds */
  variant?: 'light' | 'dark';
  className?: string;
}

/**
 * Temporary text logo with a minimal abstract route symbol.
 * Designed to be easily replaced with an SVG file later.
 * The symbol communicates movement, direction and road travel.
 */
export default function Logo({ variant = 'dark', className }: LogoProps) {
  const isLight = variant === 'light';
  return (
    <Link
      to="/"
      aria-label={`${siteData.company.name} — home`}
      className={cn('group inline-flex items-center gap-2.5', className)}
    >
      {/* Abstract route/road symbol */}
      <span
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-graphite-900 ring-1 ring-white/10"
        aria-hidden="true"
      >
        <svg viewBox="0 0 40 40" className="h-7 w-7" fill="none">
          <path
            d="M8 30 C 15 30, 17 10, 32 10"
            stroke="#F97316"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <circle cx="32" cy="10" r="2.6" fill="#F97316" />
          <circle cx="8" cy="30" r="2" fill={isLight ? '#F5F2EB' : '#F5F2EB'} />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-heading text-base font-bold tracking-tight',
            isLight ? 'text-soft-white' : 'text-graphite-900',
          )}
        >
          {siteData.company.shortName.toUpperCase()}
        </span>
        <span
          className={cn(
            'font-heading text-[10px] font-semibold uppercase tracking-[0.22em]',
            isLight ? 'text-soft-white/70' : 'text-graphite-500',
          )}
        >
          Car Rentals
        </span>
      </span>
    </Link>
  );
}
