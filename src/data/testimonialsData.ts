/**
 * testimonialsData.ts
 * Realistic sample testimonials. These are sample testimonials, not verified
 * Google reviews — replace with genuine customer reviews when available.
 */
import type { Testimonial } from '@/types/site';

export const testimonials: Testimonial[] = [
  {
    name: 'Rohan Mehta',
    role: 'Corporate Traveller',
    quote:
      'The vehicle arrived on time, the driver was professional and the entire airport transfer was handled smoothly. I now use them for most of my business travel.',
    rating: 5,
  },
  {
    name: 'Priya Shah',
    role: 'Family Traveller',
    quote:
      'We booked an Innova Crysta for a family trip to Lonavala. The vehicle was clean, spacious and comfortable throughout the journey. The driver was polite and careful.',
    rating: 5,
  },
  {
    name: 'Neha Kapoor',
    role: 'Event Customer',
    quote:
      'The team coordinated multiple cars for our wedding guests and handled every pickup professionally. It was one less thing to worry about on a busy day.',
    rating: 5,
  },
  {
    name: 'Arjun Malhotra',
    role: 'Business Owner',
    quote:
      'We regularly require cars for visiting clients. The communication and vehicle quality have been consistently dependable, and the coordination is always smooth.',
    rating: 5,
  },
  {
    name: 'Sneha Desai',
    role: 'Outstation Traveller',
    quote:
      'Booked a car for our Shirdi trip. The driver knew the route well, the car was comfortable, and the whole journey felt safe and well-organised.',
    rating: 5,
  },
  {
    name: 'Vikram Iyer',
    role: 'Airport Transfer Customer',
    quote:
      'I had a very early morning flight. The driver arrived ahead of time, helped with my luggage, and got me to the airport with plenty of time to spare.',
    rating: 5,
  },
];

export default testimonials;
