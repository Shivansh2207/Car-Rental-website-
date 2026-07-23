import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import siteData from '@/data/siteData';

interface SeoProps {
  title: string;
  description: string;
  /** Path beginning with '/', e.g. '/about'. Used for canonical + OG url */
  path?: string;
  ogImage?: string;
  /** 'website' | 'article' etc. */
  type?: string;
  /** Optional JSON-LD object(s) rendered as <script type="application/ld+json"> */
  jsonLd?: object | object[];
  noindex?: boolean;
}

/**
 * Lightweight SEO component: manages <title>, meta description, canonical,
 * Open Graph, Twitter card and optional JSON-LD structured data.
 * Uses native DOM APIs (no react-helmet dependency).
 */
export default function Seo({
  title,
  description,
  path = '/',
  ogImage,
  type = 'website',
  jsonLd,
  noindex = false,
}: SeoProps) {
  const { pathname } = useLocation();
  const url = `${siteData.url}${path === '/' ? '/' : path}`;

  useEffect(() => {
    document.title = title;

    const ensureMeta = (selector: string, create: () => HTMLMetaElement) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = create();
        document.head.appendChild(el);
      }
      return el;
    };

    ensureMeta('meta[name="description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      return m;
    }).setAttribute('content', description);

    // robots
    ensureMeta('meta[name="robots"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'robots');
      return m;
    }).setAttribute('content', noindex ? 'noindex,nofollow' : 'index,follow');

    // canonical
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Open Graph
    const og = (property: string, content: string) => {
      const el = ensureMeta(`meta[property="${property}"]`, () => {
        const m = document.createElement('meta');
        m.setAttribute('property', property);
        return m;
      });
      el.setAttribute('content', content);
    };
    og('og:title', title);
    og('og:description', description);
    og('og:type', type);
    og('og:url', url);
    og('og:site_name', siteData.company.name);
    if (ogImage) og('og:image', ogImage);

    // Twitter
    const tw = (name: string, content: string) => {
      const el = ensureMeta(`meta[name="${name}"]`, () => {
        const m = document.createElement('meta');
        m.setAttribute('name', name);
        return m;
      });
      el.setAttribute('content', content);
    };
    tw('twitter:card', 'summary_large_image');
    tw('twitter:title', title);
    tw('twitter:description', description);
    if (ogImage) tw('twitter:image', ogImage);

    // JSON-LD
    const ldId = 'seo-jsonld';
    document.getElementById(ldId)?.remove();
    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = ldId;
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    // we depend on pathname to re-run on navigation
  }, [title, description, path, url, ogImage, type, jsonLd, noindex, pathname]);

  return null;
}
