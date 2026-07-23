import { type ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  /** light = for dark backgrounds */
  tone?: 'dark' | 'light';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'dark',
  className,
}: SectionHeadingProps) {
  const light = tone === 'light';
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={cn(
          'max-w-3xl text-balance text-3xl font-bold leading-[1.1] sm:text-4xl md:text-[2.75rem]',
          light ? 'text-soft-white' : 'text-graphite-900',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'max-w-2xl text-pretty text-base leading-relaxed sm:text-lg',
            light ? 'text-soft-white/70' : 'text-graphite-500',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
