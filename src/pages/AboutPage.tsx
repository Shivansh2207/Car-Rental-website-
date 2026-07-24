import { motion } from 'framer-motion';
import { Target, Eye, Heart, ShieldCheck, Sparkles, TrendingUp, Star } from 'lucide-react';
import Seo from '@/components/common/Seo';
import SectionHeading from '@/components/common/SectionHeading';
import SectionReveal from '@/components/common/SectionReveal';
import AnimatedCounter from '@/components/common/AnimatedCounter';
import FinalCta from '@/components/common/FinalCta';
import SmartImage from '@/components/common/SmartImage';
import { buildImage, images } from '@/data/images';
import { siteData } from '@/data/siteData';
import { team } from '@/data/teamData';
import { breadcrumbLd } from '@/utils/jsonLd';

const values = [
  { icon: ShieldCheck, label: 'Reliability', desc: 'Journeys you can count on, with vehicles and drivers that arrive as coordinated.' },
  { icon: ShieldCheck, label: 'Safety', desc: 'Regularly maintained vehicles, experienced drivers and a focus on safe travel.' },
  { icon: Sparkles, label: 'Transparency', desc: 'Clear communication about vehicles, routes and applicable charges from the start.' },
  { icon: Heart, label: 'Hospitality', desc: 'Courteous drivers and a genuine commitment to making your journey comfortable.' },
  { icon: Star, label: 'Professionalism', desc: 'Consistent standards in vehicle quality, driver conduct and customer coordination.' },
  { icon: TrendingUp, label: 'Continuous Improvement', desc: 'Ongoing effort to maintain quality, expand services and serve travellers better.' },
];

const differentiators = [
  'Direct communication with a real team, not an automated system',
  'Suitable vehicle recommendations based on your specific journey',
  'Experienced drivers with local route knowledge',
  'Clean, well-maintained fleet across all categories',
  'Flexible services for individuals, families and businesses',
  'Local expertise covering Mumbai, Navi Mumbai and Thane',
];

export default function AboutPage() {
  const heroImg = buildImage(images.company.team, { w: 1800, h: 900, q: 65 });

  return (
    <>
      <Seo
        title={`About Us — ${siteData.company.name}`}
        description="Learn about Shree Krishna Car Rentals — a dependable car rental company serving Mumbai, Navi Mumbai and Thane for over a decade."
        path="/about"
        jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }])}
      />

      {/* Hero */}
      <section className="page-hero relative flex min-h-[50vh] items-center overflow-hidden bg-graphite-900">
        <img src={heroImg} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/90 to-graphite-900/60" />
        <div className="container-px relative py-28 md:py-36">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow text-accent-soft"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 max-w-2xl text-balance font-heading text-4xl font-bold leading-tight text-soft-white sm:text-5xl"
          >
            Built Around Reliable Journeys
          </motion.h1>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-py bg-soft-white">
        <div className="container-px mx-auto max-w-3xl text-center">
          <SectionReveal>
            <h2 className="font-heading text-2xl font-bold text-graphite-900 sm:text-3xl">Our Story</h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-graphite-500">
              {siteData.company.name} was established to provide dependable, well-managed transportation
              across Mumbai. What started as a small fleet serving local travellers has grown into a
              trusted car rental service handling airport transfers, outstation journeys, corporate
              travel and special occasions. Over the years, we have focused on one thing: making every
              journey safe, comfortable and easy to coordinate. We believe transportation should be
              straightforward, not complicated. Our approach is built around well-maintained vehicles,
              professional drivers and clear communication from the first enquiry to the last kilometre.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-py bg-ivory/40">
        <div className="container-px grid gap-8 md:grid-cols-2">
          <SectionReveal>
            <div className="flex h-full flex-col items-center rounded-4xl border border-graphite-200/70 bg-soft-white p-8 text-center shadow-soft">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Target className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-graphite-900">Our Mission</h3>
              <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-graphite-500">
                To make every rental journey safe, comfortable, organised and easy to coordinate.
              </p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="flex h-full flex-col items-center rounded-4xl border border-graphite-200/70 bg-soft-white p-8 text-center shadow-soft">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Eye className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-graphite-900">Our Vision</h3>
              <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-graphite-500">
                To become one of Mumbai's most trusted mobility partners for personal, family and business travel.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-py bg-soft-white">
        <div className="container-px">
          <SectionReveal>
            <SectionHeading eyebrow="What Drives Us" title="Our Core Values" />
          </SectionReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <SectionReveal key={v.label} delay={i * 0.07}>
                <div className="flex h-full gap-4 rounded-3xl border border-graphite-200/70 bg-soft-white p-6 shadow-soft">
                  <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <v.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-graphite-900">{v.label}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-graphite-500">{v.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-graphite-900 py-16 text-soft-white md:py-20">
        <div className="container-px grid grid-cols-2 gap-8 md:grid-cols-4">
          {siteData.stats.map((stat) => (
            <SectionReveal key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-bold text-accent sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal as boolean} />
              </p>
              <p className="mt-2 text-sm font-medium text-soft-white/60">{stat.label}</p>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-py bg-ivory/40">
        <div className="container-px mx-auto max-w-3xl text-center">
          <SectionReveal>
            <SectionHeading eyebrow="Our Difference" title="What Makes Us Different" />
          </SectionReveal>
          <ul className="mt-10 flex flex-col gap-4 text-left">
            {differentiators.map((d, i) => (
              <SectionReveal key={i} delay={i * 0.06}>
                <li className="flex items-start gap-3 rounded-2xl border border-graphite-200/60 bg-soft-white px-5 py-4 shadow-soft">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent text-[10px] font-bold text-soft-white">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-graphite-700">{d}</span>
                </li>
              </SectionReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="section-py bg-soft-white">
        <div className="container-px">
          <SectionReveal>
            <SectionHeading eyebrow="Our Team" title="The People Behind Your Journey" />
          </SectionReveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <SectionReveal key={m.role} delay={i * 0.08}>
                <div className="flex flex-col items-center rounded-4xl border border-graphite-200/70 bg-soft-white p-6 text-center shadow-soft">
                  <div className="overflow-hidden rounded-3xl">
                    <SmartImage
                      src={m.image}
                      alt={m.imageAlt}
                      wrapperClassName="aspect-[4/5] w-40"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-bold text-graphite-900">{m.name}</h3>
                  <p className="text-sm font-medium text-accent">{m.role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-graphite-400">{m.bio}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta heading="Let Us Take Care of the Road Ahead." />
    </>
  );
}
