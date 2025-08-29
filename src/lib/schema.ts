// JSON-LD Schema builders for SEO and structured data
// https://schema.org/

export interface HotelSchema {
  name: string;
  description: string;
  url: string;
  image: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  priceRange: string;
  rating: number;
  reviewCount: number;
  amenities: string[];
  roomTypes: string[];
  checkInTime: string;
  checkOutTime: string;
  phone: string;
  email: string;
  website: string;
}

export interface TourSchema {
  name: string;
  description: string;
  url: string;
  image: string;
  price: number;
  currency: string;
  duration: string;
  durationDays: number;
  rating: number;
  reviewCount: number;
  locations: string[];
  highlights: string[];
  included: string[];
  excluded: string[];
  departurePoint: string;
  departureTime: string;
  maxGroupSize: number;
  minAge: number;
  difficulty: string;
  category: string;
}

export interface BlogPostSchema {
  headline: string;
  description: string;
  url: string;
  image: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: {
    name: string;
    logo: string;
  };
  datePublished: string;
  dateModified: string;
  mainEntityOfPage: string;
  articleSection: string;
  keywords: string[];
}

export interface OrganizationSchema {
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    telephone: string;
    contactType: string;
    areaServed: string;
    availableLanguage: string[];
  };
  sameAs: string[];
  foundingDate: string;
  numberOfEmployees: string;
  industry: string;
  serviceType: string;
}

export interface WebsiteSchema {
  name: string;
  url: string;
  description: string;
  searchUrl: string;
  publisher: {
    name: string;
    logo: string;
  };
}

export interface BreadcrumbSchema {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export interface FAQSchema {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export interface LocalBusinessSchema {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
  priceRange: string;
  acceptsReservations: boolean;
  servesCuisine: string[];
  hasMenu: string;
  paymentAccepted: string[];
  curbsidePickup: boolean;
  delivery: boolean;
  takeout: boolean;
}

export interface EventSchema {
  name: string;
  description: string;
  url: string;
  image: string;
  startDate: string;
  endDate: string;
  location: {
    name: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
  };
  organizer: {
    name: string;
    url: string;
  };
  performer: string[];
  offers: {
    price: number;
    priceCurrency: string;
    availability: string;
    validFrom: string;
    url: string;
  };
  eventStatus: string;
  eventAttendanceMode: string;
  maximumAttendeeCapacity: number;
}

export interface ReviewSchema {
  itemReviewed: {
    name: string;
    type: string;
  };
  reviewRating: {
    ratingValue: number;
    bestRating: number;
    worstRating: number;
  };
  author: {
    name: string;
    type: string;
  };
  reviewBody: string;
  datePublished: string;
  reviewAspect: string[];
}

export interface AggregateRatingSchema {
  itemReviewed: {
    name: string;
    type: string;
  };
  ratingValue: number;
  bestRating: number;
  worstRating: number;
  ratingCount: number;
  reviewCount: number;
}

export interface ProductSchema {
  name: string;
  description: string;
  url: string;
  image: string;
  brand: {
    name: string;
    type: string;
  };
  category: string;
  offers: {
    price: number;
    priceCurrency: string;
    availability: string;
    validFrom: string;
    url: string;
    seller: {
      name: string;
      type: string;
    };
  };
  aggregateRating?: AggregateRatingSchema;
  review?: ReviewSchema[];
}

export interface ServiceSchema {
  name: string;
  description: string;
  url: string;
  provider: {
    name: string;
    type: string;
  };
  areaServed: string[];
  serviceType: string;
  offers: {
    price: number;
    priceCurrency: string;
    availability: string;
    validFrom: string;
    url: string;
  };
}

export interface PlaceSchema {
  name: string;
  description: string;
  url: string;
  image: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  telephone: string;
  email: string;
  openingHours: string[];
  priceRange: string;
  acceptsReservations: boolean;
  servesCuisine: string[];
  hasMenu: string;
  paymentAccepted: string[];
  curbsidePickup: boolean;
  delivery: boolean;
  takeout: boolean;
}

export interface TravelAgencySchema {
  name: string;
  description: string;
  url: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone: string;
  email: string;
  openingHours: string[];
  priceRange: string;
  acceptsReservations: boolean;
  servesCuisine: string[];
  hasMenu: string;
  paymentAccepted: string[];
  curbsidePickup: boolean;
  delivery: boolean;
  takeout: boolean;
}

// Schema builders
export function generateHotelSchema(data: HotelSchema) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: data.name,
    ...(data.description && { description: data.description }),
    ...(data.url && { url: data.url }),
    ...(data.image && { image: data.image }),
  };

