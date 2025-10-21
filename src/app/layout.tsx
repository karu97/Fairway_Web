import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { jsonLdOrganization, jsonLdWebSite } from "@/lib/seo";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hotelsfairway.com"),
  icons: {
    icon: [
      { url: "/images/fairway_hotels_fv_icon.png", sizes: "any" },
      { url: "/images/fairway_hotels_fv_icon.png", sizes: "16x16", type: "image/png" },
      { url: "/images/fairway_hotels_fv_icon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/images/fairway_hotels_fv_icon.png",
    apple: "/images/fairway_hotels_fv_icon.png",
  },
  title: {
    default: "Fairway Hotels Sri Lanka | Luxury Boutique Hotels & Premium Tours",
    template: "%s | Fairway Hotels Sri Lanka",
  },
  description:
    "Discover luxury boutique hotels in Sri Lanka with Fairway Hotels. Experience world-class hospitality, premium accommodations, and curated adventure tours. Book your luxury stay today!",
  keywords: [
    "Fairway Hotels Sri Lanka",
    "luxury hotels Sri Lanka",
    "boutique hotels Sri Lanka",
    "premium hotels Sri Lanka",
    "luxury accommodation Sri Lanka",
    "Sri Lanka hotel booking",
    "luxury resorts Sri Lanka",
    "Sri Lanka tourism",
    "luxury travel Sri Lanka",
    "boutique stays Sri Lanka",
    "Meshendra Garden Hotel",
    "e34 Koslanda Hotel",
    "luxury hotel Katunayake",
    "luxury hotel Koslanda",
    "Sri Lanka luxury hotels",
    "best hotels Sri Lanka",
    "luxury hospitality Sri Lanka"
  ],
  authors: [{ name: "Fairway Hotels" }],
  creator: "Fairway Hotels",
  publisher: "Fairway Hotels",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Hospitality & Tourism",
  classification: "Luxury Hotels & Tours",
  openGraph: {
    title: "Fairway Hotels Sri Lanka | Luxury Boutique Hotels & Premium Tours",
    description:
      "Discover luxury boutique hotels in Sri Lanka with Fairway Hotels. Experience world-class hospitality, premium accommodations, and curated adventure tours. Book your luxury stay today!",
    url: "https://www.hotelsfairway.com",
    siteName: "Fairway Hotels Sri Lanka",
    images: [
      {
        url: "https://www.hotelsfairway.com/images/fairway_hotels_logo.png",
        width: 1200,
        height: 630,
        alt: "Fairway Hotels Sri Lanka - Luxury Boutique Hotels",
        type: "image/png"
      },
      {
        url: "https://www.hotelsfairway.com/images/fairway_hotels_hero.png",
        width: 1200,
        height: 630,
        alt: "Fairway Hotels Sri Lanka Hero Image"
      }
    ],
    locale: "en_US",
    type: "website",
    countryName: "Sri Lanka",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fairway Hotels Sri Lanka | Luxury Boutique Hotels & Premium Tours",
    description:
      "Discover luxury boutique hotels in Sri Lanka with Fairway Hotels. Experience world-class hospitality, premium accommodations, and curated adventure tours.",
    images: [
      {
        url: "https://www.hotelsfairway.com/images/fairway_hotels_logo.png",
        alt: "Fairway Hotels Sri Lanka Logo"
      }
    ],
    creator: "@fairwayhotels",
    site: "@fairwayhotels",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#000000"
  },
  alternates: {
    canonical: "https://www.hotelsfairway.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {/* Floating animated orbs */}
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite()) }}
        />
        {children}
      </body>
    </html>
  );
}
