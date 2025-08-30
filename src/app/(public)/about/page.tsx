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
  const content = await getPageContent('about');
  const siteSettings = await getSiteSettings();
  
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
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
    </div>
  );
}
