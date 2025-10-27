import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import Reveal from "@/components/shared/Reveal";
import { jsonLdHotel, jsonLdBreadcrumbList } from "@/lib/seo";

// Note: SnapCarousel component removed as it's not currently used in the page

export default function Home() {
  const breadcrumbData = [
    { name: "Home", url: "https://www.hotelsfairway.com" }
  ];

  const meshendraHotelData = {
    name: "Meshendra Garden Hotel",
    description: "Luxury boutique hotel in Katunayake, Sri Lanka. Premium accommodations with world-class amenities, Swiming Pools, and exceptional hospitality. Perfect for airport gateway stays.",
    image: "https://www.hotelsfairway.com/images/Meshendra_Garden/Main Image.png",
    address: {
      streetAddress: "Katunayake Airport Access Road",
      addressLocality: "Katunayake",
      addressRegion: "Western Province",
      postalCode: "11450",
      addressCountry: "LK"
    },
    rating: 4.9,
    reviewCount: 1200,
    priceRange: "$$$$",
    amenities: [
      "Infinity Pool",
      "Spa & Wellness",
      "Free Airport Transfer",
      "Restaurant",
      "Fitness Center",
      "Business Center",
      "24/7 Concierge",
      "Room Service"
    ],
    geo: {
      latitude: 7.1707,
      longitude: 79.8830
    }
  };

  const koslandaHotelData = {
    name: "e34 Koslanda Hotel",
    description: "Boutique luxury hotel nestled in the natural paradise of Koslanda, Sri Lanka. Experience authentic luxury with natural surroundings, premium accommodations, and exceptional service.",
    image: "https://www.hotelsfairway.com/images/E34_hotel_koslanda/2.JPG",
    address: {
      streetAddress: "Koslanda",
      addressLocality: "Koslanda",
      addressRegion: "Uva Province",
      postalCode: "90000",
      addressCountry: "LK"
    },
    rating: 4.8,
    reviewCount: 800,
    priceRange: "$$$$",
    amenities: [
      "Natural Pool",
      "Spa & Wellness",
      "Restaurant",
      "Garden Views",
      "Adventure Tours",
      "24/7 Service",
      "Local Cuisine",
      "Nature Trails"
    ],
    geo: {
      latitude: 6.9167,
      longitude: 81.2833
    }
  };

  return (
    <MainLayout>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbList(breadcrumbData)) }}
      />

      {/* Hotel Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHotel(meshendraHotelData)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHotel(koslandaHotelData)) }}
      />
      {/* World-Class Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Advanced Background System */}
        <div className="absolute inset-0">
          {/* Primary gradient mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />

          {/* Animated mesh gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.15),transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.12),transparent_50%)] animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(120,219,255,0.1),transparent_50%)] animate-pulse delay-500" />


          {/* Geometric patterns */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-black/20 rotate-45 animate-spin" style={{animationDuration: '20s'}} />
            <div className="absolute top-3/4 right-1/4 w-64 h-64 border border-black/20 rotate-12 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}} />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-black/20 -rotate-30 animate-spin" style={{animationDuration: '25s'}} />
          </div>
        </div>

        {/* Interactive floating elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-200/60 to-purple-200/60 rounded-full blur-sm animate-bounce" style={{animationDuration: '3s'}} />
        <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-pink-200/50 to-orange-200/50 rounded-full blur-sm animate-bounce delay-1000" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-32 left-20 w-28 h-28 bg-gradient-to-br from-green-200/40 to-blue-200/40 rounded-full blur-sm animate-bounce delay-500" style={{animationDuration: '5s'}} />

        {/* Dynamic particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Ultra Modern */}
            <div className="text-center lg:text-left space-y-8">
              <Reveal>
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl mb-8 group hover:scale-105 transition-transform duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse shadow-lg"></div>
                  <span className="text-sm font-semibold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                    World&apos;s Most Luxurious Hospitality Experience
                  </span>
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping"></div>
                </div>
              </Reveal>

              <Reveal delayMs={300}>
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif leading-[0.9] mb-6 sm:mb-8">
                  <span className="block text-black/80">Experience</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
                    Paradise
                  </span>
                  <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-black/60 mt-2 sm:mt-4">
                    Beyond Imagination
                  </span>
                </h1>
              </Reveal>

              <Reveal delayMs={600}>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light px-4 sm:px-0">
                  Step into a world where luxury meets serenity. Fairway Hotels redefines opulence
                  with meticulously crafted experiences that transcend the ordinary.
                </p>
              </Reveal>

              <Reveal delayMs={900}>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start px-4 sm:px-0">
                  <Link
                    href="/hotels"
                    className="group relative px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-full font-semibold text-base sm:text-lg overflow-hidden shadow-2xl hover:shadow-black/50 transition-all duration-500 hover:scale-110 w-full sm:w-auto text-center"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                      Discover Luxury
                      <span className="group-hover:translate-x-2 transition-transform duration-300">✨</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Link>

                  <Link
                    href="/tours"
                    className="group px-6 sm:px-8 lg:px-10 py-4 sm:py-5 border-2 border-black/30 text-black rounded-full font-semibold text-base sm:text-lg hover:border-black hover:bg-black hover:text-white transition-all duration-500 hover:shadow-xl hover:scale-105 backdrop-blur-sm bg-white/50 w-full sm:w-auto text-center"
                  >
                    <span className="flex items-center justify-center gap-2 sm:gap-3">
                      Explore Adventures
                      <span className="group-hover:rotate-12 transition-transform duration-300">🗺️</span>
                    </span>
                  </Link>
                </div>
              </Reveal>

              {/* Premium Stats */}
              <Reveal delayMs={1200}>
                <div className="flex justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12 mt-12 sm:mt-16 px-4 sm:px-0">
                  <div className="text-center group flex-1 sm:flex-none">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                      4.9★
                    </div>
                    <div className="text-xs sm:text-sm text-black/60 font-medium mt-1">Excellence Rating</div>
                    <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2 transition-all duration-300"></div>
                  </div>
                  <div className="text-center group flex-1 sm:flex-none">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                      15k+
                    </div>
                    <div className="text-xs sm:text-sm text-black/60 font-medium mt-1">Elite Guests</div>
                    <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mt-2 transition-all duration-300"></div>
                  </div>
                  <div className="text-center group flex-1 sm:flex-none">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                      12+
                    </div>
                    <div className="text-xs sm:text-sm text-black/60 font-medium mt-1">Signature Properties</div>
                    <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 transition-all duration-300"></div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Content - Ultra Modern Image Display */}
            <div className="relative mt-8 lg:mt-0">
              <Reveal delayMs={600}>
                <div className="relative group">
                  {/* Main hero image with advanced effects */}
                  <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-700 mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                    <Image
                      src="/images/fairway_hotels_hero.png"
                      alt="Fairway Hotels Ultimate Luxury Experience"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    {/* Animated overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-pink-500/10 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Premium floating cards with advanced animations - Hidden on mobile, shown on larger screens */}
                  <div className="hidden lg:block absolute -top-8 -left-8 bg-white/95 backdrop-blur-xl rounded-3xl p-4 lg:p-6 shadow-2xl border border-white/20 group/card hover:scale-110 hover:-rotate-3 transition-all duration-500">
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover/card:rotate-12 transition-transform">
                        <span className="text-xl lg:text-2xl">🏊</span>
                      </div>
                      <div>
                        <div className="font-bold text-base lg:text-lg text-black">Swiming Pools</div>
                        <div className="text-xs lg:text-sm text-black/60">Crystal-clear luxury</div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-xl rounded-3xl p-4 lg:p-6 shadow-2xl border border-white/20 group/card hover:scale-110 hover:rotate-3 transition-all duration-500">
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-green-500 via-teal-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover/card:-rotate-12 transition-transform">
                        <span className="text-xl lg:text-2xl">🌿</span>
                      </div>
                      <div>
                        <div className="font-bold text-base lg:text-lg text-black">Spa & Wellness</div>
                        <div className="text-xs lg:text-sm text-black/60">Ultimate relaxation</div>
                      </div>
                    </div>
                  </div>

                  {/* Additional luxury indicators */}
                  <div className="absolute top-2 right-2 lg:top-4 lg:right-4 bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 lg:px-4 lg:py-2 text-white text-xs lg:text-sm font-medium">
                    ★★★★★ 4.9
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Advanced scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <div className="text-xs text-black/60 font-medium">Discover More</div>
            <div className="w-8 h-12 border-2 border-black/40 rounded-full flex justify-center p-1">
              <div className="w-1 h-4 bg-gradient-to-b from-black/60 to-transparent rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Modern Featured Hotels Section */}
      <section className="py-32 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        {/* Section background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.02),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-black/5 to-black/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-black/80 mb-6 sm:mb-8 border border-black/10">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                Signature Luxury Properties
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-6 sm:mb-8 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                Luxury Hotels Sri Lanka | Iconic Destinations
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 max-w-3xl mx-auto leading-relaxed font-light">
                Each property is a masterpiece of design and luxury, crafted to provide
                unparalleled experiences in Sri Lanka&apos;s most breathtaking locations.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Hotel 1 - Ultra Premium */}
            <Reveal delayMs={300}>
              <div className="group relative overflow-hidden rounded-2xl lg:rounded-[2rem] bg-white shadow-2xl hover:shadow-black/20 transition-all duration-700 hover:-translate-y-4 border border-black/5">
                <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                  <Image
                    src="/images/Meshendra_Garden/Main Image.png"
                    alt="Meshendra Garden Hotel - Ultimate Luxury"
                    fill
                    className="object-cover group-hover:scale-125 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={80}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Premium badge */}
                  <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl px-3 py-1 sm:px-4 sm:py-2 shadow-xl border border-white/20">
                    <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      ✈️ Airport Gateway
                    </span>
                  </div>

                  {/* Luxury rating overlay */}
                  <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-black/80 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 py-1 sm:px-4 sm:py-2">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="flex gap-0.5 sm:gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xs sm:text-sm animate-pulse" style={{animationDelay: `${i * 0.1}s`}}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-white text-xs sm:text-sm font-medium">4.9</span>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 sm:mb-6 gap-4 sm:gap-0">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif mb-2 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                        Meshendra Garden
                      </h3>
                      <p className="text-black/60 font-medium text-sm sm:text-base">Katunayake, Western Province</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-xl sm:text-2xl font-bold text-black">$$$$</div>
                      <div className="text-xs sm:text-sm text-black/50">Ultra Luxury</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-1">
                        <span className="text-xs sm:text-sm text-black/60">2.1k reviews</span>
                      </div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black/30 rounded-full"></div>
                      <span className="text-xs sm:text-sm text-black/60">Free Airport Transfer</span>
                    </div>

                    <Link
                      href="/hotels/meshendra-garden"
                      className="group/btn relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-black to-gray-900 text-white rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 w-full sm:w-auto text-center"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Experience Luxury
                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Hotel 2 - Ultra Premium */}
            <Reveal delayMs={600}>
              <div className="group relative overflow-hidden rounded-2xl lg:rounded-[2rem] bg-white shadow-2xl hover:shadow-black/20 transition-all duration-700 hover:-translate-y-4 border border-black/5">
                <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                  <Image
                    src="/images/E34_hotel_koslanda/2.JPG"
                    alt="e34 Café, Restaurant & Hotel Koslanda - Natural Paradise"
                    fill
                    className="object-cover group-hover:scale-125 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={80}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Premium badge */}
                  <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl px-3 py-1 sm:px-4 sm:py-2 shadow-xl border border-white/20">
                    <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                      🌿 Natural Paradise
                    </span>
                  </div>

                  {/* Luxury rating overlay */}
                  <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-black/80 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 py-1 sm:px-4 sm:py-2">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="flex gap-0.5 sm:gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xs sm:text-sm animate-pulse" style={{animationDelay: `${i * 0.1}s`}}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-white text-xs sm:text-sm font-medium">4.8</span>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 via-teal-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 sm:mb-6 gap-4 sm:gap-0">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif mb-2 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                        e34 Koslanda
                      </h3>
                      <p className="text-black/60 font-medium text-sm sm:text-base">Koslanda, Uva Province</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-xl sm:text-2xl font-bold text-black">$$$$</div>
                      <div className="text-xs sm:text-sm text-black/50">Boutique Luxury</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-1">
                        <span className="text-xs sm:text-sm text-black/60">1.8k reviews</span>
                      </div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black/30 rounded-full"></div>
                      <span className="text-xs sm:text-sm text-black/60">Natural Pool</span>
                    </div>

                    <Link
                      href="/hotels/e34-koslanda"
                      className="group/btn relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-black to-gray-900 text-white rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 w-full sm:w-auto text-center"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Discover Paradise
                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ultra-Modern Why Choose Us Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        {/* Advanced background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.05),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.04),transparent_50%)]" />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-black/5 rotate-45 animate-spin opacity-30" style={{animationDuration: '20s'}} />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-black/5 rotate-12 animate-spin opacity-20" style={{animationDuration: '15s', animationDirection: 'reverse'}} />

        <div className="relative mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-xl rounded-full shadow-xl border border-white/20 mb-6 sm:mb-8">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-sm sm:text-base bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                  Why Fairway Hotels Stands Apart
                </span>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-6 sm:mb-8 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                Unparalleled Excellence
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 max-w-3xl mx-auto leading-relaxed font-light">
                Every detail is meticulously crafted to exceed expectations, creating experiences
                that transcend luxury and become unforgettable memories.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: "🏊",
                title: "Swiming Pools",
                description: "Crystal-clear waters overlooking breathtaking landscapes that take your breath away",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50"
              },
              {
                icon: "🌿",
                title: "Spa & Wellness",
                description: "Rejuvenate with traditional Sri Lankan wellness treatments passed down through generations",
                gradient: "from-green-500 to-teal-500",
                bgGradient: "from-green-50 to-teal-50"
              },
              {
                icon: "🍽️",
                title: "Chef's Table",
                description: "Culinary experiences featuring local and international cuisine by world-renowned chefs",
                gradient: "from-orange-500 to-red-500",
                bgGradient: "from-orange-50 to-red-50"
              },
              {
                icon: "🚘",
                title: "Private Transfers",
                description: "Seamless transportation with luxury vehicles and professional chauffeurs at your service",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50"
              }
            ].map((feature, idx) => (
              <Reveal key={feature.title} delayMs={idx * 150}>
                <div className={`group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${feature.bgGradient} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-black/5 overflow-hidden`}>
                  {/* Animated background effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Icon with advanced animation */}
                  <div className="relative mb-6 sm:mb-8">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${feature.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <span className="text-2xl sm:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                    </div>
                    {/* Floating particles around icon */}
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-2 h-2 sm:w-3 sm:h-3 bg-current rounded-full opacity-20 animate-ping" style={{animationDuration: '2s'}} />
                    <div className="absolute -bottom-0.5 -left-0.5 sm:-bottom-1 sm:-left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-current rounded-full opacity-30 animate-ping delay-500" style={{animationDuration: '3s'}} />
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-serif mb-3 sm:mb-4 text-center bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed text-center font-light text-sm sm:text-base">
                    {feature.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`w-0 group-hover:w-full h-0.5 sm:h-1 bg-gradient-to-r ${feature.gradient} mx-auto mt-4 sm:mt-6 transition-all duration-500 rounded-full`} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-black/5 rounded-full text-xs sm:text-sm font-medium text-black/80 mb-4">
                Guest Experiences
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-6">What Our Guests Say</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "New York, USA",
                rating: 5,
                text: "An absolutely magical experience. The attention to detail and the warmth of the staff made our stay unforgettable. The infinity pool at sunset was pure bliss.",
                image: "👩‍💼"
              },
              {
                name: "Michael Chen",
                location: "Singapore",
                rating: 5,
                text: "Fairway Hotels exceeded all our expectations. From the moment we arrived, we felt like royalty. The food was exceptional and the service impeccable.",
                image: "👨‍💼"
              },
              {
                name: "Emma Thompson",
                location: "London, UK",
                rating: 5,
                text: "The perfect blend of luxury and authenticity. Every moment was carefully curated, and the natural beauty of Sri Lanka was showcased magnificently.",
                image: "👩"
              }
            ].map((testimonial, idx) => (
              <Reveal key={testimonial.name} delayMs={idx * 200}>
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-black/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-base sm:text-lg animate-pulse">★</span>
                    ))}
                  </div>
                  <p className="text-black/80 mb-4 sm:mb-6 leading-relaxed italic group-hover:text-black transition-colors text-sm sm:text-base">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-full flex items-center justify-center text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-semibold text-sm sm:text-base group-hover:text-blue-600 transition-colors">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-black/60">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Companies Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-black/5 rounded-full text-xs sm:text-sm font-medium text-black/80 mb-4">
                Our Family
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-6">Trusted Group Companies</h2>
              <p className="text-base sm:text-lg text-black/70 max-w-2xl mx-auto">
                A diversified portfolio of businesses committed to excellence in hospitality,
                agriculture, exports, and professional services.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { name: "E34 Café", src: "/images/Our_Companies/e34_cafe.png" },
              { name: "Fairway Insurance Brokers", src: "/images/Our_Companies/Fairway_insurance_brokers.png" },
              { name: "Kosgolla Food Exports", src: "/images/Our_Companies/Kosgolla_Food_Exports.png" },
              { name: "Koslanda Plantation", src: "/images/Our_Companies/Koslanda_Plantation.png" },
            ].map((company, idx) => (
              <Reveal key={company.name} delayMs={idx * 100}>
                <div className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border border-black/10">
                  <div className="relative h-16 sm:h-20 mb-3 sm:mb-4">
                    <Image
                      src={company.src}
                      alt={company.name}
                      fill
                      className="object-contain group-hover:scale-110 group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-center font-semibold text-black/80 group-hover:text-blue-600 transition-colors text-xs sm:text-sm">{company.name}</h3>
                  <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-2 transition-all duration-300"></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.05),transparent_50%)]" />

        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 sm:w-24 sm:h-24 bg-pink-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 bg-purple-500/5 rounded-full animate-ping"></div>

        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full mb-6 sm:mb-8 border border-white/20">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white/90 font-medium text-sm sm:text-base">Limited Time Luxury Offers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Ready for Your Sri Lankan Adventure?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Let us create unforgettable memories with personalized luxury experiences
              tailored to your dreams. Your journey to paradise starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
              <Link
                href="/contact"
                className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 relative overflow-hidden text-sm sm:text-base"
              >
                <span className="relative z-10">Start Planning</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="tel:+94722509609"
                className="group px-6 py-3 sm:px-8 sm:py-4 border-2 border-white/30 text-white rounded-full font-medium hover:border-white hover:bg-white hover:text-black transition-all duration-300 hover:shadow-xl relative overflow-hidden text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  📞 Call +94 72 250 9609
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </MainLayout>
  );
}
