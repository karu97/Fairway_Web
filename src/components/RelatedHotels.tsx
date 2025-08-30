import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { getHotels } from '@/lib/sanity';

interface RelatedHotelsProps {
  currentSlug: string;
}

export async function RelatedHotels({ currentSlug }: RelatedHotelsProps) {
  // Fetch all hotels and filter out the current one
  const allHotels = await getHotels();
  const relatedHotels = allHotels
    .filter(hotel => hotel.slug !== currentSlug)
    .slice(0, 3); // Show max 3 related hotels

  const formatPrice = (price: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
        Other Hotels You Might Like
      </h2>
      
      {relatedHotels.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedHotels.map((hotel) => (
              <article key={hotel.slug} className="group">
                <Link href={`/hotels/${hotel.slug}`} className="block">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      {hotel.heroImage ? (
                        <Image
                          src={hotel.heroImage.url}
                          alt={hotel.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                          <span className="text-white text-lg">Hotel Image</span>
                        </div>
                      )}
                      
                      {/* Rating Badge */}
                      {hotel.rating && (
                        <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center space-x-1 shadow-md">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-semibold text-gray-900">{hotel.rating}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {hotel.name}
                      </h3>
                      
                      {hotel.address && (
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{hotel.address.city}, {hotel.address.region}</span>
                        </div>
                      )}
                      
                      {hotel.description && (
                        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                          {hotel.description}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between">
                        {hotel.priceFrom ? (
                          <span className="text-blue-600 font-semibold">
                            From {formatPrice(hotel.priceFrom, hotel.currency || 'USD')}
                          </span>
                        ) : (
                          <span className="text-gray-500 text-sm">Contact for pricing</span>
                        )}
                        
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <ArrowRight className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          
          {/* View All Hotels */}
          <div className="mt-8 text-center">
            <Link
              href="/hotels"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              View All Hotels
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Related Hotels Available</h3>
            <p className="text-gray-600 mb-4">
              We're currently updating our hotel offerings. Please check back soon for more options!
            </p>
            <Link
              href="/hotels"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              <span>Browse All Hotels</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
