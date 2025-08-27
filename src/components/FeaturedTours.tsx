import Image from 'next/image';
import Link from 'next/link';

// Mock data for now - will be replaced with Sanity data
const featuredTours = [
  {
    id: '1',
    title: 'Cultural Heritage Tour',
    slug: 'cultural-heritage-tour',
    summary: 'Explore the ancient temples, palaces, and cultural sites of Sri Lanka',
    duration: 7,
    priceFrom: 1200,
    difficulty: 'easy',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    locations: ['Colombo', 'Kandy', 'Anuradhapura'],
  },
  {
    id: '2',
    title: 'Beach Paradise Adventure',
    slug: 'beach-paradise-adventure',
    summary: 'Discover pristine beaches, coral reefs, and marine life along the coast',
    duration: 5,
    priceFrom: 800,
    difficulty: 'moderate',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    locations: ['Galle', 'Mirissa', 'Tangalle'],
  },
  {
    id: '3',
    title: 'Hill Country Trek',
    slug: 'hill-country-trek',
    summary: 'Hike through misty mountains, tea plantations, and scenic landscapes',
    duration: 4,
    priceFrom: 600,
    difficulty: 'challenging',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    locations: ['Nuwara Eliya', 'Ella', 'Haputale'],
  },
];

const difficultyColors = {
  easy: 'bg-green-100 text-green-800',
  moderate: 'bg-yellow-100 text-yellow-800',
  challenging: 'bg-orange-100 text-orange-800',
  expert: 'bg-red-100 text-red-800',
};

export function FeaturedTours() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredTours.map((tour) => (
        <div key={tour.id} className="card card-hover">
          <div className="relative h-64">
            <Image
              src={tour.image}
              alt={tour.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-900">
                {tour.duration} days
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-900">
                ${tour.priceFrom}
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-gray-900">{tour.title}</h3>
              <span className={`badge ${difficultyColors[tour.difficulty as keyof typeof difficultyColors]}`}>
                {tour.difficulty}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">{tour.summary}</p>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{tour.locations.join(', ')}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary">
                  {tour.duration} days
                </span>
                <span className="badge badge-secondary">
                  From ${tour.priceFrom}
                </span>
              </div>
              
              <Link
                href={`/tours/${tour.slug}`}
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
