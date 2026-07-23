/**
 * images.ts
 * ---------------------------------------------------------------------------
 * CENTRAL IMAGE REGISTRY.
 * Logical names → royalty-free photo URLs (Unsplash). Swap any URL here to
 * change imagery across the whole site without touching components.
 *
 * All photos are royalty-free from Unsplash (https://unsplash.com) under the
 * Unsplash License. Replace with the company's own photography via the
 * public/images/ folders when available.
 * ---------------------------------------------------------------------------
 *
 * Helper: buildImage() returns a URL with sensible sizing & quality params,
 * and supports eager (hero) vs lazy loading presets.
 */
const U = 'https://images.unsplash.com';

/** Full Unsplash photo id (without the `photo-` prefix handling done here) */
function photo(id: string): string {
  return `${U}/${id}`;
}

export interface ImageOptions {
  w?: number;
  h?: number;
  /** quality 1-100 */
  q?: number;
  eager?: boolean;
}

/**
 * Build a sized, optimised Unsplash URL.
 */
export function buildImage(id: string, opts: ImageOptions = {}): string {
  const { w = 1200, h, q = 70, eager = false } = opts;
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    w: String(w),
    q: String(q),
  });
  if (h) params.set('h', String(h));
  if (eager) params.set('fm', 'jpg'); // smaller/faster for above the fold
  return `${photo(id)}?${params.toString()}`;
}

/**
 * The full image library. Grouped by purpose to mirror the
 * public/images/{hero,fleet,services,...} strategy in the brief.
 */
export const images = {
  hero: {
    sedanRoad: 'photo-1503376780353-7e6692767b70', // dark sedan on coastal road
    suvNight: 'photo-1511919884226-fd3cad34687c', // SUV headlight at night
    highwaySunset: 'photo-1449965408869-eaa3f722e40d', // highway into sunset
  },

  fleet: {
    // Representative imagery per vehicle. Replace with model-specific shots.
    sedan: 'photo-1549399542-7e3f8b79c341', // compact sedan side
    sedanAlt: 'photo-1605559424843-9e4c228401d8', // sedan on road
    suv: 'photo-1519440777-1a68b9c45b87', // white SUV
    suvAlt: 'photo-1606664525542-6785c92aa5b8', // SUV rugged
    muv: 'photo-1609521263047-f8f205293f24', // people mover / MPV
    luxury: 'photo-1552519507-da3b142c6e3d', // luxury sports
    luxurySedan: 'photo-1618843479313-40f8afb4b4d8', // executive sedan
    traveller: 'photo-1570125909232-eb263c188f7e', // van / traveller
  },

  services: {
    airport: 'photo-1436491865332-7a61a109cc05', // airport terminal / plane
    local: 'photo-1502877338535-766e1452684a', // city street traffic
    outstation: 'photo-1469854523086-cc02fe5d8800', // mountain road trip
    corporate: 'photo-1556761175-b413da4baf72', // business people
    wedding: 'photo-1469371670807-013ccf25f16a', // wedding/celebration
    sightseeing: 'photo-1567196186615-1361a07dda5d', // monument
    oneway: 'photo-1502672260266-1c1ef2d93688', // interior drive
    monthly: 'photo-1449965408869-eaa3f722e40d',
    group: 'photo-1570125909232-eb263c188f7e',
    hotel: 'photo-1551882547-ff40c63fe5fa', // hotel entrance
  },

  destinations: {
    lonavala: 'photo-1626621341517-bbf3d9990a38', // misty hills
    khandala: 'photo-1599661046827-dacde6976549',
    pune: 'photo-1597223557454-ee5ed14d6d8c',
    nashik: 'photo-1593179869787-3bcd0c5146a6', // vineyards
    shirdi: 'photo-1604661178332-9bc3ae5d0c7b',
    mahabaleshwar: 'photo-1626621341517-bbf3d9990a38',
    alibaug: 'photo-1507525428034-b723cf961d3e', // beach
    matheran: 'photo-1506905925346-21bda4d32df4', // forest hill
    goa: 'photo-1512343879784-a960bf40e7b9', // goa beach
    surat: 'photo-1565967511849-76a60a516170',
    daman: 'photo-1519046904884-53103b34b206',
    aurangabad: 'photo-1609128322432-2484d8f6d7c0',
  },

  gallery: {
    exterior: 'photo-1503376780353-7e6692767b70',
    interior: 'photo-1494976388531-d1058494cdd8',
    airport: 'photo-1436491865332-7a61a109cc05',
    corporate: 'photo-1556761175-b413da4baf72',
    wedding: 'photo-1469371670807-013ccf25f16a',
    outstation: 'photo-1469854523086-cc02fe5d8800',
    vehicleCare: 'photo-1632823469850-2f77dd9c7f93', // car cleaning/detailing
    family: 'photo-1502920917128-1aa500764cbd',
    chauffeur: 'photo-1556122071-e404eaedb77f', // driver / person
  },

  company: {
    team: 'photo-1521791136064-7986c2920216', // team handshake
    chauffeurDoor: 'photo-1556122071-e404eaedb77f',
    city: 'photo-1570168007204-dfb528c6958f', // Mumbai skyline
    carCare: 'photo-1632823469850-2f77dd9c7f93',
    nightRoad: 'photo-1449965408869-eaa3f722e40d',
    executive: 'photo-1556761175-b413da4baf72',
  },

  blog: {
    roadTrips: 'photo-1469854523086-cc02fe5d8800',
    chooseCar: 'photo-1549399542-7e3f8b79c341',
    airportTips: 'photo-1436491865332-7a61a109cc05',
    monsoon: 'photo-1626621341517-bbf3d9990a38',
    corporateMobility: 'photo-1556761175-b413da4baf72',
    outstationGuide: 'photo-1502877338535-766e1452684a',
  },
} as const;

export default images;
