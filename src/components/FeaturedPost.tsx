'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface FeaturedPostProps {
  post: {
    slug: string;
    title: string;
    excerpt?: string;
    heroImage?: { url: string; alt?: string };
    publishedAt: string;
    author?: { name: string };
    tags?: string[];
  };
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative h-64 lg:h-full">
          {post.heroImage ? (
            <Image
              src={post.heroImage.url}
              alt={post.heroImage.alt || post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-900 to-purple-700" />
          )}
          
          {/* Featured Badge */}
          <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured Post
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          {/* Meta Information */}
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            
            {post.author && (
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>{post.author.name}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h2>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {post.excerpt}
            </p>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="text-gray-500 text-sm">
                  +{post.tags.length - 3} more
                </span>
              )}
            </div>
          )}

          {/* Read More Button */}
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium group"
          >
            Read Full Article
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
}
