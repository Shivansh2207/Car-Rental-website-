import Seo from '@/components/common/Seo';
import SectionReveal from '@/components/common/SectionReveal';
import { siteData } from '@/data/siteData';
import { breadcrumbLd } from '@/utils/jsonLd';

export default function TermsPage() {
  return (
    <>
      <Seo
        title={`Terms & Conditions — ${siteData.company.name}`}
        description="Terms and conditions for the Apex Drive Rentals website."
        path="/terms"
        jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Terms & Conditions', path: '/terms' }])}
      />

      <section className="page-hero relative overflow-hidden bg-graphite-900 py-28 text-soft-white md:py-36">
        <div className="container-px">
          <h1 className="max-w-2xl font-heading text-4xl font-bold leading-tight sm:text-5xl">Terms &amp; Conditions</h1>
          <p className="mt-4 text-soft-white/60">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="section-py bg-soft-white">
        <div className="container-px mx-auto max-w-3xl flex flex-col gap-10 text-pretty leading-relaxed text-graphite-600">
          <SectionReveal>
            <p>
              These terms govern your use of the {siteData.company.name} website. Please read them carefully.
            </p>
          </SectionReveal>

          {[
            { title: 'Website Information', body: `This website provides information about ${siteData.company.name}'s car rental services, fleet, destinations and travel guides. It serves as a company profile and enquiry-generation platform.` },
            { title: 'Enquiry Versus Confirmation', body: 'Submitting an enquiry through this website does not constitute a confirmed rental. A journey is confirmed only after direct communication and confirmation from the company.' },
            { title: 'Vehicle Availability', body: 'The vehicles listed on this website represent categories and models in our fleet. Specific vehicle availability varies by date, time and prior bookings. The team will confirm the assigned vehicle during enquiry coordination.' },
            { title: 'Vehicle Model Variation', body: 'Vehicle model, colour and exact configuration may vary depending on availability at the time of your journey. The team will confirm details during coordination.' },
            { title: 'Pricing Quotations', body: 'This website does not display fixed rental prices. All quotations are communicated directly after understanding your journey requirements, including route, duration, vehicle and additional services.' },
            { title: 'Tolls and Parking', body: 'Tolls, parking charges and applicable taxes are separate from the base quotation unless explicitly stated. The team will clearly communicate what is included before you confirm.' },
            { title: 'Customer Responsibilities', body: 'Customers are responsible for providing accurate enquiry information, adhering to coordinated schedules, and ensuring respectful treatment of vehicles and drivers.' },
            { title: 'Service Limitations', body: `${siteData.company.name} provides vehicles with professional drivers. Self-drive options, if available, would be communicated separately. Services are subject to operational feasibility and area coverage.` },
            { title: 'Website Content', body: 'All content on this website, including text, images and branding, is the property of {siteData.company.name} or used under license. Reproduction without permission is not permitted.' },
            { title: 'Contact Details', body: `For any questions about these terms, contact us at ${siteData.contact.email} or ${siteData.contact.phone}.` },
          ].map((section, i) => (
            <SectionReveal key={section.title} delay={i * 0.03}>
              <div>
                <h2 className="font-heading text-xl font-bold text-graphite-900">{section.title}</h2>
                <p className="mt-3">{section.body}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </>
  );
}
