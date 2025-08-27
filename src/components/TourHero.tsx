'use client';

import Image from 'next/image';
import { Star, MapPin, Clock, Users, DollarSign } from 'lucide-react';

interface TourHeroProps {
  tour: {
    title: string;
    heroImage?: { url: string; alt?: string };
    rating?: number;
    durationDays?: number;
    priceFrom?: number;
    currency?: string;
    locations?: Array<{ name: string }>;
  };
}

export function TourHero({ tour }: TourHeroProps) {
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

  return (
    <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Hero Image */}
      {tour.heroImage ? (
        <Image
          src={tour.heroImage.url}
          alt={tour.heroImage.alt || tour.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-green-900 to-green-700" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Tour Title and Rating */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-4">
                {tour.title}
              </h1>
              {tour.rating && (
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < Math.floor(tour.rating!)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white text-lg font-medium">
                    {tour.rating}/5
                  </span>
                </div>
              )}
            </div>

            {/* Tour Details */}
            <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Duration */}
                {tour.durationDays && (
                  <div className="flex items-center text-white text-lg">
                    <Clock className="w-6 h-6 mr-3" />
                    <div>
                      <div className="font-semibold">Duration</div>
                      <div className="text-green-200">{formatDuration(tour.durationDays)}</div>
                    </div>
                  </div>
                )}

                {/* Price */}
                {tour.priceFrom && (
                  <div className="flex items-center text-white text-lg">
                    <DollarSign className="w-6 h-6 mr-3" />
                    <div>
                      <div className="font-semibold">Starting From</div>
                      <div className="text-green-200 text-xl font-bold">
                        {formatPrice(tour.priceFrom, tour.currency)}
                      </div>
                    </div>
                  </div>
                )}

                {/* Locations */}
                {tour.locations && tour.locations.length > 0 && (
                  <div className="flex items-center text-white text-lg">
                    <MapPin className="w-6 h-6 mr-3" />
                    <div>
                      <div className="font-semibold">Destinations</div>
                      <div className="text-green-200">
                        {tour.locations.map(loc => loc.name).join(', ')}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium text-lg">
                Book This Tour
              </button>
              <button className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200 font-medium text-lg">
                View Itinerary
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
