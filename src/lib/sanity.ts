import { createClient } from '@sanity/client';
import { config } from './config';
import imageUrlBuilder from '@sanity/image-url';

// Create Sanity client
export const sanityClient = createClient({
  projectId: config.sanity.projectId,
  dataset: config.sanity.dataset,
  apiVersion: config.sanity.apiVersion,
  useCdn: config.sanity.useCdn,
  token: config.sanity.token,
});

// Check if Sanity is properly configured
export const isSanityConfigured = () => {
  // Allow reading without a token when the dataset is public
  const isConfigured = Boolean(
    config.sanity.projectId &&
    config.sanity.projectId !== 'dummy'
  );
  
  if (!isConfigured) {
    console.warn('Sanity configuration check failed:', {
      projectId: config.sanity.projectId,
      dataset: config.sanity.dataset,
      hasToken: !!config.sanity.token
    });
  }
  
  return isConfigured;
};

// Create write client for mutations
export const sanityWriteClient = createClient({
  projectId: config.sanity.projectId,
  dataset: config.sanity.dataset,
  apiVersion: config.sanity.apiVersion,
  useCdn: false, // Never use CDN for mutations
  token: config.sanity.writeToken,
});

// Image URL builder
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ queries
export const hotelQueries = {
  // Get all hotels
  all: `*[_type == "hotel" && isActive == true] | order(featured desc, order asc) {
    _id,
    title,
    slug,
    locale,
    summary,
    rating,
    amenities,
    heroImage,
    images,
    address,
    contact,
    "priceFrom": rooms[0].priceFrom
  }`,
  
  // Get hotels by locale
  byLocale: (locale: string) => `*[_type == "hotel" && locale == $locale && isActive == true] | order(featured desc, order asc) {
    _id,
    title,
    slug,
    locale,
    summary,
    rating,
    amenities,
    heroImage,
    images,
    address,
    contact,
    "priceFrom": rooms[0].priceFrom
  }`,
  
  // Get featured hotels
  featured: `*[_type == "hotel" && featured == true && isActive == true] | order(order asc) {
    _id,
    title,
    slug,
    locale,
    summary,
    rating,
    amenities,
    heroImage,
    address,
    "priceFrom": rooms[0].priceFrom
  }`,
  
  // Get single hotel by slug
  bySlug: (slug: string, locale: string) => `*[_type == "hotel" && slug.current == $slug && locale == $locale && isActive == true][0] {
    _id,
    title,
    slug,
    locale,
    description,
    summary,
    rating,
    amenities,
    heroImage,
    images,
    address,
    contact,
    policies,
    rooms[]{
      name,
      description,
      sleeps,
      priceFrom,
      currency,
      images[]{
        url,
        alt
      },
      amenities
    },
    nearby[]->{
      _id,
      name,
      slug,
      summary,
      type,
      geo
    },
    seo
  }`,
  
  // Get hotels by city
  byCity: (city: string, locale: string) => `*[_type == "hotel" && address.city == $city && locale == $locale && isActive == true] | order(featured desc, order asc) {
    _id,
    title,
    slug,
    locale,
    summary,
    rating,
    amenities,
    heroImage,
    address,
    "priceFrom": rooms[0].priceFrom
  }`,
};

