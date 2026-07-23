import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import useReducedMotion from '@/hooks/useReducedMotion';

interface RouteLineProps {
  className?: string;
  /** Orientation / shape of the route */
  variant?: 'horizontal' | 'curve' | 'journey';
  /** stroke colour of the main route */
  color?: string;
  /** whether to animate the draw on view */
  animate?: boolean;
}

/**
 * RouteLine — the recurring visual motif of the site.
 * A road / navigation route that draws itself as it scrolls into view.
 * Intentionally not a childish dotted line: a smooth flowing path with
 * a node markers and a subtle glow accent.
 */
export default function RouteLine({
  className,
  variant = 'horizontal',
  color = '#F97316',
  animate = true,
}: RouteLineProps) {
  const reduced = useReducedMotion();

  // Path definitions per variant (viewBox 0 0 1200 120)
  const paths: Record<string, string> = {
    horizontal: 'M20 60 H1180',
    curve: 'M20 90 C 300 90, 350 20, 600 60 S 950 100, 1180 30',
    journey: 'M20 60 C 200 60, 250 20, 420 40 S 700 90, 880 50 S 1100 30, 1180 40',
  };

  const d = paths[variant];
  const transition = reduced ? { duration: 0 } : { duration: 2.4, ease: 'easeInOut' as const };

  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={cn('h-24 w-full', className)}
      aria-hidden="true"
      fill="none"
    >
      {/* faint base road track */}
      <path d={d} stroke="#70757D" strokeOpacity="0.18" strokeWidth="10" strokeLinecap="round" />

      {/* dashed centre line */}
      <path
        d={d}
        stroke="#F5F2EB"
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="2 14"
      />

      {/* animated accent route */}
      <motion.path
        d={d}
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        initial={animate ? { pathLength: 0, opacity: 0 } : false}
        whileInView={animate ? { pathLength: 1, opacity: 1 } : undefined}
        viewport={{ once: true, amount: 0.4 }}
        transition={transition}
        style={{ filter: `drop-shadow(0 0 6px ${color}66)` }}
      />

      {/* node markers */}
      <motion.circle
        cx="20"
        cy={variant === 'horizontal' ? 60 : 60}
        r="6"
        fill="#F5F2EB"
        stroke={color}
        strokeWidth="3"
        initial={animate ? { scale: 0 } : false}
        whileInView={animate ? { scale: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ delay: reduced ? 0 : 0.3, duration: 0.4 }}
      />
      <motion.circle
        cx="1180"
        cy={variant === 'horizontal' ? 60 : variant === 'curve' ? 30 : 40}
        r="6"
        fill={color}
        initial={animate ? { scale: 0 } : false}
        whileInView={animate ? { scale: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ delay: reduced ? 0 : 2.2, duration: 0.4 }}
      />
    </svg>
  );
}
