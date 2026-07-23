import { MapPin, Users, Car, MessageCircle } from 'lucide-react';
import Seo from '@/components/common/Seo';
import SectionReveal from '@/components/common/SectionReveal';
import SmartImage from '@/components/common/SmartImage';
import FinalCta from '@/components/common/FinalCta';
import { destinations } from '@/data/destinationsData';
import { whatsappLink, siteData } from '@/data/siteData';
import { breadcrumbLd } from '@/utils/jsonLd';

export default function DestinationsPage() {
  return (
    <>
      <Seo
        title={`Popular Destinations — ${siteData.company.name}`}
        description="Outstation destinations from Mumbai: Lonavala, Pune, Nashik, Shirdi, Mahabaleshwar, Alibaug, Goa and more. Plan your road trip with us."
        path="/destinations"
        jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Destinations', path: '/destinations' }])}
      />

      <section className="bg-graphite-900 py-28 text-soft-white md:py-36">
        <div className="container-px">
          <span className="eyebrow text-accent-soft">Destinations</span>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-tight sm:text-5xl">
            Where Would You Like to Go?
          </h1>
          <p className="mt-5 max-w-xl text-lg text-soft-white/70">
            Popular outstation destinations from Mumbai. Travel time depends on route, traffic and weather —
            plan comfortably with the right vehicle.
          </p>
        </div>
      </section>

      <section className="section-py bg-soft-white">
        <div className="container-px flex flex-col gap-20">
          {destinations.map((d, i) => (
            <SectionReveal key={d.slug} id={d.slug} delay={i * 0.04} className="scroll-mt-24">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div className={i % 2 ? 'lg:order-2' : undefined}>
                  <div className="overflow-hidden rounded-5xl border border-graphite-200/70 shadow-card">
                    <SmartImage
                      src={d.image}
                      alt={d.imageAlt}
                      wrapperClassName="aspect-[16/11]"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className={i % 2 ? 'lg:order-1' : undefined}>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    <MapPin className="h-3 w-3" aria-hidden="true" /> {d.bestFor}
                  </span>
                  <h2 className="mt-3 font-heading text-2xl font-bold text-graphite-900 sm:text-3xl">{d.name}</h2>
                  <p className="mt-2 text-sm text-graphite-500 italic">{d.travelCharacter}</p>
                  <p className="mt-4 text-pretty leading-relaxed text-graphite-600">{d.description}</p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="flex items-center gap-2.5 text-sm text-graphite-700">
                      <Users className="h-4 w-4 text-accent" aria-hidden="true" />
                      <span className="font-medium">Best for:</span> {d.passengerType}
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-graphite-700">
                      <Car className="h-4 w-4 text-accent" aria-hidden="true" />
                      <span className="font-medium">Vehicles:</span> {d.recommendedVehicles.join(', ')}
                    </div>
                  </div>

                  {d.tips.length > 0 && (
                    <div className="mt-5">
                      <h3 className="text-sm font-bold text-graphite-900">Travel Tips</h3>
                      <ul className="mt-2 flex flex-col gap-1.5">
                        {d.tips.map((tip) => (
                          <li key={tip} className="flex items-start gap-2 text-sm text-graphite-600">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden="true" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-6">
                    <a
                      href={whatsappLink(`Hello ${siteData.company.name}, I'd like to enquire about a trip to ${d.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" /> Enquire for {d.name}
                    </a>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