export const tourQueries = {
  // Get all tours
  all: `*[_type == "tour" && isActive == true] | order(featured desc, order asc) {
    _id,
    title,
    slug,
    locale,
    summary,
    durationDays,
    priceFrom,
    currency,
    heroImage,
    images,
    difficulty,
    groupSize,
    locations[]->{
      _id,
      name,
      slug,
      type
    }
  }`,
  
  // Get tours by locale
  byLocale: (locale: string) => `*[_type == "tour" && locale == $locale && isActive == true] | order(featured desc, order asc) {
    _id,
    title,
    slug,
    locale,
    summary,
    durationDays,
    priceFrom,
    currency,
    heroImage,
    images,
    difficulty,
    groupSize,
    locations[]->{
      _id,
      name,
      slug,
      type
    }
  }`,
  
  // Get featured tours
  featured: `*[_type == "tour" && featured == true && isActive == true] | order(order asc) {
    _id,
    title,
    slug,
    locale,
    summary,
    durationDays,
    priceFrom,
    currency,
    heroImage,
    images,
    difficulty,
    groupSize
  }`,
  
  // Get single tour by slug
  bySlug: (slug: string, locale: string) => `*[_type == "tour" && slug.current == $slug && locale == $locale && isActive == true][0] {
    _id,
    title,
    slug,
    locale,
    summary,
    description,
    durationDays,
    priceFrom,
    currency,
    heroImage,
    images,
    difficulty,
    groupSize,
    itinerary,
    inclusions,
    exclusions,
    availableDates[]{
      startDate,
      endDate,
      price,
      available
    },
    locations[]->{
      _id,
      name,
      slug,
      summary,
      type,
      geo,
      address
    },
    highlights,
    requirements,
    seo
  }`,
  
  // Get tours by duration
  byDuration: (minDays: number, maxDays: number, locale: string) => `*[_type == "tour" && durationDays >= $minDays && durationDays <= $maxDays && locale == $locale && isActive == true] | order(priceFrom asc) {
    _id,
    title,
    slug,
    locale,
    summary,
    durationDays,
    priceFrom,
    currency,
    heroImage,
    difficulty,
    groupSize
  }`,
};

export const blogQueries = {
  // Get all blog posts
  all: `*[_type == "blog" && isActive == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    locale,
    excerpt,
    heroImage,
    publishedAt,
    author->{
      _id,
      name,
      image
    },
    tags,
    category
  }`,
  
  // Get blog posts by locale
  byLocale: (locale: string) => `*[_type == "blog" && locale == $locale && isActive == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    locale,
    excerpt,
    heroImage,
    publishedAt,
    author->{
      _id,
      name,
      image
    },
    tags,
    category
  }`,
  
  // Get featured blog posts
  featured: `*[_type == "blog" && featured == true && isActive == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    locale,
    excerpt,
    heroImage,
    publishedAt,
    author->{
      _id,
      name,
      image
    },
    tags,
    category
  }`,
  
  // Get single blog post by slug
  bySlug: (slug: string, locale: string) => `*[_type == "blog" && slug.current == $slug && locale == $locale && isActive == true][0] {
    _id,
    title,
    slug,
    locale,
    excerpt,
    body,
    heroImage,
    publishedAt,
    author->{
      _id,
      name,
      image,
      bio,
      role
    },
    tags,
    category,
    relatedHotels[]->{
      _id,
      title,
      slug,
      heroImage
    },
    relatedTours[]->{
      _id,
      title,
      slug,
      heroImage
    },
    seo
  }`,
  
  // Get blog posts by category
  byCategory: (category: string, locale: string) => `*[_type == "blog" && category == $category && locale == $locale && isActive == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    locale,
    excerpt,
    heroImage,
    publishedAt,
    author->{
      _id,
      name,
      image
    },
    tags
  }`,
  
  // Get blog posts by tag
  byTag: (tag: string, locale: string) => `*[_type == "blog" && $tag in tags && locale == $locale && isActive == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    locale,
    excerpt,
    heroImage,
    publishedAt,
    author->{
      _id,
      name,
      image
    },
    category
  }`,
};

export const locationQueries = {
  // Get all locations
  all: `*[_type == "location" && isActive == true] | order(name asc) {
    _id,
    name,
    slug,
    locale,
    summary,
    type,
    geo,
    address,
    images
  }`,
  
  // Get locations by type
  byType: (type: string, locale: string) => `*[_type == "location" && type == $type && locale == $locale && isActive == true] | order(name asc) {
    _id,
    name,
    slug,
    locale,
    summary,
    type,
    geo,
    address,
    images
  }`,
};

