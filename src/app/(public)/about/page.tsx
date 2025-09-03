import { Metadata } from 'next';
import { generateSchemasFromOptions } from '@/lib/schema';
import { getPageContent, getSiteSettings } from '@/lib/sanity';
import { ContentSections } from '@/components/ContentSections';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPageContent('about');
  const siteSettings = await getSiteSettings();
  
  return {
    title: content?.seo?.title || 'About Us - Fairway Hotels',
    description: content?.seo?.description || 'Learn about Fairway Hotels, our mission to provide luxury accommodation and exceptional experiences across Sri Lanka.',
    openGraph: {
      title: content?.seo?.title || 'About Us - Fairway Hotels',
      description: content?.seo?.description || 'Learn about Fairway Hotels and our mission.',
    },
  };
}

export default async function AboutPage() {
  let content = null;
  let siteSettings = null;

  try {
    content = await getPageContent('about');
    siteSettings = await getSiteSettings();
  } catch (error) {
    console.error('Error fetching about page data:', error);
    // Continue with null values - fallbacks will be used
  }

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
            {content?.hero?.title || 'About Fairway Hotels'}
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            {content?.hero?.subtitle || 'Crafting exceptional experiences in the heart of Sri Lanka since 1995'}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Dynamic Content Sections */}
        <ContentSections sections={content?.sections} />

        {/* Fallback content if no sections are available */}
        {!content?.sections || content.sections.length === 0 ? (
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Fairway Hotels is committed to providing exceptional hospitality experiences
              that showcase the beauty and culture of Sri Lanka. From luxury accommodations
              to curated tours, we strive to create unforgettable memories for every guest.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Luxury Hotels</h3>
                <p className="text-gray-600">Premium accommodations across Sri Lanka's most beautiful destinations.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🗺️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Curated Tours</h3>
                <p className="text-gray-600">Authentic experiences showcasing Sri Lanka's rich culture and natural beauty.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Exceptional Service</h3>
                <p className="text-gray-600">Personalized attention and world-class hospitality for every guest.</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
    </div>
  );
}
