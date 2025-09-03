'use client';

import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowUp,
  Heart
} from 'lucide-react';
import { useEffect, useState } from 'react';

interface FooterProps {
  siteSettings?: {
    siteName?: string;
    logo?: { url: string; alt?: string };
    contact?: {
      phone?: string;
      email?: string;
      address?: string;
    };
    social?: {
      facebook?: string;
      twitter?: string;
      instagram?: string;
      linkedin?: string;
      youtube?: string;
    };
  };
}

export function Footer({ siteSettings }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    hotels: [
      { name: 'Colombo Hotels', href: '/hotels/colombo' },
      { name: 'Kandy Hotels', href: '/hotels/kandy' },
      { name: 'Galle Hotels', href: '/hotels/galle' },
      { name: 'Nuwara Eliya Hotels', href: '/hotels/nuwara-eliya' },
      { name: 'All Hotels', href: '/hotels' },
    ],
    tours: [
      { name: 'Cultural Tours', href: '/tours/cultural' },
      { name: 'Adventure Tours', href: '/tours/adventure' },
      { name: 'Beach Tours', href: '/tours/beach' },
      { name: 'Hill Country Tours', href: '/tours/hill-country' },
      { name: 'All Tours', href: '/tours' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Story', href: '/about#story' },
      { name: 'Leadership Team', href: '/about#leadership' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press Room', href: '/press' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Help Center', href: '/help' },
      { name: 'FAQs', href: '/faqs' },
      { name: 'Travel Insurance', href: '/insurance' },
      { name: 'Emergency Contact', href: '/emergency' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/policies/privacy' },
      { name: 'Terms of Service', href: '/policies/terms' },
      { name: 'Cookie Policy', href: '/policies/cookies' },
      { name: 'Accessibility', href: '/accessibility' },
      { name: 'Sitemap', href: '/sitemap.xml' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', href: siteSettings?.social?.facebook || '#', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Twitter', href: siteSettings?.social?.twitter || '#', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Instagram', href: siteSettings?.social?.instagram || '#', icon: Instagram, color: 'hover:text-pink-600' },
    { name: 'LinkedIn', href: siteSettings?.social?.linkedin || '#', icon: Linkedin, color: 'hover:text-blue-700' },
    { name: 'YouTube', href: siteSettings?.social?.youtube || '#', icon: Youtube, color: 'hover:text-red-600' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2 xl:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              {siteSettings?.logo?.url ? (
                <img
                  src={siteSettings.logo.url}
                  alt={siteSettings.logo.alt || 'Fairway Hotels Logo'}
                  className="w-12 h-12 rounded-xl"
                />
              ) : (
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
              )}
              <div>
                <h3 className="text-2xl font-bold font-playfair">{siteSettings?.siteName || 'Fairway Hotels'}</h3>
                <p className="text-gray-400 text-sm">Luxury & Excellence</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience the perfect blend of luxury, comfort, and authentic Sri Lankan hospitality. 
              From pristine beaches to misty mountains, discover the beauty of Sri Lanka with us.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {siteSettings?.contact?.address && (
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    {siteSettings.contact.address}
                  </span>
                </div>
              )}
              {siteSettings?.contact?.phone && (
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{siteSettings.contact.phone}</span>
                </div>
              )}
              {siteSettings?.contact?.email && (
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{siteSettings.contact.email}</span>
                </div>
              )}
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">www.fairwayhotels.com</span>
              </div>
            </div>
          </div>

          {/* Hotels */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Hotels</h4>
            <ul className="space-y-2">
              {footerLinks.hotels.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Tours</h4>
            <ul className="space-y-2">
              {footerLinks.tours.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h4 className="text-xl font-semibold mb-4 text-white text-center lg:text-left">Stay Updated</h4>
            <p className="text-gray-300 mb-6 text-center lg:text-left">
              Subscribe to our newsletter for exclusive offers, travel tips, and updates about our properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm sm:text-base"
              />
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Legal */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-4">Follow us:</span>
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className={`p-2 text-gray-400 ${social.color} transition-colors rounded-lg hover:bg-gray-800`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Fairway Hotels. All rights reserved.</span>
              <span>•</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>in Sri Lanka</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>ISO 9001:2015 Certified</span>
              <span>•</span>
              <span>Travel Agent License: TA/1234</span>
              <span>•</span>
              <span>Member of SLITH</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </footer>
  );
}
