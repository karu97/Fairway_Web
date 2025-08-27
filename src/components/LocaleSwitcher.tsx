'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const locales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'si', name: 'සිංහල', flag: '🇱🇰' },
  { code: 'ta', name: 'தமிழ்', flag: '🇱🇰' },
];

export function LocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  // Extract current locale from pathname or default to 'en'
  const currentLocale = pathname.split('/')[1] || 'en';
  const currentLocaleData = locales.find(locale => locale.code === currentLocale) || locales[0];

  const handleLocaleChange = (localeCode: string) => {
    setIsOpen(false);
    
    // If switching to English (default), remove locale from path
    if (localeCode === 'en') {
      const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/';
      router.push(pathWithoutLocale);
    } else {
      // Add locale to path
      const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/';
      router.push(`/${localeCode}${pathWithoutLocale}`);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors duration-200"
        aria-label="Change language"
      >
        <span className="text-lg">{currentLocaleData.flag}</span>
        <span className="hidden sm:block text-sm font-medium text-gray-700">
          {currentLocaleData.code.toUpperCase()}
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 min-w-[160px] py-2">
          {locales.map((locale) => (
            <button
              key={locale.code}
              onClick={() => handleLocaleChange(locale.code)}
              className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200 ${
                locale.code === currentLocale ? 'bg-fairway-50 text-fairway-700' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{locale.flag}</span>
              <span className="text-sm font-medium">{locale.name}</span>
              {locale.code === currentLocale && (
                <svg className="w-4 h-4 text-fairway-600 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
