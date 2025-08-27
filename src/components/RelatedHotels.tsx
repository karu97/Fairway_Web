'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, ArrowRight } from 'lucide-react';

interface RelatedHotelsProps {
  currentSlug: string;
}

export function RelatedHotels({ currentSlug }: RelatedHotelsProps) {
  // This would typically fetch related hotels from the API
  // For now, we'll show placeholder content
  const relatedHotels = [
    {
      slug: 'fairway-colombo',
      name: 'Fairway Colombo',
      description: 'Luxury accommodation in the heart of Sri Lanka\'s capital city...',
      heroImage: { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop' },
      rating: 4.8,
      address: { city: 'Colombo', region: 'Western Province' },
      priceFrom: 150,
      currency: 'USD',
    },
    {
      slug: 'fairway-kandy',
      name: 'Fairway Kandy',
      description: 'Elegant hotel overlooking the sacred Temple of the Tooth...',
      heroImage: { url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
      rating: 4.7,
      address: { city: 'Kandy', region: 'Central Province' },
      priceFrom: 120,
      currency: 'USD',
    },
    {
      slug: 'fairway-galle',
      name: 'Fairway Galle',
      description: 'Beachfront luxury with colonial charm in the historic fort city...',
      heroImage: { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop' },
      rating: 4.9,
      address: { city: 'Galle', region: 'Southern Province' },
      priceFrom: 180,
      currency: 'USD',
    },
  ];

  const formatPrice = (price: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
        Other Hotels You Might Like
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedHotels.map((hotel) => (
          <article key={hotel.slug} className="group">
            <Link href={`/hotels/${hotel.slug}`} className="block">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={hotel.heroImage.url}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center space-x-1 shadow-md">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-900">{hotel.rating}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {hotel.name}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{hotel.address.city}, {hotel.address.region}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {hotel.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-semibold">
                      From {formatPrice(hotel.priceFrom, hotel.currency)}
                    </span>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
      
      {/* View All Hotels */}
      <div className="mt-8 text-center">
        <Link
          href="/hotels"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
        >
          View All Hotels
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
}