  if (data.address) {
    schema.address = {
      '@type': 'PostalAddress',
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    };
  }

  if (data.geo && typeof data.geo.latitude === 'number' && typeof data.geo.longitude === 'number') {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: data.geo.latitude,
      longitude: data.geo.longitude,
    };
  }

  if (data.priceRange) schema.priceRange = data.priceRange;

  if (typeof data.rating === 'number') {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: data.rating,
      reviewCount: data.reviewCount ?? 0,
      bestRating: 5,
      worstRating: 1,
    };
  }

  if (Array.isArray(data.amenities) && data.amenities.length > 0) {
    schema.amenityFeature = data.amenities.map(amenity => ({
      '@type': 'LocationFeatureSpecification',
      name: amenity,
    }));
  }

  if (Array.isArray(data.roomTypes)) {
    schema.numberOfRooms = data.roomTypes.length;
  }

  if (data.checkInTime) schema.checkinTime = data.checkInTime;
  if (data.checkOutTime) schema.checkoutTime = data.checkOutTime;
  if (data.phone) schema.telephone = data.phone;
  if (data.email) schema.email = data.email;
  if (data.website) schema.website = data.website;

  schema.acceptsReservations = true;
  schema.hasMap = Boolean(schema.geo);
  schema.openingHours = '24/7';

  return schema;
}

export function generateTourSchema(data: TourSchema) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: data.name,
  };

  if (data.description) schema.description = data.description;
  if (data.url) schema.url = data.url;
  if (data.image) schema.image = data.image;

  if (typeof data.price === 'number' && data.currency && data.url) {
    schema.offers = {
      '@type': 'Offer',
      price: data.price,
      priceCurrency: data.currency,
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString(),
      url: data.url,
    };
  }

  if (typeof data.durationDays === 'number') {
    schema.duration = `PT${data.durationDays * 24}H`;
  }

  schema.tourBookingMode = 'https://schema.org/OnSite';

  if (data.departurePoint) {
    schema.departurePoint = {
      '@type': 'Place',
      name: data.departurePoint,
    };
  }

  if (data.departureTime) schema.departureTime = data.departureTime;
  if (typeof data.maxGroupSize === 'number') schema.maximumAttendeeCapacity = data.maxGroupSize;
  if (typeof data.minAge === 'number') {
    schema.suggestedAge = {
      '@type': 'QuantitativeValue',
      minValue: data.minAge,
    };
  }
  if (data.difficulty) schema.difficulty = data.difficulty;
  if (data.category) schema.category = data.category;

  if (Array.isArray(data.locations) && data.locations.length > 0) {
    schema.location = data.locations.map(location => ({
      '@type': 'Place',
      name: location,
    }));
  }

  if (Array.isArray(data.highlights)) schema.highlights = data.highlights;
  if (Array.isArray(data.included)) schema.included = data.included;
  if (Array.isArray(data.excluded)) schema.excluded = data.excluded;

  return schema;
}

export function generateBlogPostSchema(data: BlogPostSchema) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.headline,
  };

  if (data.description) schema.description = data.description;
  if (data.url) schema.url = data.url;
  if (data.image) schema.image = data.image;

  if (data.author && data.author.name) {
    schema.author = {
      '@type': 'Person',
      name: data.author.name,
      ...(data.author.url ? { url: data.author.url } : {}),
    };
  }

  if (data.publisher && data.publisher.name) {
    schema.publisher = {
      '@type': 'Organization',
      name: data.publisher.name,
      ...(data.publisher.logo
        ? {
            logo: {
              '@type': 'ImageObject',
              url: data.publisher.logo,
            },
          }
        : {}),
    };
  }

  if (data.datePublished) schema.datePublished = data.datePublished;
  if (data.dateModified) schema.dateModified = data.dateModified;
  if (data.mainEntityOfPage) {
    schema.mainEntityOfPage = {
      '@type': 'WebPage',
      '@id': data.mainEntityOfPage,
    };
  }
  if (data.articleSection) schema.articleSection = data.articleSection;
  if (Array.isArray(data.keywords)) schema.keywords = data.keywords.join(', ');

  return schema;
}

export function generateOrganizationSchema(data: OrganizationSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    url: data.url,
    logo: {
      '@type': 'ImageObject',
      url: data.logo,
    },
    description: data.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: data.contactPoint.telephone,
      contactType: data.contactPoint.contactType,
      areaServed: data.contactPoint.areaServed,
      availableLanguage: data.contactPoint.availableLanguage,
    },
    sameAs: data.sameAs,
    foundingDate: data.foundingDate,
    numberOfEmployees: data.numberOfEmployees,
    industry: data.industry,
    serviceType: data.serviceType,
  };
}

