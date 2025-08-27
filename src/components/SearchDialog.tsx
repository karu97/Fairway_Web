'use client';

import { useState } from 'react';
import Link from 'next/link';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState('');

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Search</h2>
                <button
                  onClick={() => onOpenChange(false)}
                  className="p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                  aria-label="Close search"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search hotels, tours, destinations..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full px-4 py-4 pl-12 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-fairway-500 focus:border-transparent text-lg"
                  autoFocus
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {query && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quick Links</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <Link
                        href="/hotels"
                        className="p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 text-left"
                        onClick={() => onOpenChange(false)}
                      >
                        <div className="font-medium text-gray-900">All Hotels</div>
                        <div className="text-sm text-gray-500">Browse our luxury properties</div>
                      </Link>
                      <Link
                        href="/tours"
                        className="p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 text-left"
                        onClick={() => onOpenChange(false)}
                      >
                        <div className="font-medium text-gray-900">All Tours</div>
                        <div className="text-sm text-gray-500">Explore adventure packages</div>
                      </Link>
                      <Link
                        href="/blog"
                        className="p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 text-left"
                        onClick={() => onOpenChange(false)}
                      >
                        <div className="font-medium text-gray-900">Travel Blog</div>
                        <div className="text-sm text-gray-500">Read travel stories & tips</div>
                      </Link>
                      <Link
                        href="/contact"
                        className="p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 text-left"
                        onClick={() => onOpenChange(false)}
                      >
                        <div className="font-medium text-gray-900">Contact Us</div>
                        <div className="text-sm text-gray-500">Get in touch for bookings</div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {!query && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-500">Start typing to search for hotels, tours, and destinations</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
