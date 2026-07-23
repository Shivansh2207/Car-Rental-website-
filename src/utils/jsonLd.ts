import siteData from '@/data/siteData';

/** Local business structured data — site-wide */
export function localBusinessLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRental',
    name: siteData.company.name,
    description: siteData.company.statement,
    url: siteData.url,
    telephone: siteData.contact.phone,
    email: siteData.contact.email,
    areaServed: siteData.serviceArea.areas,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteData.contact.address.line1,
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    openingHours: 'Mo-Su 00:00-23:59',
    priceRange: '₹₹',
  };
}

/** Breadcrumb structured data */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteData.url}${item.path === '/' ? '/' : item.path}`,
    })),
  };
}

/** Article structured data for blog posts */
export function articleLd(post: {
  title: string;
  description: string;
  slug: string;
  image: string;
  datePublished: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.datePublished,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@type': 'Organization', name: siteData.company.name },
    mainEntityOfPage: `${siteData.url}/travel-guides/${post.slug}`,
  };
}
