/**
 * galleryData.ts
 * Gallery items for the masonry grid + accessible lightbox.
 */
import type { GalleryItem } from '@/types/site';
import { buildImage, images } from './images';

export const galleryCategories = [
  'All',
  'Fleet',
  'Interiors',
  'Airport',
  'Corporate',
  'Weddings',
  'Outstation',
  'Vehicle Care',
] as const;

export const gallery: GalleryItem[] = [
  {
    id: 'g1',
    src: buildImage(images.gallery.exterior, { w: 1000, h: 1300 }),
    alt: 'Premium sedan exterior on a coastal road',
    category: 'Fleet',
    caption: 'Premium sedan ready for an airport transfer',
  },
  {
    id: 'g2',
    src: buildImage(images.gallery.interior, { w: 1000, h: 700 }),
    alt: 'Clean, comfortable vehicle interior',
    category: 'Interiors',
    caption: 'Clean, well-kept cabin before a journey',
  },
  {
    id: 'g3',
    src: buildImage(images.gallery.airport, { w: 1000, h: 700 }),
    alt: 'Traveller with luggage at the airport',
    category: 'Airport',
    caption: 'Timely airport pickup with luggage assistance',
  },
  {
    id: 'g4',
    src: buildImage(images.gallery.corporate, { w: 1000, h: 700 }),
    alt: 'Business professionals travelling together',
    category: 'Corporate',
    caption: 'Executive corporate travel in comfort',
  },
  {
    id: 'g5',
    src: buildImage(images.gallery.wedding, { w: 1000, h: 1300 }),
    alt: 'Elegant setting for wedding transportation',
    category: 'Weddings',
    caption: 'Coordinated cars for a wedding day',
  },
  {
    id: 'g6',
    src: buildImage(images.gallery.outstation, { w: 1000, h: 700 }),
    alt: 'Scenic highway for an outstation road trip',
    category: 'Outstation',
    caption: 'Outstation journey into the hills',
  },
  {
    id: 'g7',
    src: buildImage(images.gallery.vehicleCare, { w: 1000, h: 700 }),
    alt: 'Vehicle being cleaned and inspected',
    category: 'Vehicle Care',
    caption: 'Cleaning and inspection before every journey',
  },
  {
    id: 'g8',
    src: buildImage(images.gallery.family, { w: 1000, h: 700 }),
    alt: 'Family enjoying a road trip together',
    category: 'Outstation',
    caption: 'A comfortable family road trip',
  },
  {
    id: 'g9',
    src: buildImage(images.gallery.chauffeur, { w: 1000, h: 1300 }),
    alt: 'Professional chauffeur preparing a vehicle',
    category: 'Corporate',
    caption: 'Professional driver ready for pickup',
  },
  {
    id: 'g10',
    src: buildImage(images.fleet.suv, { w: 1000, h: 700 }),
    alt: 'Premium SUV exterior',
    category: 'Fleet',
    caption: 'Spacious SUV for group and family travel',
  },
  {
    id: 'g11',
    src: buildImage(images.fleet.muv, { w: 1000, h: 700 }),
    alt: 'Seven-seater MUV for families',
    category: 'Fleet',
    caption: 'Seven-seater MUV for families and groups',
  },
  {
    id: 'g12',
    src: buildImage(images.gallery.interior, { w: 1000, h: 1300 }),
    alt: 'Detailed view of a premium vehicle interior',
    category: 'Interiors',
    caption: 'Premium cabin detailing',
  },
];

export default gallery;
