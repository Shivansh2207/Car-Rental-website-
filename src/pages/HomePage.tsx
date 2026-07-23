import Seo from '@/components/common/Seo';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import FleetShowcase from '@/components/home/FleetShowcase';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import JourneyProcess from '@/components/home/JourneyProcess';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import CorporateSection from '@/components/home/CorporateSection';
import SafetySection from '@/components/home/SafetySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import TravelGuidesPreview from '@/components/home/TravelGuidesPreview';
import FinalCta from '@/components/common/FinalCta';
import { localBusinessLd } from '@/utils/jsonLd';
import siteData from '@/data/siteData';

export default function HomePage() {
  return (
    <>
      <Seo
        title={`${siteData.company.name} | Car Rental Services in Mumbai`}
        description="Professional car rental services across Mumbai, Navi Mumbai and Thane for airport transfers, local travel, outstation journeys, corporate transportation and special events."
        path="/"
        jsonLd={localBusinessLd()}
      />
      <HeroSection />
      <IntroSection />
      <ServicesOverview />
      <FleetShowcase />
      <WhyChooseUs />
      <JourneyProcess />
      <FeaturedDestinations />
      <CorporateSection />
      <SafetySection />
      <TestimonialsSection />
      <GalleryPreview />
      <TravelGuidesPreview />
      <FinalCta />
    </>
  );
}
