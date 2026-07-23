import { type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import AnnouncementBar from './AnnouncementBar';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import useReducedMotion from '@/hooks/useReducedMotion';

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const reduced = useReducedMotion();

  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        {/* Smooth page transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      {/* bottom padding so the mobile contact bar never covers content */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
      <Footer />
      <FloatingContact />
    </div>
  );
}
