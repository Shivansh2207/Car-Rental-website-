/**
 * Shared TypeScript types used across data files and components.
 */

export interface NavLink {
  label: string;
  to: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  isDecimal?: boolean;
}

// ---------------------------------------------------------------------------
// Fleet
// ---------------------------------------------------------------------------
export type VehicleCategory = 'Sedan' | 'SUV' | 'MUV' | 'Luxury' | 'Traveller';

export interface Vehicle {
  id: string;
  slug: string;
  name: string;
  /** Display category — may include "Premium MUV" etc. but maps to a tab */
  category: string;
  /** Filter tab this vehicle belongs to */
  categoryTab: VehicleCategory;
  tier: 'Standard' | 'Premium';
  seating: string;
  luggage: string;
  transmission: 'Manual' | 'Automatic';
  airConditioning: boolean;
  idealFor: string;
  description: string;
  features: string[];
  images: string[];
  imageAlt: string;
}

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------
export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string; // lucide icon name
  excerpt: string;
  description: string;
  image: string;
  imageAlt: string;
  whoFor: string[];
  suitableVehicles: string[];
  benefits: string[];
  useCases: string[];
  faqs: ServiceFaq[];
}

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------
export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

// ---------------------------------------------------------------------------
// Destinations
// ---------------------------------------------------------------------------
export interface Destination {
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  travelCharacter: string;
  bestFor: string;
  passengerType: string;
  recommendedVehicles: string[];
  description: string;
  tips: string[];
}

// ---------------------------------------------------------------------------
// Blog
// ---------------------------------------------------------------------------
export interface BlogSection {
  heading: string;
  body: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  sections: BlogSection[];
  related: string[]; // slugs
}

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------
export interface FaqItem {
  q: string;
  a: string;
}

// ---------------------------------------------------------------------------
// Gallery
// ---------------------------------------------------------------------------
export type GalleryCategory =
  | 'Fleet'
  | 'Interiors'
  | 'Airport'
  | 'Corporate'
  | 'Weddings'
  | 'Outstation'
  | 'Vehicle Care';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  caption: string;
}

// ---------------------------------------------------------------------------
// Team
// ---------------------------------------------------------------------------
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  bio: string;
}
