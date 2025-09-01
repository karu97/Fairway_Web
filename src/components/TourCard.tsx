'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, Users, Star } from 'lucide-react';

interface TourCardProps {
  tour: {
    slug: string;
    title: string;
    summary?: string;
    heroImage?: { url: string; alt?: string };
    durationDays?: number;
    priceFrom?: number;
    currency?: string;
    locations?: Array<{ name: string }>;
    rating?: number;
    availableDates?: string[];
  };
}

export function TourCard({ tour }: TourCardProps) {
  const formatPrice = (price: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatDuration = (days: number) => {
    if (days === 1) return '1 Day';
    if (days < 7) return `${days} Days`;
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;
    if (remainingDays === 0) return `${weeks} Week${weeks > 1 ? 's' : ''}`;
    return `${weeks} Week${weeks > 1 ? 's' : ''} ${remainingDays} Day${remainingDays > 1 ? 's' : ''}`;
  };

  const isAvailable = tour.availableDates && tour.availableDates.length > 0;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {tour.heroImage ? (
          <Image
            src={tour.heroImage.url}
            alt={tour.heroImage.alt || tour.title}
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
        {tour.rating && (
          <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center space-x-1 shadow-md">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold text-gray-900">{tour.rating}</span>
          </div>
        )}

        {/* Price Badge */}
        {tour.priceFrom && (
          <div className="absolute bottom-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            From {formatPrice(tour.priceFrom, tour.currency)}
          </div>
        )}

        {/* Availability Badge */}
        <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold ${
          isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {isAvailable ? 'Available' : 'Limited'}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <div className="mb-3">
          <Link href={`/tours/${tour.slug}`}>
            <h3 className="text-xl font-semibold text-gray-900 hover:text-green-600 transition-colors duration-200 mb-2">
              {tour.title}
            </h3>
          </Link>
        </div>

        {/* Summary */}
        {tour.summary && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {tour.summary}
          </p>
        )}

        {/* Tour Details */}
        <div className="space-y-2 mb-4">
          {/* Duration */}
          {tour.durationDays && (
            <div className="flex items-center text-gray-600 text-sm">
              <Clock className="w-4 h-4 mr-2" />
              <span>{formatDuration(tour.durationDays)}</span>
            </div>
          )}

          {/* Location */}
          {tour.locations && tour.locations.length > 0 && (
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{tour.locations.map(loc => loc.name).join(', ')}</span>
            </div>
          )}

          {/* Price */}
          {tour.priceFrom && (
            <div className="flex items-center text-gray-600 text-sm">
              <Users className="w-4 h-4 mr-2" />
              <span className="font-semibold text-green-600">
                {formatPrice(tour.priceFrom, tour.currency)} per person
              </span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <Link
          href={`/tours/${tour.slug}`}
          className="block w-full bg-green-600 text-white text-center py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
