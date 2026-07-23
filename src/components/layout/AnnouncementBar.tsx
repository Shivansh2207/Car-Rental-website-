import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';
import { phoneLink, whatsappLink, siteData } from '@/data/siteData';

/**
 * Slim top information bar. On desktop shows availability, area, call & WhatsApp.
 * On mobile it simplifies to a single line.
 */
export default function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-graphite-900 text-soft-white">
      {/* Desktop / tablet */}
      <div className="container-px hidden items-center justify-between gap-6 py-2 text-xs sm:flex">
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5 text-soft-white/80">
            <Clock className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            Available 24/7
          </span>
          <span className="inline-flex items-center gap-1.5 text-soft-white/80">
            <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            {siteData.serviceArea.headline}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={phoneLink}
            className="inline-flex items-center gap-1.5 font-medium text-soft-white transition-colors hover:text-accent-soft"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            Call Now
          </a>
          <a
            href={whatsappLink(`Hello ${siteData.company.name}, I'd like to enquire about a car rental.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-soft-white transition-colors hover:text-accent-soft"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div className="container-px flex items-center justify-center py-2 text-center sm:hidden">
        <span className="text-xs font-medium tracking-wide text-soft-white/90">
          24/7 Car Rentals Across Mumbai
        </span>
      </div>
    </div>
  );
}
