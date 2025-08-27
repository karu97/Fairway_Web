'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Google Analytics 4 Page View
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  // Vercel Analytics is automatically included via @vercel/analytics
  // This component handles GA4 page views

  return null;
}

// Google Analytics 4 Script
export function GoogleAnalytics() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!gaId) {
    return null;
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  );
}

// Vercel Analytics Script
export function VercelAnalytics() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <script
      defer
      src="/_vercel/insights/script.js"
    />
  );
}
