# Single Pages 404 Error Troubleshooting Guide

## Issue: Individual Hotel, Tour, and Blog Pages Returning 404

This guide helps you resolve 404 errors on individual content pages (e.g., `/hotels/[slug]`, `/tours/[slug]`, `/blog/[slug]`).

## Quick Diagnosis

### 1. **Check Debug Page**
Visit `/debug` to see:
- Sanity configuration status
- Data counts (hotels, tours, blog posts)
- Sample data structure
- Any errors

### 2. **Check Browser Console**
Look for:
- Data fetching errors
- Sanity connection issues
- Missing environment variables

### 3. **Check Server Logs**
Look for:
- `generateStaticParams` errors
- Data fetching failures
- Sanity API errors

## Common Issues & Solutions

### Issue 1: No Data in Sanity
**Symptoms:** Debug page shows 0 hotels, tours, or blog posts
**Solution:**
1. Check if content exists in Sanity Studio
2. Verify content is published (not draft)
3. Ensure `isActive` field is set to `true`
4. Check if content has correct locale

### Issue 2: Sanity Configuration Issues
**Symptoms:** Debug page shows "Is Configured: No"
**Solution:**
1. Check `.env.local` file exists
2. Verify environment variables:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
   NEXT_PUBLIC_SANITY_DATASET="production"
   SANITY_API_READ_TOKEN="your-read-token"
   ```
3. Restart development server after adding variables

### Issue 3: Slug Mismatch
**Symptoms:** Pages exist but specific slugs return 404
**Solution:**
1. Check slug format in Sanity (should be lowercase, no spaces)
2. Verify slug field is properly set
3. Check for special characters in slugs

### Issue 4: Locale Issues
**Symptoms:** Content exists but wrong locale
**Solution:**
1. Check if content has correct locale field
2. Verify `NEXT_PUBLIC_DEFAULT_LOCALE` matches content locale
3. Check if content is published for the correct locale

### Issue 5: generateStaticParams Issues
**Symptoms:** Build-time errors or missing static paths
**Solution:**
1. Check if `generateStaticParams` functions are working
2. Verify data fetching in static generation
3. Check for errors in build logs

## Debugging Steps

### 1. **Test Data Fetching**
Add temporary logging to pages:

```typescript
// In hotel/[slug]/page.tsx
export async function generateStaticParams() {
  console.log('Generating static params for hotels...');
  const hotels = await getHotels();
  console.log('Found hotels:', hotels.length);
  console.log('Hotel slugs:', hotels.map(h => h.slug));
  return hotels.map((hotel) => ({
    slug: hotel.slug,
  }));
}
```

### 2. **Check Sanity Studio**
1. Open Sanity Studio
2. Verify content exists and is published
3. Check slug field format
4. Verify locale field
5. Check `isActive` field

### 3. **Test Individual Data Fetching**
Create a test API route:

```typescript
// app/api/test-data/route.ts
import { getHotels, getTours, getBlogPosts } from '@/lib/sanity';

export async function GET() {
  try {
    const [hotels, tours, blogPosts] = await Promise.all([
      getHotels(),
      getTours(),
      getBlogPosts(),
    ]);

    return Response.json({
      hotels: hotels.length,
      tours: tours.length,
      blogPosts: blogPosts.length,
      sampleHotel: hotels[0],
      sampleTour: tours[0],
      sampleBlogPost: blogPosts[0],
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
```

### 4. **Check Build Process**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build

# Check build output for errors
npm run build 2>&1 | grep -i error
```

## Advanced Solutions

### 1. **Force Dynamic Rendering**
If static generation is failing, make pages dynamic:

```typescript
// Add to page.tsx
export const dynamic = 'force-dynamic';
```

### 2. **Add Fallback Handling**
```typescript
// In page.tsx
export default async function HotelPage({ params }: HotelPageProps) {
  const hotel = await getHotel(params.slug);
  
  if (!hotel) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Hotel Not Found</h1>
        <p>The hotel you're looking for doesn't exist or has been removed.</p>
        <Link href="/hotels" className="text-blue-600 hover:underline">
          View all hotels
        </Link>
      </div>
    );
  }
  
  // ... rest of component
}
```

### 3. **Add Error Boundaries**
```typescript
// Create error.tsx in [slug] directory
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Try again
      </button>
    </div>
  );
}
```

## Testing Commands

```bash
# Test data fetching
curl http://localhost:3000/api/test-data

# Test specific hotel
curl http://localhost:3000/hotels/[hotel-slug]

# Check build
npm run build

# Check for TypeScript errors
npm run type-check
```

## Prevention

### 1. **Validate Data Structure**
Ensure Sanity schemas match expected data structure:
- Slug field is properly configured
- Locale field is set correctly
- Required fields are marked as required

### 2. **Add Data Validation**
```typescript
// In data fetching functions
export async function getHotel(slug: string, locale?: string) {
  // ... existing code
  
  if (!doc) {
    console.warn(`Hotel not found: ${slug} (locale: ${locale})`);
    return null;
  }
  
  // Validate required fields
  if (!doc.slug?.current) {
    console.error(`Hotel ${doc._id} missing slug`);
    return null;
  }
  
  // ... rest of function
}
```

### 3. **Monitor Build Process**
- Check build logs for errors
- Verify static generation is working
- Test pages after content updates

## Quick Fixes

### 1. **Restart Development Server**
```bash
npm run dev
```

### 2. **Clear Next.js Cache**
```bash
rm -rf .next
npm run dev
```

### 3. **Check Environment Variables**
```bash
echo $NEXT_PUBLIC_SANITY_PROJECT_ID
echo $NEXT_PUBLIC_SANITY_DATASET
```

### 4. **Test Sanity Connection**
Visit `/debug` page to verify configuration and data.

## Support

If issues persist:
1. Check the debug page (`/debug`)
2. Review server logs for specific errors
3. Test with a simple content item
4. Verify Sanity Studio content is properly configured
5. Check build process for static generation errors
