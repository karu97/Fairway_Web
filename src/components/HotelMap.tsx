'use client';

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
    nearbyAttractions?: Array<{
      name: string;
      distance: string;
      type: string;
      description?: string;
    }>;
  };
}

export function HotelMap({ hotel }: HotelMapProps) {
  // Default nearby attractions if none provided
  const nearbyAttractions = hotel.nearbyAttractions || [
    {
      name: 'Gangaramaya Temple',
      distance: '0.5 km',
      type: 'Cultural Site',
      description: 'Famous Buddhist temple with rich architecture and history',
    },
    {
      name: 'Independence Square',
      distance: '1.2 km',
      type: 'Historical Monument',
      description: 'Iconic landmark celebrating Sri Lanka\'s independence',
    },
    {
      name: 'Galle Face Green',
      distance: '0.8 km',
      type: 'Public Park',
      description: 'Beautiful oceanfront promenade and recreational area',
    },
    {
      name: 'National Museum',
      distance: '1.5 km',
      type: 'Museum',
      description: 'Largest museum in Sri Lanka with extensive collections',
    },
    {
      name: 'Colombo Fort',
      distance: '2.0 km',
      type: 'Historical District',
      description: 'Historic fort area with colonial architecture',
    },
    {
      name: 'Viharamahadevi Park',
      distance: '1.8 km',
      type: 'Public Park',
      description: 'Largest public park in Colombo with beautiful gardens',
    },
  ];

  const address = hotel.address || {
    street: '123 Galle Road',
    city: 'Colombo',
    region: 'Western Province',
    country: 'Sri Lanka',
    postalCode: '00300',
    lat: 6.9271,
    lng: 79.8612,
  };

  const contact = hotel.contact || {
    phone: '+94 11 234 5678',
    email: 'info@fairwayhotels.com',
    website: 'www.fairwayhotels.com',
  };

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
            <div className="bg-white p-4 rounded-xl shadow-md">
              <p className="text-sm text-gray-600">
                <strong>Coordinates:</strong><br />
                {address.lat?.toFixed(4)}, {address.lng?.toFixed(4)}
              </p>
            </div>
          </div>
        </div>

        {/* Address & Contact */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Hotel Address</h3>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex items-start space-x-3 mb-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">{hotel.name}</p>
                  <p className="text-gray-600">{address.street}</p>
                  <p className="text-gray-600">{address.city}, {address.region}</p>
                  <p className="text-gray-600">{address.country} {address.postalCode}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">{contact.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">{contact.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">{contact.website}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Transportation */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting Here</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center mb-2">
                  <Navigation className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="font-medium text-blue-900">From Airport</h4>
                </div>
                <p className="text-sm text-blue-700">30-45 minutes by taxi</p>
                <p className="text-sm text-blue-700">1 hour by public transport</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center mb-2">
                  <Clock className="w-5 h-5 text-green-600 mr-2" />
                  <h4 className="font-medium text-green-900">From City Center</h4>
                </div>
                <p className="text-sm text-green-700">10-15 minutes by taxi</p>
                <p className="text-sm text-green-700">20 minutes by bus</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nearby Attractions */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Nearby Attractions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nearbyAttractions.map((attraction, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-gray-900">{attraction.name}</h4>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                  {attraction.distance}
                </span>
              </div>
              
              <div className="flex items-center mb-3">
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                <span className="text-sm text-gray-600">{attraction.type}</span>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{attraction.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Walking distance</span>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Area Information */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-xl border border-purple-200">
          <h4 className="font-semibold text-purple-900 mb-3">Cultural District</h4>
          <p className="text-sm text-purple-700 mb-3">
            Located in the heart of Colombo's cultural district, surrounded by temples, museums, and historical sites.
          </p>
          <div className="flex items-center text-sm text-purple-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Cultural Hub</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl border border-green-200">
          <h4 className="font-semibold text-green-900 mb-3">Business Center</h4>
          <p className="text-sm text-green-700 mb-3">
            Close to major business districts, shopping centers, and financial institutions.
          </p>
          <div className="flex items-center text-sm text-green-600">
            <Navigation className="w-4 h-4 mr-1" />
            <span>Business Hub</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-3">Transportation</h4>
          <p className="text-sm text-blue-700 mb-3">
            Excellent connectivity with bus routes, train stations, and major highways nearby.
          </p>
          <div className="flex items-center text-sm text-blue-600">
            <Clock className="w-4 h-4 mr-1" />
            <span>Easy Access</span>
          </div>
        </div>
      </div>

      {/* Local Recommendations */}
      <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl">
        <h3 className="text-lg font-semibold text-amber-900 mb-4">Local Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-amber-800">
          <div>
            <h4 className="font-medium text-amber-900 mb-2">Best Time to Explore</h4>
            <p>• Early morning (6-9 AM) for temple visits and photography</p>
            <p>• Late afternoon (4-7 PM) for shopping and dining</p>
            <p>• Evening (7-10 PM) for cultural shows and entertainment</p>
          </div>
          
          <div>
            <h4 className="font-medium text-amber-900 mb-2">Local Tips</h4>
            <p>• Dress modestly when visiting religious sites</p>
            <p>• Carry water and wear comfortable walking shoes</p>
            <p>• Learn basic Sinhala phrases for better interaction</p>
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
