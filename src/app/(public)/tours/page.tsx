import { Metadata } from 'next';
import { Suspense } from 'react';
import { getTours, isSanityConfigured } from '@/lib/sanity';
import { TourCard } from '@/components/TourCard';
import { Filters } from '@/components/Filters';
import { generatePageSchemas, generateBreadcrumbSchema, generateOrganizationSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Tour Packages in Sri Lanka',
  description: 'Explore Sri Lanka with our curated tour packages. From cultural experiences to adventure tours, discover the beauty of this island nation.',
  openGraph: {
    title: 'Tour Packages in Sri Lanka | Fairway Hotels',
    description: 'Explore Sri Lanka with our curated tour packages.',
  },
};

export default async function ToursPage() {
  const tours = await getTours();
  const isConfigured = isSanityConfigured();

  const schemas = generatePageSchemas([
    () => generateBreadcrumbSchema({
      items: [
        { name: 'Home', url: '/' },
        { name: 'Tours', url: '/tours' }
      ]
    }),
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-900 to-green-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-center mb-4">
            Discover Sri Lanka
          </h1>
          <p className="text-xl text-center text-green-100 max-w-3xl mx-auto">
            Embark on unforgettable journeys through ancient temples, pristine beaches, and lush landscapes
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        {/* Development Notice */}
        {!isConfigured && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  Development Mode
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    Sanity CMS is not configured. Showing sample data for development purposes.
                    To connect to real data, please configure your Sanity project ID and API token in the .env.local file.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Filters />
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {tours.length} Tours Available
              </h2>
              <p className="text-gray-600">
                Choose from our carefully crafted tour experiences
              </p>
            </div>

            <Suspense fallback={<div>Loading tours...</div>}>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {tours.map((tour) => (
                  <TourCard key={tour.slug} tour={tour} />
                ))}
              </div>
            </Suspense>
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
