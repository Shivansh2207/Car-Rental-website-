/**
 * blogData.ts
 * Evergreen travel-guide content stored as structured data.
 * No current news claims — these are timeless, practical guides.
 */
import type { BlogPost } from '@/types/site';
import { buildImage, images } from './images';

export const blogCategories = [
  'All',
  'Travel Guides',
  'Mumbai Travel',
  'Outstation Trips',
  'Airport Travel',
  'Vehicle Guides',
  'Corporate Mobility',
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: 'best-weekend-road-trips-from-mumbai',
    title: 'Best Weekend Road Trips From Mumbai',
    excerpt:
      'Explore popular destinations for quick family holidays, monsoon drives and peaceful weekend breaks.',
    cover: buildImage(images.blog.roadTrips, { w: 1400, h: 800 }),
    coverAlt: 'Scenic highway leading out of Mumbai for a weekend road trip',
    category: 'Travel Guides',
    author: 'Apex Drive Editorial',
    date: '2025-01-12',
    readingTime: '6 min read',
    sections: [
      {
        heading: 'Why Mumbai is a great base for weekend trips',
        body: [
          'Mumbai sits within easy reach of hill stations, beaches, forts and pilgrim towns. With a comfortable vehicle and a reliable driver, a weekend break is never far away.',
          'The key to an enjoyable weekend trip is choosing a destination that suits the time you have, leaving early, and travelling in a vehicle that matches your group size and luggage.',
        ],
      },
      {
        heading: 'Top nearby getaways',
        body: [
          'Lonavala and Khandala remain favourites for monsoon drives and quick escapes into the hills. Alibaug offers beaches and a relaxed coastal pace within a short journey.',
          'For longer weekends, Mahabaleshwar, Nashik and Shirdi each offer something different — strawberry farms and viewpoints, vineyards and temples, or a peaceful pilgrim experience.',
        ],
      },
      {
        heading: 'Choosing the right vehicle',
        body: [
          'For couples and small families, a sedan or compact MUV is usually enough. For larger families or groups, an Innova or Innova Crysta offers comfort over longer distances.',
          'If you are travelling with a bigger group, a traveller van keeps everyone together and leaves plenty of room for luggage.',
        ],
      },
      {
        heading: 'A few practical tips',
        body: [
          'Leave early to avoid highway congestion, especially on weekends. Carry water and snacks for the journey, and plan a break or two for meals and rest.',
          'Above all, choose a reliable vehicle and an experienced driver so you arrive relaxed and ready to enjoy your break.',
        ],
      },
    ],
    related: ['choosing-the-right-car-for-an-outstation-trip', 'airport-transfer-tips-for-a-stress-free-departure'],
  },
  {
    slug: 'choosing-the-right-car-for-an-outstation-trip',
    title: 'Choosing the Right Car for an Outstation Trip',
    excerpt:
      'A practical guide to selecting a sedan, SUV, MUV or traveller based on passengers and luggage.',
    cover: buildImage(images.blog.chooseCar, { w: 1400, h: 800 }),
    coverAlt: 'Comparison of vehicle types for choosing the right outstation car',
    category: 'Vehicle Guides',
    author: 'Apex Drive Editorial',
    date: '2025-02-04',
    readingTime: '5 min read',
    sections: [
      {
        heading: 'Match the vehicle to your group',
        body: [
          'The most common mistake on outstation trips is choosing a vehicle that is too small for the group and luggage. Count your passengers first, then add a comfortable margin.',
          'A sedan suits up to four passengers with light luggage. Beyond that, an MUV like the Innova or a traveller van becomes the more comfortable choice.',
        ],
      },
      {
        heading: 'Sedans, MUVs, SUVs and travellers',
        body: [
          'Sedans are efficient and comfortable for smaller groups on reasonable distances. MUVs such as the Innova and Innova Crysta are the most versatile, balancing space, comfort and cost.',
          'SUVs like the Fortuner add a commanding drive and extra capability, while traveller vans are the right pick when the whole group needs to travel together with luggage.',
        ],
      },
      {
        heading: 'Consider the route and terrain',
        body: [
          'For smooth highway routes, almost any comfortable vehicle works well. Hill stations with winding climbs reward a vehicle with good ride quality and an experienced driver.',
          'If you expect rougher roads or a long journey, lean towards a more spacious, comfortable vehicle rather than the smallest option.',
        ],
      },
      {
        heading: 'When in doubt, ask',
        body: [
          'Share your passenger count, luggage and destination with our team. We will recommend a suitable vehicle for the journey rather than simply the cheapest one.',
        ],
      },
    ],
    related: ['best-weekend-road-trips-from-mumbai', 'airport-transfer-tips-for-a-stress-free-departure'],
  },
  {
    slug: 'airport-transfer-tips-for-a-stress-free-departure',
    title: 'Airport Transfer Tips for a Stress-Free Departure',
    excerpt:
      'Simple planning tips that can make early-morning and late-night airport travel easier.',
    cover: buildImage(images.blog.airportTips, { w: 1400, h: 800 }),
    coverAlt: 'Traveller heading towards an airport terminal',
    category: 'Airport Travel',
    author: 'Apex Drive Editorial',
    date: '2025-02-20',
    readingTime: '4 min read',
    sections: [
      {
        heading: 'Plan your timing with a buffer',
        body: [
          'Mumbai traffic can be unpredictable. Build a buffer into your departure time, especially for early-morning or peak-hour flights. Arriving a little early is always better than cutting it close.',
        ],
      },
      {
        heading: 'Share clear pickup details',
        body: [
          'The clearer your pickup details — address, time, terminal and flight number — the smoother the coordination. Our team uses these to time your pickup and track delays where possible.',
        ],
      },
      {
        heading: 'Pack for easy luggage handling',
        body: [
          'A vehicle with the right luggage capacity makes a real difference. Let us know how many bags you are carrying so we assign a suitable vehicle and a driver who can assist.',
        ],
      },
      {
        heading: 'Late-night and early-morning flights',
        body: [
          'We coordinate airport transfers at all hours. For very early or very late flights, confirm your pickup the evening before so everything is settled and you can travel without worry.',
        ],
      },
    ],
    related: ['best-weekend-road-trips-from-mumbai', 'choosing-the-right-car-for-an-outstation-trip'],
  },
  {
    slug: 'monsoon-driving-routes-near-mumbai',
    title: 'Monsoon Driving Routes Near Mumbai',
    excerpt:
      'The Sahyadris turn lush green during the monsoon. Here are routes worth experiencing and how to travel safely.',
    cover: buildImage(images.blog.monsoon, { w: 1400, h: 800 }),
    coverAlt: 'Lush green monsoon hills along a driving route near Mumbai',
    category: 'Outstation Trips',
    author: 'Apex Drive Editorial',
    date: '2025-06-10',
    readingTime: '5 min read',
    sections: [
      {
        heading: 'Why the monsoon is special',
        body: [
          'The hills around Mumbai transform during the monsoon. Waterfalls, mist and vivid green make routes towards Lonavala, Matheran and Mahabaleshwar especially rewarding.',
        ],
      },
      {
        heading: 'Travelling safely in wet weather',
        body: [
          'Wet roads demand careful, slower driving and a vehicle in good condition. An experienced driver who knows the route makes monsoon travel far safer and more relaxing.',
          'Allow extra time, as visibility and road conditions can change quickly.',
        ],
      },
      {
        heading: 'Choosing a vehicle for the monsoon',
        body: [
          'A vehicle with good ground clearance and reliable brakes is reassuring on wet, winding roads. MUVs and SUVs are popular monsoon choices for this reason.',
        ],
      },
    ],
    related: ['best-weekend-road-trips-from-mumbai', 'choosing-the-right-car-for-an-outstation-trip'],
  },
  {
    slug: 'corporate-mobility-arranging-business-travel',
    title: 'Corporate Mobility: Arranging Business Travel That Runs Smoothly',
    excerpt:
      'How organised ground transportation helps businesses manage executive travel, client visits and events.',
    cover: buildImage(images.blog.corporateMobility, { w: 1400, h: 800 }),
    coverAlt: 'Professionals coordinating corporate ground transportation',
    category: 'Corporate Mobility',
    author: 'Apex Drive Editorial',
    date: '2025-03-15',
    readingTime: '6 min read',
    sections: [
      {
        heading: 'Why organised ground transport matters',
        body: [
          'For businesses, reliable ground transportation is part of the impression you make. Timely, professional travel reflects well on your company with clients, visitors and executives alike.',
        ],
      },
      {
        heading: 'Common business travel needs',
        body: [
          'Executive airport transfers, client and delegate transport, employee movement and multi-vehicle coordination for events all benefit from a single, dependable point of contact.',
        ],
      },
      {
        heading: 'Building a coordinated arrangement',
        body: [
          'The smoothest business travel comes from clear requirements, planned vehicles and consistent communication. A dedicated coordinator keeps everything running, even when schedules change.',
        ],
      },
    ],
    related: ['choosing-the-right-car-for-an-outstation-trip', 'airport-transfer-tips-for-a-stress-free-departure'],
  },
  {
    slug: 'mumbai-city-sightseeing-guide',
    title: 'A Relaxed Mumbai City Sightseeing Guide',
    excerpt:
      'How to see Mumbai at your own pace with a private vehicle and a driver who knows the city.',
    cover: buildImage(images.blog.outstationGuide, { w: 1400, h: 800 }),
    coverAlt: 'Mumbai landmarks ideal for a city sightseeing tour',
    category: 'Mumbai Travel',
    author: 'Apex Drive Editorial',
    date: '2025-04-02',
    readingTime: '5 min read',
    sections: [
      {
        heading: 'See the city your way',
        body: [
          'Mumbai is best explored at your own pace. With a private vehicle and a driver familiar with the city, you can move between landmarks, markets and waterfronts without worrying about routes or parking.',
        ],
      },
      {
        heading: 'Planning a sensible route',
        body: [
          'Grouping nearby sights together saves time. A driver who knows the city can suggest a route that avoids the worst traffic and makes the most of your day.',
        ],
      },
      {
        heading: 'Choosing a vehicle for sightseeing',
        body: [
          'For a small group, a sedan or compact MUV is enough. For families or larger groups, an Innova or SUV keeps everyone comfortable across a full day.',
        ],
      },
    ],
    related: ['best-weekend-road-trips-from-mumbai', 'choosing-the-right-car-for-an-outstation-trip'],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slugs: string[]): BlogPost[] {
  return slugs.map((s) => blogPosts.find((p) => p.slug === s)).filter(Boolean) as BlogPost[];
}

export default blogPosts;
