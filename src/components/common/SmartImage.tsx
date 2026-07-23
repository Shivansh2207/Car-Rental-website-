import { useState, type ImgHTMLAttributes } from 'react';
import { ImageOff } from 'lucide-react';
import { cn } from '@/utils/cn';

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  /** loading strategy; defaults to 'lazy' for below-the-fold images */
  eager?: boolean;
  wrapperClassName?: string;
}

/**
 * Image wrapper that:
 * - lazy-loads by default (eager for above-the-fold/hero),
 * - shows a soft skeleton while loading,
 * - swaps to an accessible broken-image fallback if the source fails.
 */
export default function SmartImage({
  src,
  alt,
  eager = false,
  className,
  wrapperClassName,
  ...rest
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <span className={cn('relative block overflow-hidden', wrapperClassName)}>
      {!loaded && !errored && (
        <span className="absolute inset-0 animate-pulse bg-graphite-200/60" aria-hidden="true" />
      )}
      {errored ? (
        <span
          className="flex h-full w-full flex-col items-center justify-center gap-2 bg-graphite-100 text-graphite-400"
          role="img"
          aria-label={alt}
        >
          <ImageOff className="h-6 w-6" aria-hidden="true" />
          <span className="px-4 text-center text-xs">Image unavailable</span>
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={cn(
            'transition-opacity duration-700',
            loaded ? 'opacity-100' : 'opacity-0',
            className,
          )}
          {...rest}
        />
      )}
    </span>
  );
}
