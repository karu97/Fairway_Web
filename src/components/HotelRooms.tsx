'use client';

import React from 'react';
import Image from 'next/image';
import { Users, Bed, Wifi, Coffee, Car, Dumbbell } from 'lucide-react';

interface HotelRoomsProps {
  hotel: {
    name: string;
    rooms?: Array<{
      name: string;
      description?: string;
      sleeps: number;
      priceFrom: number;
      currency?: string;
      images?: Array<{ url: string; alt?: string }>;
      amenities?: string[];
    }>;
  };
}

export function HotelRooms({ hotel }: HotelRoomsProps) {
  const hasRooms = hotel.rooms && hotel.rooms.length > 0;

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
    if (amenityLower.includes('bed')) return <Bed className="w-4 h-4" />;
    if (amenityLower.includes('coffee') || amenityLower.includes('mini bar')) {
      return <Coffee className="w-4 h-4" />;
    }
    if (amenityLower.includes('parking') || amenityLower.includes('car')) {
      return <Car className="w-4 h-4" />;
    }
    if (amenityLower.includes('gym') || amenityLower.includes('fitness')) {
      return <Dumbbell className="w-4 h-4" />;
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
        Rooms & Suites
      </h2>
      
      {hasRooms ? (
        <div className="space-y-8">
          {hotel.rooms.map((room, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Room Image */}
                <div className="relative h-64 lg:h-full">
                  {room.images && room.images[0] ? (
                    <Image
                      src={room.images[0].url}
                      alt={room.images[0].alt || room.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <span className="text-white text-lg">Room Image</span>
                    </div>
                  )}
                </div>

                {/* Room Details */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {room.name}
                  </h3>
                  
                  {/* Room Info */}
                  <div className="flex items-center space-x-6 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-2" />
                      <span>Sleeps {room.sleeps}</span>
                    </div>
                    
                    <div className="text-2xl font-bold text-blue-600">
                      From {formatPrice(room.priceFrom, room.currency)}
                    </div>
                  </div>

                  {/* Room Description */}
                  {room.description && (
                    <p className="text-gray-600 mb-4">{room.description}</p>
                  )}

                  {/* Amenities */}
                  {room.amenities && room.amenities.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Room Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {room.amenities.map((amenity, amenityIndex) => (
                          <div key={amenityIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                            {getAmenityIcon(amenity)}
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                      Book This Room
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium">
                      View Details
                    </button>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-4 text-xs text-gray-500">
                    <p>• Free cancellation up to 24 hours before check-in</p>
                    <p>• Best price guarantee</p>
                    <p>• Instant confirmation</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <Bed className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Room Information</h3>
          <p className="text-gray-600 mb-4">Room details and pricing will be available soon</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact for Availability
          </button>
        </div>
      )}

      {/* Room Policies */}
      <div className="mt-8 p-6 bg-gray-50 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Room Policies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Check-in & Check-out</h4>
            <p>Check-in: 3:00 PM | Check-out: 11:00 AM</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Cancellation</h4>
            <p>Free cancellation up to 24 hours before arrival</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Children</h4>
            <p>Children of all ages are welcome</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Pets</h4>
            <p>Pets are not allowed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