export const dealQueries = {
  // Get active deals
  active: `*[_type == "deal" && isActive == true && startAt <= now() && endAt >= now()] | order(featured desc, startAt desc) {
    _id,
    title,
    slug,
    locale,
    description,
    discountType,
    value,
    startAt,
    endAt,
    image,
    appliesTo
  }`,
  
  // Get featured deals
  featured: `*[_type == "deal" && featured == true && isActive == true && startAt <= now() && endAt >= now()] | order(startAt desc) {
    _id,
    title,
    slug,
    locale,
    description,
    discountType,
    value,
    startAt,
    endAt,
    image
  }`,
};

export const settingsQueries = {
  // Get site settings
  site: `*[_type == "settings"][0] {
    siteName,
    defaultLocale,
    supportedLocales,
    defaultSEO,
    logo,
    siteIcon,
    brandColors,
    contact,
    social
  }`,
};

export const contentQueries = {
  // Get content by page type and locale
  byPageType: (pageType: string, locale: string) => `*[_type == "content" && pageType == $pageType && locale == $locale && isActive == true][0] {
    _id,
    pageType,
    locale,
    hero,
    sections,
    seo
  }`,
  
  // Get all content for a locale
  byLocale: (locale: string) => `*[_type == "content" && locale == $locale && isActive == true] {
    _id,
    pageType,
    locale,
    hero,
    sections,
    seo
  }`,
  
  // Get footer content
  footer: (locale: string) => `*[_type == "content" && pageType == "footer" && locale == $locale && isActive == true][0] {
    _id,
    pageType,
    locale,
    sections
  }`,
};

// Helper function to fetch data
export async function fetchData<T>(query: string, params?: Record<string, any>): Promise<T> {
  try {
    const data = await sanityClient.fetch(query, params);
    return data;
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    throw error;
  }
}

// Helper function to fetch data with cache tags
export async function fetchDataWithCache<T>(
  query: string, 
  params?: Record<string, any>, 
  tags?: string[]
): Promise<T> {
  try {
    const data = await sanityClient.fetch(query, params, {
      next: { tags: tags || ['sanity'] }
    });
    return data;
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    throw error;
  }
}

// Helper function to fetch multiple data sets
export async function fetchMultipleData<T>(queries: Array<{ query: string; params?: Record<string, any> }>): Promise<T[]> {
  try {
    const promises = queries.map(({ query, params }) => sanityClient.fetch(query, params));
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error('Error fetching multiple data sets from Sanity:', error);
    throw error;
  }
}

// Helper function to check if data exists
export async function checkDataExists(query: string, params?: Record<string, any>): Promise<boolean> {
  try {
    const count = await sanityClient.fetch(`count(${query})`, params);
    return count > 0;
  } catch (error) {
    console.error('Error checking data existence in Sanity:', error);
    return false;
  }
}

// ==============================
// Data mappers and fetch helpers
// ==============================

function getImageUrl(image: any): string | undefined {
  try {
    if (!image) return undefined;
    return urlFor(image).url();
  } catch {
    return undefined;
  }
}

function mapImage(image: any): { url: string; alt?: string } | undefined {
  const url = getImageUrl(image);
  if (!url) return undefined;
  return { url, alt: image?.alt };
}

function mapImages(images: any[] | undefined): Array<{ url: string; alt?: string }> | undefined {
  if (!images || !Array.isArray(images)) return undefined;
  const mapped = images
    .map((img) => mapImage(img))
    .filter(Boolean) as Array<{ url: string; alt?: string }>;
  return mapped.length > 0 ? mapped : undefined;
}

