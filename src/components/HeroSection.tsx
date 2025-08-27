'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DatePicker } from './DatePicker';

export function HeroSection() {
  const [searchType, setSearchType] = useState<'hotel' | 'tour'>('hotel');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury hotel in Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Discover Luxury
            <span className="block text-fairway-300">in Sri Lanka</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience world-class hospitality at our premium hotels and embark on unforgettable 
            journeys through the heart of this beautiful island nation.
          </p>

          {/* Search Box */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search Type Tabs */}
              <div className="flex bg-gray-100 rounded-2xl p-1">
                <button
                  onClick={() => setSearchType('hotel')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    searchType === 'hotel'
                      ? 'bg-white text-fairway-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Hotels
                </button>
                <button
                  onClick={() => setSearchType('tour')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    searchType === 'tour'
                      ? 'bg-white text-fairway-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Tours
                </button>
              </div>

              {/* Search Fields */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                    {searchType === 'hotel' ? 'Check-in' : 'Start Date'}
                  </label>
                  <DatePicker
                    placeholder="Select date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-fairway-500 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                    {searchType === 'hotel' ? 'Check-out' : 'End Date'}
                  </label>
                  <DatePicker
                    placeholder="Select date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-fairway-500 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                    {searchType === 'hotel' ? 'Guests' : 'Travelers'}
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-fairway-500 focus:border-transparent">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <button className="bg-fairway-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-fairway-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                Search
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-fairway-300 mb-2">15+</div>
              <div className="text-lg text-gray-200">Luxury Hotels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-fairway-300 mb-2">50+</div>
              <div className="text-lg text-gray-200">Tour Packages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-fairway-300 mb-2">10K+</div>
              <div className="text-lg text-gray-200">Happy Guests</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
