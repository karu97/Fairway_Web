import Image from "next/image";
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";

export const metadata = {
  title: "Sri Lanka Tours | Luxury Adventure Experiences by Fairway Hotels",
  description: "Discover curated luxury tour packages across Sri Lanka. Experience cultural heritage, beach paradises, and hill country adventures with expert local guides and boutique accommodations.",
};

const tours = [
  {
    id: 1,
    title: "Cultural Triangle Tour",
    image: "/images/tour-1.svg",
    days: 7,
    price: 1200,
    rating: 4.9,
    reviews: 450,
    highlights: ["Ancient Cities", "UNESCO Sites", "Temple Tours", "Local Cuisine"],
    description: "Explore Sri Lanka's ancient heritage through the legendary Cultural Triangle. Visit Anuradhapura, Polonnaruwa, and the sacred city of Kandy.",
    itinerary: ["Day 1-2: Anuradhapura", "Day 3-4: Polonnaruwa", "Day 5-6: Sigiriya & Dambulla", "Day 7: Kandy"]
  },
  {
    id: 2,
    title: "Beach Paradise Escape",
    image: "/images/tour-2.svg",
    days: 5,
    price: 800,
    rating: 4.8,
    reviews: 320,
    highlights: ["Pristine Beaches", "Water Sports", "Sunset Cruises", "Seafood Dining"],
    description: "Indulge in tropical bliss along Sri Lanka's stunning coastline. Relax on powdery beaches, enjoy water activities, and savor fresh seafood.",
    itinerary: ["Day 1-2: Bentota", "Day 3: Colombo", "Day 4-5: Negombo"]
  },
  {
    id: 3,
    title: "Hill Country Adventure",
    image: "/images/tour-3.svg",
    days: 6,
    price: 950,
    rating: 4.9,
    reviews: 280,
    highlights: ["Tea Plantations", "Waterfalls", "Train Journey", "Mountain Views"],
    description: "Journey through Sri Lanka's breathtaking hill country. Experience misty mountains, rolling tea estates, and charming colonial towns.",
    itinerary: ["Day 1-2: Kandy", "Day 3: Nuwara Eliya", "Day 4-5: Ella", "Day 6: Return"]
  },
];

