/**
 * useReducedMotionPreference
 * ---------------------------------------------------------------------------
 * Canonical name for the site's reduced-motion hook (matches the motion-system
 * naming). Tracks `prefers-reduced-motion: reduce` and updates live.
 *
 * Re-exports the existing implementation so both names resolve to a single
 * source of truth — no duplicated listeners.
 */
export { default, useReducedMotion as useReducedMotionPreference } from './useReducedMotion';
