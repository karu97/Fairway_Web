import { Metadata } from 'next';
import { Suspense } from 'react';
import { getHotels } from '@/lib/sanity';
import { HotelCard } from '@/components/HotelCard';
import { Filters } from '@/components/Filters';
import { generateSchemasFromOptions } from '@/lib/schema';
import { config } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Luxury Hotels in Sri Lanka',
  description: 'Discover our collection of luxury hotels across Sri Lanka. From Colombo to Galle, experience world-class accommodation with premium amenities.',
  openGraph: {
    title: 'Luxury Hotels in Sri Lanka | Fairway Hotels',
    description: 'Discover our collection of luxury hotels across Sri Lanka.',
  },
};

export default async function HotelsPage() {
  const hotels = await getHotels();

  const schemas = generateSchemasFromOptions({
    includeOrganization: true,
    includeWebsite: true,
    breadcrumbs: {
      items: [
        { name: 'Home', url: '/' },
        { name: 'Hotels', url: '/hotels' }
      ]
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-center mb-4">
            Our Luxury Hotels
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Experience unparalleled luxury and comfort at our handpicked collection of hotels across Sri Lanka
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Filters />
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {hotels.length} Hotels Found
              </h2>
              <p className="text-gray-600">
                Discover our premium collection of luxury accommodations
              </p>
            </div>

            <Suspense fallback={<div>Loading hotels...</div>}>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {hotels.map((hotel) => (
                  <HotelCard key={hotel.slug} hotel={hotel} />
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