// -------- Tours --------
export async function getTours(locale?: string): Promise<Array<{
  slug: string;
  title: string;
  summary?: string;
  heroImage?: { url: string; alt?: string };
  durationDays?: number;
  priceFrom?: number;
  currency?: string;
  locations?: Array<{ name: string }>;
  availableDates?: string[];
  rating?: number;
}>> {
  try {
    // Check if Sanity is properly configured
    if (!isSanityConfigured()) {
      console.warn('Sanity is not properly configured. Please configure your Sanity project ID and API token in .env.local');
      return [];
    }

    const useLocale = locale || config.site.defaultLocale;
    const query = useLocale ? tourQueries.byLocale(useLocale) : tourQueries.all;
    
    const docs = await fetchDataWithCache<any[]>(query, useLocale ? { locale: useLocale } : undefined, ['tours', `tours-${useLocale}`]);
    
    if (!docs) {
      console.warn('No tours data returned from Sanity');
      return [];
    }
    
    if (!Array.isArray(docs)) {
      console.warn('Tours data is not an array:', typeof docs);
      return [];
    }
    
    return docs.map((doc) => ({
      slug: doc?.slug?.current || doc?.slug || '',
      title: doc?.title,
      summary: doc?.summary,
      heroImage: mapImage(doc?.heroImage),
      durationDays: doc?.durationDays,
      priceFrom: doc?.priceFrom,
      currency: doc?.currency,
      locations: Array.isArray(doc?.locations)
        ? doc.locations.map((l: any) => ({ name: l?.name }))
        : undefined,
      availableDates: Array.isArray(doc?.availableDates)
        ? doc.availableDates
            .filter((d: any) => d && (d.available === undefined || d.available))
            .map((d: any) => d?.startDate)
            .filter(Boolean)
        : undefined,
      rating: doc?.rating,
    }));
  } catch (error) {
    console.error('Error in getTours:', error);
    return [];
  }
}

export async function getTour(slug: string, locale?: string): Promise<{
  slug: string;
  title: string;
  summary?: string;
  description?: string;
  heroImage?: { url: string; alt?: string };
  images?: Array<{ url: string; alt?: string }>;
  durationDays?: number;
  priceFrom?: number;
  currency?: string;
  difficulty?: string;
  groupSize?: { min?: number; max?: number };
  maxGroupSize?: number;
  itinerary?: any;
  inclusions?: string[];
  exclusions?: string[];
  availableDates?: string[];
  locations?: Array<{ name: string; slug?: any; type?: string; geo?: any; address?: any }>;
  highlights?: string[];
  requirements?: string;
  seo?: any;
} | null> {
  try {
    // Check if Sanity is properly configured
    if (!isSanityConfigured()) {
      console.warn('Sanity is not properly configured. Please configure your Sanity project ID and API token in .env.local');
      return null;
    }

    const useLocale = locale || config.site.defaultLocale;
    console.log(`Fetching tour with slug: ${slug}, locale: ${useLocale}`);
    
    const doc = await fetchDataWithCache<any>(tourQueries.bySlug(slug, useLocale), { slug, locale: useLocale }, ['tours', `tour-${slug}`]);
    
    if (!doc) {
      console.warn(`No tour found with slug: ${slug} and locale: ${useLocale}`);
      return null;
    }

    console.log(`Found tour: ${doc?.title} (${doc?._id})`);
    
    return {
      slug: doc?.slug?.current || doc?.slug || '',
      title: doc?.title,
      summary: doc?.summary,
      description: doc?.description,
      heroImage: mapImage(doc?.heroImage),
      images: mapImages(doc?.images),
      durationDays: doc?.durationDays,
      priceFrom: doc?.priceFrom,
      currency: doc?.currency,
      difficulty: doc?.difficulty,
      groupSize: doc?.groupSize,
      maxGroupSize: doc?.groupSize?.max,
      itinerary: doc?.itinerary,
      inclusions: doc?.inclusions,
      exclusions: doc?.exclusions,
      availableDates: Array.isArray(doc?.availableDates)
        ? doc.availableDates
            .filter((d: any) => d && (d.available === undefined || d.available))
            .map((d: any) => d?.startDate)
            .filter(Boolean)
        : undefined,
      locations: Array.isArray(doc?.locations)
        ? doc.locations.map((l: any) => ({
            name: l?.name,
            slug: l?.slug,
            type: l?.type,
            geo: l?.geo,
            address: l?.address,
          }))
        : undefined,
      highlights: doc?.highlights,
      requirements: doc?.requirements,
      seo: doc?.seo,
    };
  } catch (error) {
    console.error('Error in getTour:', error);
    return null;
  }
}

