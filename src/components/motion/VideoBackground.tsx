import { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/cn';
import useReducedMotion from '@/hooks/useReducedMotion';
import useIsMobile from '@/hooks/useIsMobile';

interface VideoBackgroundProps {
  src: string;
  poster: string;
  /** alt text for the poster image (video is decorative) */
  posterAlt?: string;
  className?: string;
  /** overlay(s) rendered above the media (gradients, tint) */
  children?: React.ReactNode;
}

/**
 * VideoBackground — cinematic muted background video with a bulletproof poster.
 *
 * The poster image is always painted underneath, so the section is complete
 * even if the clip is blocked, slow, or the device is mobile. The <video> only
 * mounts on capable desktops (skipped on mobile and under reduced motion for
 * performance and battery) and hides itself on error, revealing the poster.
 */
export default function VideoBackground({
  src,
  poster,
  posterAlt = '',
  className,
  children,
}: VideoBackgroundProps) {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const useVideo = !reduced && !isMobile;

  // Pause when the tab is hidden to save resources.
  useEffect(() => {
    if (!useVideo) return;
    const onVisibility = () => {
      const v = videoRef.current;
      if (!v) return;
      if (document.hidden) v.pause();
      else void v.play().catch(() => {});
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, [useVideo]);

  return (
    <div className={cn('absolute inset-0 overflow-hidden bg-graphite-900', className)}>
      {/* Guaranteed poster layer */}
      <img
        src={poster}
        alt={posterAlt}
        aria-hidden={posterAlt ? undefined : true}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {useVideo && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onPlaying={() => setPlaying(true)}
          onError={() => setPlaying(false)}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
            playing ? 'opacity-100' : 'opacity-0',
          )}
        />
      )}

      {children}
    </div>
  );
}
