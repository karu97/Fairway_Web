'use client';

import React from 'react';
import { CheckCircle, XCircle, Info } from 'lucide-react';

interface TourInclusionsProps {
  tour: {
    title: string;
    inclusions?: string[];
    exclusions?: string[];
  };
}

export function TourInclusions({ tour }: TourInclusionsProps) {
  const hasInclusions = tour.inclusions && tour.inclusions.length > 0;
  const hasExclusions = tour.exclusions && tour.exclusions.length > 0;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
        What's Included
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Inclusions */}
        <div>
          <div className="flex items-center mb-4">
            <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Included in Your Tour</h3>
          </div>
          
          {hasInclusions ? (
            <div className="space-y-3">
              {tour.inclusions.map((inclusion, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{inclusion}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <CheckCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600">Tour inclusions will be available soon</p>
            </div>
          )}
        </div>

        {/* Exclusions */}
        <div>
          <div className="flex items-center mb-4">
            <XCircle className="w-6 h-6 text-red-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Not Included</h3>
          </div>
          
          {hasExclusions ? (
            <div className="space-y-3">
              {tour.exclusions.map((exclusion, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{exclusion}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <XCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600">Tour exclusions will be available soon</p>
            </div>
          )}
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <div className="flex items-start space-x-3">
          <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-lg font-semibold text-blue-900 mb-2">Important Information</h4>
            <div className="space-y-2 text-sm text-blue-800">
              <p>• All prices are per person based on double occupancy</p>
              <p>• Single supplement applies for solo travelers</p>
              <p>• Children under 12 receive special pricing</p>
              <p>• Customization available for private tours</p>
              <p>• Group discounts available for 6+ travelers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Add-ons */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Optional Add-ons</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Airport VIP Service</h4>
            <p className="text-sm text-gray-600 mb-2">Fast-track immigration and luggage handling</p>
            <span className="text-blue-600 font-semibold">Contact us for pricing</span>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Photography Package</h4>
            <p className="text-sm text-gray-600 mb-2">Professional photographer throughout your tour</p>
            <span className="text-blue-600 font-semibold">Contact us for pricing</span>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Spa & Wellness</h4>
            <p className="text-sm text-gray-600 mb-2">Relaxing spa treatments at luxury hotels</p>
            <span className="text-blue-600 font-semibold">Contact us for pricing</span>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Cooking Classes</h4>
            <p className="text-sm text-gray-600 mb-2">Learn to cook traditional local dishes</p>
            <span className="text-blue-600 font-semibold">Contact us for pricing</span>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Adventure Activities</h4>
            <p className="text-sm text-gray-600 mb-2">White water rafting, hiking, and more</p>
            <span className="text-blue-600 font-semibold">Contact us for pricing</span>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Private Guide</h4>
            <p className="text-sm text-gray-600 mb-2">Dedicated guide for your group only</p>
            <span className="text-blue-600 font-semibold">Contact us for pricing</span>
          </div>
        </div>
      </div>

      {/* Booking Terms */}
      <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Terms & Conditions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Payment</h4>
            <ul className="space-y-1">
              <li>• 25% deposit required to confirm booking</li>
              <li>• Full payment due 30 days before departure</li>
              <li>• Credit card, bank transfer, or PayPal accepted</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Cancellation</h4>
            <ul className="space-y-1">
              <li>• Free cancellation up to 30 days before departure</li>
              <li>• 50% refund for cancellations 15-29 days before</li>
              <li>• No refund for cancellations within 14 days</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
