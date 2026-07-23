import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from 'lucide-react';
import Logo from '@/components/common/Logo';
import {
  phoneLink,
  emailLink,
  whatsappLink,
  siteData,
} from '@/data/siteData';

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Fleet', to: '/fleet' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Travel Guides', to: '/travel-guides' },
  { label: 'Contact', to: '/contact' },
];

const serviceLinks = [
  { label: 'Airport Transfer', to: '/services/airport-transfers' },
  { label: 'Local Car Rental', to: '/services/local-car-rental' },
  { label: 'Outstation Travel', to: '/services/outstation-travel' },
  { label: 'Corporate Travel', to: '/corporate' },
  { label: 'Wedding Cars', to: '/services/wedding-and-event-cars' },
  { label: 'Mumbai Sightseeing', to: '/services/mumbai-sightseeing' },
];

const destinationLinks = [
  { label: 'Lonavala', to: '/destinations#lonavala' },
  { label: 'Pune', to: '/destinations#pune' },
  { label: 'Nashik', to: '/destinations#nashik' },
  { label: 'Shirdi', to: '/destinations#shirdi' },
  { label: 'Mahabaleshwar', to: '/destinations#mahabaleshwar' },
  { label: 'Alibaug', to: '/destinations#alibaug' },
];

const socials = [
  { Icon: Facebook, href: siteData.social.facebook, label: 'Facebook' },
  { Icon: Instagram, href: siteData.social.instagram, label: 'Instagram' },
  { Icon: Twitter, href: siteData.social.twitter, label: 'Twitter' },
  { Icon: Linkedin, href: siteData.social.linkedin, label: 'LinkedIn' },
  { Icon: Youtube, href: siteData.social.youtube, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-graphite-950 text-soft-white">
      <div className="container-px py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-soft-white/65">
              {siteData.company.tagline} {siteData.company.statement} Serving{' '}
              {siteData.serviceArea.headline}.
            </p>

            <ul className="mt-6 flex flex-col gap-3 text-sm">
              <li>
                <a href={phoneLink} className="inline-flex items-center gap-3 text-soft-white/80 hover:text-accent-soft">
                  <Phone className="h-4 w-4 text-accent" aria-hidden="true" /> {siteData.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(`Hello ${siteData.company.name}, I'd like to enquire.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-soft-white/80 hover:text-accent-soft"
                >
                  <MessageCircle className="h-4 w-4 text-accent" aria-hidden="true" /> WhatsApp {siteData.contact.whatsapp}
                </a>
              </li>
              <li>
                <a href={emailLink} className="inline-flex items-center gap-3 text-soft-white/80 hover:text-accent-soft">
                  <Mail className="h-4 w-4 text-accent" aria-hidden="true" /> {siteData.contact.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-3 text-soft-white/80">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent" aria-hidden="true" /> {siteData.contact.address.full}
              </li>
              <li className="inline-flex items-start gap-3 text-soft-white/80">
                <Clock className="mt-0.5 h-4 w-4 flex-none text-accent" aria-hidden="true" /> {siteData.contact.operatingHours}
              </li>
            </ul>
          </div>

          {/* Link columns */}
          <FooterCol title="Company" links={companyLinks} className="lg:col-span-2" />
          <FooterCol title="Services" links={serviceLinks} className="lg:col-span-3" />
          <FooterCol title="Popular Destinations" links={destinationLinks} className="lg:col-span-3" />
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-soft-white/70 transition-colors hover:border-accent hover:bg-accent hover:text-soft-white"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-soft-white/55">
            <Link to="/privacy" className="transition-colors hover:text-soft-white">Privacy Policy</Link>
            <Link to="/terms" className="transition-colors hover:text-soft-white">Terms & Conditions</Link>
            <span className="hidden sm:inline">·</span>
            <span>© {new Date().getFullYear()} {siteData.company.name}</span>
          </div>
        </div>

        <p className="mt-6 text-center text-xs italic text-soft-white/40">
          Designed for dependable journeys.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  className,
}: {
  title: string;
  links: { label: string; to: string }[];
  className?: string;
}) {
  return (
    <nav className={className} aria-label={title}>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-soft-white">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="text-sm text-soft-white/65 transition-colors hover:text-accent-soft"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