// -------- Hotels --------
export async function getHotels(locale?: string): Promise<Array<{
  slug: string;
  name: string;
  description?: string;
  heroImage?: { url: string; alt?: string };
  rating?: number;
  address: { street?: string; city: string; region: string; country?: string };
  amenities?: string[];
  priceFrom?: number;
  currency?: string;
}>> {
  // Check if Sanity is properly configured
  if (!isSanityConfigured()) {
    console.warn('Sanity is not properly configured. Please configure your Sanity project ID and API token in .env.local');
    return [];
  }

  const useLocale = locale || config.site.defaultLocale;
  const query = useLocale ? hotelQueries.byLocale(useLocale) : hotelQueries.all;
  const docs = await fetchDataWithCache<any[]>(query, useLocale ? { locale: useLocale } : undefined, ['hotels', `hotels-${useLocale}`]);
  return (docs || []).map((doc) => ({
    slug: doc?.slug?.current || doc?.slug || '',
    name: doc?.title,
    description: doc?.summary || undefined,
    heroImage: mapImage(doc?.heroImage),
    rating: doc?.rating,
    address: {
      street: doc?.address?.street,
      city: doc?.address?.city,
      region: doc?.address?.region,
      country: doc?.address?.country,
    },
    amenities: doc?.amenities,
    priceFrom: doc?.priceFrom,
    currency: doc?.currency,
  }));
}

export async function getHotel(slug: string, locale?: string): Promise<{
  slug: string;
  name: string;
  description?: string;
  heroImage?: { url: string; alt?: string };
  images?: Array<{ url: string; alt?: string }>;
  rating?: number;
  address: { street: string; city: string; region: string; country: string; postalCode?: string; lat?: number; lng?: number };
  contact?: { phone?: string; email?: string; website?: string };
  policies?: any;
  rooms?: any[];
  nearby?: Array<{ name?: string; slug?: any; summary?: string; type?: string; geo?: any }>;
  seo?: any;
} | null> {
  try {
    // Check if Sanity is properly configured
    if (!isSanityConfigured()) {
      console.warn('Sanity is not properly configured. Please configure your Sanity project ID and API token in .env.local');
      return null;
    }

    const useLocale = locale || config.site.defaultLocale;
    console.log(`Fetching hotel with slug: ${slug}, locale: ${useLocale}`);
    
    const doc = await fetchDataWithCache<any>(hotelQueries.bySlug(slug, useLocale), { slug, locale: useLocale }, ['hotels', `hotel-${slug}`]);
    
    if (!doc) {
      console.warn(`No hotel found with slug: ${slug} and locale: ${useLocale}`);
      return null;
    }

    console.log(`Found hotel: ${doc?.title} (${doc?._id})`);
    
    return {
      slug: doc?.slug?.current || doc?.slug || '',
      name: doc?.title,
      description: doc?.description || doc?.summary || undefined,
      heroImage: mapImage(doc?.heroImage),
      images: mapImages(doc?.images),
      rating: doc?.rating,
      amenities: doc?.amenities,
      address: {
        street: doc?.address?.street || '',
        city: doc?.address?.city || '',
        region: doc?.address?.region || '',
        country: doc?.address?.country || '',
        postalCode: doc?.address?.postalCode,
        lat: doc?.address?.lat,
        lng: doc?.address?.lng,
      },
      contact: doc?.contact,
      policies: doc?.policies,
      rooms: doc?.rooms,
      nearby: Array.isArray(doc?.nearby)
        ? doc.nearby.map((n: any) => ({ name: n?.name, slug: n?.slug, summary: n?.summary, type: n?.type, geo: n?.geo }))
        : undefined,
      seo: doc?.seo,
    };
  } catch (error) {
    console.error('Error in getHotel:', error);
    return null;
  }
}

