import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { jsonLdOrganization } from "@/lib/seo";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hotelsfairway.com"),
  icons: {
    icon: "/images/fairway_hotels_fv_icon.png",
    shortcut: "/images/fairway_hotels_fv_icon.png",
    apple: "/images/fairway_hotels_fv_icon.png",
  },
  title: {
    default: "Fairway Hotels | Luxury Stays & Curated Tours in Sri Lanka",
    template: "%s | Fairway Hotels",
  },
  description:
    "Experience luxury hospitality in Sri Lanka. Premium rooms, boutique stays, and curated tours by Fairway Hotels.",
  openGraph: {
    title: "Fairway Hotels",
    description:
      "Experience luxury hospitality in Sri Lanka. Premium rooms, boutique stays, and curated tours by Fairway Hotels.",
    url: "/",
    siteName: "Fairway Hotels",
    images: [{ url: "/images/fairway_hotels_hero.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fairway Hotels",
    description:
      "Experience luxury hospitality in Sri Lanka. Premium rooms, boutique stays, and curated tours by Fairway Hotels.",
    images: ["/images/fairway_hotels_hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization()) }}
        />
        {children}
      </body>
    </html>
  );
}
