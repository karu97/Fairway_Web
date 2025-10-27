"use client";
import { useEffect, useState } from "react";

export default function WhatsAppChat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "+94722509609";
  const message = "Hi! I'm interested in booking a luxury stay at Fairway Hotels. Can you help me?";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-3 sm:p-4 max-w-[280px] sm:max-w-xs mx-4 md:mx-0">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-gray-900 mb-1">Fairway Hotels</div>
                  <div className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">
                    Hi! 👋 Ready to plan your luxury Sri Lankan adventure? We are here to help!
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={handleWhatsAppClick}
                      className="px-3 py-2 sm:px-4 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded-full transition-colors duration-200 flex-1 sm:flex-none"
                    >
                      Start Chat
                    </button>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="px-2 py-2 sm:px-3 text-gray-400 hover:text-gray-600 text-xs font-medium rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      Later
                    </button>
                  </div>
                </div>
              </div>
              {/* Chat bubble pointer - responsive positioning */}
              <div className={`absolute w-0 h-0 border-l-4 border-r-4 border-t-4 sm:border-l-8 sm:border-r-8 sm:border-t-8 border-transparent transform translate-y-1/2 ${
                'bottom-0 left-6 md:left-6 md:right-auto'
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
            className="group relative w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 flex items-center justify-center touch-manipulation"
            aria-label="Chat with us on WhatsApp"
          >
            {/* Pulse animation ring */}
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>

            {/* Button content */}
            <div className="relative z-10">
              {isExpanded ? (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transform transition-transform duration-300 rotate-0 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transform transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              )}
            </div>

            {/* Notification dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-[10px] sm:text-xs text-white font-bold">1</span>
            </div>
          </button>

          {/* Tooltip - Hidden on mobile for better UX */}
          <div className={`hidden md:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-300 ${
            isExpanded ? 'opacity-0 translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'
          }`}>
            Chat with us!
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </div>
    </>
  );
}