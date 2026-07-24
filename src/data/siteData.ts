/**
 * siteData.ts
 * ---------------------------------------------------------------------------
 * CENTRAL COMPANY CONFIGURATION FILE.
 * All company-wide details live here. Edit these values to rebrand the site.
 * ---------------------------------------------------------------------------
 */
import type { NavLink } from '@/types/site';

export const siteData = {
  company: {
    name: 'Shree Krishna Car Rentals',
    shortName: 'Shree Krishna',
    tagline: 'Your Journey. Our Responsibility.',
    /** Short brand statement used in intros and footers */
    statement: 'Dependable car rentals for every journey across Mumbai.',
  },

  contact: {
    phone: '+91 98765 43210',
    phoneHref: '+919876543210',
    whatsapp: '+91 98765 43210',
    whatsappNumber: '919876543210',
    email: 'hello@apexdriverentals.com',
    address: {
      line1: 'Mumbai',
      line2: 'Maharashtra, India',
      full: 'Mumbai, Maharashtra, India',
    },
    mapEmbedQuery: 'Mumbai, Maharashtra, India',
    operatingHours: '24 Hours, 7 Days a Week',
  },

  serviceArea: {
    headline: 'Mumbai, Navi Mumbai and Thane',
    areas: ['Mumbai', 'Navi Mumbai', 'Thane'],
  },

  stats: [
    { label: 'Vehicles Available', value: 40, suffix: '+', isDecimal: false },
    { label: 'Trips Completed', value: 15000, suffix: '+', isDecimal: false },
    { label: 'Years of Experience', value: 10, suffix: '+', isDecimal: false },
    { label: 'Customer Rating', value: 4.9, suffix: '/5', isDecimal: true },
  ],

  experienceYears: 'More than 10 years',

  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
  },

  /** Used for canonical URLs, Open Graph, structured data */
  url: 'https://www.apexdriverentals.com',

  // ---------------------------------------------------------------------------
  // CONTACT / ENQUIRY FORM CONFIGURATION
  // ---------------------------------------------------------------------------
  // The enquiry form builds a WhatsApp message by default (no backend required).
  // To use a real form service instead, set `provider` to one of the options
  // below and add the corresponding key/endpoint. Until configured, the form
  // safely falls back to WhatsApp enquiry generation.
  // ---------------------------------------------------------------------------
  form: {
    provider: 'whatsapp' as 'whatsapp' | 'web3forms' | 'formspree' | 'custom',
    web3formsAccessKey: '', // e.g. 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
    formspreeEndpoint: '', // e.g. 'https://formspree.io/f/abcdwxyz'
    customApiEndpoint: '', // e.g. 'https://api.example.com/enquiry'
  },
} as const;

/** Primary navigation. Routes must match the router in App.tsx */
export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our Fleet', to: '/fleet' },
  { label: 'Corporate Travel', to: '/corporate' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Travel Guides', to: '/travel-guides' },
  { label: 'Contact', to: '/contact' },
];

/** Convenience helpers for contact actions used across the site */
export const phoneLink = `tel:${siteData.contact.phoneHref}`;
export const emailLink = `mailto:${siteData.contact.email}`;

/** Build a WhatsApp deep link with an optional prefilled message */
export function whatsappLink(message = ''): string {
  const base = `https://wa.me/${siteData.contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export default siteData;
