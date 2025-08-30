'use client';

import React from 'react';
import { MapPin, Navigation, Globe, Calendar, Users } from 'lucide-react';

interface TourMapProps {
  tour: {
    title: string;
    locations?: Array<{
      _id: string;
      name: string;
      summary?: string;
      type?: string;
      geo?: {
        lat?: number;
        lng?: number;
      };
    }>;
    durationDays?: number;
    groupSize?: { min?: number; max?: number } | string;
    availableDates?: Array<{
      startDate: string;
      endDate: string;
      price: number;
      available: boolean;
    }>;
  };
}

export function TourMap({ tour }: TourMapProps) {
  const hasLocations = tour.locations && tour.locations.length > 0;
  const hasAvailableDates = tour.availableDates && tour.availableDates.length > 0;
  const durationDays = tour.durationDays || 0;
  const groupSize = typeof tour.groupSize === 'string'
    ? tour.groupSize
    : tour.groupSize && (tour.groupSize.min || tour.groupSize.max)
      ? `${tour.groupSize.min ?? 2}-${tour.groupSize.max ?? 12} people`
      : 'Contact us for details';

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
        Tour Route & Destinations
      </h2>

      {/* Tour Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <div className="flex items-center mb-3">
            <Calendar className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="text-lg font-semibold text-blue-900">Duration</h3>
          </div>
          <p className="text-2xl font-bold text-blue-900">{durationDays} Days</p>
          <p className="text-sm text-blue-700">Complete immersive experience</p>
        </div>

        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
          <div className="flex items-center mb-3">
            <Users className="w-6 h-6 text-green-600 mr-3" />
            <h3 className="text-lg font-semibold text-green-900">Group Size</h3>
          </div>
          <p className="text-2xl font-bold text-green-900">{groupSize}</p>
          <p className="text-sm text-green-700">Intimate group experience</p>
        </div>

        <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
          <div className="flex items-center mb-3">
            <Globe className="w-6 h-6 text-purple-600 mr-3" />
            <h3 className="text-lg font-semibold text-purple-900">Destinations</h3>
          </div>
          <p className="text-2xl font-bold text-purple-900">{hasLocations ? tour.locations.length : 0}</p>
          <p className="text-sm text-purple-700">Unique locations to explore</p>
        </div>
      </div>

      {/* Interactive Route Map */}
      {hasLocations ? (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Journey Route</h3>
            <p className="text-gray-600">Click on each destination to learn more about your stops</p>
          </div>

          {/* Route Visualization */}
          <div className="relative">
            {/* Route Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 transform -translate-y-1/2 z-0"></div>
            
            {/* Destinations */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {tour.locations.map((location, index) => (
                <div key={location._id} className="text-center group">
                  {/* Location Marker */}
                  <div className="relative mb-4">
                    <div className="w-12 h-12 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200 shadow-lg">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    {/* Day Number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Location Info */}
                  <div className="bg-white p-4 rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-200">
                    <h4 className="font-semibold text-gray-900 mb-2">{location.name}</h4>
                    {location.type && (
                      <p className="text-sm text-gray-600 mb-2">{location.type}</p>
                    )}
                    {location.summary && (
                      <p className="text-xs text-gray-500">{location.summary}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl mb-8 text-center">
          <Globe className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Tour Route</h3>
          <p className="text-gray-600">Tour destinations will be available soon</p>
        </div>
      )}

      {/* Detailed Destination Information */}
      {hasLocations ? (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Destination Details</h3>
          
          {tour.locations.map((location, index) => (
            <div key={location._id} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-start space-x-4">
                {/* Day Badge */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                
                {/* Location Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="text-xl font-semibold text-gray-900">{location.name}</h4>
                    {location.type && (
                      <span className="ml-auto bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {location.type}
                      </span>
                    )}
                  </div>
                  
                  {location.summary && (
                    <p className="text-gray-600 mb-4">{location.summary}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Destination Details</h3>
          <p className="text-gray-600">Detailed information about tour destinations will be available soon</p>
        </div>
      )}

      {/* Available Dates */}
      {hasAvailableDates ? (
        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-100 p-6 rounded-xl border border-green-200">
          <h3 className="text-xl font-semibold text-green-900 mb-4">Available Tour Dates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {tour.availableDates.map((date, index) => (
              <div key={index} className="bg-white p-3 rounded-lg border border-green-200 text-center">
                <span className="text-sm font-medium text-green-800">
                  {new Date(date.startDate).toLocaleDateString()} - {new Date(date.endDate).toLocaleDateString()}
                </span>
                <div className="text-xs text-green-600 mt-1">
                  From ${date.price}
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-green-700 mt-3 text-center">
            Custom dates available for groups of 6+ travelers
          </p>
        </div>
      ) : (
        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-100 p-6 rounded-xl border border-green-200 text-center">
          <Calendar className="w-12 h-12 text-green-400 mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-green-900 mb-2">Available Tour Dates</h3>
          <p className="text-green-700">Tour dates will be available soon. Contact us for custom arrangements.</p>
        </div>
      )}

      {/* Travel Tips */}
      <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl">
        <h3 className="text-lg font-semibold text-amber-900 mb-4">Travel Tips & Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-amber-800">
          <div>
            <h4 className="font-medium text-amber-900 mb-2">Best Time to Visit</h4>
            <p>• Dry season (December to April) offers the best weather</p>
            <p>• Avoid monsoon season (May to November) for outdoor activities</p>
            <p>• Peak season is December to March</p>
          </div>
          
          <div>
            <h4 className="font-medium text-amber-900 mb-2">What to Pack</h4>
            <p>• Light, breathable clothing for tropical climate</p>
            <p>• Comfortable walking shoes for temple visits</p>
            <p>• Sun protection (hat, sunscreen, sunglasses)</p>
            <p>• Modest clothing for religious sites</p>
          </div>
        </div>
      </div>
    </div>
  );
}
