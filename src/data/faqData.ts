/**
 * faqData.ts
 * Frequently asked questions. Used by the reusable FAQ accordion.
 * Pricing questions are never answered with invented values.
 */
import type { FaqItem } from '@/types/site';

export const faqs: FaqItem[] = [
  {
    q: 'What types of vehicles are available?',
    a: 'Our fleet includes practical sedans, spacious MUVs, SUVs, premium and luxury vehicles, and group traveller vans. Browse the Our Fleet page for the full catalogue.',
  },
  {
    q: 'Do you provide cars with professional drivers?',
    a: 'Yes. Our services include experienced, professional drivers. If you have a specific requirement regarding self-drive options, please discuss it with our team.',
  },
  {
    q: 'Is airport pickup available at all hours?',
    a: 'Yes. We coordinate airport pickups 24 hours a day, 7 days a week, including early-morning departures and late-night arrivals.',
  },
  {
    q: 'Can I enquire about an outstation one-way trip?',
    a: 'Yes. One-way outstation trips can be discussed. The team will confirm options and the applicable quotation based on your specific route.',
  },
  {
    q: 'Are tolls, parking and taxes included?',
    a: 'Tolls, parking and state taxes are usually charged as applicable. The team will clearly communicate what is included before you confirm, so there are no surprises.',
  },
  {
    q: 'Can businesses arrange recurring transportation?',
    a: 'Yes. We support recurring and monthly transportation requirements for businesses, with dedicated coordination. Share your requirements and we will plan accordingly.',
  },
  {
    q: 'How early should I send an enquiry?',
    a: 'The earlier the better, especially for weekends, holidays and peak seasons. However, we do our best to accommodate shorter-notice requests as well.',
  },
  {
    q: 'Can I request a specific vehicle model?',
    a: 'You can indicate a preferred vehicle, and we will do our best to match it. Vehicle model, colour and exact configuration may vary depending on availability, which the team will confirm during coordination.',
  },
  {
    q: 'Do you provide wedding cars?',
    a: 'Yes. We provide clean, elegant vehicles for weddings and can coordinate multiple cars for guests. Share your date and requirements with our team.',
  },
  {
    q: 'Can you arrange multiple vehicles for groups?',
    a: 'Yes. We coordinate multiple vehicles for groups, weddings and corporate events, all managed through a single point of contact.',
  },
  {
    q: 'What information is needed for an enquiry?',
    a: 'Your name, contact number, pickup location, destination, travel date, number of passengers and any vehicle preference. The more detail you share, the better we can help.',
  },
  {
    q: 'How is the final amount communicated?',
    a: 'Pricing depends on the selected vehicle, travel route, duration, kilometres, waiting requirements, tolls and additional services. The team will share a clear quotation after understanding the journey.',
  },
];

export default faqs;
