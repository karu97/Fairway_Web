'use client';

import { PortableText } from '@portabletext/react';

interface PortableTextRendererProps {
  value: any;
  className?: string;
  components?: any;
}

export function PortableTextRenderer({ value, className = '', components }: PortableTextRendererProps) {
  // If the value is not portable text (i.e., it's a string), render it as plain text
  if (typeof value === 'string') {
    return <span className={className}>{value}</span>;
  }

  // If the value is null, undefined, or not an array, don't render anything
  if (!value || !Array.isArray(value)) {
    return null;
  }

  // Default components if none provided
  const defaultComponents = {
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
          alt={alt || 'Image'}
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

  const finalComponents = components || defaultComponents;

  return (
    <div className={className}>
      <PortableText value={value} components={finalComponents} />
    </div>
  );
}
