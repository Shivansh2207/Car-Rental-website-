import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { cn } from '@/utils/cn';
import useReducedMotion from '@/hooks/useReducedMotion';
import Logo from '@/components/common/Logo';
import { navLinks, phoneLink, whatsappLink, siteData } from '@/data/siteData';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const reduced = useReducedMotion();

  // The navbar occupies its own row above the hero, so it needs a light
  // surface from the first paint. A transparent state here would make the
  // white logo and navigation links disappear into the white page background
  // until the user scrolls.
  const solid = true;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={reduced ? false : { opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'sticky top-0 z-40 transition-all duration-500',
        solid
          ? 'border-b border-graphite-200/70 bg-soft-white/85 backdrop-blur-xl shadow-soft'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="container-px flex items-center justify-between gap-4 py-3.5" aria-label="Primary">
        <div className={cn(solid ? '[&_*]:!text-graphite-900' : '')}>
          <Logo variant={solid ? 'dark' : 'light'} />
        </div>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'group relative py-1 text-sm font-medium transition-colors',
                    solid
                      ? isActive
                        ? 'text-accent'
                        : 'text-graphite-600 hover:text-graphite-900'
                      : isActive
                        ? 'text-accent-soft'
                        : 'text-soft-white/85 hover:text-soft-white',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={cn(
                        'absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-accent transition-all duration-300',
                        isActive ? 'w-full' : 'w-0 group-hover:w-full',
                      )}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className={cn(
              'hidden rounded-none px-5 py-2.5 text-sm font-semibold transition-all duration-300 lg:inline-flex',
              solid
                ? 'bg-accent text-soft-white hover:bg-accent-hover hover:shadow-glow'
                : 'bg-soft-white text-graphite-900 hover:bg-ivory',
            )}
          >
            Get a Quote
          </Link>

          {/* Mobile: call icon */}
          <a
            href={phoneLink}
            aria-label="Call us"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden',
              solid ? 'text-graphite-700 hover:bg-graphite-100' : 'text-soft-white hover:bg-white/10',
            )}
          >
            <Phone className="h-5 w-5" />
          </a>

          {/* Mobile: menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden',
              solid ? 'text-graphite-700 hover:bg-graphite-100' : 'text-soft-white hover:bg-white/10',
            )}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduced ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[57px] z-30 h-[calc(100vh-57px)] overflow-y-auto bg-soft-white lg:hidden"
          >
            <div className="container-px flex flex-col py-6">
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        cn(
                          'block border-b border-graphite-100 py-4 text-lg font-medium',
                          isActive ? 'text-accent' : 'text-graphite-800',
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <a href={phoneLink} className="btn-secondary">
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call
                </a>
                <a
                  href={whatsappLink(`Hello ${siteData.company.name}, I'd like to enquire.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
                </a>
              </div>
              <Link to="/contact" className="btn-primary mt-3 w-full">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
