import { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { ContactMap } from '@/components/ContactMap';
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
  let content = null;
  let siteSettings = null;

  try {
    content = await getPageContent('contact');
    siteSettings = await getSiteSettings();
  } catch (error) {
    console.error('Error fetching contact page data:', error);
    // Continue with null values - fallbacks will be used
  }

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
            {content?.hero?.title || 'Contact Us'}
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            {content?.hero?.subtitle || 'We\'re here to help you plan your perfect Sri Lankan adventure'}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
              {content?.hero?.ctaPrimary || 'Send us a Message'}
            </h2>
            <p className="text-gray-600 mb-8">
              {content?.hero?.description || 'Have questions about our hotels or tours? Want to plan a special event? We\'d love to hear from you.'}
            </p>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
                {content?.hero?.ctaSecondary || 'Get in Touch'}
              </h2>
              <p className="text-gray-600 mb-8">
                Our team is available to assist you with bookings, inquiries, and
                personalized travel recommendations.
              </p>
            </div>

            {/* Dynamic Contact Content */}
            <ContentSections sections={content?.sections} />

            {/* Fallback contact information if no sections */}
            {!content?.sections || content.sections.length === 0 ? (
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Visit Our Office</h3>
                    <p className="text-gray-600">123 Galle Road, Colombo 00300, Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">+94 11 234 5678</p>
                    <p className="text-gray-600">+94 77 123 4567 (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">info@fairwayhotels.com</p>
                    <p className="text-gray-600">bookings@fairwayhotels.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 text-xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6 text-center">
            {content?.sections?.find((s: any) => s._type === 'contact')?.title || 'Find Us'}
          </h2>
          <ContactMap
            address={siteSettings?.contact?.address}
            phone={siteSettings?.contact?.phone}
            email={siteSettings?.contact?.email}
          />
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
