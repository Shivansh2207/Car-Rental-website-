import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import useScrollToTop from '@/hooks/useScrollToTop';

/* Lazy-load pages for code splitting */
const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const FleetPage = lazy(() => import('@/pages/FleetPage'));
const CorporatePage = lazy(() => import('@/pages/CorporatePage'));
const DestinationsPage = lazy(() => import('@/pages/DestinationsPage'));
const GalleryPage = lazy(() => import('@/pages/GalleryPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage'));
const TermsPage = lazy(() => import('@/pages/TermsPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTopHandler />
      <Layout>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServicesPage />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/fleet/:slug" element={<FleetPage />} />
            <Route path="/corporate" element={<CorporatePage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/travel-guides" element={<BlogPage />} />
            <Route path="/travel-guides/:slug" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

/** Scroll to top on route change */
function ScrollToTopHandler() {
  useScrollToTop();
  return null;
}

/** Minimal loading state — no artificial full-screen loader */
function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-graphite-200 border-t-accent" />
    </div>
  );
}
