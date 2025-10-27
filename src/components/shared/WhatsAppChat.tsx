"use client";
import { useEffect, useState } from "react";

export default function WhatsAppChat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "+94722509609";

  const quickOptions = [
    {
      id: "booking",
      label: "🏨 Book a Hotel",
      message: "Hi! I'm interested in booking a luxury stay at Fairway Hotels. Can you help me with availability and rates?"
    },
    {
      id: "tours",
      label: "🗺️ Plan a Tour",
      message: "Hello! I'd like to know more about your curated Sri Lanka tours and adventure packages."
    },
    {
      id: "inquiry",
      label: "💬 General Inquiry",
      message: "Hi! I have some questions about Fairway Hotels and would like to speak with someone."
    }
  ];

  const handleOptionSelect = (optionId: string) => {
    const option = quickOptions.find(opt => opt.id === optionId);
    if (option) {
      setSelectedOption(optionId);
      const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(option.message)}`;
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        setIsExpanded(false);
        setSelectedOption(null);
      }, 300);
    }
  };

  const handleCustomMessage = () => {
    const message = "Hi! I'm interested in learning more about Fairway Hotels.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsExpanded(false);
  };

  

  return (
    <>
      {/* WhatsApp Chat Button */}
      <div className={`fixed z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      } ${
        // Responsive positioning: bottom-left on mobile, bottom-left on desktop
        'bottom-4 left-4 md:bottom-6 md:left-6'
      }`}>
        <div className="relative">
          {/* Chat Bubble (when expanded) */}
          <div className={`absolute transition-all duration-300 ${
            isExpanded
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
          } ${
            // Responsive positioning for chat bubble
            'bottom-full left-0 mb-4 md:left-0 md:right-auto'
          }`}>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 sm:p-5 w-full max-w-[340px] sm:max-w-sm mx-4 md:mx-0">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Fairway Hotels</div>
                  <div className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                    Hi! 👋 How can we help you plan your luxury Sri Lankan experience today?
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="space-y-2">
                    {quickOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleOptionSelect(option.id)}
                        disabled={selectedOption === option.id}
                        className={`w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                          selectedOption === option.id
                            ? 'bg-green-500 text-white shadow-lg transform scale-105'
                            : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 border border-gray-200'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{option.label.split(' ')[0]}</span>
                          <span className="flex-1">{option.label.substring(option.label.indexOf(' ') + 1)}</span>
                          {selectedOption === option.id && (
                            <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                          )}
                        </div>
                      </button>
                    ))}

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={handleCustomMessage}
                        className="flex-1 px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xs font-medium rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        💬 Custom Message
                      </button>
                      <button
                        onClick={() => setIsExpanded(false)}
                        className="px-3 py-2 text-gray-400 hover:text-gray-600 text-xs font-medium rounded-xl hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat bubble pointer - responsive positioning */}
              <div className={`absolute w-0 h-0 border-l-4 border-r-4 border-t-4 sm:border-l-8 sm:border-r-8 sm:border-t-8 border-transparent transform translate-y-1/2 ${
                'bottom-0 left-8 md:left-8 md:right-auto'
              }`}>
                <div className="border-t-white"></div>
                <div className={`border-t-gray-200 ${
                  'translate-x-px md:translate-x-px'
                }`}></div>
              </div>
            </div>
          </div>

          {/* Main WhatsApp Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 flex items-center justify-center touch-manipulation border-2 border-white/20"
            aria-label="Chat with us on WhatsApp"
          >
            {/* Pulse animation ring */}
            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></div>
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-green-400 to-green-500 animate-pulse opacity-50"></div>

            {/* Button content */}
            <div className="relative z-10">
              {isExpanded ? (
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white transform transition-transform duration-300 rotate-0 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white transform transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              )}
            </div>

            {/* Notification dot with pulse */}
            <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-[10px] sm:text-xs text-white font-bold">1</span>
            </div>
          </button>

          {/* Enhanced Tooltip - Hidden on mobile for better UX */}
          <div className={`hidden md:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-2.5 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm rounded-xl whitespace-nowrap transition-all duration-300 shadow-lg border border-gray-700 ${
            isExpanded ? 'opacity-0 translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'
          }`}>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      </div>
    </>
  );
}