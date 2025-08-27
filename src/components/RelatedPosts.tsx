'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

interface RelatedPostsProps {
  currentSlug: string;
  tags?: string[];
}

export function RelatedPosts({ currentSlug, tags }: RelatedPostsProps) {
  // This would typically fetch related posts from the API
  // For now, we'll show placeholder content
  const relatedPosts = [
    {
      slug: 'sri-lanka-cultural-heritage',
      title: 'Discovering Sri Lanka\'s Cultural Heritage',
      excerpt: 'Explore the rich cultural traditions and ancient temples of Sri Lanka...',
      heroImage: { url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
      publishedAt: '2025-01-15',
    },
    {
      slug: 'best-beaches-sri-lanka',
      title: 'Top 10 Beaches in Sri Lanka',
      excerpt: 'From pristine white sands to hidden coves, discover the most beautiful beaches...',
      heroImage: { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop' },
      publishedAt: '2025-01-10',
    },
    {
      slug: 'tea-country-adventures',
      title: 'Adventures in Sri Lanka\'s Tea Country',
      excerpt: 'Hike through misty mountains and learn about the world-famous Ceylon tea...',
      heroImage: { url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop' },
      publishedAt: '2025-01-05',
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Related Articles
      </h3>
      
      <div className="space-y-6">
        {relatedPosts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex gap-4">
                {/* Image */}
                <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                  <Image
                    src={post.heroImage.url}
                    alt={post.title}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h4>
                  
                  <p className="text-gray-500 text-xs line-clamp-2 mb-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-gray-400 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
      
      {/* View All Posts */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <Link
          href="/blog"
          className="block text-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
        >
          View All Posts →
        </Link>
      </div>
    </div>
  );
}