// -------- Featured helpers --------
export async function getFeaturedHotels(locale?: string) {
  if (!isSanityConfigured()) {
    return [];
  }
  const useLocale = locale || config.site.defaultLocale;
  // Use featured query; it does not accept params
  const docs = await fetchDataWithCache<any[]>(hotelQueries.featured, undefined, ['hotels', 'featured-hotels', `hotels-${useLocale}`]);
  return (docs || []).map((doc) => ({
    slug: doc?.slug?.current || doc?.slug || '',
    name: doc?.title,
    description: doc?.summary || undefined,
    heroImage: mapImage(doc?.heroImage),
    rating: doc?.rating,
    address: {
      street: doc?.address?.street,
      city: doc?.address?.city,
      region: doc?.address?.region,
      country: doc?.address?.country,
    },
    amenities: doc?.amenities,
    priceFrom: doc?.priceFrom,
    currency: doc?.currency,
  }));
}

export async function getFeaturedTours(locale?: string) {
  if (!isSanityConfigured()) {
    return [];
  }
  const useLocale = locale || config.site.defaultLocale;
  const docs = await fetchDataWithCache<any[]>(tourQueries.featured, undefined, ['tours', 'featured-tours', `tours-${useLocale}`]);
  return (docs || []).map((doc) => ({
    slug: doc?.slug?.current || doc?.slug || '',
    title: doc?.title,
    summary: doc?.summary,
    heroImage: mapImage(doc?.heroImage),
    durationDays: doc?.durationDays,
    priceFrom: doc?.priceFrom,
    currency: doc?.currency,
    rating: doc?.rating,
  }));
}

// -------- Blog --------
export async function getBlogPosts(locale?: string): Promise<Array<{
  slug: string;
  title: string;
  excerpt?: string;
  heroImage?: { url: string; alt?: string };
  publishedAt: string;
  author?: { name: string };
  tags?: string[];
  category?: string;
}>> {
  // Check if Sanity is properly configured
  if (!isSanityConfigured()) {
    console.warn('Sanity is not properly configured. Please configure your Sanity project ID and API token in .env.local');
    return [];
  }

  const useLocale = locale || config.site.defaultLocale;
  const query = useLocale ? blogQueries.byLocale(useLocale) : blogQueries.all;
  const docs = await fetchData<any[]>(query, useLocale ? { locale: useLocale } : undefined);
  return (docs || []).map((doc) => ({
    slug: doc?.slug?.current || doc?.slug || '',
    title: doc?.title,
    excerpt: doc?.excerpt,
    heroImage: mapImage(doc?.heroImage),
    publishedAt: doc?.publishedAt,
    author: doc?.author ? { name: doc.author?.name } : undefined,
    tags: doc?.tags,
    category: doc?.category,
  }));
}

export async function getBlogPost(slug: string, locale?: string): Promise<{
  slug: string;
  title: string;
  excerpt?: string;
  body?: any;
  heroImage?: { url: string; alt?: string };
  publishedAt: string;
  author?: { name: string };
  tags?: string[];
  category?: string;
  relatedHotels?: Array<{ title?: string; slug?: any; heroImage?: { url: string; alt?: string } }>;
  relatedTours?: Array<{ title?: string; slug?: any; heroImage?: { url: string; alt?: string } }>;
  seo?: any;
} | null> {
  try {
    // Check if Sanity is properly configured
    if (!isSanityConfigured()) {
      console.warn('Sanity is not properly configured. Please configure your Sanity project ID and API token in .env.local');
      return null;
    }

    const useLocale = locale || config.site.defaultLocale;
    console.log(`Fetching blog post with slug: ${slug}, locale: ${useLocale}`);
    
    const doc = await fetchDataWithCache<any>(blogQueries.bySlug(slug, useLocale), { slug, locale: useLocale }, ['blog', `blog-${slug}`]);
    
    if (!doc) {
      console.warn(`No blog post found with slug: ${slug} and locale: ${useLocale}`);
      return null;
    }

    console.log(`Found blog post: ${doc?.title} (${doc?._id})`);
    
    return {
      slug: doc?.slug?.current || doc?.slug || '',
      title: doc?.title,
      excerpt: doc?.excerpt,
      body: doc?.body,
      heroImage: mapImage(doc?.heroImage),
      publishedAt: doc?.publishedAt,
      author: doc?.author ? { name: doc.author?.name } : undefined,
      tags: doc?.tags,
      category: doc?.category,
      relatedHotels: Array.isArray(doc?.relatedHotels)
        ? doc.relatedHotels.map((h: any) => ({ title: h?.title, slug: h?.slug, heroImage: mapImage(h?.heroImage) }))
        : undefined,
      relatedTours: Array.isArray(doc?.relatedTours)
        ? doc.relatedTours.map((t: any) => ({ title: t?.title, slug: t?.slug, heroImage: mapImage(t?.heroImage) }))
        : undefined,
      seo: doc?.seo,
    };
  } catch (error) {
    console.error('Error in getBlogPost:', error);
    return null;
  }
}

