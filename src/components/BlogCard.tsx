'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Tag } from 'lucide-react';

interface BlogCardProps {
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

export function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {post.heroImage ? (
          <Image
            src={post.heroImage.url}
            alt={post.heroImage.alt || post.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <div className="mb-3">
          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-xl font-semibold text-gray-900 hover:text-purple-600 transition-colors duration-200 mb-2 line-clamp-2">
              {post.title}
            </h3>
          </Link>
        </div>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        )}

        {/* Meta Information */}
        <div className="space-y-2 mb-4">
          {/* Date */}
          <div className="flex items-center text-gray-500 text-xs">
            <Calendar className="w-3 h-3 mr-1" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>

          {/* Author */}
          {post.author && (
            <div className="flex items-center text-gray-500 text-xs">
              <User className="w-3 h-3 mr-1" />
              <span>{post.author.name}</span>
            </div>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center text-gray-500 text-xs">
              <Tag className="w-3 h-3 mr-1" />
              <div className="flex flex-wrap gap-1">
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="text-gray-400">+{post.tags.length - 3}</span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Action Button */}
        <Link
          href={`/blog/${post.slug}`}
          className="block w-full bg-purple-600 text-white text-center py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
