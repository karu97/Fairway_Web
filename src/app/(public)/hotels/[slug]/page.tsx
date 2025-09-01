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
    title: `${(hotel as any).title} - Luxury Hotel in ${(hotel as any).address.city}`,
    description: (hotel as any).summary || `Experience luxury at ${(hotel as any).title} in ${(hotel as any).address.city}, Sri Lanka.`,
    openGraph: {
      title: `${(hotel as any).title} - Luxury Hotel in ${(hotel as any).address.city}`,
      description: (hotel as any).summary || `Experience luxury at ${(hotel as any).title} in ${(hotel as any).address.city}, Sri Lanka.`,
      images: (hotel as any).images?.map((img: any) => img.url) || [],
    },
  };
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  
  // Generate params for all supported locales
  for (const locale of config.site.supportedLocales) {
    try {
      const hotels = await getHotels(locale);
      const localeParams = hotels.map((hotel) => ({
        slug: hotel.slug,
      }));
      params.push(...localeParams);
    } catch (error) {
      console.warn(`Failed to generate static params for locale ${locale}:`, error);
    }
  }
  
  // Remove duplicates based on slug
  const uniqueParams = params.filter((param, index, self) => 
    index === self.findIndex(p => p.slug === param.slug)
  );
  
  console.log(`Generated ${uniqueParams.length} unique hotel paths`);
  return uniqueParams;
}

export default async function HotelPage({ params }: HotelPageProps) {
  // Try to find the hotel in any locale
  let hotel = null;
  
  for (const locale of config.site.supportedLocales) {
    try {
      hotel = await getHotel(params.slug, locale);
      if (hotel) {
        console.log(`Found hotel ${(hotel as any).title} in locale ${locale}`);
        break;
      }
    } catch (error) {
      console.warn(`Failed to fetch hotel ${params.slug} in locale ${locale}:`, error);
    }
  }
  
  if (!hotel) {
    console.warn(`Hotel not found with slug: ${params.slug} in any locale`);
    notFound();
  }

  console.log('Hotel object:', hotel);

  const schemas = generateSchemasFromOptions({
    hotel: {
      name: (hotel as any).title,
      description: (hotel as any).summary || '',
      url: `${config.site.url}/hotels/${(hotel as any).slug}`,
      images: (hotel as any).images?.map((img: any) => img.url) || [],
      telephone: (hotel as any).contact?.phone,
      address: {
        street: (hotel as any).address.street,
        city: (hotel as any).address.city,
        region: (hotel as any).address.region,
        country: (hotel as any).address.country,
        postalCode: (hotel as any).address.postalCode,
      },
      geo: (hotel as any).address.lat && (hotel as any).address.lng ? {
        lat: (hotel as any).address.lat,
        lng: (hotel as any).address.lng,
      } : undefined,
      rating: (hotel as any).rating,
    },
    includeOrganization: true,
    breadcrumbs: {
      items: [
        { name: 'Home', url: '/' },
        { name: 'Hotels', url: '/hotels' },
        { name: (hotel as any).title, url: `/hotels/${(hotel as any).slug}` }
      ]
    }
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HotelHero hotel={hotel as any} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Hotel Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hotel Details */}
            <HotelDetails hotel={hotel as any} />

            {/* Rooms */}
            <HotelRooms hotel={hotel as any} />

            {/* Map */}
            <HotelMap hotel={hotel as any} />

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
              <RelatedHotels currentSlug={(hotel as any).slug} />
            </Suspense>
          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <BookingForm 
                type="HOTEL"
                hotelSlug={(hotel as any).slug}
                hotelName={(hotel as any).title}
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
