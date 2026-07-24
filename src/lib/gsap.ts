/**
 * Central GSAP entry point.
 * Registers ScrollTrigger once and re-exports the shared instances so every
 * component uses the same singletons (avoids duplicate plugin registration).
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Refresh triggers once everything (images, fonts) has settled so start/end
// positions are measured correctly.
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

export { gsap, ScrollTrigger };
