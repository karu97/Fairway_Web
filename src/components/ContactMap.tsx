'use client';

import React from 'react';
import { MapPin, Navigation, Clock, Phone, Mail, Globe } from 'lucide-react';

interface ContactMapProps {
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  hours?: string;
}

export function ContactMap({ address, phone, email, website, hours }: ContactMapProps) {
  const defaultAddress = address || '123 Galle Road, Colombo 00300, Sri Lanka';
  const defaultPhone = phone || '+94 11 234 5678';
  const defaultEmail = email || 'info@fairwayhotels.com';
  const defaultWebsite = website || 'www.fairwayhotels.com';
  const defaultHours = hours || 'Mon-Fri: 9AM-6PM, Sat: 9AM-4PM';

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-4 sm:p-6 lg:p-8">
      {/* Map Placeholder */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Visit Our Location</h3>
        <p className="text-gray-600 text-sm sm:text-base mb-4">Interactive map integration available</p>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base">
          <Navigation className="w-4 h-4 mr-2" />
          Get Directions
        </button>
      </div>

      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Address */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Address</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {defaultAddress}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-900 font-medium text-sm">Phone</p>
                <p className="text-gray-600 text-sm">{defaultPhone}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-900 font-medium text-sm">Email</p>
                <p className="text-gray-600 text-sm">{defaultEmail}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Globe className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-900 font-medium text-sm">Website</p>
                <p className="text-gray-600 text-sm">{defaultWebsite}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="mt-4 sm:mt-6 bg-white rounded-xl p-4 sm:p-6 shadow-sm">
        <div className="flex items-start space-x-3">
          <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Business Hours</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {defaultHours}
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4">
        <button className="flex items-center justify-center px-3 sm:px-4 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-xs sm:text-sm font-medium">
          <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          Call Now
        </button>
        <button className="flex items-center justify-center px-3 sm:px-4 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-xs sm:text-sm font-medium">
          <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          Email Us
        </button>
      </div>
    </div>
  );
}