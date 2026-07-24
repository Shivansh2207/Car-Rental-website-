import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import Seo from '@/components/common/Seo';
import SectionReveal from '@/components/common/SectionReveal';
import EnquiryForm from '@/components/common/EnquiryForm';
import { phoneLink, emailLink, whatsappLink, siteData } from '@/data/siteData';
import { breadcrumbLd } from '@/utils/jsonLd';

export default function ContactPage() {
  return (
    <>
      <Seo
        title={`Contact Us — ${siteData.company.name}`}
        description="Contact Shree Krishna Car Rentals for car rental enquiries in Mumbai, Navi Mumbai and Thane. Call, WhatsApp or fill out our enquiry form."
        path="/contact"
        jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])}
      />

      {/* Hero */}
      <section className="page-hero relative overflow-hidden bg-graphite-900 py-28 text-soft-white md:py-36">
        <div className="container-px">
          <span className="eyebrow text-accent-soft">Contact</span>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-tight sm:text-5xl">
            Tell Us Where the Road Is Taking You
          </h1>
          <p className="mt-5 max-w-xl text-lg text-soft-white/70">
            Share your travel requirement and our team will help you choose the right vehicle.
          </p>
        </div>
      </section>

      {/* Contact details + form */}
      <section className="section-py bg-soft-white">
        <div className="container-px">
          <div className="grid gap-14 lg:grid-cols-12">
            {/* Left: contact info */}
            <SectionReveal className="lg:col-span-4">
              <h2 className="font-heading text-2xl font-bold text-graphite-900">Get in Touch</h2>
              <p className="mt-3 text-sm text-graphite-500">
                Reach out by phone, WhatsApp or email — or fill in the enquiry form and we will get back to you.
              </p>

              <ul className="mt-8 flex flex-col gap-5">
                <li>
                  <a href={phoneLink} className="flex items-start gap-3 text-graphite-700 hover:text-accent">
                    <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">Phone</p>
                      <p className="text-sm">{siteData.contact.phone}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink(`Hello ${siteData.company.name}, I'd like to enquire about a car rental.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-graphite-700 hover:text-accent"
                  >
                    <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">WhatsApp</p>
                      <p className="text-sm">{siteData.contact.whatsapp}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={emailLink} className="flex items-start gap-3 text-graphite-700 hover:text-accent">
                    <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">Email</p>
                      <p className="text-sm">{siteData.contact.email}</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-graphite-700">
                  <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Address</p>
                    <p className="text-sm">{siteData.contact.address.full}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-graphite-700">
                  <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Operating Hours</p>
                    <p className="text-sm">{siteData.contact.operatingHours}</p>
                  </div>
                </li>
              </ul>
            </SectionReveal>

            {/* Right: form */}
            <SectionReveal className="lg:col-span-8" delay={0.1}>
              <div className="rounded-5xl border border-graphite-200/70 bg-ivory/30 p-8 shadow-soft md:p-10">
                <EnquiryForm />
              </div>
              <p className="mt-6 text-xs text-graphite-400">
                Submitting opens WhatsApp with your enquiry. No booking is confirmed. We don't store your details on this site.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-ivory/40 py-16">
        <div className="container-px">
          <SectionReveal>
            <h2 className="font-heading text-xl font-bold text-graphite-900 text-center">Find Us in Mumbai</h2>
            <div className="mt-6 overflow-hidden rounded-4xl border border-graphite-200/70 shadow-card">
              <iframe
                title="Shree Krishna Car Rentals location"
                src={`https://www.google.com/maps/embed/v1/place?key=&q=${encodeURIComponent(siteData.contact.mapEmbedQuery)}&zoom=12`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full bg-graphite-100"
              />
              {/* If no API key, show a placeholder */}
              <div className="flex h-0 items-center justify-center bg-graphite-100 text-sm text-graphite-400 sm:h-[400px]">
                <p>Map placeholder — add a Google Maps embed key in the site data configuration.</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
