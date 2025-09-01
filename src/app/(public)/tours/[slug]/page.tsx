import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { getTour, getTours } from '@/lib/sanity';
import { TourHero } from '@/components/TourHero';
import { TourDetails } from '@/components/TourDetails';
import { TourItinerary } from '@/components/TourItinerary';
import { TourInclusions } from '@/components/TourInclusions';
import { TourMap } from '@/components/TourMap';
import { BookingForm } from '@/components/BookingForm';
import { RelatedTours } from '@/components/RelatedTours';
import { generateSchemasFromOptions } from '@/lib/schema';
import { config } from '@/lib/config';
import { extractTextFromPortableText } from '../../../../lib/portable-text-utils';

interface TourPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: TourPageProps): Promise<Metadata> {
  const tour = await getTour(params.slug);
  
  if (!tour) {
    return {
      title: 'Tour Not Found',
    };
  }

  return {
    title: `${tour.title} - Tour Package in Sri Lanka`,
    description: tour.summary || `Experience ${tour.title} - an unforgettable tour in Sri Lanka.`,
    openGraph: {
      title: `${tour.title} - Tour Package in Sri Lanka`,
      description: tour.summary || `Experience ${tour.title} - an unforgettable tour in Sri Lanka.`,
      images: tour.images?.map(img => img.url) || [],
    },
  };
}

export async function generateStaticParams() {
  const tours = await getTours();
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export default async function TourPage({ params }: TourPageProps) {
  const tour = await getTour(params.slug);
  
  if (!tour) {
    notFound();
  }

  const summaryText = extractTextFromPortableText(tour.summary);

  const schemas = generateSchemasFromOptions({
    tour: {
      name: tour.title,
      description: tour.summary || '',
      url: `${config.site.url}/tours/${tour.slug}`,
      images: tour.images?.map(img => img.url) || [],
      duration: `${tour.durationDays} days`,
      price: tour.priceFrom || 0,
      currency: tour.currency || 'USD',
      location: tour.locations?.[0]?.name || 'Sri Lanka',
    },
    includeOrganization: true,
    breadcrumbs: {
      items: [
        { name: 'Home', url: '/' },
        { name: 'Tours', url: '/tours' },
        { name: tour.title, url: `/tours/${tour.slug}` }
      ]
    }
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <TourHero tour={tour} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Tour Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tour Details */}
            <TourDetails tour={tour} />

            {/* Itinerary */}
            <TourItinerary tour={tour} />

            {/* Inclusions & Exclusions */}
            <TourInclusions tour={tour} />

            {/* Map */}
            <TourMap tour={tour} />

            {/* Related Tours */}
            <Suspense fallback={
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Other Tours You Might Like
                </h3>
                <div className="text-center py-6">
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                  </div>
                </div>
              </div>
            }>
              <RelatedTours currentSlug={tour.slug} />
            </Suspense>
          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <BookingForm 
                type="TOUR"
                tourSlug={tour.slug}
                tourName={tour.title}
              />
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
    </div>
  );
}