// -------- Content --------
export async function getPageContent(pageType: string, locale?: string): Promise<{
  hero?: {
    title?: string;
    subtitle?: string;
    description?: string;
    backgroundImage?: { url: string; alt?: string };
    ctaPrimary?: string;
    ctaPrimaryLink?: string;
    ctaSecondary?: string;
    ctaSecondaryLink?: string;
  };
  sections?: any[];
  seo?: any;
} | null> {
  if (!isSanityConfigured()) {
    console.warn('Sanity is not properly configured. Please configure your Sanity project ID and API token in .env.local');
    return null;
  }

  const useLocale = locale || config.site.defaultLocale;
  const doc = await fetchData<any>(contentQueries.byPageType(pageType, useLocale), { pageType, locale: useLocale });
  
  if (!doc) {
    console.warn(`No content found for page type: ${pageType} and locale: ${useLocale}`);
    return null;
  }

  return {
    hero: doc?.hero ? {
      title: doc.hero.title,
      subtitle: doc.hero.subtitle,
      description: doc.hero.description,
      backgroundImage: mapImage(doc.hero.backgroundImage),
      ctaPrimary: doc.hero.ctaPrimary,
      ctaPrimaryLink: doc.hero.ctaPrimaryLink,
      ctaSecondary: doc.hero.ctaSecondary,
      ctaSecondaryLink: doc.hero.ctaSecondaryLink,
    } : undefined,
    sections: doc?.sections || [],
    seo: doc?.seo,
  };
}

export async function getFooterContent(locale?: string): Promise<{
  sections?: any[];
} | null> {
  if (!isSanityConfigured()) {
    return null;
  }

  const useLocale = locale || config.site.defaultLocale;
  const doc = await fetchData<any>(contentQueries.footer(useLocale), { locale: useLocale });
  
  if (!doc) {
    console.warn(`No footer content found for locale: ${useLocale}`);
    return null;
  }

  return {
    sections: doc?.sections || [],
  };
}

export async function getSiteSettings(): Promise<{
  siteName?: string;
  defaultLocale?: string;
  supportedLocales?: string[];
  defaultSEO?: any;
  logo?: { url: string; alt?: string };
  siteIcon?: { url: string; alt?: string };
  brandColors?: {
    primary?: string;
    secondary?: string;
    accent?: string;
    text?: string;
    background?: string;
  };
  contact?: {
    phone?: string;
    email?: string;
    address?: string;
  };
  social?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
} | null> {
  if (!isSanityConfigured()) {
    return null;
  }

  const doc = await fetchData<any>(settingsQueries.site);
  
  if (!doc) {
    console.warn('No site settings found');
    return null;
  }

  return {
    siteName: doc?.siteName,
    defaultLocale: doc?.defaultLocale,
    supportedLocales: doc?.supportedLocales,
    defaultSEO: doc?.defaultSEO,
    logo: mapImage(doc?.logo),
    siteIcon: mapImage(doc?.siteIcon),
    brandColors: doc?.brandColors,
    contact: doc?.contact,
    social: doc?.social,
  };
}
