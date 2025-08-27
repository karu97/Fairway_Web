'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Wifi, Waves, Utensils } from 'lucide-react';

interface HotelCardProps {
  hotel: {
    slug: string;
    name: string;
    description?: string;
    heroImage?: { url: string; alt?: string };
    rating?: number;
    address: {
      city: string;
      region: string;
    };
    amenities?: string[];
    priceFrom?: number;
    currency?: string;
  };
}

export function HotelCard({ hotel }: HotelCardProps) {
  const formatPrice = (price: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getAmenityIcon = (amenity: string) => {
    const amenityLower = amenity.toLowerCase();
    if (amenityLower.includes('wifi')) return <Wifi className="w-4 h-4" />;
    if (amenityLower.includes('pool')) return <Waves className="w-4 h-4" />;
    if (amenityLower.includes('restaurant') || amenityLower.includes('dining')) {
      return <Utensils className="w-4 h-4" />;
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {hotel.heroImage ? (
          <Image
            src={hotel.heroImage.url}
            alt={hotel.heroImage.alt || hotel.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image</span>
          </div>
        )}
        
        {/* Rating Badge */}
        {hotel.rating && (
          <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center space-x-1 shadow-md">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold text-gray-900">{hotel.rating}</span>
          </div>
        )}

        {/* Price Badge */}
        {hotel.priceFrom && (
          <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            From {formatPrice(hotel.priceFrom, hotel.currency)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Location */}
        <div className="mb-3">
          <Link href={`/hotels/${hotel.slug}`}>
            <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200 mb-2">
              {hotel.name}
            </h3>
          </Link>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{hotel.address.city}, {hotel.address.region}</span>
          </div>
        </div>

        {/* Description */}
        {hotel.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {hotel.description}
          </p>
        )}

        {/* Amenities */}
        {hotel.amenities && hotel.amenities.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center space-x-3">
              {hotel.amenities.slice(0, 3).map((amenity, index) => (
                <div key={index} className="flex items-center space-x-1 text-gray-600">
                  {getAmenityIcon(amenity)}
                  <span className="text-xs">{amenity}</span>
                </div>
              ))}
              {hotel.amenities.length > 3 && (
                <span className="text-xs text-gray-500">
                  +{hotel.amenities.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Button */}
        <Link
          href={`/hotels/${hotel.slug}`}
          className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
