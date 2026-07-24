import Seo from '@/components/common/Seo';
import SectionReveal from '@/components/common/SectionReveal';
import { siteData } from '@/data/siteData';
import { breadcrumbLd } from '@/utils/jsonLd';

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title={`Privacy Policy — ${siteData.company.name}`}
        description="Privacy policy for Apex Drive Rentals. Learn how enquiry information is handled."
        path="/privacy"
        jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy' }])}
      />

      <section className="page-hero relative overflow-hidden bg-graphite-900 py-28 text-soft-white md:py-36">
        <div className="container-px">
          <h1 className="max-w-2xl font-heading text-4xl font-bold leading-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-soft-white/60">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="section-py bg-soft-white">
        <div className="container-px mx-auto max-w-3xl flex flex-col gap-10 text-pretty leading-relaxed text-graphite-600">
          <SectionReveal>
            <p>
              This Privacy Policy explains how {siteData.company.name} handles information submitted through this
              website's enquiry forms and contact methods.
            </p>
          </SectionReveal>

          {[
            {
              title: 'Information Collected Through Enquiries',
              body: `When you submit an enquiry through our contact form or WhatsApp link, the information you provide — such as your name, phone number, email, travel details and vehicle preferences — is used solely to respond to your enquiry and coordinate your travel requirement. We do not collect payment information, passwords or any data beyond what is necessary to assist with your enquiry.`,
            },
            {
              title: 'Purpose of Enquiry Information',
              body: `Your enquiry information is used to: understand your travel requirements, suggest suitable vehicles, communicate journey details and quotations, and coordinate your rental. It is not used for marketing, sold to third parties or processed for any purpose unrelated to your specific enquiry.`,
            },
            {
              title: 'Contact Methods',
              body: `Our enquiry form opens WhatsApp with a prefilled message. Phone and email contact options are also provided. Communication happens directly between you and our team through the chosen channel.`,
            },
            {
              title: 'Third-Party Form Services',
              body: `If configured, the enquiry form may submit data to a third-party service such as Web3Forms or Formspree for delivery. In such cases, the respective service's privacy policy applies to data processed through their systems.`,
            },
            {
              title: 'Data Retention',
              body: `Enquiry messages communicated through WhatsApp or email are managed by you and the respective service provider. This website does not independently store personal enquiry data.`,
            },
            {
              title: 'User Rights',
              body: `You may request to know what information we hold about you or ask that it be deleted by contacting us at ${siteData.contact.email}. We will respond to legitimate requests as promptly as practical.`,
            },
            {
              title: 'Contact',
              body: `For any questions about this Privacy Policy, contact us at ${siteData.contact.email} or ${siteData.contact.phone}.`,
            },
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
