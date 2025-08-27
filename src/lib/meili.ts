export interface MeilisearchConfig {
  host: string;
  apiKey: string;
  indexName: string;
}

export interface SearchDocument {
  id: string;
  type: 'hotel' | 'tour' | 'blog';
  title: string;
  description?: string;
  slug: string;
  image?: string;
  rating?: number;
  amenities?: string[];
  priceFrom?: number;
  currency?: string;
  durationDays?: number;
  locations?: string[];
  tags?: string[];
  publishedAt?: string;
  city?: string;
  region?: string;
  country?: string;
  _createdAt: string;
  _updatedAt: string;
}

export interface SearchOptions {
  query: string;
  filters?: string;
  sort?: string[];
  offset?: number;
  limit?: number;
  attributesToRetrieve?: string[];
  attributesToHighlight?: string[];
  attributesForFaceting?: string[];
}

export interface SearchResponse {
  hits: SearchDocument[];
  totalHits: number;
  processingTimeMs: number;
  query: string;
  facets?: any;
}

class MeilisearchClient {
  private config: MeilisearchConfig;

  constructor(config: MeilisearchConfig) {
    this.config = config;
  }

  private getHeaders(): HeadersInit {
    return {
      'Authorization': `Bearer ${this.config.apiKey}`,
      'Content-Type': 'application/json',
    };
  }

