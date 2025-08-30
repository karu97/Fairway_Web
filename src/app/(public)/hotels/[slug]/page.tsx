import { Metadata } from 'next';
import { notFound } from 'next/navigation';
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
    title: `${hotel.title} - Luxury Hotel in ${hotel.address.city}`,
    description: hotel.summary || `Experience luxury at ${hotel.title} in ${hotel.address.city}, Sri Lanka.`,
    openGraph: {
      title: `${hotel.title} - Luxury Hotel in ${hotel.address.city}`,
      description: hotel.summary || `Experience luxury at ${hotel.title} in ${hotel.address.city}, Sri Lanka.`,
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
      name: hotel.title,
      description: hotel.summary || '',
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
        { name: 'Hotels', url: '/' },
        { name: hotel.title, url: `/hotels/${hotel.slug}` }
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
            <RelatedHotels currentSlug={hotel.slug} />
          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <BookingForm 
                type="HOTEL"
                hotelSlug={hotel.slug}
                hotelName={hotel.title}
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
