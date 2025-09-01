'use client';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/blog"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors inline-block"
          >
            View All Posts
          </Link>
        </div>
        {error.message && (
          <details className="mt-8 text-left max-w-md mx-auto">
            <summary className="cursor-pointer text-sm text-gray-500">
              Error Details
            </summary>
            <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
