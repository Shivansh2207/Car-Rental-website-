/**
 * fleetData.ts
 * ---------------------------------------------------------------------------
 * The full vehicle catalogue. Edit/add/remove vehicles here.
 * Images use the central registry in images.ts — replace with model-specific
 * photography (public/images/fleet) when available.
 * ---------------------------------------------------------------------------
 */
import type { Vehicle, VehicleCategory } from '@/types/site';
import { buildImage, images } from './images';

export const fleetTabs: { label: string; value: VehicleCategory | 'All' }[] = [
  { label: 'All', value: 'All' },
  { label: 'Sedans', value: 'Sedan' },
  { label: 'SUVs', value: 'SUV' },
  { label: 'MUVs', value: 'MUV' },
  { label: 'Luxury', value: 'Luxury' },
  { label: 'Travellers', value: 'Traveller' },
];

export const fleet: Vehicle[] = [
  {
    id: 'swift-dzire',
    slug: 'swift-dzire',
    name: 'Swift Dzire',
    category: 'Sedan',
    categoryTab: 'Sedan',
    tier: 'Standard',
    seating: '4 + 1',
    luggage: '2 bags',
    transmission: 'Manual',
    airConditioning: true,
    idealFor: 'Airport transfers and city travel',
    description:
      'A practical, fuel-efficient sedan ideal for everyday Mumbai travel. Compact enough for city traffic yet comfortable for airport runs and short outstation journeys.',
    features: ['Air conditioning', 'Comfortable seating', 'Ample legroom', 'Music system', 'Clean, well-kept cabin'],
    images: [
      buildImage(images.fleet.sedan, { w: 1200, h: 800 }),
      buildImage(images.fleet.sedanAlt, { w: 1200, h: 800 }),
    ],
    imageAlt: 'White compact sedan parked on a clean urban street',
  },
  {
    id: 'hyundai-aura',
    slug: 'hyundai-aura',
    name: 'Hyundai Aura',
    category: 'Sedan',
    categoryTab: 'Sedan',
    tier: 'Standard',
    seating: '4 + 1',
    luggage: '2 bags',
    transmission: 'Manual',
    airConditioning: true,
    idealFor: 'Business and local travel',
    description:
      'A refined compact sedan offering a smooth ride and a quiet cabin, well-suited to business meetings, daily city travel and comfortable local commutes.',
    features: ['Air conditioning', 'Quiet cabin', 'Adjustable seats', 'Bluetooth audio', 'Spacious boot'],
    images: [buildImage(images.fleet.sedanAlt, { w: 1200, h: 800 })],
    imageAlt: 'Silver sedan driving on a city road',
  },
  {
    id: 'toyota-etios',
    slug: 'toyota-etios',
    name: 'Toyota Etios',
    category: 'Sedan',
    categoryTab: 'Sedan',
    tier: 'Standard',
    seating: '4 + 1',
    luggage: '3 bags',
    transmission: 'Manual',
    airConditioning: true,
    idealFor: 'Comfortable outstation journeys',
    description:
      'Known for reliability and a roomy cabin, the Etios is a dependable choice for comfortable outstation journeys and longer highway drives from Mumbai.',
    features: ['Air conditioning', 'Generous boot space', 'Durable and reliable', 'Comfortable ride', 'Good ground clearance'],
    images: [buildImage(images.fleet.sedan, { w: 1200, h: 800 })],
    imageAlt: 'Reliable sedan suited to outstation highway travel',
  },
  {
    id: 'maruti-ertiga',
    slug: 'maruti-ertiga',
    name: 'Maruti Ertiga',
    category: 'MUV',
    categoryTab: 'MUV',
    tier: 'Standard',
    seating: '6 + 1',
    luggage: '3 bags',
    transmission: 'Manual',
    airConditioning: true,
    idealFor: 'Families and small groups',
    description:
      'A versatile 7-seater MUV that comfortably handles families and small groups. Practical for city travel, weekend getaways and short outstation trips.',
    features: ['Air conditioning', 'Seven seats', 'Flexible seating', 'Fuel efficient', 'Family-friendly cabin'],
    images: [buildImage(images.fleet.muv, { w: 1200, h: 800 })],
    imageAlt: 'Compact seven-seater MUV for families and small groups',
  },
  {
    id: 'toyota-innova',
    slug: 'toyota-innova',
    name: 'Toyota Innova',
    category: 'MUV',
    categoryTab: 'MUV',
    tier: 'Standard',
    seating: '7 + 1',
    luggage: '4 bags',
    transmission: 'Manual',
    airConditioning: true,
    idealFor: 'Long-distance and group travel',
    description:
      'A trusted workhorse for long-distance and group travel. The Innova combines space, comfort and dependability for outstation journeys and airport transfers.',
    features: ['Air conditioning', 'Eight seats', 'Spacious cabin', 'Highway comfort', 'Large luggage capacity'],
    images: [buildImage(images.fleet.muv, { w: 1200, h: 800 })],
    imageAlt: 'Spacious Toyota Innova ready for a group journey',
  },
  {
    id: 'toyota-innova-crysta',
    slug: 'toyota-innova-crysta',
    name: 'Toyota Innova Crysta',
    category: 'Premium MUV',
    categoryTab: 'MUV',
    tier: 'Premium',
    seating: '7 + 1',
    luggage: '4 bags',
    transmission: 'Automatic',
    airConditioning: true,
    idealFor: 'Executive and premium family travel',
    description:
      'The premium iteration of the Innova, with a more refined interior and automatic transmission. Ideal for executive travel, premium family trips and important occasions.',
    features: ['Air conditioning', 'Automatic transmission', 'Premium upholstery', 'Enhanced ride comfort', 'Ambient interior'],
    images: [buildImage(images.fleet.muv, { w: 1200, h: 800 })],
    imageAlt: 'Premium Innova Crysta with refined interior for executive travel',
  },
  {
    id: 'toyota-fortuner',
    slug: 'toyota-fortuner',
    name: 'Toyota Fortuner',
    category: 'SUV',
    categoryTab: 'SUV',
    tier: 'Premium',
    seating: '7',
    luggage: '4 bags',
    transmission: 'Automatic',
    airConditioning: true,
    idealFor: 'Premium road trips and events',
    description:
      'A commanding premium SUV with a strong road presence. Well-suited to premium road trips, weddings, corporate events and journeys that call for an elevated experience.',
    features: ['Air conditioning', 'Automatic transmission', 'Premium SUV comfort', 'Commanding view', 'Strong and capable'],
    images: [buildImage(images.fleet.suv, { w: 1200, h: 800 }), buildImage(images.fleet.suvAlt, { w: 1200, h: 800 })],
    imageAlt: 'Premium Toyota Fortuner SUV with commanding road presence',
  },
  {
    id: 'mercedes-e-class',
    slug: 'mercedes-e-class',
    name: 'Mercedes-Benz E-Class',
    category: 'Luxury',
    categoryTab: 'Luxury',
    tier: 'Premium',
    seating: '4',
    luggage: '2 bags',
    transmission: 'Automatic',
    airConditioning: true,
    idealFor: 'Executive travel and weddings',
    description:
      'A benchmark luxury sedan delivering quiet, composed comfort and executive-grade refinement. The choice for VIP airport transfers, executive travel and elegant wedding transportation.',
    features: ['Air conditioning', 'Automatic transmission', 'Luxury cabin', 'Executive comfort', 'Refined and quiet ride'],
    images: [buildImage(images.fleet.luxurySedan, { w: 1200, h: 800 }), buildImage(images.fleet.luxury, { w: 1200, h: 800 })],
    imageAlt: 'Luxury Mercedes-Benz E-Class sedan for executive travel',
  },
  {
    id: 'force-urbania',
    slug: 'force-urbania',
    name: 'Force Urbania',
    category: 'Traveller',
    categoryTab: 'Traveller',
    tier: 'Premium',
    seating: '10–17 seats',
    luggage: 'Multiple bags',
    transmission: 'Manual',
    airConditioning: true,
    idealFor: 'Group tours and corporate travel',
    description:
      'A modern, comfortable traveller van designed for larger groups. Well-suited to group tours, corporate transportation, wedding guest movement and outstation group travel.',
    features: ['Air conditioning', 'Ten to seventeen seats', 'Spacious cabin', 'Group comfort', 'Luggage-friendly'],
    images: [buildImage(images.fleet.traveller, { w: 1200, h: 800 })],
    imageAlt: 'Force Urbania traveller van for group tours and corporate travel',
  },
];

/** Lookup helper */
export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return fleet.find((v) => v.slug === slug);
}

/** Vehicles similar to a given one (same tab, excluding itself) */
export function getSimilarVehicles(vehicle: Vehicle, limit = 3): Vehicle[] {
  const sameTab = fleet.filter((v) => v.categoryTab === vehicle.categoryTab && v.id !== vehicle.id);
  if (sameTab.length >= limit) return sameTab.slice(0, limit);
  const others = fleet.filter((v) => v.categoryTab !== vehicle.categoryTab && v.id !== vehicle.id);
  return [...sameTab, ...others].slice(0, limit);
}

export default fleet;
