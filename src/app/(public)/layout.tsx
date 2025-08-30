import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Analytics, GoogleAnalytics, VercelAnalytics } from '@/components/Analytics';
import { getSiteSettings } from '@/lib/sanity';
// Root fonts and global CSS are loaded in `src/app/layout.tsx`

export const metadata: Metadata = {
  title: {
    default: 'Fairway Hotels - Luxury Hotels & Tours in Sri Lanka',
    template: '%s | Fairway Hotels',
  },
  description: 'Experience luxury hospitality and unforgettable adventures across Sri Lanka. Discover our world-class hotels, curated tours, and authentic Sri Lankan experiences.',
  keywords: [
    'Sri Lanka hotels',
    'luxury accommodation',
    'tours',
    'travel',
    'Colombo',
    'Kandy',
    'Galle',
    'Nuwara Eliya',
    'beach resorts',
    'hill country',
    'cultural tours',
    'wildlife safari',
    'tea plantations',
    'Buddhist temples',
    'colonial architecture',
    'Ayurveda',
    'spa treatments',
    'fine dining',
    'wedding venues',
    'business travel',
    'family vacations',
    'honeymoon destinations',
  ],
  authors: [{ name: 'Fairway Hotels' }],
  creator: 'Fairway Hotels',
  publisher: 'Fairway Hotels',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://fairwayhotels.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'si': '/si',
      'ta': '/ta',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fairwayhotels.com',
    siteName: 'Fairway Hotels',
    title: 'Fairway Hotels - Luxury Hotels & Tours in Sri Lanka',
    description: 'Experience luxury hospitality and unforgettable adventures across Sri Lanka.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Fairway Hotels - Luxury Sri Lanka Experience',
      },
      {
        url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Luxury Hotel in Sri Lanka',
      },
      {
        url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Sri Lanka Cultural Tour',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fairwayhotels',
    creator: '@fairwayhotels',
    title: 'Fairway Hotels - Luxury Hotels & Tours in Sri Lanka',
    description: 'Experience luxury hospitality and unforgettable adventures across Sri Lanka.',
    images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=630&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
  },
  category: 'travel',
  classification: 'business',
  other: {
    'geo.region': 'LK',
    'geo.placename': 'Sri Lanka',
    'geo.position': '6.9271;79.8612',
    'ICBM': '6.9271, 79.8612',
    'DC.title': 'Fairway Hotels - Luxury Hotels & Tours in Sri Lanka',
    'DC.description': 'Experience luxury hospitality and unforgettable adventures across Sri Lanka.',
    'DC.subject': 'Sri Lanka hotels, luxury accommodation, tours, travel',
    'DC.creator': 'Fairway Hotels',
    'DC.publisher': 'Fairway Hotels',
    'DC.contributor': 'Fairway Hotels',
    'DC.date': new Date().toISOString(),
    'DC.type': 'text/html',
    'DC.format': 'text/html',
    'DC.identifier': 'https://fairwayhotels.com',
    'DC.language': 'en',
    'DC.coverage': 'Sri Lanka',
    'DC.rights': 'Copyright Fairway Hotels',
  },
};

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteSettings = await getSiteSettings();
  
  return (
    <>
        {/* Google Analytics */}
        <GoogleAnalytics />
        
        {/* Vercel Analytics */}
        <VercelAnalytics />
        
        {/* Page Analytics */}
        <Analytics />
        
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
        
        {/* Header */}
        <Header />
        
        {/* Main content */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        
        {/* Footer */}
        <Footer siteSettings={siteSettings} />
    </>
  );
}
