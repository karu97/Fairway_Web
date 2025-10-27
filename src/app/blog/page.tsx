import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Fairway Journal | Luxury Travel Stories & Sri Lanka Travel Blog",
  description: "Read luxury travel stories, design inspiration, and insider insights from Fairway Hotels. Discover Sri Lanka's hidden gems, cultural experiences, and luxury hospitality tips.",
  keywords: [
    "Sri Lanka travel blog",
    "luxury travel stories",
    "Sri Lanka tourism blog",
    "Fairway Hotels journal",
    "Sri Lanka travel tips",
    "luxury hospitality blog",
    "Sri Lanka cultural insights",
    "boutique hotel stories",
    "Sri Lanka travel guide",
    "luxury travel Sri Lanka",
    "Sri Lanka destinations blog",
    "hospitality industry insights",
    "Sri Lanka luxury experiences",
    "travel stories Sri Lanka",
    "Sri Lanka adventure blog",
    "luxury accommodation tips",
    "Sri Lanka hidden gems",
    "boutique hotel reviews",
    "Sri Lanka travel experiences"
  ],
  openGraph: {
    title: "Fairway Journal | Luxury Travel Stories & Sri Lanka Insights",
    description: "Discover luxury travel stories, design inspiration, and insider insights from Fairway Hotels. Explore Sri Lanka's hidden gems.",
    images: [
      {
        url: "https://www.hotelsfairway.com/images/Explore_Destinations/kandy.jpg",
        width: 1200,
        height: 630,
        alt: "Fairway Journal - Sri Lanka Travel Stories & Luxury Insights"
      }
    ]
  },
  twitter: {
    title: "Fairway Journal | Luxury Travel Stories",
    description: "Read luxury travel stories and insider insights from Fairway Hotels. Discover Sri Lanka's hidden gems.",
    images: [
      {
        url: "https://www.hotelsfairway.com/images/Explore_Destinations/kandy.jpg",
        alt: "Fairway Journal - Sri Lanka Travel Stories"
      }
    ]
  }
};

const featuredPosts = [
  {
    id: 1,
    title: "The Art of Sri Lankan Tea Culture",
    excerpt: "Journey through the misty hills of Nuwara Eliya to discover the ancient traditions and modern luxury of Sri Lanka's world-famous tea industry.",
    image: "/images/Explore_Destinations/ella.jpg",
    category: "Culture",
    readTime: "5 min read",
    date: "2024-01-15",
    featured: true
  },
  {
    id: 2,
    title: "Sustainable Luxury: Our Eco-Conscious Approach",
    excerpt: "How Fairway Hotels combines world-class luxury with environmental responsibility, creating experiences that give back to Sri Lanka's natural beauty.",
    image: "/images/Meshendra_Garden/Main Image.png",
    category: "Sustainability",
    readTime: "4 min read",
    date: "2024-01-10",
    featured: true
  },
  
  {
    id: 3,
    title: "Hidden Gems: Beyond the Tourist Trail",
    excerpt: "Explore Sri Lanka's secret destinations that only locals know about, from pristine beaches to ancient temples off the beaten path.",
    image: "/images/E34_hotel_koslanda/2.JPG",
    category: "Destinations",
    readTime: "6 min read",
    date: "2024-01-05",
    featured: true
  }
];

const categories = [
  { name: "All", count: 12 },
  { name: "Culture", count: 4 },
  { name: "Destinations", count: 3 },
  { name: "Sustainability", count: 2 },
  { name: "Hospitality", count: 3 }
];

export default function BlogIndexPage() {
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
                  Our Journal
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif leading-[0.9] mb-6">
                <span className="block text-black/80">Stories from</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
                  Sri Lanka
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-black/60 mt-2">
                  & Beyond
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Discover the soul of Sri Lanka through our carefully curated stories, design insights,
                and travel inspiration that capture the essence of luxury hospitality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#featured"
                  className="group relative px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-full font-semibold text-base sm:text-lg overflow-hidden shadow-2xl hover:shadow-black/50 transition-all duration-500 hover:scale-110"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                    Read Our Stories
                    <span className="group-hover:translate-x-2 transition-transform duration-300">📖</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-700">
                <Image
                  src="/images/Explore_Destinations/kandy.jpg"
                  alt="Sri Lanka Journal Stories"
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

      {/* Categories Section */}
      <section className="py-16 bg-white border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {categories.map((category, idx) => (
              <button
                key={category.name}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  idx === 0
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-black/5 text-black/70 hover:bg-black/10 hover:text-black'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section id="featured" className="py-32 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.02),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-black/5 to-black/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-black/80 mb-6 sm:mb-8 border border-black/10">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              Featured Stories
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-6 sm:mb-8 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Latest Insights
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 max-w-3xl mx-auto leading-relaxed font-light">
              Dive into our collection of stories that capture the essence of Sri Lankan hospitality,
              from cultural discoveries to sustainable luxury practices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">
            {featuredPosts.map((post, idx) => (
              <article key={post.id} className="group relative overflow-hidden rounded-2xl lg:rounded-[2rem] bg-white shadow-2xl hover:shadow-black/20 transition-all duration-700 hover:-translate-y-4 border border-black/5">
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-125 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    quality={80}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl px-3 py-1 sm:px-4 sm:py-2 shadow-xl border border-white/20">
                    <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {post.category}
                    </span>
                  </div>

                  {/* Read time */}
                  <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-black/80 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 py-1 sm:px-4 sm:py-2">
                    <span className="text-white text-xs sm:text-sm font-medium">{post.readTime}</span>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-4">
                    <div className="text-xs sm:text-sm text-black/50 mb-2">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif mb-3 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent group-hover:text-black transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-black/70 text-sm sm:text-base leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">F</span>
                      </div>
                      <span className="text-xs sm:text-sm text-black/60">Fairway Hotels</span>
                    </div>

                    <Link
                      href={`/blog/${post.id}`}
                      className="group/link relative px-4 py-2 bg-gradient-to-r from-black to-gray-900 text-white rounded-xl font-semibold text-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Read More
                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/link:opacity-100 transition-opacity duration-500"></div>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.05),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.04),transparent_50%)]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-black/5">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full text-sm font-medium text-black/80 mb-4">
                <span>Stay Inspired</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                Subscribe to Our Journal
              </h2>
              <p className="text-base sm:text-lg text-black/70 leading-relaxed">
                Get exclusive insights, travel tips, and behind-the-scenes stories delivered to your inbox.
                Join our community of luxury travelers.
              </p>
            </div>

            <form className="max-w-md mx-auto space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-black/20 rounded-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40 transition-all duration-200 bg-white hover:border-black/30"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-black to-gray-900 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-black/50">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
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
            <span className="text-white/90 font-medium text-sm sm:text-base">Share Your Story</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Have a Story to Tell?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            We're always looking for inspiring stories from our guests and partners.
            Share your Sri Lankan experience with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            <Link
              href="/contact"
              className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 relative overflow-hidden text-sm sm:text-base"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/hotels"
              className="group px-6 py-3 sm:px-8 sm:py-4 border-2 border-white/30 text-white rounded-full font-medium hover:border-white hover:bg-white hover:text-black transition-all duration-300 hover:shadow-xl relative overflow-hidden text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore Sri Lanka
                <span className="group-hover:translate-x-1 transition-transform">🗺️</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}


