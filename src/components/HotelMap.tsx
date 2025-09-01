'use client';

import React from 'react';
import { MapPin, Navigation, Clock, Star, Phone, Globe, Mail } from 'lucide-react';

interface HotelMapProps {
  hotel: {
    name: string;
    address?: {
      street: string;
      city: string;
      region: string;
      country: string;
      postalCode?: string;
      lat?: number;
      lng?: number;
    };
    contact?: {
      phone?: string;
      email?: string;
      website?: string;
    };
    nearby?: Array<{
      _id: string;
      name: string;
      summary?: string;
      type?: string;
      geo?: {
        lat?: number;
        lng?: number;
      };
    }>;
  };
}

export function HotelMap({ hotel }: HotelMapProps) {
  const hasAddress = hotel.address && hotel.address.street && hotel.address.city;
  const hasContact = hotel.contact && (hotel.contact.phone || hotel.contact.email || hotel.contact.website);
  const hasNearbyAttractions = hotel.nearby && hotel.nearby.length > 0;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
        Location & Nearby Attractions
      </h2>

      {/* Hotel Location Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Map Placeholder */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
            <p className="text-gray-600 mb-4">Map integration coming soon</p>
            {hotel.address?.lat && hotel.address?.lng && (
              <div className="bg-white p-4 rounded-xl shadow-md">
                <p className="text-sm text-gray-600">
                  <strong>Coordinates:</strong><br />
                  {hotel.address.lat.toFixed(4)}, {hotel.address.lng.toFixed(4)}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Address & Contact */}
        <div className="space-y-6">
          {hasAddress ? (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hotel Address</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">{hotel.name}</p>
                    <p className="text-gray-600">{hotel.address.street}</p>
                    <p className="text-gray-600">{hotel.address.city}, {hotel.address.region}</p>
                    <p className="text-gray-600">{hotel.address.country} {hotel.address.postalCode}</p>
                  </div>
                </div>
                
                {hasContact && (
                  <div className="space-y-3">
                    {hotel.contact.phone && (
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700">{hotel.contact.phone}</span>
                      </div>
                    )}
                    {hotel.contact.email && (
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700">{hotel.contact.email}</span>
                      </div>
                    )}
                    {hotel.contact.website && (
                      <div className="flex items-center space-x-3">
                        <Globe className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700">{hotel.contact.website}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address Information</h3>
                <p className="text-gray-600">Address details will be available soon</p>
              </div>
            </div>
          )}

          {/* Transportation */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting Here</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center mb-2">
                  <Navigation className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="font-medium text-blue-900">From Airport</h4>
                </div>
                <p className="text-sm text-blue-700">Contact us for transfer details</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center mb-2">
                  <Clock className="w-5 h-5 text-green-600 mr-2" />
                  <h4 className="font-medium text-green-900">From City Center</h4>
                </div>
                <p className="text-sm text-green-700">Contact us for directions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nearby Attractions */}
      {hasNearbyAttractions ? (
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Nearby Attractions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotel.nearby.map((attraction) => (
              <div key={attraction._id} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{attraction.name}</h4>
                  {attraction.type && (
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                      {attraction.type}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center mb-3">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="text-sm text-gray-600">{attraction.type || 'Attraction'}</span>
                </div>
                
                {attraction.summary && (
                  <p className="text-sm text-gray-600 mb-4">{attraction.summary}</p>
                )}
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Nearby attraction</span>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Nearby Attractions</h3>
          <p className="text-gray-600 mb-4">Information about nearby attractions will be available soon</p>
        </div>
      )}

      {/* Area Information */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-xl border border-purple-200">
          <h4 className="font-semibold text-purple-900 mb-3">Cultural District</h4>
          <p className="text-sm text-purple-700 mb-3">
            Located in a vibrant area with easy access to local attractions and amenities.
          </p>
          <div className="flex items-center text-sm text-purple-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Prime Location</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl border border-green-200">
          <h4 className="font-semibold text-green-900 mb-3">Business Center</h4>
          <p className="text-sm text-green-700 mb-3">
            Convenient access to business districts, shopping centers, and transportation.
          </p>
          <div className="flex items-center text-sm text-green-600">
            <Navigation className="w-4 h-4 mr-1" />
            <span>Easy Access</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-3">Transportation</h4>
          <p className="text-sm text-blue-700 mb-3">
            Well-connected location with multiple transportation options available.
          </p>
          <div className="flex items-center text-sm text-blue-600">
            <Clock className="w-4 h-4 mr-1" />
            <span>Well Connected</span>
          </div>
        </div>
      </div>

      {/* Local Recommendations */}
      <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl">
        <h3 className="text-lg font-semibold text-amber-900 mb-4">Local Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-amber-800">
          <div>
            <h4 className="font-medium text-amber-900 mb-2">Best Time to Explore</h4>
            <p>• Early morning for temple visits and photography</p>
            <p>• Late afternoon for shopping and dining</p>
            <p>• Evening for cultural shows and entertainment</p>
          </div>
          
          <div>
            <h4 className="font-medium text-amber-900 mb-2">Local Tips</h4>
            <p>• Dress modestly when visiting religious sites</p>
            <p>• Carry water and wear comfortable walking shoes</p>
            <p>• Learn basic local phrases for better interaction</p>
            <p>• Use ride-sharing apps for convenient transportation</p>
          </div>
        </div>
      </div>

      {/* Emergency Information */}
      <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="text-sm text-red-800">
            <strong>Emergency:</strong> Dial 119 for police, 110 for ambulance, 111 for fire service
          </div>
        </div>
      </div>
    </div>
  );
}
