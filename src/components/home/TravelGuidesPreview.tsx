import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import SectionReveal from '@/components/common/SectionReveal';
import Carousel from '@/components/common/Carousel';
import { blogPosts } from '@/data/blogData';

export default function TravelGuidesPreview() {
  const posts = blogPosts.slice(0, 6);

  return (
    <section className="section-py bg-soft-white">
      <div className="container-px">
        <SectionReveal>
          <SectionHeading
            eyebrow="Travel Guides"
            title="Travel Ideas, Routes and Useful Guides"
            subtitle="Practical, evergreen content to help you plan better journeys."
          />
        </SectionReveal>

        <SectionReveal className="mt-14" delay={0.1}>
          <Carousel ariaLabel="Travel guides">
            {posts.map((post) => (
              <article key={post.slug} className="w-[82%] flex-none snap-start sm:w-[46%] lg:w-[380px]">
                <Link
                  to={`/travel-guides/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden border border-graphite-200/70 bg-soft-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.cover}
                      alt={post.coverAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/30 to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex bg-soft-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-graphite-700 backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-graphite-400">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" aria-hidden="true" /> {post.readingTime}
                      </span>
                    </div>
                    <h3 className="mt-3 font-heading text-lg font-bold leading-tight text-graphite-900 group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite-500">{post.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors group-hover:text-accent-hover">
                      Read Guide
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </Carousel>
        </SectionReveal>

        <SectionReveal className="mt-12 flex justify-center" delay={0.1}>
          <Link to="/travel-guides" className="btn-secondary group">
            View All Guides
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}