export default function ToursPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.15),transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.12),transparent_50%)] animate-pulse delay-1000" />

        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse shadow-lg"></div>
                <span className="text-sm font-semibold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  Curated Experiences
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif leading-[0.9] mb-6">
                <span className="block text-black/80">Sri Lanka</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
                  Adventures
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-black/60 mt-2">
                  Beyond Imagination
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Discover Sri Lanka's hidden treasures through thoughtfully designed itineraries
                that combine luxury, culture, and unforgettable experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#tours"
                  className="group relative px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-full font-semibold text-base sm:text-lg overflow-hidden shadow-2xl hover:shadow-black/50 transition-all duration-500 hover:scale-110"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                    Explore Tours
                    <span className="group-hover:translate-x-2 transition-transform duration-300">🗺️</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-700">
                <Image
                  src="/images/Explore_Destinations/ella.jpg"
                  alt="Sri Lanka Adventure Tours"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-1000"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid Section */}
      <section id="tours" className="py-32 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.02),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-black/5 to-black/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-black/80 mb-6 sm:mb-8 border border-black/10">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              Signature Experiences
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-6 sm:mb-8 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Curated Journeys
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 max-w-3xl mx-auto leading-relaxed font-light">
              Each tour is meticulously crafted to showcase Sri Lanka's most spectacular destinations,
              combining luxury accommodations with authentic cultural experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">
            {tours.map((tour, idx) => (
              <div key={tour.id} className="group relative overflow-hidden rounded-2xl lg:rounded-[2rem] bg-white shadow-2xl hover:shadow-black/20 transition-all duration-700 hover:-translate-y-4 border border-black/5">
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-125 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    quality={80}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Duration badge */}
                  <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl px-3 py-1 sm:px-4 sm:py-2 shadow-xl border border-white/20">
                    <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {tour.days} Days
                    </span>
                  </div>

                  {/* Rating overlay */}
                  <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-black/80 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 py-1 sm:px-4 sm:py-2">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="flex gap-0.5 sm:gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xs sm:text-sm animate-pulse" style={{animationDelay: `${i * 0.1}s`}}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-white text-xs sm:text-sm font-medium">{tour.rating}</span>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 sm:mb-6 gap-4 sm:gap-0">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif mb-2 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                        {tour.title}
                      </h3>
                      <p className="text-black/60 font-medium text-sm sm:text-base">{tour.reviews} reviews</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-xl sm:text-2xl font-bold text-black">From ${tour.price}</div>
                      <div className="text-xs sm:text-sm text-black/50">per person</div>
                    </div>
                  </div>

                  <p className="text-black/70 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {tour.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {tour.highlights.slice(0, 3).map((highlight, highlightIdx) => (
                      <span key={highlightIdx} className="px-3 py-1 bg-black/5 rounded-full text-xs sm:text-sm text-black/70">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Itinerary preview */}
                  <div className="mb-4 sm:mb-6">
                    <div className="text-xs sm:text-sm font-medium text-black/80 mb-2">Sample Itinerary:</div>
                    <div className="space-y-1">
                      {tour.itinerary.slice(0, 2).map((day, dayIdx) => (
                        <div key={dayIdx} className="text-xs sm:text-sm text-black/60 flex items-center gap-2">
                          <div className="w-1 h-1 bg-black/40 rounded-full flex-shrink-0"></div>
                          {day}
                        </div>
                      ))}
                      {tour.itinerary.length > 2 && (
                        <div className="text-xs sm:text-sm text-black/60 flex items-center gap-2">
                          <div className="w-1 h-1 bg-black/40 rounded-full flex-shrink-0"></div>
                          +{tour.itinerary.length - 2} more days
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-1">
                        <span className="text-xs sm:text-sm text-black/60">Private transfers included</span>
                      </div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black/30 rounded-full"></div>
                      <span className="text-xs sm:text-sm text-black/60">Expert guides</span>
                    </div>

                    <button className="group/btn relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-black to-gray-900 text-white rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 w-full sm:w-auto text-center">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        View Itinerary
                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Tours Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.05),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.04),transparent_50%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-xl rounded-full shadow-xl border border-white/20 mb-6 sm:mb-8">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm sm:text-base bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                Why Choose Fairway Tours
              </span>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-6 sm:mb-8 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Exceptional Experiences
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 max-w-3xl mx-auto leading-relaxed font-light">
              Every journey is crafted with meticulous attention to detail, ensuring authentic experiences
              that create lifelong memories in the heart of Sri Lanka.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: "👥",
                title: "Expert Guides",
                description: "Local experts with deep knowledge of Sri Lanka's culture, history, and hidden gems",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50"
              },
              {
                icon: "🏨",
                title: "Luxury Stays",
                description: "Carefully selected boutique hotels and luxury resorts for ultimate comfort",
                gradient: "from-green-500 to-teal-500",
                bgGradient: "from-green-50 to-teal-50"
              },
              {
                icon: "🍽️",
                title: "Local Cuisine",
                description: "Authentic Sri Lankan dining experiences with fresh, local ingredients",
                gradient: "from-orange-500 to-red-500",
                bgGradient: "from-orange-50 to-red-50"
              },
              {
                icon: "🚗",
                title: "Private Transport",
                description: "Comfortable, air-conditioned vehicles with professional chauffeurs",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50"
              }
            ].map((feature, idx) => (
              <div key={feature.title} className={`group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${feature.bgGradient} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-black/5 overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative mb-6 sm:mb-8">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${feature.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <span className="text-2xl sm:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-serif mb-3 sm:mb-4 text-center bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-black/70 leading-relaxed text-center font-light text-sm sm:text-base">
                  {feature.description}
                </p>

                <div className={`w-0 group-hover:w-full h-0.5 sm:h-1 bg-gradient-to-r ${feature.gradient} mx-auto mt-4 sm:mt-6 transition-all duration-500 rounded-full`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.05),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full mb-6 sm:mb-8 border border-white/20">
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white/90 font-medium text-sm sm:text-base">Customizable Luxury Tours</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Ready to Explore Sri Lanka?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Let our expert team craft your perfect Sri Lankan adventure. From cultural explorations
            to beach getaways, we make every moment extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            <Link
              href="/contact"
              className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 relative overflow-hidden text-sm sm:text-base"
            >
              <span className="relative z-10">Plan Your Tour</span>
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
        </div>
      </section>
    </MainLayout>
  );
}


