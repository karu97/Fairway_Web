import { NextRequest } from 'next/server';

export async function GET(request: NextRequest): Promise<Response> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://fairwayhotels.com';
  
  const robotsTxt = `# Fairway Hotels - Robots.txt
# This file provides instructions for search engine crawlers

User-agent: *
Allow: /

# Allow crawling of main content
Allow: /hotels/
Allow: /tours/
Allow: /blog/
Allow: /about
Allow: /contact

# Disallow admin and private areas
Disallow: /admin/
Disallow: /studio/
Disallow: /api/
Disallow: /_next/
Disallow: /_vercel/
Disallow: /dashboard/
Disallow: /booking/
Disallow: /user/

# Disallow temporary and system files
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /sitemap.xml
Disallow: /robots.txt

# Crawl delay (optional - be respectful to servers)
Crawl-delay: 1

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Additional sitemaps for different content types
Sitemap: ${baseUrl}/sitemap-hotels.xml
Sitemap: ${baseUrl}/sitemap-tours.xml
Sitemap: ${baseUrl}/sitemap-blog.xml

# Host directive for canonical domain
Host: ${baseUrl}

# Specific rules for major search engines

# Google
User-agent: Googlebot
Allow: /
Crawl-delay: 1

# Bing
User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Yandex
User-agent: YandexBot
Allow: /
Crawl-delay: 2

# Baidu
User-agent: Baiduspider
Allow: /
Crawl-delay: 2

# Social media crawlers
User-agent: facebookexternalhit
Allow: /
Crawl-delay: 1

User-agent: Twitterbot
Allow: /
Crawl-delay: 1

User-agent: LinkedInBot
Allow: /
Crawl-delay: 1

# SEO tools and monitoring
User-agent: AhrefsBot
Allow: /
Crawl-delay: 10

User-agent: SemrushBot
Allow: /
Crawl-delay: 10

User-agent: MJ12bot
Allow: /
Crawl-delay: 10

# Block aggressive crawlers
User-agent: *
Disallow: /api/
Disallow: /admin/
Disallow: /studio/
Disallow: /_next/
Disallow: /_vercel/
Disallow: /dashboard/
Disallow: /booking/
Disallow: /user/
Disallow: /*.json$
Disallow: /*.xml$

# Allow essential crawling
Allow: /
Allow: /hotels/
Allow: /tours/
Allow: /blog/
Allow: /about
Allow: /contact
Allow: /policies/
Allow: /help
Allow: /faqs

# Rate limiting for all bots
Crawl-delay: 1

# Additional metadata
# Last updated: ${new Date().toISOString()}
# Website: ${baseUrl}
# Contact: info@fairwayhotels.com
# Country: Sri Lanka
# Industry: Hospitality & Tourism`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
