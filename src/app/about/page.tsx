import MainLayout from "@/components/layout/MainLayout";
import TeamSection from "@/components/shared/TeamSection";
import Image from "next/image";
import Link from "next/link";
import { jsonLdTeamPage, jsonLdPerson } from "@/lib/seo";

export const metadata = {
  title: "About Fairway Hotels | Meet Our Leadership Team - C. Weerasinghe, P.S.Gunawardene, A.Rathnasuriya",
  description: "Discover the Fairway Hotels story and meet our experienced leadership team: C. Weerasinghe (Chairman & Managing Director), P.S.Gunawardene (Director), and A.Rathnasuriya (General Manager). Luxury hospitality excellence in Sri Lanka.",
  keywords: [
    "Fairway Hotels leadership team",
    "C. Weerasinghe",
    "Chaminda Weerasinghe Chairman",
    "Chaminda Weerasinghe Fairway Hotels",
    "P.S.Gunawardene Director",
    "A.Rathnasuriya General Manager",
    "Sri Lanka hotel management",
    "luxury hospitality leaders",
    "boutique hotel owners Sri Lanka",
    "Fairway Hotels team",
    "Sri Lanka hospitality experts",
    "luxury hotel leadership",
    "hotel management Sri Lanka",
    "boutique hotel directors",
    "Sri Lanka tourism leaders",
    "luxury accommodation management",
    "premium hotel services team"
  ],
  openGraph: {
    title: "About Fairway Hotels | Meet Our Leadership Team",
    description: "Meet the experienced leadership team at Fairway Hotels Sri Lanka: C. Weerasinghe, P.S.Gunawardene, and A.Rathnasuriya. World-class luxury hospitality.",
    images: [
      {
        url: "https://www.hotelsfairway.com/images/Team/Chairman_Managing_Director.jpeg",
        width: 1200,
        height: 630,
        alt: "Fairway Hotels Leadership Team - C. Weerasinghe, Chairman & Managing Director"
      }
    ]
  },
  twitter: {
    title: "About Fairway Hotels | Meet Our Leadership Team",
    description: "Meet the experienced leadership team at Fairway Hotels Sri Lanka: C. Weerasinghe, P.S.Gunawardene, and A.Rathnasuriya.",
    images: [
      {
        url: "https://www.hotelsfairway.com/images/Team/Chairman_Managing_Director.jpeg",
        alt: "Fairway Hotels Leadership Team"
      }
    ]
  }
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "C. Weerasinghe",
      role: "Chairman / Managing Director",
      image: "/images/Team/Chairman_Managing_Director.jpeg",
      description: "C. Weerasinghe serves as Chairman and Managing Director of Fairway Hotels Sri Lanka, bringing extensive experience in hospitality and business leadership to deliver world-class luxury experiences."
    },
    {
      name: "P.S.Gunawardene",
      role: "Director",
      image: "/images/Team/Director.png",
      description: "P.S.Gunawardene is a Director at Fairway Hotels Sri Lanka, contributing strategic vision and operational excellence to our luxury hotel portfolio and premium guest services."
    },
    {
      name: "A.Rathnasuriya",
      role: "General Manager",
      image: "/images/Team/General_Manager.png",
      description: "A.Rathnasuriya serves as General Manager at Fairway Hotels Sri Lanka, overseeing daily operations and ensuring exceptional guest experiences across our boutique properties."
    }
  ];

  return (
    <MainLayout>
      {/* Team Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTeamPage()) }}
      />
      {teamMembers.map((member) => (
        <script
          key={member.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson(member)) }}
        />
      ))}

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
                  Our Story
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif leading-[0.9] mb-6">
                <span className="block text-black/80">Crafting</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
                  Extraordinary
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-black/60 mt-2">
                  Hospitality Experiences
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Fairway Hotels redefines luxury hospitality in Sri Lanka through contemporary design,
                authentic experiences, and unwavering commitment to sustainability.
              </p>
            </div>

            <div className="relative">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-700">
                <Image
                  src="/images/fairway_hotels_hero.png"
                  alt="Fairway Hotels Luxury Experience"
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

      {/* Mission Section */}
      <section className="py-32 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.02),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-black/5 to-black/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-black/80 mb-6 sm:mb-8 border border-black/10">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              Our Mission & Values
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-6 sm:mb-8 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Redefining Luxury Hospitality
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 max-w-3xl mx-auto leading-relaxed font-light">
              Every detail is meticulously crafted to exceed expectations, creating experiences
              that transcend luxury and become unforgettable memories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: "🎨",
                title: "Contemporary Design",
                description: "Timeless interiors blending natural textures with modern aesthetics, creating spaces that feel both luxurious and authentic.",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50"
              },
              {
                icon: "🌱",
                title: "Sustainability First",
                description: "Local sourcing, eco-friendly amenities, and mindful operations that respect Sri Lanka's natural beauty and communities.",
                gradient: "from-green-500 to-teal-500",
                bgGradient: "from-green-50 to-teal-50"
              },
              {
                icon: "🤝",
                title: "Personalized Service",
                description: "Curated experiences and attentive service that anticipates your needs, making every moment special and memorable.",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50"
              }
            ].map((value) => (
              <div key={value.title} className={`group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${value.bgGradient} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-black/5 overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative mb-6 sm:mb-8">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${value.gradient} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <span className="text-2xl sm:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">{value.icon}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-serif mb-3 sm:mb-4 text-center bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                  {value.title}
                </h3>
                <p className="text-black/70 leading-relaxed text-center font-light text-sm sm:text-base">
                  {value.description}
                </p>

                <div className={`w-0 group-hover:w-full h-0.5 sm:h-1 bg-gradient-to-r ${value.gradient} mx-auto mt-4 sm:mt-6 transition-all duration-500 rounded-full`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.05),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.04),transparent_50%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            {[
              { number: "4.9", label: "Guest Rating", suffix: "★" },
              { number: "15k+", label: "Happy Guests" },
              { number: "12+", label: "Properties" },
              { number: "5+", label: "Years Experience" }
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-xs sm:text-sm text-black/60 font-medium mt-2">{stat.label}</div>
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.05),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full mb-6 sm:mb-8 border border-white/20">
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white/90 font-medium text-sm sm:text-base">Experience Fairway Luxury</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Ready for Your Sri Lankan Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Let us create unforgettable memories with personalized luxury experiences
            tailored to your dreams. Your journey to paradise starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            <Link
              href="/hotels"
              className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 relative overflow-hidden text-sm sm:text-base"
            >
              <span className="relative z-10">Explore Our Hotels</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/contact"
              className="group px-6 py-3 sm:px-8 sm:py-4 border-2 border-white/30 text-white rounded-full font-medium hover:border-white hover:bg-white hover:text-black transition-all duration-300 hover:shadow-xl relative overflow-hidden text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get In Touch
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}



