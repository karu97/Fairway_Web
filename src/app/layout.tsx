import { Inter, Playfair_Display } from 'next/font/google';
import '../styles/globals.css';
import type { Metadata } from 'next';
import { config } from '@/lib/config';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
	metadataBase: new URL(config.site.url),
};

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

const playfair = Playfair_Display({
	subsets: ['latin'],
	variable: '--font-playfair',
	display: 'swap',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${inter.variable} ${playfair.variable}`}>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link rel="preconnect" href="https://images.unsplash.com" />
				<link rel="preconnect" href="https://res.cloudinary.com" />
				<link rel="dns-prefetch" href="//www.google-analytics.com" />
				<link rel="dns-prefetch" href="//vercel.live" />
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#1e40af" />
				<meta name="msapplication-TileColor" content="#1e40af" />
				<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="referrer" content="strict-origin-when-cross-origin" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Organization',
							name: 'Fairway Hotels',
							url: 'https://fairwayhotels.com',
							logo: 'https://fairwayhotels.com/logo.png',
							description: 'Luxury hotels and tours in Sri Lanka',
							address: {
								'@type': 'PostalAddress',
								streetAddress: '123 Galle Road',
								addressLocality: 'Colombo',
								addressRegion: 'Western Province',
								postalCode: '00300',
								addressCountry: 'LK',
							},
							contactPoint: {
								'@type': 'ContactPoint',
								telephone: '+94-11-234-5678',
								contactType: 'customer service',
								areaServed: 'LK',
								availableLanguage: ['English', 'Sinhala', 'Tamil'],
							},
							sameAs: [
								'https://www.facebook.com/fairwayhotels',
								'https://www.twitter.com/fairwayhotels',
								'https://www.instagram.com/fairwayhotels',
								'https://www.linkedin.com/company/fairwayhotels',
							],
							foundingDate: '2010',
							numberOfEmployees: '100-500',
							industry: 'Hospitality',
							serviceType: 'Hotel and Tour Services',
						}),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'WebSite',
							name: 'Fairway Hotels',
							url: 'https://fairwayhotels.com',
							description: 'Luxury hotels and tours in Sri Lanka',
							potentialAction: {
								'@type': 'SearchAction',
								target: 'https://fairwayhotels.com/search?q={search_term_string}',
								'query-input': 'required name=search_term_string',
							},
							publisher: {
								'@type': 'Organization',
								name: 'Fairway Hotels',
								logo: {
									'@type': 'ImageObject',
									url: 'https://fairwayhotels.com/logo.png',
								},
							},
						}),
					}}
				/>
			</head>
			<body 
				className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
				suppressHydrationWarning={true}
			>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
}


