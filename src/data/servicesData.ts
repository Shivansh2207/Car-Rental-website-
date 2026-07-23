/**
 * servicesData.ts
 * ---------------------------------------------------------------------------
 * All rental services with detailed content. Edit copy here; layouts stay fixed.
 * Pricing is intentionally never quoted — every CTA says "Request a customised quote".
 * ---------------------------------------------------------------------------
 */
import type { Service } from '@/types/site';
import { buildImage, images } from './images';

export const services: Service[] = [
  {
    slug: 'airport-transfers',
    title: 'Airport Transfers',
    shortTitle: 'Airport Transfers',
    icon: 'Plane',
    excerpt:
      'Reliable airport pickups and drops with timely coordination, luggage assistance and comfortable vehicles.',
    description:
      'Whether you are catching an early-morning flight or landing late at night, our airport transfer service is built around punctuality. We coordinate pickup timing with your flight schedule, monitor delays where possible, and ensure a clean, comfortable vehicle is waiting. Our drivers assist with luggage and know the most practical routes to and from Mumbai airport.',
    image: buildImage(images.services.airport, { w: 1400, h: 900 }),
    imageAlt: 'Traveller walking towards an airport terminal with luggage',
    whoFor: [
      'Business travellers catching flights',
      'Families arriving in Mumbai',
      'Solo travellers who value punctuality',
      'Visitors unfamiliar with the city',
    ],
    suitableVehicles: ['Swift Dzire', 'Toyota Etios', 'Toyota Innova', 'Innova Crysta', 'Mercedes-Benz E-Class'],
    benefits: [
      'Timely pickup coordinated with your flight',
      'Luggage assistance from professional drivers',
      'Clean, air-conditioned vehicles',
      'Drivers familiar with airport routes',
      'Early-morning and late-night availability',
    ],
    useCases: [
      'Early-morning departures from home or hotel',
      'Late-night arrivals back to the city',
      'Connecting passengers to their onward destination',
      'Group airport transfers',
    ],
    faqs: [
      {
        q: 'Is airport pickup available at all hours?',
        a: 'Yes. We coordinate airport pickups 24 hours a day, 7 days a week, including early-morning and late-night flights.',
      },
      {
        q: 'Will the driver help with luggage?',
        a: 'Yes. Our drivers assist with luggage handling at pickup and drop as part of the service.',
      },
    ],
  },
  {
    slug: 'local-car-rental',
    title: 'Local Car Rental',
    shortTitle: 'Local Rental',
    icon: 'MapPin',
    excerpt:
      'Flexible local travel for meetings, appointments, shopping, events and full-day city requirements.',
    description:
      'For everything Mumbai throws at you in a day — back-to-back meetings, appointments, shopping runs and events — our local rental keeps you moving. Choose a vehicle for a few hours or the full day, with a driver who understands the city so you can focus on what matters.',
    image: buildImage(images.services.local, { w: 1400, h: 900 }),
    imageAlt: 'Busy Mumbai city street with cars and traffic',
    whoFor: [
      'Professionals with multiple meetings',
      'Families running errands',
      'Visitors exploring the city',
      'Anyone who needs a flexible vehicle for the day',
    ],
    suitableVehicles: ['Swift Dzire', 'Hyundai Aura', 'Maruti Ertiga', 'Toyota Innova'],
    benefits: [
      'Hourly or full-day flexibility',
      'Multiple stops handled in one booking',
      'Driver familiar with the city',
      'Comfortable, air-conditioned vehicles',
      'No need to navigate or find parking',
    ],
    useCases: [
      'A full day of business meetings',
      'Shopping and errands across the city',
      'Attending events and functions',
      'Showing visitors around Mumbai',
    ],
    faqs: [
      {
        q: 'Can I make multiple stops during a local rental?',
        a: 'Yes. Local rentals are designed around your itinerary, so multiple stops within the agreed time and area can be accommodated.',
      },
      {
        q: 'How is the local rental amount communicated?',
        a: 'Pricing depends on duration, kilometres, vehicle and waiting requirements. The team will share a clear quotation after understanding your plan.',
      },
    ],
  },
  {
    slug: 'outstation-travel',
    title: 'Outstation Travel',
    shortTitle: 'Outstation',
    icon: 'Mountain',
    excerpt:
      'Comfortable intercity journeys from Mumbai to destinations across Maharashtra and neighbouring regions.',
    description:
      'Leave the highway to us. Outstation travel covers intercity journeys from Mumbai to popular destinations across Maharashtra and neighbouring regions. With a comfortable vehicle and an experienced driver who knows the route, you can relax and enjoy the journey rather than focus on the road.',
    image: buildImage(images.services.outstation, { w: 1400, h: 900 }),
    imageAlt: 'Scenic mountain highway ideal for an outstation road trip',
    whoFor: [
      'Families on holiday',
      'Groups travelling together',
      'Couples on weekend breaks',
      'Travellers heading to pilgrim destinations',
    ],
    suitableVehicles: ['Toyota Etios', 'Toyota Innova', 'Innova Crysta', 'Toyota Fortuner', 'Force Urbania'],
    benefits: [
      'Experienced drivers familiar with highway routes',
      'Spacious, comfortable vehicles for long distances',
      'Flexible round-trip and one-way options',
      'Coordinated stops for breaks and meals',
      'Suitable for families and groups',
    ],
    useCases: [
      'Weekend trips to Lonavala, Mahabaleshwar or Alibaug',
      'Pilgrim journeys to Shirdi and Nashik',
      'Family holidays to Goa and beyond',
      'Group getaways with friends',
    ],
    faqs: [
      {
        q: 'Can I enquire about an outstation one-way trip?',
        a: 'Yes. One-way outstation trips can be discussed. The team will confirm options and the applicable quotation based on your route.',
      },
      {
        q: 'Are tolls, parking and taxes included?',
        a: 'Tolls, parking and state taxes are usually charged as applicable. The team will clearly communicate what is included before you confirm.',
      },
    ],
  },
  {
    slug: 'corporate-mobility',
    title: 'Corporate Mobility',
    shortTitle: 'Corporate',
    icon: 'Briefcase',
    excerpt:
      'Professional transportation for executives, employees, delegates, events and recurring business requirements.',
    description:
      'Dependable ground transportation that reflects well on your business. From executive airport transfers and client visits to employee movement and corporate events, we provide organised travel support with consistent communication and vehicles that match your professional standards.',
    image: buildImage(images.services.corporate, { w: 1400, h: 900 }),
    imageAlt: 'Business professionals travelling together for a meeting',
    whoFor: [
      'Companies of every size',
      'Executive and leadership travel',
      'Visitor and client transport',
      'Event and conference organisers',
    ],
    suitableVehicles: ['Toyota Innova', 'Innova Crysta', 'Mercedes-Benz E-Class', 'Force Urbania'],
    benefits: [
      'Dedicated coordination for your account',
      'Professional, presentable drivers',
      'Multi-vehicle arrangements for events',
      'Consistent, reliable service',
      'Flexible monthly arrangements',
    ],
    useCases: [
      'Executive airport transfers',
      'Client and delegate transport',
      'Employee pickup and drop',
      'Multi-vehicle event coordination',
    ],
    faqs: [
      {
        q: 'Can businesses arrange recurring transportation?',
        a: 'Yes. We support recurring and monthly transportation requirements with dedicated coordination. Share your requirements and we will plan accordingly.',
      },
      {
        q: 'Can you arrange multiple vehicles for an event?',
        a: 'Yes. We coordinate multiple vehicles for conferences, events and group movements with a single point of contact.',
      },
    ],
  },
  {
    slug: 'wedding-and-event-cars',
    title: 'Wedding & Event Cars',
    shortTitle: 'Wedding Cars',
    icon: 'Heart',
    excerpt:
      'Clean, elegant vehicles for weddings, family functions, celebrations and special guest transportation.',
    description:
      'Make important occasions feel special. We provide clean, elegant vehicles for weddings, family functions and celebrations — from the bride and groom’s car to coordinated transport for guests. Our team helps plan the timing and movement so the day runs smoothly.',
    image: buildImage(images.services.wedding, { w: 1400, h: 900 }),
    imageAlt: 'Elegant celebration setting suited to wedding transportation',
    whoFor: [
      'Couples and families planning weddings',
      'Hosts of family functions',
      'Event organisers',
      'Anyone welcoming special guests',
    ],
    suitableVehicles: ['Toyota Innova', 'Innova Crysta', 'Toyota Fortuner', 'Mercedes-Benz E-Class', 'Force Urbania'],
    benefits: [
      'Clean, well-presented vehicles',
      'Coordinated timing for the day',
      'Multi-vehicle arrangements for guests',
      'Professional, courteous drivers',
      'Vehicles suited to the occasion',
    ],
    useCases: [
      'Wedding day transport for the couple and family',
      'Guest pickups across multiple locations',
      'Engagement and reception functions',
      'Welcoming VIP guests',
    ],
    faqs: [
      {
        q: 'Do you provide wedding cars?',
        a: 'Yes. We provide clean, elegant vehicles for weddings and can coordinate multiple cars for guests. Share your date and requirements with our team.',
      },
      {
        q: 'Can you arrange multiple vehicles for a wedding?',
        a: 'Yes. We regularly coordinate several vehicles for weddings and events, managed through a single point of contact.',
      },
    ],
  },
  {
    slug: 'mumbai-sightseeing',
    title: 'Mumbai Sightseeing',
    shortTitle: 'Sightseeing',
    icon: 'Camera',
    excerpt:
      'Private Mumbai sightseeing experiences with comfortable vehicles and drivers familiar with the city.',
    description:
      'See Mumbai your way. Our private sightseeing service pairs you with a comfortable vehicle and a driver who knows the city, so you can visit landmarks, markets and waterfronts at your own pace without worrying about routes, traffic or parking.',
    image: buildImage(images.services.sightseeing, { w: 1400, h: 900 }),
    imageAlt: 'Iconic Mumbai landmark and monument for city sightseeing',
    whoFor: [
      'Visitors and tourists',
      'Families exploring the city',
      'Returning residents showing guests around',
      'Anyone wanting a relaxed day out',
    ],
    suitableVehicles: ['Swift Dzire', 'Toyota Innova', 'Maruti Ertiga', 'Toyota Fortuner'],
    benefits: [
      'Private vehicle and driver for your group',
      'Flexible itinerary at your pace',
      'Driver familiar with the city',
      'Comfortable, air-conditioned vehicles',
      'Stress-free travel without parking worries',
    ],
    useCases: [
      'A full day of landmarks and markets',
      'Waterfront and heritage walks with transport',
      'Customised itineraries for visitors',
      'Relaxed family day out',
    ],
    faqs: [
      {
        q: 'Can I plan my own sightseeing itinerary?',
        a: 'Yes. Sightseeing trips are flexible — share the places you would like to visit and the team will help plan a sensible route.',
      },
      {
        q: 'How early should I send an enquiry?',
        a: 'The earlier the better, especially for weekends and holidays. However, we do our best to accommodate shorter-notice requests as well.',
      },
    ],
  },
  {
    slug: 'one-way-cab-service',
    title: 'One-Way Cab Service',
    shortTitle: 'One-Way Cab',
    icon: 'ArrowRightLeft',
    excerpt:
      'One-way intercity travel from Mumbai to your destination without paying for a full round trip.',
    description:
      'When you only need to go one way, a full round-trip booking should not be required. Our one-way cab service covers intercity travel from Mumbai to destinations across Maharashtra and nearby regions, with the quotation based on your specific one-way route.',
    image: buildImage(images.services.oneway, { w: 1400, h: 900 }),
    imageAlt: 'View from inside a car on an intercity journey',
    whoFor: [
      'Travellers relocating or moving one way',
      'People visiting and returning by another mode',
      'Students and professionals travelling intercity',
      'Anyone who does not need a return trip',
    ],
    suitableVehicles: ['Swift Dzire', 'Toyota Etios', 'Toyota Innova', 'Innova Crysta'],
    benefits: [
      'Pay for the journey you actually need',
      'Comfortable intercity vehicles',
      'Experienced highway drivers',
      'Flexible pickup points',
      'Clear quotation for your route',
    ],
    useCases: [
      'Relocating to another city',
      'Visiting family and returning separately',
      'One-way travel for business',
      'Connecting to onward transport',
    ],
    faqs: [
      {
        q: 'How is the final amount communicated for a one-way trip?',
        a: 'Pricing depends on the route, vehicle, kilometres and any applicable tolls or taxes. The team shares a clear quotation after understanding your journey.',
      },
    ],
  },
  {
    slug: 'group-and-traveller-rental',
    title: 'Group & Traveller Rental',
    shortTitle: 'Group Travel',
    icon: 'Users',
    excerpt:
      'Comfortable traveller vans for group tours, corporate outings, wedding guest movement and pilgrim travel.',
    description:
      'Travelling with a larger group is easier when everyone is together. Our group and traveller rental provides spacious vans that keep families, friends, colleagues and pilgrim groups comfortable over long distances, with room for luggage and coordinated stops.',
    image: buildImage(images.services.group, { w: 1400, h: 900 }),
    imageAlt: 'Spacious traveller van suited to group travel',
    whoFor: [
      'Large families and friend groups',
      'Corporate teams and outings',
      'Pilgrim groups',
      'Tour and travel groups',
    ],
    suitableVehicles: ['Force Urbania', 'Toyota Innova', 'Innova Crysta'],
    benefits: [
      'Keep the whole group together',
      'Spacious, comfortable cabin',
      'Luggage-friendly layout',
      'Coordinated stops and breaks',
      'Experienced driver for group travel',
    ],
    useCases: [
      'Group tours and getaways',
      'Corporate team outings',
      'Wedding guest movement',
      'Pilgrim group journeys',
    ],
    faqs: [
      {
        q: 'Can you arrange multiple vehicles for groups?',
        a: 'Yes. For larger groups we can coordinate multiple vehicles, including a mix of vans and cars, all managed through one point of contact.',
      },
    ],
  },
  {
    slug: 'monthly-car-rental',
    title: 'Monthly Car Rental',
    shortTitle: 'Monthly Rental',
    icon: 'CalendarClock',
    excerpt:
      'Long-term rental arrangements for individuals, families and businesses who need a vehicle on hand.',
    description:
      'When you need a vehicle regularly, a monthly arrangement is simpler than booking each time. Monthly car rental suits professionals, families and businesses who want dependable transport on hand, with a coordinated driver and vehicle matched to their ongoing requirements.',
    image: buildImage(images.services.monthly, { w: 1400, h: 900 }),
    imageAlt: 'Car on an open road representing long-term travel needs',
    whoFor: [
      'Professionals with daily travel needs',
      'Families wanting a vehicle on hand',
      'Businesses with recurring requirements',
      'Long-stay visitors to Mumbai',
    ],
    suitableVehicles: ['Swift Dzire', 'Toyota Innova', 'Innova Crysta', 'Maruti Ertiga'],
    benefits: [
      'Dependable vehicle on hand',
      'Coordinated driver arrangement',
      'Simpler than repeated bookings',
      'Flexible to your routine',
      'Single point of coordination',
    ],
    useCases: [
      'Daily office commutes',
      'Regular family travel',
      'Corporate account requirements',
      'Extended stays in Mumbai',
    ],
    faqs: [
      {
        q: 'How is a monthly rental arranged?',
        a: 'Share your routine, preferred vehicle and expected usage. The team will suggest a suitable arrangement and share a clear quotation for the month.',
      },
    ],
  },
  {
    slug: 'hotel-and-guest-transportation',
    title: 'Hotel & Guest Transportation',
    shortTitle: 'Hotel & Guest',
    icon: 'Building2',
    excerpt:
      'Welcoming, dependable transport for hotel guests, visitors and VIPs arriving in Mumbai.',
    description:
      'First impressions matter. Our hotel and guest transportation service provides welcoming, dependable pickups and drops for guests, visitors and VIPs, with presentable vehicles and courteous drivers who represent your hospitality well.',
    image: buildImage(images.services.hotel, { w: 1400, h: 900 }),
    imageAlt: 'Elegant hotel entrance for guest transportation',
    whoFor: [
      'Hotels and hospitality businesses',
      'Hosts welcoming important guests',
      'Event and conference organisers',
      'Companies receiving visitors',
    ],
    suitableVehicles: ['Toyota Innova', 'Innova Crysta', 'Mercedes-Benz E-Class', 'Swift Dzire'],
    benefits: [
      'Presentable, clean vehicles',
      'Courteous, professional drivers',
      'Coordinated airport and station pickups',
      'Flexible to guest schedules',
      'Reliable for arrivals and departures',
    ],
    useCases: [
      'Airport pickups for hotel guests',
      'VIP guest welcome transfers',
      'Conference delegate movement',
      'Day-trip transport for guests',
    ],
    faqs: [
      {
        q: 'Can you coordinate recurring guest pickups for our hotel?',
        a: 'Yes. We support ongoing partnerships with hotels and hospitality businesses, with dedicated coordination for guest transport.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export default services;
