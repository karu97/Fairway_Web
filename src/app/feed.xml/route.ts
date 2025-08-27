import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // In production, this would fetch blog posts from Sanity
    // For now, we'll return a sample RSS feed
    
    const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Fairway Hotels Blog</title>
    <description>Latest travel tips, destination guides, and hotel insights from Fairway Hotels</description>
    <link>https://fairwayhotels.com/blog</link>
    <atom:link href="https://fairwayhotels.com/feed.xml" rel="self" type="application/rss+xml" />
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    
    <item>
      <title>Ultimate Guide to Sri Lanka's Cultural Heritage</title>
      <description>Discover the rich cultural heritage of Sri Lanka, from ancient temples to traditional festivals. Learn about the best times to visit and must-see cultural sites.</description>
      <link>https://fairwayhotels.com/blog/ultimate-guide-sri-lanka-cultural-heritage</link>
      <guid>https://fairwayhotels.com/blog/ultimate-guide-sri-lanka-cultural-heritage</guid>
      <pubDate>${new Date('2025-01-15').toUTCString()}</pubDate>
      <category>Cultural Travel</category>
      <category>Sri Lanka</category>
    </item>
    
    <item>
      <title>Best Time to Visit Sri Lanka: Weather Guide</title>
      <description>Plan your perfect trip to Sri Lanka with our comprehensive weather guide. Find the best months for beaches, wildlife, and cultural experiences.</description>
      <link>https://fairwayhotels.com/blog/best-time-visit-sri-lanka-weather-guide</link>
      <guid>https://fairwayhotels.com/blog/best-time-visit-sri-lanka-weather-guide</guid>
      <pubDate>${new Date('2025-01-10').toUTCString()}</pubDate>
      <category>Travel Tips</category>
      <category>Weather</category>
    </item>
    
    <item>
      <title>Top 10 Luxury Hotels in Colombo</title>
      <description>Experience the finest luxury accommodations in Colombo. From boutique hotels to grand resorts, discover where to stay for an unforgettable experience.</description>
      <link>https://fairwayhotels.com/blog/top-10-luxury-hotels-colombo</link>
      <guid>https://fairwayhotels.com/blog/top-10-luxury-hotels-colombo</guid>
      <pubDate>${new Date('2025-01-05').toUTCString()}</pubDate>
      <category>Luxury Travel</category>
      <category>Colombo</category>
    </item>
    
    <item>
      <title>Adventure Tours in Sri Lanka's Hill Country</title>
      <description>Explore the misty mountains and tea plantations of Sri Lanka's hill country. Discover hiking trails, waterfalls, and adventure activities for thrill-seekers.</description>
      <link>https://fairwayhotels.com/blog/adventure-tours-sri-lanka-hill-country</link>
      <guid>https://fairwayhotels.com/blog/adventure-tours-sri-lanka-hill-country</guid>
      <pubDate>${new Date('2024-12-28').toUTCString()}</pubDate>
      <category>Adventure Travel</category>
      <category>Hill Country</category>
    </item>
    
    <item>
      <title>Beach Paradise: Southern Coast of Sri Lanka</title>
      <description>Unwind on pristine beaches along Sri Lanka's southern coast. From Galle to Mirissa, find your perfect beach getaway with our insider tips.</description>
      <link>https://fairwayhotels.com/blog/beach-paradise-southern-coast-sri-lanka</link>
      <guid>https://fairwayhotels.com/blog/beach-paradise-southern-coast-sri-lanka</guid>
      <pubDate>${new Date('2024-12-20').toUTCString()}</pubDate>
      <category>Beach Travel</category>
      <category>Southern Coast</category>
    </item>
    
    <item>
      <title>Traditional Sri Lankan Cuisine Guide</title>
      <description>Embark on a culinary journey through Sri Lanka's traditional flavors. Learn about local dishes, spices, and the best places to experience authentic cuisine.</description>
      <link>https://fairwayhotels.com/blog/traditional-sri-lankan-cuisine-guide</link>
      <guid>https://fairwayhotels.com/blog/traditional-sri-lankan-cuisine-guide</guid>
      <pubDate>${new Date('2024-12-15').toUTCString()}</pubDate>
      <category>Food & Dining</category>
      <category>Local Cuisine</category>
    </item>
  </channel>
</rss>`;

    return new NextResponse(rssContent, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });

  } catch (error) {
    console.error('RSS feed generation error:', error);
    return new NextResponse('Error generating RSS feed', { status: 500 });
  }
}
