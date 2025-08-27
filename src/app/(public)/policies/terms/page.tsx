import { Metadata } from 'next';
import { FileText, CheckCircle, AlertTriangle, Shield, Users, CreditCard, Calendar } from 'lucide-react';
import { generateSchemasFromOptions } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Terms of Service - Fairway Hotels',
  description: 'Read our terms of service and conditions for using Fairway Hotels services. Understand your rights and obligations.',
  keywords: 'terms of service, terms and conditions, Fairway Hotels, booking terms, Sri Lanka',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = 'December 15, 2024';

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Please read these terms carefully before using our services. They govern your relationship with Fairway Hotels.
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
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Important Information</h2>
              <ul className="space-y-2 text-blue-800">
                <li>• These terms apply to all bookings and services provided by Fairway Hotels</li>
                <li>• By making a booking, you agree to be bound by these terms</li>
                <li>• We reserve the right to modify these terms with notice</li>
                <li>• Please read the cancellation and refund policies carefully</li>
                <li>• Contact us if you have any questions about these terms</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            
            <p className="text-gray-700 mb-6">
              By accessing and using the Fairway Hotels website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Services Description</h2>
            
            <p className="text-gray-700 mb-4">
              Fairway Hotels provides the following services:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Hotel accommodation bookings and reservations</li>
              <li>Tour package bookings and travel arrangements</li>
              <li>Travel consultation and planning services</li>
              <li>Transportation and transfer services</li>
              <li>Travel insurance and assistance</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Booking and Reservations</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">3.1 Booking Process</h3>
            <p className="text-gray-700 mb-4">
              All bookings are subject to availability and confirmation. A booking is not confirmed until you receive a written confirmation from us.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">3.2 Booking Requirements</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Valid identification documents (passport for international guests)</li>
              <li>Valid credit card for payment and security deposit</li>
              <li>Accurate guest information and special requirements</li>
              <li>Minimum age requirements (18+ for independent bookings)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">3.3 Group Bookings</h3>
            <p className="text-gray-700 mb-6">
              Group bookings (6+ guests) require special arrangements and may have different terms and conditions. Please contact us directly for group bookings.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Payment Terms</h2>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Payment Schedule</h3>
              <ul className="space-y-2 text-green-800">
                <li>• <strong>Deposit:</strong> 25% of total booking value required to confirm reservation</li>
                <li>• <strong>Final Payment:</strong> Remaining balance due 30 days before arrival</li>
                <li>• <strong>Late Bookings:</strong> Full payment required for bookings within 30 days</li>
                <li>• <strong>Accepted Methods:</strong> Credit cards, bank transfers, PayPal</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">4.1 Currency and Pricing</h3>
            <p className="text-gray-700 mb-4">
              All prices are quoted in USD unless otherwise specified. Prices are subject to change without notice until booking is confirmed.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">4.2 Taxes and Fees</h3>
            <p className="text-gray-700 mb-6">
              Prices exclude applicable taxes, service charges, and government fees. These will be clearly displayed during the booking process.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Cancellation and Refund Policy</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4">Cancellation Timeline</h3>
              <ul className="space-y-2 text-yellow-800">
                <li>• <strong>30+ days before arrival:</strong> Full refund minus processing fees</li>
                <li>• <strong>15-29 days before arrival:</strong> 50% refund</li>
                <li>• <strong>14 days or less:</strong> No refund</li>
                <li>• <strong>No-show:</strong> No refund, full charge applies</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">5.1 Cancellation Process</h3>
            <p className="text-gray-700 mb-4">
              Cancellations must be made in writing (email or letter) and received by us within the specified timeframes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">5.2 Force Majeure</h3>
            <p className="text-gray-700 mb-6">
              We are not liable for cancellations due to circumstances beyond our control, including natural disasters, government actions, or other force majeure events.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Hotel Accommodation</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">6.1 Check-in and Check-out</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Check-in:</strong> 2:00 PM onwards (early check-in subject to availability)</li>
              <li><strong>Check-out:</strong> 11:00 AM (late check-out subject to availability and fees)</li>
              <li><strong>Identification:</strong> Valid ID and credit card required at check-in</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">6.2 Hotel Policies</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Smoking is prohibited in all indoor areas</li>
              <li>Pets are not allowed (service animals permitted with documentation)</li>
              <li>Quiet hours from 10:00 PM to 7:00 AM</li>
              <li>Maximum occupancy limits apply to all rooms</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Tour Services</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">7.1 Tour Itineraries</h3>
            <p className="text-gray-700 mb-4">
              Tour itineraries are subject to change due to weather, local conditions, or other circumstances. We will notify you of any significant changes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">7.2 Tour Requirements</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Valid travel documents and visas (if required)</li>
              <li>Appropriate clothing and footwear for activities</li>
              <li>Health and fitness requirements for certain tours</li>
              <li>Minimum age requirements for adventure tours</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Guest Responsibilities</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-red-900 mb-4">Important Responsibilities</h3>
              <ul className="space-y-2 text-red-800">
                <li>• Respect local customs and cultural sensitivities</li>
                <li>• Follow safety instructions and guidelines</li>
                <li>• Maintain appropriate behavior in all locations</li>
                <li>• Comply with local laws and regulations</li>
                <li>• Take care of personal belongings and valuables</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Liability and Insurance</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">9.1 Our Liability</h3>
            <p className="text-gray-700 mb-4">
              Our liability is limited to the amount paid for the specific service. We are not liable for indirect, incidental, or consequential damages.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">9.2 Travel Insurance</h3>
            <p className="text-gray-700 mb-6">
              We strongly recommend comprehensive travel insurance covering medical expenses, trip cancellation, and personal belongings.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Privacy and Data Protection</h2>
            
            <p className="text-gray-700 mb-6">
              Your privacy is important to us. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your personal information.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Intellectual Property</h2>
            
            <p className="text-gray-700 mb-6">
              All content on our website, including text, images, logos, and designs, is the property of Fairway Hotels and is protected by copyright laws.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">12.1 Governing Law</h3>
            <p className="text-gray-700 mb-4">
              These terms are governed by the laws of Sri Lanka. Any disputes will be resolved in the courts of Sri Lanka.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">12.2 Dispute Process</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>First, contact our customer service team</li>
              <li>If unresolved, escalate to management</li>
              <li>Mediation may be offered for complex disputes</li>
              <li>Legal action as a last resort</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">13. Changes to Terms</h2>
            
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of modified terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">14. Contact Information</h2>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                For questions about these terms or to request clarification, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Customer Service: +94 11 234 5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Legal Department: legal@fairwayhotels.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Business Hours: 24/7 for urgent matters</span>
                </div>
              </div>
              <p className="text-gray-700 mt-4">
                <strong>Mailing Address:</strong><br />
                Fairway Hotels Ltd.<br />
                Legal Department<br />
                123 Galle Road, Colombo 00300, Sri Lanka
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">15. Severability</h2>
            
            <p className="text-gray-700 mb-6">
              If any provision of these terms is found to be unenforceable or invalid, the remaining provisions will continue to be valid and enforceable.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">16. Entire Agreement</h2>
            
            <p className="text-gray-700 mb-6">
              These terms constitute the entire agreement between you and Fairway Hotels regarding the use of our services, superseding any prior agreements or understandings.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Acceptance of Terms</h3>
              <p className="text-blue-800 text-sm">
                By using our services or making a booking, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
              <p className="text-blue-800 text-sm mt-2">
                These terms are effective as of {lastUpdated} and apply to all bookings and services provided by Fairway Hotels.
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
            title: 'Terms of Service - Fairway Hotels',
            description: 'Read our terms of service and conditions for using Fairway Hotels services.',
            url: 'https://fairwayhotels.com/policies/terms',
            images: [],
          })),
        }}
      />
    </>
  );
}
