'use client';

import Image from 'next/image';
import { Star, MapPin, Phone, Mail, Globe } from 'lucide-react';

interface HotelHeroProps {
  hotel: {
    title: string;
    heroImage?: { url: string; alt?: string };
    rating?: number;
    address: {
      street: string;
      city: string;
      region: string;
      country: string;
    };
    contact?: {
      phone?: string;
      email?: string;
      website?: string;
    };
  };
}

export function HotelHero({ hotel }: HotelHeroProps) {
  return (
    <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Hero Image */}
      {hotel.heroImage ? (
        <Image
          src={hotel.heroImage.url}
          alt={hotel.heroImage.alt || hotel.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-700" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Hotel Name and Rating */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-4">
                {hotel.title}
              </h1>
              {hotel.rating && (
                <div className="flex items-center space-x-2">
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
                  <span className="text-white text-lg font-medium">
                    {hotel.rating}/5
                  </span>
                </div>
              )}
            </div>

            {/* Address */}
            <div className="mb-6">
              <div className="flex items-center text-white text-lg mb-2">
                <MapPin className="w-5 h-5 mr-2" />
                <span>
                  {hotel.address.street}, {hotel.address.city}, {hotel.address.region}, {hotel.address.country}
                </span>
              </div>
            </div>

            {/* Contact Information */}
            {hotel.contact && (
              <div className="flex flex-wrap items-center space-x-6 text-white">
                {hotel.contact.phone && (
                  <a
                    href={`tel:${hotel.contact.phone}`}
                    className="flex items-center hover:text-blue-200 transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    <span>{hotel.contact.phone}</span>
                  </a>
                )}
                
                {hotel.contact.email && (
                  <a
                    href={`mailto:${hotel.contact.email}`}
                    className="flex items-center hover:text-blue-200 transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    <span>{hotel.contact.email}</span>
                  </a>
                )}
                
                {hotel.contact.website && (
                  <a
                    href={hotel.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-blue-200 transition-colors duration-200"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    <span>Visit Website</span>
                  </a>
                )}
              </div>
            )}
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
