import { NextRequest } from 'next/server';
import { MetadataRoute } from 'next';

export async function GET(request: NextRequest): Promise<Response> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://fairwayhotels.com';
    
    // Static pages
    const staticPages = [
      '',
      '/about',
      '/contact',
      '/hotels',
      '/tours',
      '/blog',
      '/policies/privacy',
      '/policies/terms',
      '/policies/cookies',
      '/accessibility',
      '/help',
      '/faqs',
    ];

    // Generate static page entries
    const staticEntries = staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === '' ? 'daily' : 'weekly' as const,
      priority: path === '' ? 1.0 : path.startsWith('/policies') ? 0.3 : 0.8,
    }));

    // TODO: Fetch dynamic content from database/CMS
    // For now, we'll use placeholder data
    const dynamicEntries = [
      // Hotels
      {
        url: `${baseUrl}/hotels/colombo`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      },
      {
        url: `${baseUrl}/hotels/kandy`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      },
      {
        url: `${baseUrl}/hotels/galle`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      },
      {
        url: `${baseUrl}/hotels/nuwara-eliya`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      },

      // Tours
      {
        url: `${baseUrl}/tours/cultural-heritage`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      },
      {
        url: `${baseUrl}/tours/adventure-sri-lanka`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      },
      {
        url: `${baseUrl}/tours/beach-paradise`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      },
      {
        url: `${baseUrl}/tours/hill-country-tea`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      },
      {
        url: `${baseUrl}/tours/wildlife-safari`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      },

      // Blog posts
      {
        url: `${baseUrl}/blog/best-time-visit-sri-lanka`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}/blog/luxury-hotels-colombo`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}/blog/tea-country-nuwara-eliya`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}/blog/cultural-tours-kandy`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}/blog/beach-resorts-galle`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}/blog/sri-lanka-travel-tips`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      },
    ];

    // Combine all entries
    const allEntries = [...staticEntries, ...dynamicEntries];

    // Generate XML sitemap
    const xml = generateSitemapXML(allEntries);

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Return a basic sitemap on error
    const basicEntries = [
      {
        url: process.env.NEXT_PUBLIC_APP_URL || 'https://fairwayhotels.com',
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1.0,
      },
    ];

    const xml = generateSitemapXML(basicEntries);
    
    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      },
    });
  }
}

function generateSitemapXML(entries: Array<{
  url: string;
  lastModified: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}>): string {
  const xmlEntries = entries
    .map((entry) => {
      return `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified.toISOString()}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>`;
}

// Alternative: Use Next.js built-in sitemap generation
export async function generateSitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://fairwayhotels.com';
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/hotels',
    '/tours',
    '/blog',
    '/policies/privacy',
    '/policies/terms',
    '/policies/cookies',
    '/accessibility',
    '/help',
    '/faqs',
  ];

  // Generate static page entries
  const staticEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'daily' : 'weekly' as const,
    priority: path === '' ? 1.0 : path.startsWith('/policies') ? 0.3 : 0.8,
  }));

  // TODO: Fetch dynamic content from database/CMS
  // This would include hotels, tours, and blog posts
  const dynamicEntries = [
    // Hotels
    {
      url: `${baseUrl}/hotels/colombo`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hotels/kandy`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hotels/galle`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hotels/nuwara-eliya`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },

    // Tours
    {
      url: `${baseUrl}/tours/cultural-heritage`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tours/adventure-sri-lanka`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tours/beach-paradise`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tours/hill-country-tea`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tours/wildlife-safari`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },

    // Blog posts
    {
      url: `${baseUrl}/blog/best-time-visit-sri-lanka`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/luxury-hotels-colombo`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/tea-country-nuwara-eliya`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/cultural-tours-kandy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/beach-resorts-galle`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/sri-lanka-travel-tips`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  return [...staticEntries, ...dynamicEntries];
}
