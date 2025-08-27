import Image from 'next/image';
import Link from 'next/link';

// Mock data for now - will be replaced with Sanity data
const featuredHotels = [
  {
    id: '1',
    title: 'Fairway Colombo',
    slug: 'fairway-colombo',
    summary: 'Luxury hotel in the heart of Colombo with stunning city views',
    rating: 5,
    priceFrom: 150,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Colombo',
    amenities: ['wifi', 'pool', 'spa', 'restaurant'],
  },
  {
    id: '2',
    title: 'Fairway Kandy',
    slug: 'fairway-kandy',
    summary: 'Serene mountain retreat overlooking the sacred city of Kandy',
    rating: 5,
    priceFrom: 120,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Kandy',
    amenities: ['wifi', 'spa', 'restaurant', 'mountain-view'],
  },
  {
    id: '3',
    title: 'Fairway Galle',
    slug: 'fairway-galle',
    summary: 'Beachfront paradise in the historic coastal city of Galle',
    rating: 5,
    priceFrom: 180,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Galle',
    amenities: ['wifi', 'beach-access', 'pool', 'restaurant'],
  },
];

export function FeaturedHotels() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredHotels.map((hotel) => (
        <div key={hotel.id} className="card card-hover">
          <div className="relative h-64">
            <Image
              src={hotel.image}
              alt={hotel.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 right-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-900">
                ${hotel.priceFrom}/night
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-gray-900">{hotel.title}</h3>
              <div className="flex items-center space-x-1">
                {[...Array(hotel.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">{hotel.summary}</p>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{hotel.location}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {hotel.amenities.slice(0, 3).map((amenity) => (
                  <span key={amenity} className="badge badge-primary">
                    {amenity.replace('-', ' ')}
                  </span>
                ))}
              </div>
              
              <Link
                href={`/hotels/${hotel.slug}`}
                className="btn btn-primary px-6 py-2 text-sm"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
