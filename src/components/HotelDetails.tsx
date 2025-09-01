'use client';

import { Star, MapPin, Phone, Mail, Globe, Clock, Users } from 'lucide-react';

interface HotelDetailsProps {
  hotel: {
    title: string;
    summary?: string;
    rating?: number;
    address: {
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
    policies?: {
      checkIn?: string;
      checkOut?: string;
      cancellation?: string;
    };
    amenities?: string[];
  };
}

export function HotelDetails({ hotel }: HotelDetailsProps) {
  const amenities = hotel.amenities || [
    'Free WiFi',
    'Swimming Pool',
    'Restaurant',
    'Spa',
    'Gym',
    'Parking',
    'Air Conditioning',
    'Room Service',
    '24/7 Front Desk',
    'Laundry Service',
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
        About {hotel.title}
      </h2>

      {/* Description */}
      {hotel.summary && (
        <div className="mb-8">
          <p className="text-gray-600 text-lg leading-relaxed">
            {hotel.summary}
          </p>
        </div>
      )}

      {/* Rating */}
      {hotel.rating && (
        <div className="mb-8">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.floor(hotel.rating!)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xl font-semibold text-gray-900">
              {hotel.rating}/5
            </span>
            <span className="text-gray-500">(Based on guest reviews)</span>
          </div>
        </div>
      )}

      {/* Address and Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Address */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-blue-600" />
            Location
          </h3>
          <div className="space-y-2 text-gray-600">
            <p>{hotel.address.street}</p>
            <p>{hotel.address.city}, {hotel.address.region}</p>
            <p>{hotel.address.country}</p>
            {hotel.address.postalCode && <p>{hotel.address.postalCode}</p>}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Phone className="w-5 h-5 mr-2 text-blue-600" />
            Contact Information
          </h3>
          <div className="space-y-3">
            {hotel.contact?.phone && (
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-gray-500" />
                <a
                  href={`tel:${hotel.contact.phone}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {hotel.contact.phone}
                </a>
              </div>
            )}
            
            {hotel.contact?.email && (
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-gray-500" />
                <a
                  href={`mailto:${hotel.contact.email}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {hotel.contact.email}
                </a>
              </div>
            )}
            
            {hotel.contact?.website && (
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2 text-gray-500" />
                <a
                  href={hotel.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Visit Website
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Policies */}
      {hotel.policies && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-blue-600" />
            Hotel Policies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hotel.policies.checkIn && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Check-in</h4>
                <p className="text-gray-600">{hotel.policies.checkIn}</p>
              </div>
            )}
            
            {hotel.policies.checkOut && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Check-out</h4>
                <p className="text-gray-600">{hotel.policies.checkOut}</p>
              </div>
            )}
            
            {hotel.policies.cancellation && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Cancellation</h4>
                <p className="text-gray-600">{hotel.policies.cancellation}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Amenities */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2 text-blue-600" />
          Hotel Amenities
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg"
            >
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700 text-sm">{amenity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
