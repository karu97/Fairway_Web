import { Metadata } from 'next';
import Link from 'next/link';
import { getFeaturedHotels, getFeaturedTours, getSiteSettings } from '@/lib/sanity';
import { 
  ArrowRight, 
  Star, 
  MapPin, 
  Calendar, 
  Users, 
  Shield, 
  Award,
  CheckCircle,
  Play
} from 'lucide-react';
import { generatePageSchemas, generateWebsiteSchema, generateOrganizationSchema } from '@/lib/schema';
import { PortableTextRenderer } from '@/components/PortableTextRenderer';

// Add revalidation for ISR
export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: 'Fairway Hotels - Luxury Hotels & Tours in Sri Lanka',
  description: 'Experience luxury hospitality and unforgettable adventures across Sri Lanka. Discover our world-class hotels, curated tours, and authentic Sri Lankan experiences.',
  keywords: 'Sri Lanka hotels, luxury accommodation, tours, travel, Colombo, Kandy, Galle, Nuwara Eliya',
  openGraph: {
    title: 'Fairway Hotels - Luxury Hotels & Tours in Sri Lanka',
    description: 'Experience luxury hospitality and unforgettable adventures across Sri Lanka.',
    type: 'website',
    locale: 'en_US',
    url: 'https://fairwayhotels.com',
    siteName: 'Fairway Hotels',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Fairway Hotels - Luxury Sri Lanka Experience',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fairway Hotels - Luxury Hotels & Tours in Sri Lanka',
    description: 'Experience luxury hospitality and unforgettable adventures across Sri Lanka.',
    images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=630&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function HomePage() {
  const [featuredHotels, featuredTours] = await Promise.all([
    getFeaturedHotels(),
    getFeaturedTours(),
  ]);

  // Get site settings for dynamic content
  const siteSettings = await getSiteSettings();
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop"
            alt="Luxury hotel in Sri Lanka"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 leading-tight">
            Experience
            <span className="block text-blue-400">Luxury & Adventure</span>
            in Sri Lanka
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover world-class hospitality, pristine beaches, misty mountains, and rich cultural heritage. 
            Your journey to paradise starts with Fairway Hotels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/hotels"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center space-x-2 group"
            >
              <span>Explore Hotels</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/tours"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-colors border border-white/30 flex items-center space-x-2 group"
            >
              <span>Discover Tours</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span>Travel Agent License: TA/1234</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-blue-400" />
              <span>Member of SLITH</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6">
              Why Choose Fairway Hotels?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine luxury accommodation with authentic experiences, ensuring every moment of your stay is memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: 'Luxury Accommodation',
                description: 'World-class hotels with premium amenities and exceptional service.',
                color: 'text-yellow-500',
                bgColor: 'bg-yellow-50',
              },
              {
                icon: MapPin,
                title: 'Prime Locations',
                description: 'Strategically located properties in the most beautiful destinations.',
                color: 'text-blue-500',
                bgColor: 'bg-blue-50',
              },
              {
                icon: Shield,
                title: 'Safe & Secure',
                description: 'Your safety and comfort are our top priorities.',
                color: 'text-green-500',
                bgColor: 'bg-green-50',
              },
              {
                icon: Award,
                title: 'Award-Winning',
                description: 'Recognized for excellence in hospitality and tourism.',
                color: 'text-purple-500',
                bgColor: 'bg-purple-50',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <feature.icon className={`w-10 h-10 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hotels Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6">
              Featured Hotels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience luxury and comfort in our handpicked selection of premium accommodations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredHotels && featuredHotels.length > 0 ? (
              featuredHotels.map((hotel, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={hotel.heroImage?.url || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop'}
                      alt={hotel.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                      {hotel.priceFrom ? `From $${hotel.priceFrom}` : ''}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{hotel.name}</h3>
                      <div className="flex items-center space-x-1">
                        {hotel.rating && <Star className="w-5 h-5 text-yellow-400 fill-current" />}
                        {hotel.rating && <span className="text-sm font-medium text-gray-700">{hotel.rating}</span>}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-600 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{hotel.address?.city}{hotel.address?.region ? `, ${hotel.address.region}` : ''}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{hotel.description}</p>
                    
                    <Link
                      href={`/hotels/${hotel.slug}`}
                      className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition-colors group"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Featured Hotels Available</h3>
                  <p className="text-gray-600 mb-4">
                    We're currently updating our hotel offerings. Please check back soon for luxury accommodations!
                  </p>
                  <Link
                    href="/hotels"
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    <span>Browse All Hotels</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/hotels"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <span>View All Hotels</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6">
              Popular Tours
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the beauty of Sri Lanka with our carefully curated tour packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours && featuredTours.length > 0 ? (
              featuredTours.map((tour, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="relative overflow-hidden">
                    <img
                      src={tour.heroImage?.url || 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop'}
                      alt={tour.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {tour.durationDays ? `${tour.durationDays} Days` : ''}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                      {tour.priceFrom ? `From $${tour.priceFrom}` : ''}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{tour.title}</h3>
                    <p className="text-gray-600 mb-4">
                      <PortableTextRenderer value={tour.summary} />
                    </p>
                    
                    <Link
                      href={`/tours/${tour.slug}`}
                      className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition-colors group"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Featured Tours Available</h3>
                  <p className="text-gray-600 mb-4">
                    We're currently updating our tour offerings. Please check back soon for amazing Sri Lankan adventures!
                  </p>
                  <Link
                    href="/tours"
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    <span>Browse All Tours</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/tours"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <span>View All Tours</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              Our Numbers Speak
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Trusted by thousands of travelers worldwide for exceptional experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '25+', label: 'Years of Excellence', icon: Award },
              { number: '50K+', label: 'Happy Guests', icon: Users },
              { number: '15+', label: 'Luxury Hotels', icon: Star },
              { number: '100+', label: 'Tour Packages', icon: MapPin },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <stat.icon className="w-10 h-10 text-blue-300" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let us help you create unforgettable memories in the beautiful island of Sri Lanka. 
            Contact our travel experts today for personalized recommendations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center space-x-2 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/tours"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors border-2 border-blue-600 flex items-center space-x-2 group"
            >
              <span>Browse Tours</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generatePageSchemas([
              () =>
                generateWebsiteSchema({
                  name: 'Fairway Hotels',
                  url: 'https://fairwayhotels.com',
                  description:
                    'Experience luxury hospitality and unforgettable adventures across Sri Lanka.',
                  searchUrl: 'https://fairwayhotels.com/search?q={search_term_string}',
                  publisher: {
                    name: 'Fairway Hotels',
                    logo: 'https://fairwayhotels.com/logo.png',
                  },
                }),
              () =>
                generateOrganizationSchema({
                  name: 'Fairway Hotels',
                  url: 'https://fairwayhotels.com',
                  logo: 'https://fairwayhotels.com/logo.png',
                  description: 'Luxury hotels and tours in Sri Lanka',
                  address: {
                    streetAddress: '123 Galle Road',
                    addressLocality: 'Colombo',
                    addressRegion: 'Western Province',
                    postalCode: '00300',
                    addressCountry: 'LK',
                  },
                  contactPoint: {
                    telephone: '+94-11-234-5678',
                    contactType: 'customer service',
                    areaServed: 'LK',
                    availableLanguage: ['English', 'Sinhala', 'Tamil'],
                  },
                  sameAs: [
                    'https://www.facebook.com/fairwayhotels',
                    'https://www.twitter.com/fairwayhotels',
                    'https://www.instagram.com/fairwayhotels',
                    'https://www.linkedin.com/company/fairwayhotels',
                  ],
                  foundingDate: '2010',
                  numberOfEmployees: '100-500',
                  industry: 'Hospitality',
                  serviceType: 'Hotel and Tour Services',
                }),
            ])
          ),
        }}
      />
    </>
  );
}
