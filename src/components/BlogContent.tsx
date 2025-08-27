'use client';

import { PortableText } from '@portabletext/react';

interface BlogContentProps {
  post: {
    title: string;
    body?: any; // PortableText content
    publishedAt: string;
    author?: { name: string };
    tags?: string[];
  };
}

export function BlogContent({ post }: BlogContentProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Custom components for PortableText
  const components = {
    block: {
      h1: ({ children }: any) => (
        <h1 className="text-3xl font-playfair font-bold text-gray-900 mb-4 mt-8">
          {children}
        </h1>
      ),
      h2: ({ children }: any) => (
        <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-3 mt-6">
          {children}
        </h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-5">
          {children}
        </h3>
      ),
      h4: ({ children }: any) => (
        <h4 className="text-lg font-semibold text-gray-900 mb-2 mt-4">
          {children}
        </h4>
      ),
      normal: ({ children }: any) => (
        <p className="text-gray-700 leading-relaxed mb-4">
          {children}
        </p>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          {children}
        </ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
          {children}
        </ol>
      ),
    },
    listItem: ({ children }: any) => (
      <li className="text-gray-700 leading-relaxed">
        {children}
      </li>
    ),
    link: ({ href, children }: any) => (
      <a
        href={href}
        className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    image: ({ asset, alt }: any) => (
      <div className="my-6">
        <img
          src={asset?.url}
          alt={alt || 'Blog image'}
          className="w-full h-auto rounded-lg shadow-md"
        />
        {alt && (
          <p className="text-sm text-gray-500 text-center mt-2 italic">
            {alt}
          </p>
        )}
      </div>
    ),
    code: ({ children }: any) => (
      <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-purple-500 pl-4 py-2 my-6 bg-purple-50 italic text-gray-700">
        {children}
      </blockquote>
    ),
  };

  return (
    <article className="bg-white rounded-2xl shadow-lg p-8">
      {/* Article Header */}
      <header className="mb-8 pb-6 border-b border-gray-200">
        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h1>
        
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-gray-500">
          <time dateTime={post.publishedAt} className="flex items-center">
            📅 {formatDate(post.publishedAt)}
          </time>
          
          {post.author && (
            <span className="flex items-center">
              👤 By {post.author.name}
            </span>
          )}
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2">
              🏷️
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        {post.body ? (
          <PortableText value={post.body} components={components} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Content is being prepared. Please check back soon!
            </p>
          </div>
        )}
      </div>

      {/* Article Footer */}
      <footer className="mt-12 pt-6 border-t border-gray-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <span className="text-gray-500">Share this article:</span>
            <div className="flex space-x-2">
              <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                📘
              </button>
              <button className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                📱
              </button>
              <button className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200">
                📧
              </button>
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            Last updated: {formatDate(post.publishedAt)}
          </div>
        </div>
      </footer>
    </article>
  );
}
