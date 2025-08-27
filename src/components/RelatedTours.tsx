'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react';

interface RelatedToursProps {
  currentSlug: string;
}

export function RelatedTours({ currentSlug }: RelatedToursProps) {
  // This would typically fetch related tours from the API
  // For now, we'll show placeholder content
  const relatedTours = [
    {
      slug: 'cultural-heritage-tour',
      title: 'Cultural Heritage Tour',
      summary: 'Discover ancient temples, traditional villages, and cultural traditions...',
      heroImage: { url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
      rating: 4.8,
      durationDays: 5,
      priceFrom: 450,
      currency: 'USD',
      locations: [{ name: 'Kandy' }, { name: 'Sigiriya' }],
    },
    {
      slug: 'beach-paradise-tour',
      title: 'Beach Paradise Tour',
      summary: 'Relax on pristine beaches and explore coastal towns...',
      heroImage: { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop' },
      rating: 4.7,
      durationDays: 4,
      priceFrom: 380,
      currency: 'USD',
      locations: [{ name: 'Galle' }, { name: 'Mirissa' }],
    },
    {
      slug: 'tea-country-adventure',
      title: 'Tea Country Adventure',
      summary: 'Hike through misty mountains and learn about Ceylon tea...',
      heroImage: { url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
      rating: 4.9,
      durationDays: 3,
      priceFrom: 320,
      currency: 'USD',
      locations: [{ name: 'Nuwara Eliya' }],
    },
  ];

  const formatPrice = (price: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatDuration = (days: number) => {
    if (days === 1) return '1 Day';
    return `${days} Days`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Other Tours You Might Like
      </h3>
      
      <div className="space-y-6">
        {relatedTours.map((tour) => (
          <article key={tour.slug} className="group">
            <Link href={`/tours/${tour.slug}`} className="block">
              <div className="flex gap-4">
                {/* Image */}
                <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                  <Image
                    src={tour.heroImage.url}
                    alt={tour.title}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-2 group-hover:text-green-600 transition-colors duration-200 line-clamp-2">
                    {tour.title}
                  </h4>
                  
                  <p className="text-gray-500 text-xs line-clamp-2 mb-2">
                    {tour.summary}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-gray-400 text-xs mb-2">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{formatDuration(tour.durationDays)}</span>
                    </div>
                    
                    {tour.locations && tour.locations.length > 0 && (
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{tour.locations.map(loc => loc.name).join(', ')}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-semibold text-sm">
                      From {formatPrice(tour.priceFrom, tour.currency)}
                    </span>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <ArrowRight className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
      
      {/* View All Tours */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <Link
          href="/tours"
          className="block text-center text-green-600 hover:text-green-800 font-medium text-sm transition-colors duration-200"
        >
          View All Tours →
        </Link>
      </div>
    </div>
  );
}
