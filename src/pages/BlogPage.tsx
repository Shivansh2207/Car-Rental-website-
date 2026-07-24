import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import Seo from '@/components/common/Seo';
import SectionReveal from '@/components/common/SectionReveal';
import FinalCta from '@/components/common/FinalCta';
import { blogPosts, getPostBySlug, getRelatedPosts, blogCategories } from '@/data/blogData';
import { siteData } from '@/data/siteData';
import { articleLd, breadcrumbLd } from '@/utils/jsonLd';
import { cn } from '@/utils/cn';

export default function BlogPage() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (post) return <BlogDetail post={post} />;

  return (
    <>
      <Seo
        title={`Travel Guides — ${siteData.company.name}`}
        description="Travel ideas, route guides and useful tips for road trips from Mumbai."
        path="/travel-guides"
        jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Travel Guides', path: '/travel-guides' }])}
      />

      <section className="bg-graphite-900 py-28 text-soft-white md:py-36">
        <div className="container-px">
          <span className="eyebrow text-accent-soft">Travel Guides</span>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-tight sm:text-5xl">
            Travel Ideas, Routes and Useful Guides
          </h1>
          <p className="mt-5 max-w-xl text-lg text-soft-white/70">
            Practical, evergreen content to help you plan better journeys.
          </p>
        </div>
      </section>

      <BlogListing />
      <FinalCta />
    </>
  );
}

function BlogListing() {
  const [cat, setCat] = useState('All');
  const filtered = cat === 'All' ? blogPosts : blogPosts.filter((p) => p.category === cat);

  return (
    <section className="section-py bg-soft-white">
      <div className="container-px">
        <SectionReveal>
          <div className="no-scrollbar -mx-5 flex snap-x gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
            {blogCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                className={cn(
                  'flex-none rounded-none px-4 py-2 text-sm font-semibold transition-all',
                  cat === c
                    ? 'bg-graphite-900 text-soft-white'
                    : 'border border-graphite-200 bg-soft-white text-graphite-600 hover:border-graphite-400',
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </SectionReveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <SectionReveal key={post.slug} delay={i * 0.07}>
              <Link
                to={`/travel-guides/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-4xl border border-graphite-200/70 bg-soft-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={post.cover} alt={post.coverAlt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/30 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex rounded-none bg-soft-white/90 px-3 py-1 text-xs font-semibold text-graphite-700 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-graphite-400">
                    <span>{post.date}</span><span>·</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" aria-hidden="true" />{post.readingTime}</span>
                  </div>
                  <h2 className="mt-3 font-heading text-lg font-bold leading-tight text-graphite-900 group-hover:text-accent">{post.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite-500">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:text-accent-hover">
                    Read Guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 rounded-3xl border border-dashed border-graphite-200 p-10 text-center text-graphite-500">
            No posts in this category.
          </p>
        )}
      </div>
    </section>
  );
}

function BlogDetail({ post }: { post: NonNullable<ReturnType<typeof getPostBySlug>> }) {
  const related = getRelatedPosts(post.related);

  return (
    <>
      <Seo
        title={`${post.title} — ${siteData.company.name}`}
        description={post.excerpt}
        path={`/travel-guides/${post.slug}`}
        type="article"
        jsonLd={[
          articleLd({
            title: post.title,
            description: post.excerpt,
            slug: post.slug,
            image: post.cover,
            datePublished: post.date,
            author: post.author,
          }),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Travel Guides', path: '/travel-guides' },
            { name: post.title, path: `/travel-guides/${post.slug}` },
          ]),
        ]}
      />

      <section className="section-py bg-soft-white">
        <div className="container-px mx-auto max-w-3xl">
          <Link to="/travel-guides" className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-graphite-500 hover:text-accent">
            <ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" /> All Guides
          </Link>

          <span className="inline-flex rounded-none bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{post.category}</span>
          <h1 className="mt-3 font-heading text-3xl font-bold leading-tight text-graphite-900 sm:text-4xl">{post.title}</h1>

          <div className="mt-4 flex items-center gap-4 text-sm text-graphite-400">
            <span>{post.author}</span><span>·</span>
            <span>{post.date}</span><span>·</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" aria-hidden="true" />{post.readingTime}</span>
          </div>

          <div className="mt-8 overflow-hidden rounded-4xl">
            <img src={post.cover} alt={post.coverAlt} className="w-full object-cover" />
          </div>

          <div className="mt-10 flex flex-col gap-10 text-pretty leading-relaxed text-graphite-600">
            {post.sections.map((sec) => (
              <div key={sec.heading}>
                <h2 className="font-heading text-xl font-bold text-graphite-900">{sec.heading}</h2>
                {sec.body.map((p, i) => (
                  <p key={i} className="mt-3">{p}</p>
                ))}
              </div>
            ))}
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="font-heading text-xl font-bold text-graphite-900">Related Guides</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/travel-guides/${r.slug}`}
                    className="group flex gap-4 rounded-3xl border border-graphite-200/70 bg-soft-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                  >
                    <img src={r.cover} alt={r.coverAlt} loading="lazy" className="h-20 w-20 flex-none rounded-2xl object-cover" />
                    <div>
                      <h3 className="font-heading text-sm font-bold text-graphite-900 group-hover:text-accent">{r.title}</h3>
                      <p className="mt-1 line-clamp-2 text-xs text-graphite-500">{r.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
