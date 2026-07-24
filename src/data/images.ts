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
    sedanRoad: 'photo-1492144534655-ae79c964c9d7', // dark sedan on coastal road
    suvNight: 'photo-1503736334956-4c8f8e92946d', // SUV headlight at night
    highwaySunset: 'photo-1473445361085-b9a07f55608b', // highway into sunset
  },

  fleet: {
    // Representative imagery per vehicle. Replace with model-specific shots.
    sedan: 'photo-1542282088-72c9c27ed0cd', // compact sedan side
    sedanAlt: 'photo-1558981806-ec527fa84c39', // sedan on road
    suv: 'photo-1503736334956-4c8f8e92946d', // white SUV
    suvAlt: 'photo-1517154421773-0529f29ea451', // SUV rugged
    muv: 'photo-1518005020951-eccb494ad742', // people mover / MPV
    luxury: 'photo-1492144534655-ae79c964c9d7', // luxury sports
    luxurySedan: 'photo-1517248135467-4c7edcad34c4', // executive sedan
    traveller: 'photo-1488085061387-422e29b40080', // van / traveller
  },

  services: {
    airport: 'photo-1488646953014-85cb44e25828', // airport terminal / plane
    local: 'photo-1500534623283-312aade485b7', // city street traffic
    outstation: 'photo-1501785888041-af3ef285b470', // mountain road trip
    corporate: 'photo-1497366811353-6870744d04b2', // business people
    wedding: 'photo-1517154421773-0529f29ea451', // wedding/celebration
    sightseeing: 'photo-1539635278303-d4002c07eae3', // monument
    oneway: 'photo-1503736334956-4c8f8e92946d', // interior drive
    monthly: 'photo-1473445361085-b9a07f55608b',
    group: 'photo-1488085061387-422e29b40080',
    hotel: 'photo-1518005020951-eccb494ad742', // hotel entrance
  },

  destinations: {
    lonavala: 'photo-1501785888041-af3ef285b470', // misty hills
    khandala: 'photo-1501854140801-50d01698950b',
    pune: 'photo-1500534623283-312aade485b7',
    nashik: 'photo-1493246507139-91e8fad9978e', // vineyards
    shirdi: 'photo-1539635278303-d4002c07eae3',
    mahabaleshwar: 'photo-1501785888041-af3ef285b470',
    alibaug: 'photo-1504608524841-42fe6f032b4b', // beach
    matheran: 'photo-1511497584788-876760111969', // forest hill
    goa: 'photo-1500534623283-312aade485b7', // goa beach
    surat: 'photo-1516026672322-bc52d61a55d5',
    daman: 'photo-1530789253388-582c481c54b0',
    aurangabad: 'photo-1526772662000-3f88f10405ff',
  },

  gallery: {
    exterior: 'photo-1492144534655-ae79c964c9d7',
    interior: 'photo-1542282088-72c9c27ed0cd',
    airport: 'photo-1488646953014-85cb44e25828',
    corporate: 'photo-1497366811353-6870744d04b2',
    wedding: 'photo-1517154421773-0529f29ea451',
    outstation: 'photo-1501785888041-af3ef285b470',
    vehicleCare: 'photo-1558981806-ec527fa84c39', // car cleaning/detailing
    family: 'photo-1530789253388-582c481c54b0',
    chauffeur: 'photo-1497366811353-6870744d04b2', // driver / person
  },

  company: {
    team: 'photo-1497366811353-6870744d04b2', // team handshake
    chauffeurDoor: 'photo-1518005020951-eccb494ad742',
    city: 'photo-1516026672322-bc52d61a55d5', // Mumbai skyline
    carCare: 'photo-1558981806-ec527fa84c39',
    nightRoad: 'photo-1473445361085-b9a07f55608b',
    executive: 'photo-1497366811353-6870744d04b2',
  },

  blog: {
    roadTrips: 'photo-1501785888041-af3ef285b470',
    chooseCar: 'photo-1542282088-72c9c27ed0cd',
    airportTips: 'photo-1488646953014-85cb44e25828',
    monsoon: 'photo-1501854140801-50d01698950b',
    corporateMobility: 'photo-1497366811353-6870744d04b2',
    outstationGuide: 'photo-1500534623283-312aade485b7',
  },
} as const;

export default images;
