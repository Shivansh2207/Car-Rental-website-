import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { cn } from '@/utils/cn';
import useReducedMotion from '@/hooks/useReducedMotion';

type Variant = 'primary' | 'secondary' | 'outlineLight' | 'ghostLight';

interface ButtonLinkProps {
  to: string;
  children: React.ReactNode;
  variant?: Variant;
  icon?: LucideIcon;
  /** show animated arrow that nudges on hover */
  withArrow?: boolean;
  className?: string;
}

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outlineLight: 'btn-outline-light',
  ghostLight: 'btn-ghost-light',
};

/**
 * Internal CTA link with smooth arrow-nudge micro-interaction on hover.
 */
export default function ButtonLink({
  to,
  children,
  variant = 'primary',
  icon: Icon,
  withArrow = false,
  className,
}: ButtonLinkProps) {
  const reduced = useReducedMotion();
  return (
    <Link to={to} className={cn(variantClass[variant], 'group', className)}>
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      <span>{children}</span>
      {withArrow && (
        <motion.span
          aria-hidden="true"
          animate={reduced ? undefined : { x: 0 }}
          whileHover={undefined}
          className="inline-flex"
        >
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.span>
      )}
    </Link>
  );
}

/** External/anchor variant (tel:, mailto:, wa.me) */
export function AnchorButton({
  href,
  children,
  variant = 'primary',
  icon: Icon,
  withArrow = false,
  className,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  icon?: LucideIcon;
  withArrow?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
      className={cn(variantClass[variant], 'group', className)}
    >
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      )}
    </a>
  );
}
