import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { buildImage, images } from '@/data/images';
import { AnchorButton } from '@/components/common/ButtonLink';
import { phoneLink, whatsappLink, siteData } from '@/data/siteData';
import useReducedMotion from '@/hooks/useReducedMotion';

interface FinalCtaProps {
  heading?: string;
  text?: string;
  note?: string;
}

/**
 * Large cinematic call-to-action section used at the end of pages.
 * Background: a night-time road / scenic highway.
 */
export default function FinalCta({
  heading = 'Your Next Journey Starts With a Conversation.',
  text = 'Tell us where you are travelling and our team will help you choose a suitable vehicle.',
  note = 'No online booking required. Speak directly with our travel team.',
}: FinalCtaProps) {
  const reduced = useReducedMotion();
  const bg = buildImage(images.company.nightRoad, { w: 1800, h: 1000, q: 65 });

  return (
    <section className="relative overflow-hidden bg-graphite-900">
      <motion.img
        src={bg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        initial={{ scale: reduced ? 1 : 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite-950/90 via-graphite-900/75 to-graphite-900/55" />

      <div className="container-px relative z-10 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="eyebrow text-accent-soft">Let's Talk</span>
          <h2 className="mt-4 text-balance text-3xl font-bold leading-tight text-soft-white sm:text-4xl md:text-5xl">
            {heading}
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-lg text-soft-white/80">{text}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <AnchorButton href={phoneLink} variant="primary" icon={Phone}>
              Call Our Team
            </AnchorButton>
            <AnchorButton
              href={whatsappLink(`Hello ${siteData.company.name}, I'd like to enquire about a car rental.`)}
              variant="outlineLight"
              icon={MessageCircle}
            >
              Enquire on WhatsApp
            </AnchorButton>
          </div>

          <p className="mt-6 text-sm text-soft-white/60">{note}</p>
        </div>
      </div>
    </section>
  );
}
