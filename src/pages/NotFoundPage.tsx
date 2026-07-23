import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Navigation } from 'lucide-react';
import Seo from '@/components/common/Seo';
import useReducedMotion from '@/hooks/useReducedMotion';

export default function NotFoundPage() {
  const reduced = useReducedMotion();

  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you are looking for does not exist."
        path="/404"
        noindex
      />

      <section className="flex min-h-[70vh] items-center justify-center bg-graphite-900 px-5 text-center">
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md"
        >
          {/* Abstract route symbol with dead end */}
          <span className="mx-auto inline-flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-charcoal">
            <Navigation className="h-10 w-10 text-accent/60" aria-hidden="true" />
          </span>

          <p className="mt-6 font-heading text-7xl font-bold text-accent sm:text-8xl">404</p>
          <h1 className="mt-3 font-heading text-2xl font-bold text-soft-white sm:text-3xl">
            This Road Does Not Lead Anywhere
          </h1>
          <p className="mt-4 text-soft-white/60">
            The page you are looking for might have been moved or does not exist.
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-soft-white transition-colors hover:bg-accent-hover"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Return to Home
          </Link>
        </motion.div>
      </section>
    </>
  );
}
