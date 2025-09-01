import { NextResponse } from 'next/server';
import { getHotels, getTours, getBlogPosts, isSanityConfigured } from '@/lib/sanity';

export async function GET() {
  try {
    const isConfigured = isSanityConfigured();
    
    if (!isConfigured) {
      return NextResponse.json({
        error: 'Sanity not configured',
        configured: false,
      }, { status: 500 });
    }

    const [hotels, tours, blogPosts] = await Promise.all([
      getHotels().catch(err => ({ error: err.message })),
      getTours().catch(err => ({ error: err.message })),
      getBlogPosts().catch(err => ({ error: err.message })),
    ]);

    return NextResponse.json({
      configured: true,
      counts: {
        hotels: Array.isArray(hotels) ? hotels.length : 'error',
        tours: Array.isArray(tours) ? tours.length : 'error',
        blogPosts: Array.isArray(blogPosts) ? blogPosts.length : 'error',
      },
      sampleData: {
        hotel: Array.isArray(hotels) && hotels.length > 0 ? {
          slug: hotels[0].slug,
          name: hotels[0].name,
          address: hotels[0].address,
        } : hotels,
        tour: Array.isArray(tours) && tours.length > 0 ? {
          slug: tours[0].slug,
          title: tours[0].title,
          durationDays: tours[0].durationDays,
        } : tours,
        blogPost: Array.isArray(blogPosts) && blogPosts.length > 0 ? {
          slug: blogPosts[0].slug,
          title: blogPosts[0].title,
          publishedAt: blogPosts[0].publishedAt,
        } : blogPosts,
      },
    });
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Unknown error',
      configured: false,
    }, { status: 500 });
  }
}
