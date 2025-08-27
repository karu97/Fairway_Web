# Sanity CMS Setup Guide

This guide will help you configure Sanity CMS for the Fairway Hotels project.

## Prerequisites

1. A Sanity account (create one at [sanity.io](https://www.sanity.io))
2. Node.js and npm installed on your system

## Step 1: Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io) and sign in
2. Click "Create new project"
3. Choose "Start from scratch"
4. Give your project a name (e.g., "Fairway Hotels")
5. Choose a dataset name (default: "production")
6. Select your preferred plan

## Step 2: Get Your Project Credentials

1. In your Sanity project dashboard, go to **Settings** → **API**
2. Note down your **Project ID**
3. Create a new API token:
   - Click "Add API token"
   - Name it "Read Token" (for reading data)
   - Select "Read" permissions
   - Copy the token
4. Create another API token:
   - Click "Add API token" again
   - Name it "Write Token" (for writing data)
   - Select "Read + Write" permissions
   - Copy the token

## Step 3: Configure Environment Variables

Create a `.env.local` file in your project root with the following content:

```env
# Next.js
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_DEFAULT_LOCALE="en"
NEXT_PUBLIC_SUPPORTED_LOCALES="en,si,ta"

# Database
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB?schema=public"

# Sanity CMS Configuration
# Your Project ID: tyzm5r8j
NEXT_PUBLIC_SANITY_PROJECT_ID="tyzm5r8j"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_READ_TOKEN="your-sanity-read-token"
SANITY_API_WRITE_TOKEN="your-sanity-write-token"
SANITY_WEBHOOK_SECRET="your-sanity-webhook-secret"

# Auth
AUTH_SECRET="generate-strong-secret-here"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-strong-secret-here"
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# Email
RESEND_API_KEY=""
SMTP_HOST=""
SMTP_PORT=""
SMTP_USER=""
SMTP_PASS=""

# Search
MEILI_HOST="http://localhost:7700"
MEILI_MASTER_KEY=""

# Payments
STRIPE_PUBLIC_KEY=""
STRIPE_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET=""
PAYHERE_MERCHANT_ID=""
WEBXPAY_MERCHANT_ID=""

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=""
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=""

# Maps
NEXT_PUBLIC_MAPBOX_TOKEN=""

# Optional: Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
```

**Replace the following values:**

- `your-sanity-project-id` with your actual Sanity Project ID
- `your-sanity-read-token` with your Read API token
- `your-sanity-write-token` with your Write API token
- `your-sanity-webhook-secret` with a secure random string (for webhooks)

## Step 4: Set Up Content Types

The project includes predefined content schemas for:

- Hotels
- Tours
- Blog Posts
- Locations
- Authors
- Deals
- Settings

These schemas are located in `src/sanity/schemas/`.

## Step 5: Access Sanity Studio

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Access Sanity Studio at: `http://localhost:3000/studio`

3. You'll be prompted to create your first user account

## Step 6: Create Content

1. **Hotels**: Add hotel information, images, amenities, and room details
2. **Tours**: Create tour packages with itineraries, pricing, and locations
3. **Blog Posts**: Write blog content with authors and categories
4. **Locations**: Add destinations and points of interest
5. **Settings**: Configure site-wide settings

## Step 7: Test Your Setup

1. Visit your main site at `http://localhost:3000`
2. Navigate to different pages (Hotels, Tours, Blog)
3. Verify that real data from Sanity is being displayed
4. The development notice should disappear once Sanity is properly configured

## Troubleshooting

### "Sanity CMS is not configured" Message

- Ensure your `.env.local` file exists and contains the correct Sanity credentials
- Restart your development server after adding environment variables
- Check that your Project ID and API tokens are correct

### API Errors

- Verify your API tokens have the correct permissions
- Check that your dataset name matches what's in your environment variables
- Ensure your project is not in maintenance mode

### Studio Access Issues

- Make sure you're accessing the correct URL (`/studio`)
- Check that your CORS settings allow localhost
- Verify your project ID is correct

## Development vs Production

- **Development**: Uses sample data when Sanity is not configured
- **Production**: Requires all environment variables to be set
- **Local Development**: Can work with sample data for UI development
- **Content Management**: Requires Sanity Studio for managing real content

## Additional Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Project README](./README.md)

## Support

If you encounter issues:

1. Check the browser console for error messages
2. Verify your environment variables are correctly set
3. Ensure your Sanity project is active and accessible
4. Check the Sanity project dashboard for any maintenance notices
