'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  navigation: Array<{ name: string; href: string }>;
}

export function MobileMenu({ open, onOpenChange, navigation }: MobileMenuProps) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => onOpenChange(false)} />
      
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-fairway-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="font-serif font-bold text-xl">Fairway Hotels</span>
            </div>
            <button
              onClick={() => onOpenChange(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6">
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => onOpenChange(false)}
                    className={`block px-4 py-3 rounded-xl font-medium transition-colors duration-200 ${
                      pathname === item.href
                        ? 'bg-fairway-50 text-fairway-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quick Actions */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="space-y-3">
                <Link
                  href="/contact"
                  onClick={() => onOpenChange(false)}
                  className="block w-full px-4 py-3 bg-fairway-600 text-white font-semibold rounded-xl text-center hover:bg-fairway-700 transition-colors duration-200"
                >
                  Book Now
                </Link>
                
                <Link
                  href="/about"
                  onClick={() => onOpenChange(false)}
                  className="block w-full px-4 py-3 border-2 border-fairway-600 text-fairway-600 font-semibold rounded-xl text-center hover:bg-fairway-50 transition-colors duration-200"
                >
                  About Us
                </Link>
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200">
            <div className="text-center text-sm text-gray-500">
              <p>© 2025 Fairway Hotels</p>
              <p className="mt-1">Luxury hospitality in Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
