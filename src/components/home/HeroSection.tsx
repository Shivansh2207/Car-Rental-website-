import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone, MousePointerClick } from 'lucide-react';
import { Link } from 'react-router-dom';
import { buildImage, images } from '@/data/images';
import { siteData, phoneLink } from '@/data/siteData';
import AnimatedCounter from '@/components/common/AnimatedCounter';
import RouteLine from '@/components/common/RouteLine';
import { TextReveal, MagneticButton } from '@/components/motion';
import useReducedMotion from '@/hooks/useReducedMotion';
import useIsMobile from '@/hooks/useIsMobile';

export default function HeroSection() {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  const heroRef = useRef<HTMLElement>(null);
  const bg = buildImage(images.hero.sedanRoad, { w: 1920, h: 1280, q: 70, eager: true });

  // Scroll-linked layered parallax. Distances are damped on mobile and
  // flattened entirely under reduced motion for stable scrolling.
  const factor = reduced ? 0 : isMobile ? 0.5 : 1;
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', `${15 * factor}%`]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1 + 0.08 * factor]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70 * factor]);
  const statsY = useTransform(scrollYProgress, [0, 1], [0, -40 * factor]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.85, reduced ? 1 : 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.35 * factor]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: reduced ? 0 : 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-graphite-900"
    >
      {/* Background image — scroll parallax (drift + scale), fade in on load */}
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <motion.img
          src={bg}
          alt="A clean premium sedan travelling on a scenic urban road at dusk"
          className="absolute inset-x-0 top-[-10%] h-[120%] w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduced ? 0.3 : 1.2, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Gradient overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-graphite-950/92 via-graphite-900/70 to-graphite-900/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/85 via-transparent to-graphite-950/40" />
      {/* Extra darkening that grows as the hero scrolls away */}
      <motion.div className="absolute inset-0 bg-graphite-950" style={{ opacity: overlayOpacity }} />

      {/* Subtle route line behind content */}
      <div className="absolute inset-x-0 top-1/2 -z-0 opacity-40">
        <RouteLine variant="curve" animate={!reduced} />
      </div>

      <div className="container-px relative z-10 pt-28 pb-24 md:pt-32">
        <motion.div style={{ y: contentY, opacity: contentOpacity }}>
          <motion.div variants={container} initial="hidden" animate="visible" className="max-w-2xl">
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-soft-white/90 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Trusted Car Rental Service Across Mumbai
            </motion.span>

            <TextReveal
              as="h1"
              animateOnMount
              delay={0.25}
              lines={['Every Journey Deserves', 'the Right Drive.']}
              className="mt-6 text-balance font-heading text-4xl font-bold leading-[1.05] text-soft-white sm:text-5xl md:text-6xl lg:text-7xl"
            />

            <motion.p variants={item} className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-soft-white/80">
              From airport pickups and business travel to family holidays and special occasions,{' '}
              {siteData.company.name} delivers clean vehicles, professional drivers and dependable service
              for every journey.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <MagneticButton>
                <Link to="/fleet" className="btn-primary group">
                  Explore Our Fleet
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </MagneticButton>
              <a href={phoneLink} className="btn-outline-light group">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Talk to Our Team
              </a>
            </motion.div>
          </motion.div>

          {/* Floating info card near bottom — slightly different scroll speed.
              Entrance animates opacity only; `y` is owned by the scroll parallax. */}
          <motion.dl
            style={{ y: statsY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-md sm:grid-cols-4"
          >
            {siteData.stats.map((stat) => (
              <div key={stat.label} className="bg-white/5 px-5 py-5 text-center sm:text-left">
                <dd className="font-heading text-2xl font-bold text-soft-white sm:text-3xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal as boolean} />
                </dd>
                <dt className="mt-1 text-xs font-medium uppercase tracking-wide text-soft-white/60">
                  {stat.label}
                </dt>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>

      {/* Trust badge */}
      <motion.div
        initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute right-6 top-28 hidden h-24 w-24 flex-col items-center justify-center rounded-full border border-white/15 bg-accent/90 text-center text-soft-white shadow-glow md:flex lg:right-12 lg:h-28 lg:w-28"
      >
        <span className="font-heading text-2xl font-bold lg:text-3xl">24/7</span>
        <span className="text-[10px] font-semibold uppercase tracking-wide">Available</span>
      </motion.div>

      {/* Scroll indicator — fades out as the user scrolls */}
      <motion.div
        style={{ opacity: indicatorOpacity }}
        className="absolute inset-x-0 bottom-6 flex flex-col items-center gap-1 text-soft-white/60"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-[10px] font-semibold uppercase tracking-[0.2em]"
        >
          Scroll to Explore
        </motion.span>
        <motion.span
          animate={reduced ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          aria-hidden="true"
        >
          <MousePointerClick className="h-4 w-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}
