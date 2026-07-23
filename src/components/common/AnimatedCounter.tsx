import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';
import useReducedMotion from '@/hooks/useReducedMotion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  isDecimal?: boolean;
  duration?: number;
  className?: string;
}

/**
 * Counts up to `value` once when scrolled into view.
 * Respects prefers-reduced-motion (shows final value immediately).
 */
export default function AnimatedCounter({
  value,
  suffix = '',
  isDecimal = false,
  duration = 1.8,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(isDecimal ? '0.0' : '0');

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(isDecimal ? value.toFixed(1) : Math.round(value).toString());
      return;
    }
    const controls = animate(motionValue, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setDisplay(isDecimal ? latest.toFixed(1) : Math.round(latest).toString());
      },
    });
    return () => controls.stop();
  }, [inView, value, isDecimal, duration, reduced, motionValue]);

  // format thousands with commas
  const formatted = isDecimal ? display : Number(display).toLocaleString('en-IN');

  return (
    <span ref={ref} className={className}>
      {formatted}
      {suffix}
    </span>
  );
}
