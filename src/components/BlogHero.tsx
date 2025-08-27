'use client';

import Image from 'next/image';
import { Calendar, User, Tag } from 'lucide-react';

interface BlogHeroProps {
  post: {
    title: string;
    heroImage?: { url: string; alt?: string };
    excerpt?: string;
    publishedAt: string;
    author?: { name: string };
    tags?: string[];
  };
}

export function BlogHero({ post }: BlogHeroProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Hero Image */}
      {post.heroImage ? (
        <Image
          src={post.heroImage.url}
          alt={post.heroImage.alt || post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-purple-900 to-purple-700" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Blog Title */}
            <div className="mb-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
              
              {post.excerpt && (
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
                  {post.excerpt}
                </p>
              )}
            </div>

            {/* Meta Information */}
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-6 text-white">
                {/* Publication Date */}
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="text-lg">{formatDate(post.publishedAt)}</span>
                </div>

                {/* Author */}
                {post.author && (
                  <div className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    <span className="text-lg">By {post.author.name}</span>
                  </div>
                )}

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex items-center">
                    <Tag className="w-5 h-5 mr-2" />
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-purple-600 bg-opacity-80 text-white px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="text-purple-200 text-sm">
                          +{post.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Reading Time Estimate */}
            <div className="text-white">
              <div className="inline-flex items-center bg-purple-600 bg-opacity-80 px-4 py-2 rounded-lg">
                <span className="text-sm">
                  📖 {Math.ceil((post.title.length + (post.excerpt?.length || 0)) / 200)} min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
