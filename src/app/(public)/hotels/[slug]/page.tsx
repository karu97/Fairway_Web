import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { getHotel, getHotels } from '@/lib/sanity';
import { HotelHero } from '@/components/HotelHero';
import { HotelDetails } from '@/components/HotelDetails';
import { HotelRooms } from '@/components/HotelRooms';
import { HotelMap } from '@/components/HotelMap';
import { BookingForm } from '@/components/BookingForm';
import { RelatedHotels } from '@/components/RelatedHotels';
import { generateSchemasFromOptions } from '@/lib/schema';
import { config } from '@/lib/config';

interface HotelPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: HotelPageProps): Promise<Metadata> {
  const hotel = await getHotel(params.slug);
  
  if (!hotel) {
    return {
      title: 'Hotel Not Found',
    };
  }

  return {
    title: `${hotel.name} - Luxury Hotel in ${hotel.address.city}`,
    description: hotel.description || `Experience luxury at ${hotel.name} in ${hotel.address.city}, Sri Lanka.`,
    openGraph: {
      title: `${hotel.name} - Luxury Hotel in ${hotel.address.city}`,
      description: hotel.description || `Experience luxury at ${hotel.name} in ${hotel.address.city}, Sri Lanka.`,
      images: hotel.images?.map(img => img.url) || [],
    },
  };
}

export async function generateStaticParams() {
  const hotels = await getHotels();
  return hotels.map((hotel) => ({
    slug: hotel.slug,
  }));
}

export default async function HotelPage({ params }: HotelPageProps) {
  const hotel = await getHotel(params.slug);
  
  if (!hotel) {
    notFound();
  }

  const schemas = generateSchemasFromOptions({
    hotel: {
      name: hotel.name,
      description: hotel.description || '',
      url: `${config.site.url}/hotels/${hotel.slug}`,
      images: hotel.images?.map(img => img.url) || [],
      telephone: hotel.contact?.phone,
      address: {
        street: hotel.address.street,
        city: hotel.address.city,
        region: hotel.address.region,
        country: hotel.address.country,
        postalCode: hotel.address.postalCode,
      },
      geo: hotel.address.lat && hotel.address.lng ? {
        lat: hotel.address.lat,
        lng: hotel.address.lng,
      } : undefined,
      rating: hotel.rating,
    },
    includeOrganization: true,
    breadcrumbs: {
      items: [
        { name: 'Home', url: '/' },
        { name: 'Hotels', url: '/hotels' },
        { name: hotel.name, url: `/hotels/${hotel.slug}` }
      ]
    }
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HotelHero hotel={hotel} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Hotel Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hotel Details */}
            <HotelDetails hotel={hotel} />

            {/* Rooms */}
            <HotelRooms hotel={hotel} />

            {/* Map */}
            <HotelMap hotel={hotel} />

            {/* Related Hotels */}
            <Suspense fallback={
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                  Other Hotels You Might Like
                </h2>
                <div className="text-center py-8">
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                  </div>
                </div>
              </div>
            }>
              <RelatedHotels currentSlug={hotel.slug} />
            </Suspense>
          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <BookingForm 
                type="HOTEL"
                hotelSlug={hotel.slug}
                hotelName={hotel.name}
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
