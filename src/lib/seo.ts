import { Metadata } from 'next';
import { getCanonicalUrl, getHreflangTags, SupportedLocale } from './i18n';
import { extractTextFromPortableText } from './portable-text-utils';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  images?: Array<{
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }>;
  locale?: SupportedLocale;
  noIndex?: boolean;
  noFollow?: boolean;
  openGraph?: {
    title?: string;
    description?: string;
    type?: string;
    url?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
    siteName?: string;
    locale?: string;
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    title?: string;
    description?: string;
    images?: string[];
    creator?: string;
    site?: string;
  };
  structuredData?: any;
}

export function buildMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    images = [],
    locale = 'en',
    noIndex = false,
    noFollow = true,
    openGraph,
    twitter,
    structuredData,
  } = config;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fairwayhotels.com';
  const canonicalUrl = canonical || getCanonicalUrl('', locale);
  const hreflangs = getHreflangTags('');

  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Fairway Hotels' }],
    creator: 'Fairway Hotels',
    publisher: 'Fairway Hotels',
    robots: {
      index: !noIndex,
      follow: !noFollow,
      googleBot: {
        index: !noIndex,
        follow: !noFollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
      languages: hreflangs,
    },
    openGraph: {
      title: openGraph?.title || title,
      description: openGraph?.description || description,
      type: openGraph?.type || 'website',
      url: openGraph?.url || canonicalUrl,
      siteName: openGraph?.siteName || 'Fairway Hotels',
      locale: openGraph?.locale || 'en_US',
      images: openGraph?.images || images,
    },
    twitter: {
      card: twitter?.card || 'summary_large_image',
      title: twitter?.title || title,
      description: twitter?.description || description,
      images: twitter?.images || images.map(img => img.url),
      creator: twitter?.creator || '@fairwayhotels',
      site: twitter?.site || '@fairwayhotels',
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    },
  };

  return metadata;
}

export function buildHotelMetadata(hotel: {
  name: string;
  description: string;
  slug: string;
  images: string[];
  address: {
    city: string;
    region: string;
    country: string;
  };
  rating?: number;
  amenities?: string[];
}): Metadata {
  const keywords = [
    'hotel',
    hotel.name,
    hotel.address.city,
    hotel.address.region,
    hotel.address.country,
    'accommodation',
    'luxury',
    'Sri Lanka',
    ...(hotel.amenities || []),
  ];

  return buildMetadata({
    title: `${hotel.name} - Luxury Hotel in ${hotel.address.city}, ${hotel.address.country}`,
    description: hotel.description,
    keywords,
    canonical: `/hotels/${hotel.slug}`,
    images: hotel.images.map(url => ({
      url,
      alt: `${hotel.name} - Luxury Hotel`,
    })),
    openGraph: {
      type: 'website',
      siteName: 'Fairway Hotels',
    },
    twitter: {
      card: 'summary_large_image',
    },
  });
}

export function buildTourMetadata(tour: {
  title: string;
  description: any; // PortableText content
  slug: string;
  images: string[];
  durationDays?: number;
  locations?: string[];
  tags?: string[];
}): Metadata {
  const keywords = [
    'tour',
    'travel',
    'Sri Lanka',
    'package',
    'vacation',
    'holiday',
    'adventure',
    ...(tour.locations || []),
    ...(tour.tags || []),
  ];

  const descriptionText = extractTextFromPortableText(tour.description);

  return buildMetadata({
    title: `${tour.title} - Tour Package in Sri Lanka`,
    description: descriptionText,
    keywords,
    canonical: `/tours/${tour.slug}`,
    images: tour.images.map(url => ({
      url,
      alt: `${tour.title} - Tour Package`,
    })),
    openGraph: {
      type: 'website',
      siteName: 'Fairway Hotels',
    },
    twitter: {
      card: 'summary_large_image',
    },
  });
}

export function buildBlogMetadata(post: {
  title: string;
  excerpt: string;
  slug: string;
  heroImage?: string;
  tags?: string[];
  publishedAt: string;
  author?: string;
}): Metadata {
  const keywords = [
    'blog',
    'travel',
    'Sri Lanka',
    'hotels',
    'tours',
    post.title,
    ...(post.tags || []),
  ];

  const images = post.heroImage ? [{ url: post.heroImage, alt: post.title }] : [];

  return buildMetadata({
    title: `${post.title} - Fairway Hotels Blog`,
    description: post.excerpt,
    keywords,
    canonical: `/blog/${post.slug}`,
    images,
    openGraph: {
      type: 'article',
      siteName: 'Fairway Hotels',
    },
    twitter: {
      card: 'summary_large_image',
    },
  });
}

