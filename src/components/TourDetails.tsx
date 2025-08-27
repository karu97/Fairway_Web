'use client';

import { Star, MapPin, Clock, Users, DollarSign, Calendar, CheckCircle } from 'lucide-react';

interface TourDetailsProps {
  tour: {
    title: string;
    summary?: string;
    description?: string;
    rating?: number;
    durationDays?: number;
    priceFrom?: number;
    currency?: string;
    locations?: Array<{ name: string }>;
    availableDates?: string[];
    maxGroupSize?: number;
  };
}

export function TourDetails({ tour }: TourDetailsProps) {
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
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
        Tour Overview
      </h2>

      {/* Summary */}
      {tour.summary && (
        <div className="mb-8">
          <p className="text-gray-600 text-lg leading-relaxed">
            {tour.summary}
          </p>
        </div>
      )}

      {/* Rating */}
      {tour.rating && (
        <div className="mb-8">
          <div className="flex items-center space-x-3">
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
            <span className="text-xl font-semibold text-gray-900">
              {tour.rating}/5
            </span>
            <span className="text-gray-500">(Based on traveler reviews)</span>
          </div>
        </div>
      )}

      {/* Key Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Duration */}
        {tour.durationDays && (
          <div className="bg-blue-50 p-6 rounded-xl text-center">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Duration</h3>
            <p className="text-blue-600 font-medium">{formatDuration(tour.durationDays)}</p>
          </div>
        )}

        {/* Price */}
        {tour.priceFrom && (
          <div className="bg-green-50 p-6 rounded-xl text-center">
            <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Starting From</h3>
            <p className="text-green-600 font-medium text-xl">
              {formatPrice(tour.priceFrom, tour.currency)}
            </p>
          </div>
        )}

        {/* Group Size */}
        {tour.maxGroupSize && (
          <div className="bg-purple-50 p-6 rounded-xl text-center">
            <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Group Size</h3>
            <p className="text-purple-600 font-medium">Max {tour.maxGroupSize} people</p>
          </div>
        )}

        {/* Availability */}
        <div className="bg-orange-50 p-6 rounded-xl text-center">
          <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Availability</h3>
          <p className="text-orange-600 font-medium">
            {tour.availableDates && tour.availableDates.length > 0 ? 'Available' : 'Limited'}
          </p>
        </div>
      </div>

      {/* Description */}
      {tour.description && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">About This Tour</h3>
          <p className="text-gray-600 leading-relaxed">
            {tour.description}
          </p>
        </div>
      )}

      {/* Locations */}
      {tour.locations && tour.locations.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-green-600" />
            Destinations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tour.locations.map((location, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">{location.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Available Dates */}
      {tour.availableDates && tour.availableDates.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-green-600" />
            Available Dates
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {tour.availableDates.slice(0, 8).map((date, index) => (
              <div
                key={index}
                className="bg-green-50 border border-green-200 p-3 rounded-lg text-center"
              >
                <span className="text-green-800 font-medium text-sm">
                  {new Date(date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
            ))}
            {tour.availableDates.length > 8 && (
              <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg text-center">
                <span className="text-gray-600 text-sm">
                  +{tour.availableDates.length - 8} more dates
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
