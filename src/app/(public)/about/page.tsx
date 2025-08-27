import { Metadata } from 'next';
import { generateSchemasFromOptions } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Us - Fairway Hotels',
  description: 'Learn about Fairway Hotels, our mission to provide luxury accommodation and exceptional experiences across Sri Lanka.',
  openGraph: {
    title: 'About Us - Fairway Hotels',
    description: 'Learn about Fairway Hotels and our mission.',
  },
};

export default function AboutPage() {
  const schemas = generateSchemasFromOptions({
    includeOrganization: true,
    includeLocalBusiness: true,
    breadcrumbs: {
      items: [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' }
      ]
    }
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-center mb-4">
            About Fairway Hotels
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Crafting exceptional experiences in the heart of Sri Lanka since 1995
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Story Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Founded in 1995, Fairway Hotels began with a simple vision: to provide world-class 
            accommodation that celebrates the rich culture and natural beauty of Sri Lanka. 
            What started as a single boutique hotel in Colombo has grown into a collection of 
            luxury properties across the island.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Today, we continue to uphold the highest standards of hospitality while offering 
            guests authentic experiences that connect them with the heart and soul of Sri Lanka.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in every aspect of our service, from the quality of our 
              accommodations to the warmth of our hospitality.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
            <p className="text-gray-600">
              We're committed to sustainable practices that protect Sri Lanka's natural beauty 
              for future generations to enjoy.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Authenticity</h3>
            <p className="text-gray-600">
              We believe in authentic experiences that showcase the real Sri Lanka, from local 
              cuisine to cultural traditions.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600">Luxury Hotels</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Tour Packages</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10k+</div>
              <div className="text-gray-600">Happy Guests</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
            Our Leadership Team
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Meet the passionate individuals who drive our mission to provide exceptional 
            hospitality experiences across Sri Lanka.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rajith Perera</h3>
              <p className="text-blue-600 mb-2">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm">
                With over 20 years in hospitality, Rajith leads our vision for luxury 
                accommodation in Sri Lanka.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Priya Fernando</h3>
              <p className="text-blue-600 mb-2">Operations Director</p>
              <p className="text-gray-600 text-sm">
                Priya ensures every guest receives the highest standard of service 
                across all our properties.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dinesh Silva</h3>
              <p className="text-blue-600 mb-2">Head of Guest Experience</p>
              <p className="text-gray-600 text-sm">
                Dinesh creates memorable experiences that exceed guest expectations 
                and create lasting memories.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
    </div>
  );
}
