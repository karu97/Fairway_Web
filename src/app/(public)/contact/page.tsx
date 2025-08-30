import { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { generateSchemasFromOptions } from '@/lib/schema';
import { getPageContent, getSiteSettings } from '@/lib/sanity';
import { ContentSections } from '@/components/ContentSections';

export async function generateMetadata(): Promise<Metadata> {
  const content = await getPageContent('contact');
  const siteSettings = await getSiteSettings();
  
  return {
    title: content?.seo?.title || 'Contact Us - Fairway Hotels',
    description: content?.seo?.description || 'Get in touch with Fairway Hotels. We\'re here to help you plan your perfect stay in Sri Lanka.',
    openGraph: {
      title: content?.seo?.title || 'Contact Us - Fairway Hotels',
      description: content?.seo?.description || 'Get in touch with Fairway Hotels.',
    },
  };
}

export default async function ContactPage() {
  const content = await getPageContent('contact');
  const siteSettings = await getSiteSettings();
  
  const schemas = generateSchemasFromOptions({
    includeOrganization: true,
    includeLocalBusiness: true,
    breadcrumbs: {
      items: [
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' }
      ]
    }
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-center mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            We're here to help you plan your perfect Sri Lankan adventure
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions about our hotels or tours? Want to plan a special event? 
              We'd love to hear from you.
            </p>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Our team is available to assist you with bookings, inquiries, and 
                personalized travel recommendations.
              </p>
            </div>

            {/* Dynamic Contact Content */}
            <ContentSections sections={content?.sections} />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6 text-center">
            Find Us
          </h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500">Interactive Map Coming Soon</p>
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
