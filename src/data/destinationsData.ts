/**
 * destinationsData.ts
 * Outstation destination guides from Mumbai.
 * Travel descriptions are approximate character, NOT guaranteed live times.
 */
import type { Destination } from '@/types/site';
import { buildImage, images } from './images';

export const destinations: Destination[] = [
  {
    slug: 'lonavala',
    name: 'Lonavala',
    image: buildImage(images.destinations.lonavala, { w: 1400, h: 900 }),
    imageAlt: 'Misty hills and green valleys of Lonavala',
    travelCharacter: 'A popular few-hour getaway into the Sahyadri hills',
    bestFor: 'Weekend breaks and monsoon drives',
    passengerType: 'Couples, families and small groups',
    recommendedVehicles: ['Toyota Innova', 'Innova Crysta', 'Maruti Ertiga'],
    description:
      'Mountain escapes, monsoon drives and relaxing weekend journeys for couples, families and groups. Lonavala is one of the most loved short getaways from Mumbai.',
    tips: [
      'Leave early to avoid weekend highway congestion.',
      'Monsoon months bring lush scenery but wet, slippery roads.',
      'Plan return travel before late evening for safer driving conditions.',
    ],
  },
  {
    slug: 'khandala',
    name: 'Khandala',
    image: buildImage(images.destinations.khandala, { w: 1400, h: 900 }),
    imageAlt: 'Scenic valley viewpoints near Khandala',
    travelCharacter: 'A neighbouring hill getaway, often paired with Lonavala',
    bestFor: 'Quick weekend retreats and viewpoint drives',
    passengerType: 'Couples and families',
    recommendedVehicles: ['Toyota Innova', 'Innova Crysta', 'Toyota Etios'],
    description:
      'Quiet viewpoints, cool air and winding roads make Khandala a soothing break from city life, often combined with nearby Lonavala.',
    tips: [
      'Viewpoints are best enjoyed in the early morning or at sunset.',
      'Carry a light jacket — hill weather can be cool.',
      'Combine with Lonavala for a relaxed two-stop day trip.',
    ],
  },
  {
    slug: 'pune',
    name: 'Pune',
    image: buildImage(images.destinations.pune, { w: 1400, h: 900 }),
    imageAlt: 'Pune cityscape and surrounding hills',
    travelCharacter: 'A comfortable intercity journey on the expressway',
    bestFor: 'Business, education and visiting family',
    passengerType: 'Professionals, students and families',
    recommendedVehicles: ['Toyota Innova', 'Innova Crysta', 'Mercedes-Benz E-Class', 'Toyota Etios'],
    description:
      'A thriving city of business, education and culture, Pune is a frequent intercity destination for work, study and personal travel from Mumbai.',
    tips: [
      'The expressway offers a faster, smoother journey.',
      'Time your travel to avoid peak expressway congestion.',
      'A premium vehicle is well-suited to business travel.',
    ],
  },
  {
    slug: 'nashik',
    name: 'Nashik',
    image: buildImage(images.destinations.nashik, { w: 1400, h: 900 }),
    imageAlt: 'Vineyards and countryside near Nashik',
    travelCharacter: 'A longer journey to vineyards and temples',
    bestFor: 'Pilgrim travel, vineyard visits and family trips',
    passengerType: 'Families and groups',
    recommendedVehicles: ['Toyota Innova', 'Innova Crysta', 'Force Urbania'],
    description:
      'Known for its temples and vineyards, Nashik makes for a rewarding longer journey combining spirituality, food and countryside scenery.',
    tips: [
      'Plan for a longer journey with a comfortable, spacious vehicle.',
      'Schedule breaks on the highway for a relaxed trip.',
      'Group vehicles work well for pilgrim and family travel.',
    ],
  },
  {
    slug: 'shirdi',
    name: 'Shirdi',
    image: buildImage(images.destinations.shirdi, { w: 1400, h: 900 }),
    imageAlt: 'Pilgrim town atmosphere of Shirdi',
    travelCharacter: 'A popular pilgrim journey from Mumbai',
    bestFor: 'Devotional travel and family pilgrimages',
    passengerType: 'Families and pilgrim groups',
    recommendedVehicles: ['Toyota Innova', 'Innova Crysta', 'Force Urbania'],
    description:
      'One of the most visited pilgrim destinations in the region, Shirdi draws devotees year-round. A reliable, comfortable vehicle makes the journey peaceful.',
    tips: [
      'Book darshan arrangements in advance where possible.',
      'A spacious vehicle keeps the long journey comfortable.',
      'Coordinate pickup times to align with temple schedules.',
    ],
  },
  {
    slug: 'mahabaleshwar',
    name: 'Mahabaleshwar',
    image: buildImage(images.destinations.mahabaleshwar, { w: 1400, h: 900 }),
    imageAlt: 'Rolling hills and valleys of Mahabaleshwar',
    travelCharacter: 'A scenic hill-station journey with winding climbs',
    bestFor: 'Family holidays and long weekend getaways',
    passengerType: 'Families and groups',
    recommendedVehicles: ['Toyota Innova', 'Innova Crysta', 'Toyota Fortuner'],
    description:
      'Strawberry farms, misty viewpoints and cool weather make Mahabaleshwar a classic family hill-station escape from Mumbai.',
    tips: [
      'The final climb has winding roads — a comfortable vehicle and careful driver matter.',
      'Weekends and holidays get busy; plan ahead.',
      'Carry warm clothing for cool evenings.',
    ],
  },
  {
    slug: 'alibaug',
    name: 'Alibaug',
    image: buildImage(images.destinations.alibaug, { w: 1400, h: 900 }),
    imageAlt: 'Coastal beach and palms at Alibaug',
    travelCharacter: 'A coastal beach getaway a short journey from Mumbai',
    bestFor: 'Beach weekends and relaxed getaways',
    passengerType: 'Families, friends and couples',
    recommendedVehicles: ['Toyota Innova', 'Maruti Ertiga', 'Toyota Fortuner'],
    description:
      'Beaches, forts and seafood make Alibaug a favourite quick coastal escape, perfect for a relaxed weekend by the sea.',
    tips: [
      'Plan around tidal timings for beach activities.',
      'Coastal roads can be busy on weekends.',
      'A vehicle with good luggage space helps for overnight stays.',
    ],
  },
  {
    slug: 'matheran',
    name: 'Matheran',
    image: buildImage(images.destinations.matheran, { w: 1400, h: 900 }),
    imageAlt: 'Forest-covered hills of Matheran',
    travelCharacter: 'A vehicle-free hill station reached by a scenic route',
    bestFor: 'Quiet nature breaks and family outings',
    passengerType: 'Families and small groups',
    recommendedVehicles: ['Toyota Innova', 'Maruti Ertiga', 'Toyota Etios'],
    description:
      'Asia’s only vehicle-free hill station, Matheran offers peaceful forest trails and viewpoints — a quiet, pollution-free break from the city.',
    tips: [
      'Vehicles are restricted beyond a point; plan the last stretch accordingly.',
      'Comfortable walking shoes are recommended.',
      'Best enjoyed at a relaxed pace over a day or two.',
    ],
  },
  {
    slug: 'goa',
    name: 'Goa',
    image: buildImage(images.destinations.goa, { w: 1400, h: 900 }),
    imageAlt: 'Palm-lined Goan beach at sunset',
    travelCharacter: 'A long, scenic coastal journey across state lines',
    bestFor: 'Extended holidays and road-trip getaways',
    passengerType: 'Groups and families',
    recommendedVehicles: ['Toyota Innova', 'Innova Crysta', 'Force Urbania', 'Toyota Fortuner'],
    description:
      'Beaches, culture and cuisine make Goa a favourite long road-trip destination. A comfortable vehicle and experienced highway driver make the long journey enjoyable.',
    tips: [
      'A long journey — choose a spacious, comfortable vehicle.',
      'Carry valid ID; the route crosses state borders.',
      'Plan overnight or extended stays rather than a day trip.',
    ],
  },
  {
    slug: 'surat',
    name: 'Surat',
    image: buildImage(images.destinations.surat, { w: 1400, h: 900 }),
    imageAlt: 'City and river scene in Surat',
    travelCharacter: 'A long intercity journey to Gujarat',
    bestFor: 'Business, trade and family travel',
    passengerType: 'Professionals and families',
    recommendedVehicles: ['Toyota Innova', 'Innova Crysta', 'Mercedes-Benz E-Class'],
    description:
      'A major commercial city, Surat is a frequent destination for business and family travel. A reliable highway vehicle keeps the long journey smooth.',
    tips: [
      'A long journey — comfort matters as much as timing.',
      'Carry valid ID for inter-state travel.',
      'Schedule breaks to avoid driver fatigue on long distances.',
    ],
  },
  {
    slug: 'daman',
    name: 'Daman',
    image: buildImage(images.destinations.daman, { w: 1400, h: 900 }),
    imageAlt: 'Coastal seafront of Daman',
    travelCharacter: 'A coastal getaway across the state border',
    bestFor: 'Relaxed weekend breaks',
    passengerType: 'Families and friend groups',
    recommendedVehicles: ['Toyota Innova', 'Maruti Ertiga', 'Toyota Fortuner'],
    description:
      'Quiet beaches and a relaxed pace make Daman a peaceful coastal break, less crowded than some of the more popular beach destinations.',
    tips: [
      'Carry valid ID for inter-state travel.',
      'A comfortable vehicle suits the journey length.',
      'Plan around tide timings for the best beach experience.',
    ],
  },
  {
    slug: 'aurangabad',
    name: 'Aurangabad',
    image: buildImage(images.destinations.aurangabad, { w: 1400, h: 900 }),
    imageAlt: 'Historic architecture near Aurangabad',
    travelCharacter: 'A longer journey to heritage and cave sites',
    bestFor: 'Heritage travel and family holidays',
    passengerType: 'Families and tour groups',
    recommendedVehicles: ['Toyota Innova', 'Innova Crysta', 'Force Urbania'],
    description:
      'Gateway to the Ajanta and Ellora caves, Aurangabad is a rewarding destination for heritage lovers, best enjoyed with a comfortable long-distance vehicle.',
    tips: [
      'A long journey — choose a spacious vehicle.',
      'Plan multiple days to explore the cave sites comfortably.',
      'Start early to make the most of sightseeing time.',
    ],
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export default destinations;
