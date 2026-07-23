import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Seo from '@/components/common/Seo';
import SectionReveal from '@/components/common/SectionReveal';
import { gallery, galleryCategories } from '@/data/galleryData';
import { siteData } from '@/data/siteData';
import { breadcrumbLd } from '@/utils/jsonLd';
import { cn } from '@/utils/cn';
import useReducedMotion from '@/hooks/useReducedMotion';
import SmartImage from '@/components/common/SmartImage';

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const filtered = filter === 'All' ? gallery : gallery.filter((g) => g.category === filter);

  function changeFilter(category: string) {
    setFilter(category);
    setActiveIndex(null);
  }

  return (
    <>
      <Seo
        title={`Gallery — ${siteData.company.name}`}
        description="Browse photos of our fleet, interiors, airport transfers, corporate travel, weddings and outstation journeys."
        path="/gallery"
        jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Gallery', path: '/gallery' }])}
      />

      <section className="bg-graphite-900 py-28 text-soft-white md:py-36">
        <div className="container-px">
          <span className="eyebrow text-accent-soft">Gallery</span>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-tight sm:text-5xl">
            On the Road With Apex Drive
          </h1>
        </div>
      </section>

      <section className="section-py bg-soft-white">
        <div className="container-px">
          <SectionReveal>
            <div className="no-scrollbar -mx-5 flex snap-x gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => changeFilter(cat)}
                  aria-pressed={filter === cat}
                  className={cn(
                    'flex-none rounded-full px-4 py-2 text-sm font-semibold transition-all',
                    filter === cat
                      ? 'bg-graphite-900 text-soft-white'
                      : 'border border-graphite-200 bg-soft-white text-graphite-600 hover:border-graphite-400',
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filtered.map((item, i) => (
              <SectionReveal key={item.id} delay={(i % 3) * 0.08}>
                <GalleryItem item={item} index={i} onOpen={() => setActiveIndex(i)} />
              </SectionReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 rounded-3xl border border-dashed border-graphite-200 p-10 text-center text-graphite-500">
              No images in this category yet.
            </p>
          )}
        </div>
      </section>

      <GalleryLightbox
        items={filtered}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={setActiveIndex}
      />
    </>
  );
}

function GalleryItem({ item, index, onOpen }: { item: (typeof gallery)[number]; index: number; onOpen: () => void }) {
  const heights = ['h-72', 'h-56', 'h-64', 'h-52', 'h-64'];
  const h = heights[index % heights.length];

  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn('group relative mb-4 block w-full overflow-hidden rounded-3xl break-inside-avoid text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent', h)}
      aria-label={`View ${item.alt}`}
    >
      <SmartImage
        src={item.src}
        alt={item.alt}
        wrapperClassName="h-full w-full"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-soft-white backdrop-blur-sm">
          {item.category}
        </span>
        <p className="mt-2 text-sm text-soft-white">{item.caption}</p>
      </div>
    </button>
  );
}

function GalleryLightbox({
  items,
  activeIndex,
  onClose,
  onChange,
}: {
  items: typeof gallery;
  activeIndex: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}) {
  const reduced = useReducedMotion();
  const closeButton = useRef<HTMLButtonElement>(null);
  const pointerStart = useRef<number | null>(null);
  const open = activeIndex !== null && items[activeIndex];
  const item = open ? items[activeIndex] : null;

  function previous() {
    if (activeIndex === null) return;
    onChange((activeIndex - 1 + items.length) % items.length);
  }

  function next() {
    if (activeIndex === null) return;
    onChange((activeIndex + 1) % items.length);
  }

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') previous();
      if (event.key === 'ArrowRight') next();
    }

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, activeIndex, items.length]);

  return (
    <AnimatePresence>
      {item && activeIndex !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Image preview: ${item.alt}`}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-graphite-950/95 p-4 sm:p-8"
          initial={reduced ? { opacity: 0 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onPointerDown={(event) => { pointerStart.current = event.clientX; }}
          onPointerUp={(event) => {
            if (pointerStart.current === null) return;
            const delta = event.clientX - pointerStart.current;
            if (Math.abs(delta) > 50) delta > 0 ? previous() : next();
            pointerStart.current = null;
          }}
        >
          <button
            ref={closeButton}
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-soft-white/10 text-soft-white transition-colors hover:bg-soft-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-white sm:right-8 sm:top-8"
            aria-label="Close image preview"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          {items.length > 1 && (
            <>
              <button type="button" onClick={previous} className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-soft-white/10 text-soft-white transition-colors hover:bg-soft-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-white sm:left-8" aria-label="Previous image">
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>
              <button type="button" onClick={next} className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-soft-white/10 text-soft-white transition-colors hover:bg-soft-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-white sm:right-8" aria-label="Next image">
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </>
          )}
          <motion.figure
            key={item.id}
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="max-h-full max-w-6xl"
          >
            <img src={item.src} alt={item.alt} className="max-h-[78vh] max-w-full rounded-2xl object-contain shadow-2xl" />
            <figcaption className="mt-4 text-center text-sm text-soft-white/75">
              <span className="font-semibold text-soft-white">{item.category}</span> · {item.caption}
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