export function generateWebsiteSchema(data: WebsiteSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: data.name,
    url: data.url,
    description: data.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: data.searchUrl,
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: data.publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: data.publisher.logo,
      },
    },
  };
}

export function generateBreadcrumbSchema(data: BreadcrumbSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: data.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(data: FAQSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.questions.map(question => ({
      '@type': 'Question',
      name: question.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: question.answer,
      },
    })),
  };
}

export function generateLocalBusinessSchema(data: LocalBusinessSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.telephone,
    email: data.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: data.geo.latitude,
      longitude: data.geo.longitude,
    },
    openingHours: data.openingHours,
    priceRange: data.priceRange,
    acceptsReservations: data.acceptsReservations,
    servesCuisine: data.servesCuisine,
    hasMenu: data.hasMenu,
    paymentAccepted: data.paymentAccepted,
    curbsidePickup: data.curbsidePickup,
    delivery: data.delivery,
    takeout: data.takeout,
  };
}

export function generateEventSchema(data: EventSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: data.name,
    description: data.description,
    url: data.url,
    image: data.image,
    startDate: data.startDate,
    endDate: data.endDate,
    location: {
      '@type': 'Place',
      name: data.location.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: data.location.address.streetAddress,
        addressLocality: data.location.address.addressLocality,
        addressRegion: data.location.address.addressRegion,
        postalCode: data.location.address.postalCode,
        addressCountry: data.location.address.addressCountry,
      },
    },
    organizer: {
      '@type': 'Organization',
      name: data.organizer.name,
      url: data.organizer.url,
    },
    performer: data.performer.map(performer => ({
      '@type': 'Person',
      name: performer,
    })),
    offers: {
      '@type': 'Offer',
      price: data.offers.price,
      priceCurrency: data.offers.priceCurrency,
      availability: data.offers.availability,
      validFrom: data.offers.validFrom,
      url: data.offers.url,
    },
    eventStatus: data.eventStatus,
    eventAttendanceMode: data.eventAttendanceMode,
    maximumAttendeeCapacity: data.maximumAttendeeCapacity,
  };
}

export function generateReviewSchema(data: ReviewSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': data.itemReviewed.type,
      name: data.itemReviewed.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: data.reviewRating.ratingValue,
      bestRating: data.reviewRating.bestRating,
      worstRating: data.reviewRating.worstRating,
    },
    author: {
      '@type': data.author.type,
      name: data.author.name,
    },
    reviewBody: data.reviewBody,
    datePublished: data.datePublished,
    reviewAspect: data.reviewAspect,
  };
}

export function generateAggregateRatingSchema(data: AggregateRatingSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': data.itemReviewed.type,
      name: data.itemReviewed.name,
    },
    ratingValue: data.ratingValue,
    bestRating: data.bestRating,
    worstRating: data.worstRating,
    ratingCount: data.ratingCount,
    reviewCount: data.reviewCount,
  };
}

export function generateProductSchema(data: ProductSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.name,
    description: data.description,
    url: data.url,
    image: data.image,
    brand: {
      '@type': data.brand.type,
      name: data.brand.name,
    },
    category: data.category,
    offers: {
      '@type': 'Offer',
      price: data.offers.price,
      priceCurrency: data.offers.priceCurrency,
      availability: data.offers.availability,
      validFrom: data.offers.validFrom,
      url: data.offers.url,
      seller: {
        '@type': data.offers.seller.type,
        name: data.offers.seller.name,
      },
    },
    ...(data.aggregateRating && { aggregateRating: generateAggregateRatingSchema(data.aggregateRating) }),
    ...(data.review && { review: data.review.map(review => generateReviewSchema(review)) }),
  };
}

export function generateServiceSchema(data: ServiceSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.name,
    description: data.description,
    url: data.url,
    provider: {
      '@type': data.provider.type,
      name: data.provider.name,
    },
    areaServed: data.areaServed.map(area => ({
      '@type': 'Country',
      name: area,
    })),
    serviceType: data.serviceType,
    offers: {
      '@type': 'Offer',
      price: data.offers.price,
      priceCurrency: data.offers.priceCurrency,
      availability: data.offers.availability,
      validFrom: data.offers.validFrom,
      url: data.offers.url,
    },
  };
}

