'use client';

import { Calendar, MapPin, Clock, Camera, Utensils, Bed, Coffee } from 'lucide-react';

interface TourItineraryProps {
  tour: {
    title: string;
    itinerary?: Array<{
      day: number;
      title: string;
      detail: string;
      activities?: string[];
      accommodation?: string;
      meals?: string[];
    }>;
  };
}

export function TourItinerary({ tour }: TourItineraryProps) {
  // Default itinerary if none provided
  const itinerary = tour.itinerary || [
    {
      day: 1,
      title: 'Arrival & Welcome',
      detail: 'Arrive at the airport and transfer to your hotel. Evening welcome dinner with traditional Sri Lankan cuisine.',
      activities: ['Airport Transfer', 'Hotel Check-in', 'Welcome Dinner'],
      accommodation: 'Luxury Hotel in Colombo',
      meals: ['Dinner'],
    },
    {
      day: 2,
      title: 'Colombo City Tour',
      detail: 'Explore the vibrant capital city with visits to historic sites, modern attractions, and local markets.',
      activities: ['City Tour', 'Temple Visit', 'Market Shopping'],
      accommodation: 'Luxury Hotel in Colombo',
      meals: ['Breakfast', 'Lunch', 'Dinner'],
    },
    {
      day: 3,
      title: 'Journey to Kandy',
      detail: 'Travel to the cultural capital, visit the Temple of the Tooth, and enjoy a traditional dance performance.',
      activities: ['Temple of the Tooth', 'Cultural Show', 'City Exploration'],
      accommodation: 'Heritage Hotel in Kandy',
      meals: ['Breakfast', 'Lunch', 'Dinner'],
    },
    {
      day: 4,
      title: 'Tea Country & Nuwara Eliya',
      detail: 'Visit tea plantations, learn about tea production, and enjoy the cool mountain climate.',
      activities: ['Tea Factory Tour', 'Plantation Visit', 'Mountain Hiking'],
      accommodation: 'Tea Estate Bungalow',
      meals: ['Breakfast', 'Lunch', 'Dinner'],
    },
    {
      day: 5,
      title: 'Sigiriya & Ancient Cities',
      detail: 'Climb the iconic Lion Rock fortress and explore ancient ruins of Sri Lanka\'s glorious past.',
      activities: ['Sigiriya Climb', 'Ancient City Tour', 'Sunset Viewing'],
      accommodation: 'Resort near Sigiriya',
      meals: ['Breakfast', 'Lunch', 'Dinner'],
    },
  ];

  const getMealIcon = (meal: string) => {
    const mealLower = meal.toLowerCase();
    if (mealLower.includes('breakfast')) return <Coffee className="w-4 h-4" />;
    if (mealLower.includes('lunch')) return <Utensils className="w-4 h-4" />;
    if (mealLower.includes('dinner')) return <Utensils className="w-4 h-4" />;
    return null;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
        Tour Itinerary
      </h2>
      
      <div className="space-y-8">
        {itinerary.map((day, index) => (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
            {/* Day Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">{day.day}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{day.title}</h3>
                    <p className="text-green-100 opacity-90">Day {day.day}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center space-x-2 text-green-100">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm">Day {day.day}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Day Content */}
            <div className="p-6">
              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {day.detail}
                </p>
              </div>

              {/* Activities */}
              {day.activities && day.activities.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Camera className="w-5 h-5 mr-2 text-green-600" />
                    Activities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {day.activities.map((activity, activityIndex) => (
                      <div
                        key={activityIndex}
                        className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span className="text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Accommodation & Meals */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Accommodation */}
                {day.accommodation && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      <Bed className="w-5 h-5 mr-2 text-blue-600" />
                      Accommodation
                    </h4>
                    <p className="text-gray-700">{day.accommodation}</p>
                  </div>
                )}

                {/* Meals */}
                {day.meals && day.meals.length > 0 && (
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      <Utensils className="w-5 h-5 mr-2 text-orange-600" />
                      Meals Included
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {day.meals.map((meal, mealIndex) => (
                        <div
                          key={mealIndex}
                          className="flex items-center space-x-2 bg-white px-3 py-1 rounded-full text-sm"
                        >
                          {getMealIcon(meal)}
                          <span className="text-gray-700">{meal}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Additional Info */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                    <span>Full day tour</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    <span>Multiple locations</span>
                  </div>
                  <div className="flex items-center">
                    <Camera className="w-4 h-4 mr-2 text-gray-400" />
                    <span>Photo opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Itinerary Notes */}
      <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
        <h3 className="text-lg font-semibold text-yellow-800 mb-4">Important Notes</h3>
        <ul className="space-y-2 text-sm text-yellow-700">
          <li>• Itinerary may be adjusted due to weather conditions or local events</li>
          <li>• All activities are subject to availability and may be substituted with alternatives</li>
          <li>• Comfortable walking shoes and weather-appropriate clothing are recommended</li>
          <li>• Please inform us of any dietary restrictions or special requirements</li>
          <li>• Photography is allowed at most locations, but some restrictions may apply</li>
        </ul>
      </div>
    </div>
  );
}
