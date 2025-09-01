import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react';
import { getTours } from '@/lib/sanity';
import { PortableTextRenderer } from './PortableTextRenderer';

interface RelatedToursProps {
  currentSlug: string;
}

export async function RelatedTours({ currentSlug }: RelatedToursProps) {
  // Fetch all tours and filter out the current one
  const allTours = await getTours();
  const relatedTours = allTours
    .filter(tour => tour.slug !== currentSlug)
    .slice(0, 3); // Show max 3 related tours

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
      
      {relatedTours.length > 0 ? (
        <>
          <div className="space-y-6">
            {relatedTours.map((tour) => (
              <article key={tour.slug} className="group">
                <Link href={`/tours/${tour.slug}`} className="block">
                  <div className="flex gap-4">
                    {/* Image */}
                    <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                      {tour.heroImage ? (
                        <Image
                          src={tour.heroImage.url}
                          alt={tour.title}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                          <span className="text-white text-xs">Tour Image</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-2 group-hover:text-green-600 transition-colors duration-200 line-clamp-2">
                        {tour.title}
                      </h4>
                      
                      {tour.summary && (
                        <div className="text-gray-500 text-xs line-clamp-2 mb-2">
                          <PortableTextRenderer value={tour.summary} />
                        </div>
                      )}
                      
                      <div className="flex items-center space-x-4 text-gray-400 text-xs mb-2">
                        {tour.durationDays && (
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{formatDuration(tour.durationDays)}</span>
                          </div>
                        )}
                        
                        {tour.locations && tour.locations.length > 0 && (
                          <div className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            <span>{tour.locations.map(loc => loc.name).join(', ')}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        {tour.priceFrom ? (
                          <span className="text-green-600 font-semibold text-sm">
                            From {formatPrice(tour.priceFrom, tour.currency || 'USD')}
                          </span>
                        ) : (
                          <span className="text-gray-500 text-xs">Contact for pricing</span>
                        )}
                        
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
        </>
      ) : (
        <div className="text-center py-8">
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">No Related Tours Available</h4>
            <p className="text-gray-600 text-sm mb-4">
              We're currently updating our tour offerings. Please check back soon for more adventures!
            </p>
            <Link
              href="/tours"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
            >
              <span>Browse All Tours</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