export function generatePlaceSchema(data: PlaceSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: data.name,
    description: data.description,
    url: data.url,
    image: data.image,
    address: {
      '@type': 'PostalAddress',
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: data.geo.latitude,
      longitude: data.geo.longitude,
    },
    telephone: data.telephone,
    email: data.email,
    openingHours: data.openingHours,
    priceRange: data.priceRange,
    acceptsReservations: data.acceptsReservations,
    servesCuisine: data.servesCuisine,
    hasMenu: data.hasMenu,
    paymentAccepted: data.paymentAccepted,
    curbsidePickup: data.curbsidePickup,
    delivery: data.delivery,
    takeout: data.takeout,
  };
}

export function generateTravelAgencySchema(data: TravelAgencySchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: data.name,
    description: data.description,
    url: data.url,
    address: {
      '@type': 'PostalAddress',
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    },
    telephone: data.telephone,
    email: data.email,
    openingHours: data.openingHours,
    priceRange: data.priceRange,
    acceptsReservations: data.acceptsReservations,
    servesCuisine: data.servesCuisine,
    hasMenu: data.hasMenu,
    paymentAccepted: data.paymentAccepted,
    curbsidePickup: data.curbsidePickup,
    delivery: data.delivery,
    takeout: data.takeout,
  };
}

// Utility function to generate schemas from options
export function generateSchemasFromOptions(options: {
  includeOrganization?: boolean;
  includeWebsite?: boolean;
  includeLocalBusiness?: boolean;
  blog?: any;
  hotel?: any;
  tour?: any;
  type?: string;
  title?: string;
  description?: string;
  url?: string;
  images?: string[];
  breadcrumbs?: BreadcrumbSchema;
  [key: string]: any;
}) {
  const schemas: Array<() => any> = [];
  
  if (options.breadcrumbs) {
    schemas.push(() => generateBreadcrumbSchema(options.breadcrumbs!));
  }
  
  if (options.includeOrganization) {
    schemas.push(() => generateOrganizationSchema({
      name: 'Fairway Hotels',
      url: 'https://fairwayhotels.com',
      logo: 'https://fairwayhotels.com/logo.png',
      description: 'Luxury hotels and tours in Sri Lanka',
      address: {
        streetAddress: '123 Galle Road',
        addressLocality: 'Colombo',
        addressRegion: 'Western Province',
        postalCode: '00300',
        addressCountry: 'LK',
      },
      contactPoint: {
        telephone: '+94-11-234-5678',
        contactType: 'customer service',
        areaServed: 'LK',
        availableLanguage: ['English', 'Sinhala', 'Tamil'],
      },
      sameAs: [
        'https://www.facebook.com/fairwayhotels',
        'https://www.twitter.com/fairwayhotels',
        'https://www.instagram.com/fairwayhotels',
        'https://www.linkedin.com/company/fairwayhotels',
      ],
      foundingDate: '2010',
      numberOfEmployees: '100-500',
      industry: 'Hospitality',
      serviceType: 'Hotel and Tour Services',
    }));
  }
  
  if (options.includeWebsite) {
    schemas.push(() => generateWebsiteSchema({
      name: 'Fairway Hotels',
      url: 'https://fairwayhotels.com',
      description: 'Luxury hotels and tours in Sri Lanka',
      searchUrl: 'https://fairwayhotels.com/search',
      publisher: {
        name: 'Fairway Hotels',
        logo: 'https://fairwayhotels.com/logo.png',
      },
    }));
  }
  
  if (options.includeLocalBusiness) {
    schemas.push(() => generateLocalBusinessSchema({
      name: 'Fairway Hotels',
      description: 'Luxury hotels and tours in Sri Lanka',
      url: 'https://fairwayhotels.com',
      telephone: '+94-11-234-5678',
      email: 'info@fairwayhotels.com',
      address: {
        streetAddress: '123 Galle Road',
        addressLocality: 'Colombo',
        addressRegion: 'Western Province',
        postalCode: '00300',
        addressCountry: 'LK',
      },
      geo: {
        latitude: 6.9271,
        longitude: 79.8612,
      },
      openingHours: ['Mo-Su 00:00-23:59'],
      priceRange: '$$$',
      acceptsReservations: true,
      servesCuisine: ['International', 'Sri Lankan', 'Asian'],
      hasMenu: 'https://fairwayhotels.com/menu',
      paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
      curbsidePickup: false,
      delivery: false,
      takeout: false,
    }));
  }
  
  if (options.blog) {
    schemas.push(() => generateBlogPostSchema(options.blog));
  }
  
  if (options.hotel) {
    schemas.push(() => generateHotelSchema(options.hotel));
  }
  
  if (options.tour) {
    schemas.push(() => generateTourSchema(options.tour));
  }
  
  // For custom properties like type, title, description, url, images
  // These are passed through but don't generate specific schemas
  // They can be used by the calling code for other purposes
  
  return generatePageSchemas(schemas);
}

