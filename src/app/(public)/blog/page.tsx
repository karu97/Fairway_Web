import { Metadata } from 'next';
import { Suspense } from 'react';
import { getBlogPosts } from '@/lib/sanity';
import { BlogCard } from '@/components/BlogCard';
import { FeaturedPost } from '@/components/FeaturedPost';
import { generateSchemasFromOptions } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Travel Blog - Sri Lanka Insights & Guides',
  description: 'Discover Sri Lanka through our travel blog. Get insider tips, cultural insights, and travel guides for the perfect Sri Lankan adventure.',
  openGraph: {
    title: 'Travel Blog - Sri Lanka Insights & Guides | Fairway Hotels',
    description: 'Discover Sri Lanka through our travel blog.',
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const featuredPost = posts[0]; // First post is featured
  const regularPosts = posts.slice(1);

  const schemas = generateSchemasFromOptions({
    includeOrganization: true,
    includeWebsite: true,
    breadcrumbs: {
      items: [
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' }
      ]
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-center mb-4">
            Travel Blog
          </h1>
          <p className="text-xl text-center text-purple-100 max-w-3xl mx-auto">
            Discover the hidden gems, cultural treasures, and travel secrets of Sri Lanka
          </p>
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="container mx-auto px-4 py-8">
          <FeaturedPost post={featuredPost} />
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">
            Latest Articles
          </h2>
          <p className="text-gray-600">
            Stay updated with our latest travel insights and guides
          </p>
        </div>

        <Suspense fallback={<div>Loading posts...</div>}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Suspense>

        {regularPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts available yet.</p>
          </div>
        )}
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
    </div>
  );
}