export function buildPageMetadata(page: {
  title: string;
  description: string;
  path: string;
  images?: string[];
}): Metadata {
  return buildMetadata({
    title: page.title,
    description: page.description,
    canonical: page.path,
    images: page.images,
    openGraph: {
      type: 'website',
      siteName: 'Fairway Hotels',
    },
    twitter: {
      card: 'summary_large_image',
    },
  });
}

export function generateStructuredData(data: {
  type: 'hotel' | 'tour' | 'blog' | 'organization' | 'website';
  [key: string]: any;
}): any {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': data.type.charAt(0).toUpperCase() + data.type.slice(1),
  };

  switch (data.type) {
    case 'hotel':
      return {
        ...baseData,
        '@type': 'Hotel',
        name: data.name,
        description: data.description,
        url: data.url,
        image: data.images,
        address: {
          '@type': 'PostalAddress',
          streetAddress: data.address?.street,
          addressLocality: data.address?.city,
          addressRegion: data.address?.region,
          addressCountry: data.address?.country,
          postalCode: data.address?.postalCode,
        },
        geo: data.geo && {
          '@type': 'GeoCoordinates',
          latitude: data.geo.lat,
          longitude: data.geo.lng,
        },
        aggregateRating: data.rating && {
          '@type': 'AggregateRating',
          ratingValue: data.rating,
          reviewCount: data.reviewCount || 20,
        },
        amenityFeature: data.amenities?.map((amenity: string) => ({
          '@type': 'LocationFeatureSpecification',
          name: amenity,
        })),
      };

    case 'tour':
      return {
        ...baseData,
        '@type': 'TouristTrip',
        name: data.title,
        description: data.description,
        url: data.url,
        image: data.images,
        duration: data.durationDays && `P${data.durationDays}D`,
        location: data.locations?.map((location: string) => ({
          '@type': 'Place',
          name: location,
        })),
        offers: {
          '@type': 'Offer',
          price: data.priceFrom,
          priceCurrency: data.currency || 'USD',
          availability: 'https://schema.org/InStock',
        },
      };

    case 'blog':
      return {
        ...baseData,
        '@type': 'BlogPosting',
        headline: data.title,
        description: data.description,
        url: data.url,
        image: data.images,
        datePublished: data.publishedAt,
        author: data.author && {
          '@type': 'Person',
          name: data.author,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Fairway Hotels',
          logo: {
            '@type': 'ImageObject',
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
          },
        },
      };

    case 'organization':
      return {
        ...baseData,
        '@type': 'Organization',
        name: 'Fairway Hotels',
        description: 'Luxury hotels and tours in Sri Lanka',
        url: process.env.NEXT_PUBLIC_SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+94-11-234-5678',
          contactType: 'customer service',
          areaServed: 'LK',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Colombo',
          addressRegion: 'Western Province',
          addressCountry: 'LK',
        },
      };

    case 'website':
      return {
        ...baseData,
        '@type': 'WebSite',
        name: 'Fairway Hotels',
        description: 'Luxury hotels and tours in Sri Lanka',
        url: process.env.NEXT_PUBLIC_SITE_URL,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      };

    default:
      return baseData;
  }
}

export function generateBreadcrumbData(items: Array<{
  name: string;
  url: string;
}>): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateLocalBusinessData(business: {
  name: string;
  description: string;
  address: {
    street: string;
    city: string;
    region: string;
    country: string;
    postalCode?: string;
  };
  phone: string;
  email: string;
  website: string;
  geo?: {
    lat: number;
    lng: number;
  };
}): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    description: business.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
      postalCode: business.address.postalCode,
    },
    telephone: business.phone,
    email: business.email,
    url: business.website,
    geo: business.geo && {
      '@type': 'GeoCoordinates',
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    openingHours: 'Mo-Su 00:00-23:59',
    priceRange: '$$',
  };
}
