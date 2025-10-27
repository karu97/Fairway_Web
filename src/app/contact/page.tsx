import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contact Fairway Hotels | Book Your Luxury Stay in Sri Lanka",
  description: "Get in touch with Fairway Hotels for personalized bookings, inquiries, and exceptional Sri Lankan hospitality experiences. Direct contact for the best rates.",
};

export default function ContactPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.15),transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.12),transparent_50%)] animate-pulse delay-1000" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl mb-8">
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse shadow-lg"></div>
            <span className="text-sm font-semibold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif leading-[0.9] mb-6">
            <span className="block text-black/80">Let's Create</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
              Your Perfect
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-black/60 mt-2">
              Sri Lankan Experience
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 max-w-3xl mx-auto leading-relaxed font-light">
            Ready to embark on an unforgettable journey? Our team is here to craft your personalized
            luxury experience across Sri Lanka's most breathtaking destinations.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-32 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.02),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                  Send Us a Message
                </h2>
                <p className="text-base sm:text-lg text-black/70 leading-relaxed">
                  Tell us about your dream Sri Lankan adventure. Whether you're planning a romantic getaway,
                  family vacation, or business trip, we're here to make it extraordinary.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-black/80">First Name</label>
                    <input
                      className="w-full border border-black/20 px-4 py-3 rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40 transition-all duration-200 bg-white hover:border-black/30"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-black/80">Last Name</label>
                    <input
                      className="w-full border border-black/20 px-4 py-3 rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40 transition-all duration-200 bg-white hover:border-black/30"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-black/80">Email Address</label>
                  <input
                    className="w-full border border-black/20 px-4 py-3 rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40 transition-all duration-200 bg-white hover:border-black/30"
                    placeholder="john@example.com"
                    type="email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-black/80">Phone Number</label>
                  <input
                    className="w-full border border-black/20 px-4 py-3 rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40 transition-all duration-200 bg-white hover:border-black/30"
                    placeholder="+1 (555) 123-4567"
                    type="tel"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-black/80">Preferred Hotel</label>
                  <select className="w-full border border-black/20 px-4 py-3 rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40 transition-all duration-200 bg-white hover:border-black/30">
                    <option value="">Select a hotel (optional)</option>
                    <option value="meshendra">Meshendra Garden Hotel</option>
                    <option value="e34">e34 Koslanda Hotel</option>
                    <option value="any">Any Fairway Hotel</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-black/80">Your Message</label>
                  <textarea
                    className="w-full border border-black/20 px-4 py-3 rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40 transition-all duration-200 bg-white hover:border-black/30 resize-none"
                    placeholder="Tell us about your travel plans, special requirements, or any questions you have..."
                    rows={6}
                    required
                  />
                </div>

                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-black to-gray-900 text-white rounded-xl font-semibold text-base hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group">
                  <span>Send Message</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-black mb-1">Phone</div>
                      <a href="tel:+94722509609" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                        +94 72 250 9609
                      </a>
                      <div className="text-sm text-black/60 mt-1">24/7 reservations</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-black mb-1">Email</div>
                      <a href="mailto:info@hotelsfairway.com" className="text-green-600 hover:text-green-700 font-medium transition-colors break-all">
                        info@hotelsfairway.com
                      </a>
                      <div className="text-sm text-black/60 mt-1">Within 24 hours</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-black mb-1">Location</div>
                      <div className="text-black/80 font-medium">Sri Lanka</div>
                      <div className="text-sm text-black/60 mt-1">Multiple destinations</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-black/10 shadow-lg">
                <div className="aspect-video w-full">
                  <iframe
                    title="Fairway Hotels Locations"
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63375.32390868738!2d79.830!3d6.927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2595d0e3c9d2d%3A0x3d2c3c3c3c3c3c3c!2sColombo!5e0!3m2!1sen!2slk!4v1700000000000"
                  />
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-r from-black via-gray-900 to-black p-6 sm:p-8 rounded-2xl text-white text-center">
                <div className="text-xl sm:text-2xl font-serif mb-3">Book Direct for Best Rates</div>
                <p className="text-sm sm:text-base text-white/80 mb-6 leading-relaxed">
                  Skip the middleman and enjoy exclusive rates, complimentary upgrades, and personalized service
                  when you book directly with us.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="tel:+94722509609"
                    className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
                  >
                    📞 Call Now
                  </Link>
                  <Link
                    href="/hotels"
                    className="px-6 py-3 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-colors duration-200"
                  >
                    View Hotels
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.05),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.04),transparent_50%)]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full text-sm font-medium text-black/80 mb-4">
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-6">Common Inquiries</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What's included in your hotel rates?",
                answer: "All our rates include complimentary airport transfers, daily breakfast, WiFi, and access to hotel amenities. Premium rates include spa credits and dining allowances."
              },
              {
                question: "Can I customize my stay?",
                answer: "Absolutely! We specialize in personalized experiences. Whether it's special dietary requirements, anniversary celebrations, or adventure activities, we'll tailor everything to your preferences."
              },
              {
                question: "What's your cancellation policy?",
                answer: "We offer flexible cancellation up to 48 hours before arrival for standard bookings. Last-minute bookings may have different terms. Contact us for specific policy details."
              },
              {
                question: "Do you offer airport transfers?",
                answer: "Yes, complimentary airport transfers are included for all our hotel guests. Our professional drivers ensure safe, comfortable transportation to and from airports."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-black/5 hover:shadow-md transition-shadow duration-200">
                <h3 className="font-semibold text-black mb-3">{faq.question}</h3>
                <p className="text-black/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