  private async makeRequest(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<Response> {
    const url = `${this.config.host}${endpoint}`;
    
    const response = await fetch(url, {
      ...options,
      headers: {
        ...this.getHeaders(),
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Meilisearch request failed: ${response.statusText}`);
    }

    return response;
  }

  async createIndex(): Promise<void> {
    try {
      const indexData = {
        uid: this.config.indexName,
        primaryKey: 'id',
      };

      await this.makeRequest('/indexes', {
        method: 'POST',
        body: JSON.stringify(indexData),
      });

      // Configure index settings
      await this.configureIndex();
      
      console.log(`Index ${this.config.indexName} created successfully`);
    } catch (error) {
      console.error('Error creating index:', error);
      throw error;
    }
  }

  async configureIndex(): Promise<void> {
    try {
      // Configure searchable attributes
      const searchableAttributes = [
        'title',
        'description',
        'amenities',
        'locations',
        'tags',
        'city',
        'region',
        'country',
      ];

      await this.makeRequest(`/indexes/${this.config.indexName}/settings/searchable-attributes`, {
        method: 'POST',
        body: JSON.stringify(searchableAttributes),
      });

      // Configure filterable attributes
      const filterableAttributes = [
        'type',
        'city',
        'region',
        'country',
        'rating',
        'amenities',
        'priceFrom',
        'durationDays',
        'tags',
        'publishedAt',
      ];

      await this.makeRequest(`/indexes/${this.config.indexName}/settings/filterable-attributes`, {
        method: 'POST',
        body: JSON.stringify(filterableAttributes),
      });

      // Configure sortable attributes
      const sortableAttributes = [
        'priceFrom',
        'rating',
        'durationDays',
        'publishedAt',
        '_createdAt',
        '_updatedAt',
      ];

      await this.makeRequest(`/indexes/${this.config.indexName}/settings/sortable-attributes`, {
        method: 'POST',
        body: JSON.stringify(sortableAttributes),
      });

      // Configure faceting
      const attributesForFaceting = [
        'type',
        'city',
        'region',
        'country',
        'rating',
        'amenities',
        'priceFrom',
        'durationDays',
        'tags',
      ];

      await this.makeRequest(`/indexes/${this.config.indexName}/settings/attributes-for-faceting`, {
        method: 'POST',
        body: JSON.stringify(attributesForFaceting),
      });

      console.log(`Index ${this.config.indexName} configured successfully`);
    } catch (error) {
      console.error('Error configuring index:', error);
      throw error;
    }
  }

  async addDocuments(documents: SearchDocument[]): Promise<void> {
    try {
      await this.makeRequest(`/indexes/${this.config.indexName}/documents`, {
        method: 'POST',
        body: JSON.stringify(documents),
      });

      console.log(`Added ${documents.length} documents to index ${this.config.indexName}`);
    } catch (error) {
      console.error('Error adding documents:', error);
      throw error;
    }
  }

  async updateDocuments(documents: SearchDocument[]): Promise<void> {
    try {
      await this.makeRequest(`/indexes/${this.config.indexName}/documents`, {
        method: 'PUT',
        body: JSON.stringify(documents),
      });

      console.log(`Updated ${documents.length} documents in index ${this.config.indexName}`);
    } catch (error) {
      console.error('Error updating documents:', error);
      throw error;
    }
  }

  async deleteDocument(documentId: string): Promise<void> {
    try {
      await this.makeRequest(`/indexes/${this.config.indexName}/documents/${documentId}`, {
        method: 'DELETE',
      });

      console.log(`Deleted document ${documentId} from index ${this.config.indexName}`);
    } catch (error) {
      console.error('Error deleting document:', error);
      throw error;
    }
  }

  async deleteDocuments(documentIds: string[]): Promise<void> {
    try {
      await this.makeRequest(`/indexes/${this.config.indexName}/documents/delete-batch`, {
        method: 'POST',
        body: JSON.stringify(documentIds),
      });

      console.log(`Deleted ${documentIds.length} documents from index ${this.config.indexName}`);
    } catch (error) {
      console.error('Error deleting documents:', error);
      throw error;
    }
  }

  async search(options: SearchOptions): Promise<SearchResponse> {
    try {
      const searchParams = {
        q: options.query,
        offset: options.offset || 0,
        limit: options.limit || 20,
        attributesToRetrieve: options.attributesToRetrieve || [
          'id', 'type', 'title', 'description', 'slug', 'image', 'rating',
          'amenities', 'priceFrom', 'currency', 'durationDays', 'locations',
          'tags', 'publishedAt', 'city', 'region', 'country'
        ],
        attributesToHighlight: options.attributesToHighlight || [
          'title', 'description', 'amenities', 'locations', 'tags'
        ],
        highlightPreTag: '<mark>',
        highlightPostTag: '</mark>',
        filter: options.filters,
        sort: options.sort,
        facets: options.attributesForFaceting || [
          'type', 'city', 'rating', 'amenities', 'priceFrom', 'durationDays', 'tags'
        ],
      };

      const response = await this.makeRequest(`/indexes/${this.config.indexName}/search`, {
        method: 'POST',
        body: JSON.stringify(searchParams),
      });

      const data = await response.json();

      return {
        hits: data.hits || [],
        totalHits: data.estimatedTotalHits || 0,
        processingTimeMs: data.processingTimeMs || 0,
        query: options.query,
        facets: data.facetDistribution || {},
      };
    } catch (error) {
      console.error('Error searching documents:', error);
      throw error;
    }
  }

  async getDocument(documentId: string): Promise<SearchDocument | null> {
    try {
      const response = await this.makeRequest(`/indexes/${this.config.indexName}/documents/${documentId}`);
      const document = await response.json();
      return document;
    } catch (error) {
      if (error instanceof Error && error.message.includes('404')) {
        return null;
      }
      console.error('Error getting document:', error);
      throw error;
    }
  }

  async getIndexStats(): Promise<any> {
    try {
      const response = await this.makeRequest(`/indexes/${this.config.indexName}/stats`);
      return await response.json();
    } catch (error) {
      console.error('Error getting index stats:', error);
      throw error;
    }
  }

  async clearIndex(): Promise<void> {
    try {
      await this.makeRequest(`/indexes/${this.config.indexName}/documents`, {
        method: 'DELETE',
      });

      console.log(`Index ${this.config.indexName} cleared successfully`);
    } catch (error) {
      console.error('Error clearing index:', error);
      throw error;
    }
  }

  async deleteIndex(): Promise<void> {
    try {
      await this.makeRequest(`/indexes/${this.config.indexName}`, {
        method: 'DELETE',
      });

      console.log(`Index ${this.config.indexName} deleted successfully`);
    } catch (error) {
      console.error('Error deleting index:', error);
      throw error;
    }
  }

  async healthCheck(): Promise<boolean> {
    try {
      const response = await fetch(`${this.config.host}/health`);
      return response.ok;
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  }

  async getIndexInfo(): Promise<any> {
    try {
      const response = await this.makeRequest(`/indexes/${this.config.indexName}`);
      return await response.json();
    } catch (error) {
      console.error('Error getting index info:', error);
      throw error;
    }
  }
}

// Factory function to create Meilisearch client
export function createMeilisearchClient(config: MeilisearchConfig): MeilisearchClient {
  return new MeilisearchClient(config);
}

// Default client instance
export function getDefaultMeilisearchClient(): MeilisearchClient {
  const config: MeilisearchConfig = {
    host: process.env.MEILI_HOST || 'http://localhost:7700',
    apiKey: process.env.MEILI_MASTER_KEY || '',
    indexName: 'fairway-hotels',
  };

  return createMeilisearchClient(config);
}

// Utility functions for common operations
export async function indexHotel(hotel: any): Promise<void> {
  const client = getDefaultMeilisearchClient();
  
  const document: SearchDocument = {
    id: hotel._id,
    type: 'hotel',
    title: hotel.name || hotel.title || '',
    description: hotel.description || '',
    slug: hotel.slug?.current || '',
    image: hotel.heroImage?.asset?._ref || hotel.images?.[0]?.asset?._ref,
    rating: hotel.rating,
    amenities: hotel.amenities,
    priceFrom: hotel.priceFrom,
    currency: hotel.currency || 'USD',
    city: hotel.address?.city,
    region: hotel.address?.region,
    country: hotel.address?.country,
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString(),
  };

  await client.addDocuments([document]);
}

export async function indexTour(tour: any): Promise<void> {
  const client = getDefaultMeilisearchClient();
  
  const document: SearchDocument = {
    id: tour._id,
    type: 'tour',
    title: tour.title || tour.name || '',
    description: tour.description || tour.excerpt || '',
    slug: tour.slug?.current || '',
    image: tour.heroImage?.asset?._ref || tour.images?.[0]?.asset?._ref,
    rating: tour.rating,
    priceFrom: tour.priceFrom,
    currency: tour.currency || 'USD',
    durationDays: tour.durationDays,
    locations: tour.locations?.map((loc: any) => loc.name),
    tags: tour.tags,
    publishedAt: tour.publishedAt,
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString(),
  };

  await client.addDocuments([document]);
}

export async function indexBlogPost(post: any): Promise<void> {
  const client = getDefaultMeilisearchClient();
  
  const document: SearchDocument = {
    id: post._id,
    type: 'blog',
    title: post.title || '',
    description: post.description || post.excerpt || '',
    slug: post.slug?.current || '',
    image: post.heroImage?.asset?._ref || post.images?.[0]?.asset?._ref,
    tags: post.tags,
    publishedAt: post.publishedAt,
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString(),
  };

  await client.addDocuments([document]);
}

export async function removeFromIndex(documentId: string): Promise<void> {
  const client = getDefaultMeilisearchClient();
  await client.deleteDocument(documentId);
}

export async function searchContent(
  query: string,
  filters?: string,
  limit: number = 20
): Promise<SearchResponse> {
  const client = getDefaultMeilisearchClient();
  
  return await client.search({
    query,
    filters,
    limit,
  });
}
