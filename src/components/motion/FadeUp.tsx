import Reveal, { type RevealProps } from './Reveal';

/**
 * FadeUp — the most common reveal (fade + rise). Thin, semantic wrapper around
 * <Reveal direction="up" /> for readability at call sites.
 */
export default function FadeUp(props: Omit<RevealProps, 'direction'>) {
  return <Reveal direction="up" {...props} />;
}
