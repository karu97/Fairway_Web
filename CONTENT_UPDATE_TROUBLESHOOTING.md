# Content Update Troubleshooting Guide

## Issue: Content Updates from Sanity Not Appearing on Website

This guide helps you resolve issues where content updates made in Sanity Studio don't appear on your website.

## Quick Fixes

### 1. **Clear Browser Cache**
- Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache completely
- Try incognito/private browsing mode

### 2. **Manual Cache Invalidation**
Call the revalidation API manually:

```bash
# Revalidate homepage
curl "https://yourdomain.com/api/revalidate?path=/&secret=YOUR_REVALIDATE_SECRET"

# Revalidate hotels
curl "https://yourdomain.com/api/revalidate?path=/hotels&secret=YOUR_REVALIDATE_SECRET"

# Revalidate tours
curl "https://yourdomain.com/api/revalidate?path=/tours&secret=YOUR_REVALIDATE_SECRET"
```

### 3. **Check Environment Variables**
Ensure these are set in your `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_READ_TOKEN="your-read-token"
REVALIDATE_SECRET="your-revalidate-secret"
```

## Common Issues & Solutions

### Issue 1: Content Not Published
**Symptoms:** Content exists in Sanity but doesn't appear on website
**Solution:**
1. Check if content is published in Sanity Studio
2. Verify `isActive` field is set to `true`
3. Ensure content has required fields filled

### Issue 2: CDN Caching
**Symptoms:** Updates appear after delay or not at all
**Solution:**
1. Disable CDN temporarily: Set `useCdn: false` in Sanity config
2. Add cache headers to prevent aggressive caching
3. Use cache tags for targeted invalidation

### Issue 3: Webhook Not Working
**Symptoms:** No cache invalidation when content is updated
**Solution:**
1. Check webhook URL in Sanity project settings
2. Verify webhook secret is correct
3. Check server logs for webhook errors
4. Test webhook manually

### Issue 4: Environment Variables Missing
**Symptoms:** Errors in console about missing configuration
**Solution:**
1. Verify all required environment variables are set
2. Restart development server after adding variables
3. Check for typos in variable names

## Debugging Steps

### 1. **Check Browser Console**
Look for errors related to:
- Sanity client initialization
- Data fetching failures
- Cache-related issues

### 2. **Check Server Logs**
Look for:
- Webhook processing errors
- Cache invalidation failures
- Sanity API errors

### 3. **Test Sanity Connection**
Add this to any page to test:

```typescript
// Add to page component temporarily
useEffect(() => {
  const testConnection = async () => {
    try {
      const data = await sanityClient.fetch('*[_type == "hotel"][0]');
      console.log('Sanity connection successful:', data);
    } catch (error) {
      console.error('Sanity connection failed:', error);
    }
  };
  testConnection();
}, []);
```

### 4. **Verify Content in Sanity**
1. Open Sanity Studio
2. Check if content is published
3. Verify all required fields are filled
4. Check if content has correct locale

## Advanced Solutions

### 1. **Force Rebuild**
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
npm start
```

### 2. **Update Cache Strategy**
Modify `next.config.mjs`:

```javascript
async headers() {
  return [
    {
      source: '/(hotels|tours|blog)/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=300, stale-while-revalidate=600', // Shorter cache
        },
      ],
    },
  ];
},
```

### 3. **Add Debug Logging**
Add to your data fetching functions:

```typescript
export async function getFeaturedHotels(locale?: string) {
  console.log('Fetching featured hotels for locale:', locale);
  
  if (!isSanityConfigured()) {
    console.warn('Sanity not configured');
    return [];
  }
  
  const docs = await fetchDataWithCache<any[]>(hotelQueries.featured, undefined, ['hotels']);
  console.log('Fetched hotels:', docs?.length);
  
  return docs || [];
}
```

## Prevention

### 1. **Set Up Proper Webhooks**
1. Configure webhook in Sanity project settings
2. Point to: `https://yourdomain.com/api/webhooks/sanity`
3. Include all document types

### 2. **Use Cache Tags**
Always use cache tags in data fetching:

```typescript
const data = await sanityClient.fetch(query, params, {
  next: { tags: ['hotels', 'featured-hotels'] }
});
```

### 3. **Monitor Cache Performance**
Add monitoring to track:
- Cache hit rates
- Revalidation frequency
- Content update delays

## Support

If issues persist:
1. Check the troubleshooting steps above
2. Review server logs for errors
3. Test with a simple content update
4. Contact support with specific error messages

## Quick Commands

```bash
# Restart development server
npm run dev

# Clear cache and restart
rm -rf .next && npm run dev

# Test webhook manually
curl -X POST https://yourdomain.com/api/webhooks/sanity \
  -H "Content-Type: application/json" \
  -d '{"type":"hotel","documentId":"test","operation":"update"}'

# Check environment variables
echo $NEXT_PUBLIC_SANITY_PROJECT_ID
echo $REVALIDATE_SECRET
```
