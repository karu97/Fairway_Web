"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import { Coffee, MapPin, Star, ArrowRight, Clock, Utensils } from "lucide-react";

interface CafeCardProps {
  name: string;
  location: string;
  description: string;
  images: string[];
  features: string[];
  hours: string;
  rating: number;
  reviews: number;
  slug: string;
  accentColor: "amber" | "emerald" | "blue" | "rose";
}

const colorVariants = {
  amber: {
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
    badgeGradient: "from-amber-600 to-orange-600",
  },
  emerald: {
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    badgeGradient: "from-emerald-600 to-teal-600",
  },
  blue: {
    gradient: "from-blue-500 to-indigo-500",
    bgGradient: "from-blue-50 to-indigo-50",
    badgeGradient: "from-blue-600 to-indigo-600",
  },
  rose: {
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50",
    badgeGradient: "from-rose-600 to-pink-600",
  },
};

function CafeCard({
  name,
  location,
  description,
  images,
  features,
  hours,
  rating,
  reviews,
  slug,
  accentColor,
}: CafeCardProps) {
  const colors = colorVariants[accentColor];
  const mainImage = images[0];

  return (
    <div className="group relative overflow-hidden rounded-2xl lg:rounded-[2rem] bg-white shadow-2xl hover:shadow-black/20 transition-all duration-700 hover:-translate-y-4 border border-black/5">
      {/* Image Gallery */}
      <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <Image
          src={mainImage}
          alt={name}
          fill
          className="object-cover group-hover:scale-125 transition-transform duration-1000"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={80}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Cafe Badge */}
        <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl px-3 py-1 sm:px-4 sm:py-2 shadow-xl border border-white/20">
          <span className={`text-xs sm:text-sm font-bold bg-gradient-to-r ${colors.badgeGradient} bg-clip-text text-transparent flex items-center gap-1`}>
            <Coffee className="w-3 h-3 sm:w-4 sm:h-4" />
            Premium Cafe
          </span>
        </div>

        {/* Rating Overlay */}
        <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-black/80 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 py-1 sm:px-4 sm:py-2">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="flex gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400 animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            <span className="text-white text-xs sm:text-sm font-medium">{rating}</span>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 sm:mb-6 gap-4 sm:gap-0">
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif mb-2 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              {name}
            </h3>
            <div className="flex items-center gap-2 text-black/60 font-medium text-sm sm:text-base">
              <MapPin className="w-4 h-4" />
              {location}
            </div>
          </div>
        </div>

        <p className="text-black/70 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
          {description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          {features.map((feature, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 bg-gradient-to-r ${colors.bgGradient} rounded-full text-xs sm:text-sm text-black/70 border border-black/5`}
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Hours & Reviews */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-1 text-black/60 text-xs sm:text-sm">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            {hours}
          </div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black/30 rounded-full" />
          <span className="text-xs sm:text-sm text-black/60">{reviews} reviews</span>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-center gap-2">
            <Utensils className="w-4 h-4 sm:w-5 sm:h-5 text-black/40" />
            <span className="text-xs sm:text-sm text-black/50">Managed by Fairway Hotels</span>
          </div>

          <Link
            href={`/cafes/${slug}`}
            className={`group/btn relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-black to-gray-900 text-white rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 w-full sm:w-auto text-center`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Visit Cafe
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </span>
            <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500`} />
          </Link>
        </div>
      </div>
    </div>
  );
}

interface CafeSectionProps {
  variant?: "home" | "hotels";
}

export default function CafeESection({ variant = "home" }: CafeSectionProps) {
  const cafes = [
    {
      name: "Cafe E34 Mattegoda",
      location: "Mattegoda, Colombo District",
      description:
        "Experience the perfect blend of artisanal coffee and gourmet cuisine at Cafe E34 Mattegoda. A cozy urban retreat offering premium beverages, delectable pastries, and a warm ambiance managed by Fairway Hotels.",
      images: [
        "/images/Cafe E34 Mattegoda/copy_227A4815-F784-4729-985F-CA935FDD0093.jpeg",
        "/images/Cafe E34 Mattegoda/copy_3D1C30A7-F17F-4E58-A043-7C9534953F6B.jpeg",
        "/images/Cafe E34 Mattegoda/copy_529F10E1-1951-4A53-8979-C97FCFB42EB8.jpeg",
      ],
      features: ["Artisanal Coffee", "Gourmet Cuisine", "Cozy Ambiance", "Free WiFi"],
      hours: "7:00 AM - 10:00 PM",
      rating: 4.7,
      reviews: 650,
      slug: "e34-mattegoda",
      accentColor: "amber" as const,
    },
    {
      name: "Cafe E34 Piliyandala",
      location: "Piliyandala, Colombo District",
      description:
        "Discover a culinary haven at Cafe E34 Piliyandala. Savor expertly crafted beverages, signature dishes, and delightful desserts in an elegant setting. Fairway Hotels brings its signature hospitality to this charming neighborhood cafe.",
      images: [
        "/images/Piliyandala/2026-02-25 22_31_14.JPG",
        "/images/Piliyandala/copy_B54F77B5-0808-4F62-897E-D0050C6F28CC.jpeg",
        "/images/Piliyandala/copy_D98DD518-2DE8-4635-87B1-F29C457C3EEA.jpeg",
      ],
      features: ["Signature Dishes", "Premium Coffee", "Elegant Setting", "Outdoor Seating"],
      hours: "7:00 AM - 11:00 PM",
      rating: 4.8,
      reviews: 820,
      slug: "e34-piliyandala",
      accentColor: "emerald" as const,
    },
  ];

  if (variant === "home") {
    return (
      <section className="py-32 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(251,191,36,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.05),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-100 to-orange-100 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-black/80 mb-6 sm:mb-8 border border-amber-200/50">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>
                <Coffee className="w-3 h-3 sm:w-4 sm:h-4" />
                Premium Cafe Experience
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse delay-300"></div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-6 sm:mb-8 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                Cafe E34 Collection
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 max-w-3xl mx-auto leading-relaxed font-light">
                Experience exceptional coffee and culinary delights at our signature cafes,
                where Fairway Hotels&apos; commitment to excellence meets artisanal craftsmanship.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {cafes.map((cafe, index) => (
              <Reveal key={cafe.slug} delayMs={index * 300}>
                <CafeCard {...cafe} />
              </Reveal>
            ))}
          </div>

          {/* Managed by Fairway Banner */}
          <Reveal delayMs={600}>
            <div className="mt-16 sm:mt-20 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl border border-black/5">
                <Image
                  src="/images/fairway_hotels_logo.png"
                  alt="Fairway Hotels"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-sm sm:text-base font-medium text-black/80">
                  Proudly Managed by <span className="font-semibold text-black">Fairway Hotels</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  // Hotels page variant - more compact
  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 via-amber-50/20 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.03),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-100 to-orange-100 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-black/80 mb-6 sm:mb-8 border border-amber-200/50">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>
            <Coffee className="w-3 h-3 sm:w-4 sm:h-4" />
            Cafe Collection
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse delay-300"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-6 sm:mb-8 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
            Cafe E34 Destinations
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 max-w-3xl mx-auto leading-relaxed font-light">
            Discover our curated cafe experiences, bringing Fairway Hotels&apos;
            signature hospitality to artisanal coffee and dining.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {cafes.map((cafe) => (
            <CafeCard key={cafe.slug} {...cafe} />
          ))}
        </div>
      </div>
    </section>
  );
}
