'use client';

import { MapPin, Navigation, Globe, Calendar, Users } from 'lucide-react';

interface TourMapProps {
  tour: {
    title: string;
    locations?: Array<{
      name: string;
      description?: string;
      duration?: string;
      highlights?: string[];
    }>;
    durationDays?: number;
    groupSize?: string;
    availableDates?: string[];
  };
}

export function TourMap({ tour }: TourMapProps) {
  // Default tour locations if none provided
  const locations = tour.locations || [
    {
      name: 'Colombo',
      description: 'Start your journey in the vibrant capital city',
      duration: '2 days',
      highlights: ['Gangaramaya Temple', 'Independence Square', 'Galle Face Green', 'National Museum'],
    },
    {
      name: 'Kandy',
      description: 'Cultural heart of Sri Lanka and UNESCO World Heritage site',
      duration: '3 days',
      highlights: ['Temple of the Sacred Tooth Relic', 'Royal Botanical Gardens', 'Cultural Dance Show', 'Kandy Lake'],
    },
    {
      name: 'Nuwara Eliya',
      description: 'Tea country and hill station known as "Little England"',
      duration: '2 days',
      highlights: ['Tea Plantations', 'Horton Plains National Park', 'Victoria Park', 'Tea Factory Visit'],
    },
    {
      name: 'Yala National Park',
      description: 'Wildlife safari in one of Sri Lanka\'s premier national parks',
      duration: '1 day',
      highlights: ['Wildlife Safari', 'Leopard Spotting', 'Bird Watching', 'Nature Photography'],
    },
    {
      name: 'Galle',
      description: 'Historic coastal city with Dutch colonial architecture',
      duration: '2 days',
      highlights: ['Galle Fort', 'Unawatuna Beach', 'Dutch Reformed Church', 'Maritime Museum'],
    },
  ];

  const durationDays = tour.durationDays || 10;
  const groupSize = tour.groupSize || '2-12 people';
  const availableDates = tour.availableDates || [
    'March 15-25, 2025',
    'April 10-20, 2025',
    'May 5-15, 2025',
    'June 20-30, 2025',
    'July 10-20, 2025',
    'August 15-25, 2025',
    'September 5-15, 2025',
    'October 20-30, 2025',
    'November 10-20, 2025',
    'December 15-25, 2025',
  ];

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
          <p className="text-2xl font-bold text-purple-900">{locations.length}</p>
          <p className="text-sm text-purple-700">Unique locations to explore</p>
        </div>
      </div>

      {/* Interactive Route Map */}
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
            {locations.map((location, index) => (
              <div key={index} className="text-center group">
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
                  <p className="text-sm text-gray-600 mb-2">{location.duration}</p>
                  <p className="text-xs text-gray-500">{location.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Destination Information */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Destination Details</h3>
        
        {locations.map((location, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
                  <span className="ml-auto bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {location.duration}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{location.description}</p>
                
                {/* Highlights */}
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Highlights:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {location.highlights?.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Available Dates */}
      <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-100 p-6 rounded-xl border border-green-200">
        <h3 className="text-xl font-semibold text-green-900 mb-4">Available Tour Dates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {availableDates.map((date, index) => (
            <div key={index} className="bg-white p-3 rounded-lg border border-green-200 text-center">
              <span className="text-sm font-medium text-green-800">{date}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-green-700 mt-3 text-center">
          Custom dates available for groups of 6+ travelers
        </p>
      </div>

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