// Utility function to generate multiple schemas
export function generatePageSchemas(schemas: Array<() => any>) {
  return schemas.map(schema => schema());
}

// Common schema combinations
export function generateHotelPageSchemas(hotel: HotelSchema, breadcrumbs: BreadcrumbSchema) {
  return generatePageSchemas([
    () => generateHotelSchema(hotel),
    () => generateBreadcrumbSchema(breadcrumbs),
    () => generateOrganizationSchema({
      name: 'Fairway Hotels',
      url: 'https://fairwayhotels.com',
      logo: 'https://fairwayhotels.com/logo.png',
      description: 'Luxury hotels and tours in Sri Lanka',
      address: {
        streetAddress: '123 Galle Road',
        addressLocality: 'Colombo',
        addressRegion: 'Western Province',
        postalCode: '00300',
        addressCountry: 'LK',
      },
      contactPoint: {
        telephone: '+94-11-234-5678',
        contactType: 'customer service',
        areaServed: 'LK',
        availableLanguage: ['English', 'Sinhala', 'Tamil'],
      },
      sameAs: [
        'https://www.facebook.com/fairwayhotels',
        'https://www.twitter.com/fairwayhotels',
        'https://www.instagram.com/fairwayhotels',
        'https://www.linkedin.com/company/fairwayhotels',
      ],
      foundingDate: '2010',
      numberOfEmployees: '100-500',
      industry: 'Hospitality',
      serviceType: 'Hotel and Tour Services',
    }),
  ]);
}

export function generateTourPageSchemas(tour: TourSchema, breadcrumbs: BreadcrumbSchema) {
  return generatePageSchemas([
    () => generateTourSchema(tour),
    () => generateBreadcrumbSchema(breadcrumbs),
    () => generateOrganizationSchema({
      name: 'Fairway Hotels',
      url: 'https://fairwayhotels.com',
      logo: 'https://fairwayhotels.com/logo.png',
      description: 'Luxury hotels and tours in Sri Lanka',
      address: {
        streetAddress: '123 Galle Road',
        addressLocality: 'Colombo',
        addressRegion: 'Western Province',
        postalCode: '00300',
        addressCountry: 'LK',
      },
      contactPoint: {
        telephone: '+94-11-234-5678',
        contactType: 'customer service',
        areaServed: 'LK',
        availableLanguage: ['English', 'Sinhala', 'Tamil'],
      },
      sameAs: [
        'https://www.facebook.com/fairwayhotels',
        'https://www.twitter.com/fairwayhotels',
        'https://www.instagram.com/fairwayhotels',
        'https://www.linkedin.com/company/fairwayhotels',
      ],
      foundingDate: '2010',
      numberOfEmployees: '100-500',
      industry: 'Hospitality',
      serviceType: 'Hotel and Tour Services',
    }),
  ]);
}

export function generateBlogPageSchemas(post: BlogPostSchema, breadcrumbs: BreadcrumbSchema) {
  return generatePageSchemas([
    () => generateBlogPostSchema(post),
    () => generateBreadcrumbSchema(breadcrumbs),
    () => generateOrganizationSchema({
      name: 'Fairway Hotels',
      url: 'https://fairwayhotels.com',
      logo: 'https://fairwayhotels.com/logo.png',
      description: 'Luxury hotels and tours in Sri Lanka',
      address: {
        streetAddress: '123 Galle Road',
        addressLocality: 'Colombo',
        addressRegion: 'Western Province',
        postalCode: '00300',
        addressCountry: 'LK',
      },
      contactPoint: {
        telephone: '+94-11-234-5678',
        contactType: 'customer service',
        areaServed: 'LK',
        availableLanguage: ['English', 'Sinhala', 'Tamil'],
      },
      sameAs: [
        'https://www.facebook.com/fairwayhotels',
        'https://www.twitter.com/fairwayhotels',
        'https://www.instagram.com/fairwayhotels',
        'https://www.linkedin.com/company/fairwayhotels',
      ],
      foundingDate: '2010',
      numberOfEmployees: '100-500',
      industry: 'Hospitality',
      serviceType: 'Hotel and Tour Services',
    }),
  ]);
}
