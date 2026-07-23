import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { buildImage, images } from '@/data/images';
import { AnchorButton } from '@/components/common/ButtonLink';
import RouteLine from '@/components/common/RouteLine';
import { StaggerContainer, StaggerItem, MagneticButton } from '@/components/motion';
import { phoneLink, whatsappLink, siteData } from '@/data/siteData';
import useReducedMotion from '@/hooks/useReducedMotion';

interface FinalCtaProps {
  heading?: string;
  text?: string;
  note?: string;
}

/**
 * Large cinematic call-to-action section used at the end of pages.
 * As it enters: the background settles from a slight over-scale, a darkening
 * layer fades in, the content reveals in sequence and the route line completes.
 * All movement ends once the section is fully visible — nothing keeps moving.
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
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: reduced ? 0 : 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite-950/90 via-graphite-900/75 to-graphite-900/55" />
      {/* darkening layer that fades in as the section enters */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-graphite-950"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: reduced ? 0 : 1.2, ease: 'easeOut' }}
      />

      <div className="container-px relative z-10 py-24 md:py-32">
        <StaggerContainer className="max-w-2xl" stagger={0.1} amount={0.3}>
          <StaggerItem>
            <span className="eyebrow text-accent-soft">Let's Talk</span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight text-soft-white sm:text-4xl md:text-5xl">
              {heading}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-5 max-w-xl text-pretty text-lg text-soft-white/80">{text}</p>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton>
                <AnchorButton href={phoneLink} variant="primary" icon={Phone}>
                  Call Our Team
                </AnchorButton>
              </MagneticButton>
              <AnchorButton
                href={whatsappLink(`Hello ${siteData.company.name}, I'd like to enquire about a car rental.`)}
                variant="outlineLight"
                icon={MessageCircle}
              >
                Enquire on WhatsApp
              </AnchorButton>
            </div>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-6 text-sm text-soft-white/60">{note}</p>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* route line completing its journey along the bottom */}
      <div className="absolute inset-x-0 bottom-0 z-0 opacity-50">
        <RouteLine variant="horizontal" animate={!reduced} color="#FB923C" />
      </div>
    </section>
  );
}
