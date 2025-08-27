import { NextRequest, NextResponse } from 'next/server';
import { searchContent } from '@/lib/meili';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const query = searchParams.get('q') || '';
    const type = searchParams.get('type');
    const city = searchParams.get('city');
    const rating = searchParams.get('rating');
    const priceMin = searchParams.get('priceMin');
    const priceMax = searchParams.get('priceMax');
    const duration = searchParams.get('duration');
    const tags = searchParams.get('tags');
    const sort = searchParams.get('sort');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');

    if (!query.trim()) {
      return NextResponse.json(
        { error: 'Search query is required' },
        { status: 400 }
      );
    }

    // Build filters
    const filters: string[] = [];
    
    if (type) {
      filters.push(`type = ${type}`);
    }
    
    if (city) {
      filters.push(`city = "${city}"`);
    }
    
    if (rating) {
      filters.push(`rating >= ${rating}`);
    }
    
    if (priceMin || priceMax) {
      let priceFilter = '';
      if (priceMin && priceMax) {
        priceFilter = `priceFrom >= ${priceMin} AND priceFrom <= ${priceMax}`;
      } else if (priceMin) {
        priceFilter = `priceFrom >= ${priceMin}`;
      } else if (priceMax) {
        priceFilter = `priceFrom <= ${priceMax}`;
      }
      if (priceFilter) filters.push(priceFilter);
    }
    
    if (duration) {
      filters.push(`durationDays = ${duration}`);
    }
    
    if (tags) {
      const tagArray = tags.split(',').map(tag => tag.trim());
      const tagFilters = tagArray.map(tag => `tags = "${tag}"`);
      filters.push(`(${tagFilters.join(' OR ')})`);
    }

    // Build sort options
    let sortOptions: string[] = [];
    if (sort) {
      switch (sort) {
        case 'price-low':
          sortOptions = ['priceFrom:asc'];
          break;
        case 'price-high':
          sortOptions = ['priceFrom:desc'];
          break;
        case 'rating':
          sortOptions = ['rating:desc'];
          break;
        case 'newest':
          sortOptions = ['publishedAt:desc', '_createdAt:desc'];
          break;
        case 'oldest':
          sortOptions = ['publishedAt:asc', '_createdAt:asc'];
          break;
        case 'relevance':
        default:
          // Default relevance sorting
          break;
      }
    }

    // Calculate offset
    const offset = (page - 1) * limit;

    // Perform search
    const searchResults = await searchContent(
      query,
      filters.length > 0 ? filters.join(' AND ') : undefined,
      limit
    );

    // Apply pagination
    const totalPages = Math.ceil(searchResults.totalHits / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    // Format response
    const response = {
      query,
      results: searchResults.hits,
      pagination: {
        currentPage: page,
        totalPages,
        totalHits: searchResults.totalHits,
        hasNextPage,
        hasPrevPage,
        limit,
        offset,
      },
      facets: searchResults.facets,
      processingTime: searchResults.processingTimeMs,
      filters: {
        type,
        city,
        rating,
        priceRange: {
          min: priceMin ? parseInt(priceMin) : undefined,
          max: priceMax ? parseInt(priceMax) : undefined,
        },
        duration,
        tags: tags ? tags.split(',').map(tag => tag.trim()) : undefined,
      },
      sort: sort || 'relevance',
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query, filters, sort, page = 1, limit = 20 } = body;

    if (!query || !query.trim()) {
      return NextResponse.json(
        { error: 'Search query is required' },
        { status: 400 }
      );
    }

    // Build filter string from filters object
    let filterString: string | undefined;
    if (filters && Object.keys(filters).length > 0) {
      const filterArray: string[] = [];
      
      if (filters.type) {
        filterArray.push(`type = ${filters.type}`);
      }
      
      if (filters.city) {
        filterArray.push(`city = "${filters.city}"`);
      }
      
      if (filters.region) {
        filterArray.push(`region = "${filters.region}"`);
      }
      
      if (filters.country) {
        filterArray.push(`country = "${filters.country}"`);
      }
      
      if (filters.rating) {
        filterArray.push(`rating >= ${filters.rating}`);
      }
      
      if (filters.priceMin || filters.priceMax) {
        let priceFilter = '';
        if (filters.priceMin && filters.priceMax) {
          priceFilter = `priceFrom >= ${filters.priceMin} AND priceFrom <= ${filters.priceMax}`;
        } else if (filters.priceMin) {
          priceFilter = `priceFrom >= ${filters.priceMin}`;
        } else if (filters.priceMax) {
          priceFilter = `priceFrom <= ${filters.priceMax}`;
        }
        if (priceFilter) filterArray.push(priceFilter);
      }
      
      if (filters.duration) {
        filterArray.push(`durationDays = ${filters.duration}`);
      }
      
      if (filters.amenities && filters.amenities.length > 0) {
        const amenityFilters = filters.amenities.map((amenity: string) => `amenities = "${amenity}"`);
        filterArray.push(`(${amenityFilters.join(' OR ')})`);
      }
      
      if (filters.tags && filters.tags.length > 0) {
        const tagFilters = filters.tags.map((tag: string) => `tags = "${tag}"`);
        filterArray.push(`(${tagFilters.join(' OR ')})`);
      }
      
      if (filterArray.length > 0) {
        filterString = filterArray.join(' AND ');
      }
    }

    // Build sort options
    let sortOptions: string[] = [];
    if (sort) {
      switch (sort) {
        case 'price-low':
          sortOptions = ['priceFrom:asc'];
          break;
        case 'price-high':
          sortOptions = ['priceFrom:desc'];
          break;
        case 'rating':
          sortOptions = ['rating:desc'];
          break;
        case 'newest':
          sortOptions = ['publishedAt:desc', '_createdAt:desc'];
          break;
        case 'oldest':
          sortOptions = ['publishedAt:asc', '_createdAt:asc'];
          break;
        case 'relevance':
        default:
          // Default relevance sorting
          break;
      }
    }

    // Calculate offset
    const offset = (page - 1) * limit;

    // Perform search
    const searchResults = await searchContent(
      query,
      filterString,
      limit
    );

    // Apply pagination
    const totalPages = Math.ceil(searchResults.totalHits / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    // Format response
    const response = {
      query,
      results: searchResults.hits,
      pagination: {
        currentPage: page,
        totalPages,
        totalHits: searchResults.totalHits,
        hasNextPage,
        hasPrevPage,
        limit,
        offset,
      },
      facets: searchResults.facets,
      processingTime: searchResults.processingTimeMs,
      filters,
      sort: sort || 'relevance',
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function HEAD() {
  try {
    const meiliHost = process.env.MEILI_HOST || 'http://localhost:7700';
    const meiliKey = process.env.MEILI_MASTER_KEY;
    
    if (!meiliKey) {
      return NextResponse.json({ status: 'error', message: 'Meilisearch not configured' }, { status: 503 });
    }

    // Check Meilisearch health
    const response = await fetch(`${meiliHost}/health`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${meiliKey}`,
      },
    });

    if (response.ok) {
      return NextResponse.json({ status: 'healthy' });
    } else {
      return NextResponse.json({ status: 'unhealthy' }, { status: 503 });
    }

  } catch (error) {
    console.error('Search health check error:', error);
    return NextResponse.json({ status: 'error' }, { status: 503 });
  }
}
