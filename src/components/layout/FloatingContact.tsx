import { useEffect, useState } from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { phoneLink, emailLink, whatsappLink, siteData } from '@/data/siteData';
import useReducedMotion from '@/hooks/useReducedMotion';

export default function FloatingContact() {
  const reduced = useReducedMotion();
  const [whatsappPulse, setWhatsappPulse] = useState(false);

  // WhatsApp button pulses once shortly after load, not continuously.
  useEffect(() => {
    if (reduced) return;
    const t = setTimeout(() => setWhatsappPulse(true), 1500);
    const t2 = setTimeout(() => setWhatsappPulse(false), 2500);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [reduced]);

  return (
    <>
      {/* Desktop: vertical floating panel on the left */}
      <div className="fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        <FloatAction
          href={phoneLink}
          label={`Call ${siteData.contact.phone}`}
          color="bg-graphite-900"
        >
          <Phone className="h-5 w-5" />
        </FloatAction>
        <motion.a
          href={whatsappLink(`Hello ${siteData.company.name}, I'd like to enquire about a car rental.`)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          animate={whatsappPulse && !reduced ? { scale: [1, 1.1, 1] } : undefined}
          transition={{ duration: 0.8 }}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition-transform hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" />
        </motion.a>
        <FloatAction
          href={emailLink}
          label={`Email ${siteData.contact.email}`}
          color="bg-graphite-900"
        >
          <Mail className="h-5 w-5" />
        </FloatAction>
      </div>

      {/* Mobile: fixed bottom contact bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-graphite-200 bg-soft-white/95 backdrop-blur-md shadow-[0_-8px_24px_-12px_rgba(16,18,20,0.18)] lg:hidden">
        <a href={phoneLink} className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-graphite-800 active:bg-graphite-100">
          <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
          <span className="text-[11px] font-semibold">Call Now</span>
        </a>
        <a
          href={whatsappLink(`Hello ${siteData.company.name}, I'd like to enquire.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 border-x border-graphite-200 py-2.5 text-graphite-800 active:bg-graphite-100"
        >
          <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>
        <Link to="/contact" className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-graphite-800 active:bg-graphite-100">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-soft-white" aria-hidden="true">Q</span>
          <span className="text-[11px] font-semibold">Get Quote</span>
        </Link>
      </div>
    </>
  );
}

function FloatAction({
  href,
  label,
  color,
  children,
}: {
  href: string;
  label: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${color} text-white shadow-card transition-transform hover:scale-105 hover:bg-accent`}
    >
      {children}
    </a>
  );
}
