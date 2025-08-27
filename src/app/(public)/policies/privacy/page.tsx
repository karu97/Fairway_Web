import { Metadata } from 'next';
import { Shield, Eye, Lock, Database, Globe, Phone, Mail } from 'lucide-react';
import { generateSchemasFromOptions } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Privacy Policy - Fairway Hotels',
  description: 'Learn how Fairway Hotels collects, uses, and protects your personal information. Read our comprehensive privacy policy.',
  keywords: 'privacy policy, data protection, personal information, Fairway Hotels, Sri Lanka',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'December 15, 2024';

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Quick Summary</h2>
              <ul className="space-y-2 text-blue-800">
                <li>• We only collect information necessary to provide our services</li>
                <li>• Your data is never sold to third parties</li>
                <li>• We use industry-standard security measures</li>
                <li>• You have full control over your personal information</li>
                <li>• We comply with international data protection standards</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">1.1 Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Name, email address, and phone number</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely through Stripe)</li>
              <li>Travel preferences and special requirements</li>
              <li>Communication history with our team</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">1.2 Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              When you visit our website, we automatically collect:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Device information (browser type, operating system)</li>
              <li>IP address and location data</li>
              <li>Website usage patterns and analytics</li>
              <li>Cookies and similar technologies</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
            
            <p className="text-gray-700 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Providing and managing hotel bookings and tour reservations</li>
              <li>Processing payments and sending confirmations</li>
              <li>Communicating with you about your bookings</li>
              <li>Improving our services and website experience</li>
              <li>Sending marketing communications (with your consent)</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Information Sharing</h2>
            
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Service Providers:</strong> With trusted partners who help us operate our business (hotels, tour operators, payment processors)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Data Security</h2>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Security Measures</h3>
              <ul className="space-y-2 text-green-800">
                <li>• SSL encryption for all data transmission</li>
                <li>• Secure data centers with 24/7 monitoring</li>
                <li>• Regular security audits and penetration testing</li>
                <li>• Employee training on data protection</li>
                <li>• Access controls and authentication systems</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Data Retention</h2>
            
            <p className="text-gray-700 mb-4">
              We retain your personal information only for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Provide our services and fulfill bookings</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Improve our services based on usage patterns</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Typically, we retain booking information for 7 years for tax and legal purposes, and marketing preferences until you opt out.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Your Rights</h2>
            
            <p className="text-gray-700 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Objection:</strong> Object to certain processing activities</li>
              <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Cookies and Tracking</h2>
            
            <p className="text-gray-700 mb-4">
              We use cookies and similar technologies to enhance your browsing experience:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
              <li><strong>Marketing Cookies:</strong> Personalize content and advertisements</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and choices</li>
            </ul>

            <p className="text-gray-700 mb-6">
              You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. International Data Transfers</h2>
            
            <p className="text-gray-700 mb-4">
              Your personal information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Children's Privacy</h2>
            
            <p className="text-gray-700 mb-6">
              Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you believe we have collected such information, please contact us immediately.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Changes to This Policy</h2>
            
            <p className="text-gray-700 mb-6">
              We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Contact Us</h2>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">privacy@fairwayhotels.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">+94 11 234 5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">www.fairwayhotels.com</span>
                </div>
              </div>
              <p className="text-gray-700 mt-4">
                <strong>Data Protection Officer:</strong><br />
                Fairway Hotels Ltd.<br />
                123 Galle Road, Colombo 00300, Sri Lanka
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Legal Basis</h2>
            
            <p className="text-gray-700 mb-4">
              Our processing of personal information is based on the following legal grounds:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Contract:</strong> Processing necessary to fulfill our contractual obligations</li>
              <li><strong>Legitimate Interest:</strong> Processing for our legitimate business interests</li>
              <li><strong>Consent:</strong> Processing based on your explicit consent</li>
              <li><strong>Legal Obligation:</strong> Processing required by applicable laws</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-semibold text-yellow-900 mb-2">Important Notice</h3>
              <p className="text-yellow-800 text-sm">
                This privacy policy is effective as of {lastUpdated}. By using our services, you acknowledge that you have read and understood this policy and agree to the collection, use, and disclosure of your personal information as described herein.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSchemasFromOptions({
            type: 'policy',
            title: 'Privacy Policy - Fairway Hotels',
            description: 'Learn how Fairway Hotels collects, uses, and protects your personal information.',
            url: 'https://fairwayhotels.com/policies/privacy',
            images: [],
          })),
        }}
      />
    </>
  );
}
