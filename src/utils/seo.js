import { SITE_NAME, SITE_URL } from '../data/static.js';

export function buildPageTitle(pageTitle) {
  if (!pageTitle) return SITE_NAME;
  return `${pageTitle} · ${SITE_NAME}`;
}

export function buildCanonical(pathname) {
  if (!pathname || pathname === '/') return SITE_URL;
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${SITE_URL}${path}`;
}

export function buildChurchSchema(settings) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Church',
    name: SITE_NAME,
    description:
      'Anglican parish church in Chelsea, in the Catholic tradition of the Church of England. Grade I listed Arts and Crafts building by John Dando Sedding.',
    url: SITE_URL,
    telephone: settings?.phone || '020 7730 7270',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '146 Sloane Street',
      addressLocality: 'Chelsea',
      addressRegion: 'London',
      postalCode: 'SW1X 9BZ',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.4926,
      longitude: -0.1574,
    },
    openingHours: 'Mo-Sa 10:00-17:00',
    sameAs: [
      settings?.instagramUrl || 'https://instagram.com/sloanechurch',
      settings?.facebookUrl || 'https://facebook.com/sloanechurch',
    ],
  };
}

export function buildEventSchema(event) {
  if (!event) return null;
  const startDate = event.date ? new Date(event.date).toISOString() : undefined;
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.description,
    startDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: SITE_NAME,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '146 Sloane Street',
        addressLocality: 'Chelsea',
        addressRegion: 'London',
        postalCode: 'SW1X 9BZ',
        addressCountry: 'GB',
      },
    },
    image: event.imageUrl,
    organizer: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    offers: event.ticketUrl
      ? {
          '@type': 'Offer',
          url: event.ticketUrl,
          price: event.price || '0',
          priceCurrency: 'GBP',
          availability: 'https://schema.org/InStock',
        }
      : undefined,
  };
}

export function buildArticleSchema(post) {
  if (!post) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    image: post.featuredImageUrl,
    author: post.author
      ? { '@type': 'Person', name: post.author }
      : { '@type': 'Organization', name: SITE_NAME },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
