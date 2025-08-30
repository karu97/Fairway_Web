# Sanity CMS Content Setup Guide for Fairway Hotels

## Overview
This guide will help you set up all the content for your Fairway Hotels website using Sanity CMS. The website is now fully CMS-driven, allowing you to manage all content, branding, and site settings through Sanity Studio.

## Prerequisites
1. Ensure your Sanity project is properly configured
2. Access to Sanity Studio (usually at `/studio` on your website)
3. Your environment variables are set up correctly

## Content Structure

### 1. Site Settings (Required - Create First)
**Document Type:** `settings`

This is the most important document to create first. You can only have one settings document.

#### Required Fields:
- **Site Name:** `Fairway Hotels`
- **Default Language:** `en`
- **Supported Languages:** `['en']` (add 'si' and 'ta' for Sinhala and Tamil)

#### Branding Fields:
- **Logo:** Upload your company logo (recommended: 200x60px, PNG/SVG)
- **Site Icon:** Upload favicon (recommended: 32x32px, ICO/PNG)
- **Brand Colors:**
  - Primary: `#2563eb` (blue)
  - Secondary: `#1e40af` (dark blue)
  - Accent: `#3b82f6` (light blue)
  - Text: `#1f2937` (dark gray)
  - Background: `#ffffff` (white)

#### Contact Information:
- **Phone:** `+94 11 234 5678`
- **Email:** `info@fairwayhotels.com`
- **Address:** `123 Galle Road, Colombo 00300, Sri Lanka`

#### Social Media:
- **Facebook:** `https://www.facebook.com/fairwayhotels`
- **Instagram:** `https://www.instagram.com/fairwayhotels`
- **Twitter:** `https://www.twitter.com/fairwayhotels`
- **LinkedIn:** `https://www.linkedin.com/company/fairwayhotels`
- **YouTube:** `https://www.youtube.com/fairwayhotels`

### 2. Home Page Content
**Document Type:** `content`
**Page Type:** `home`
**Language:** `en`

#### Hero Section:
- **Title:** `Experience Luxury & Adventure in Sri Lanka`
- **Subtitle:** `Discover world-class hospitality, pristine beaches, misty mountains, and rich cultural heritage. Your journey to paradise starts with Fairway Hotels.`
- **Background Image:** Upload a high-quality hero image
- **Primary CTA:** `Explore Hotels`
- **Primary CTA Link:** `/hotels`
- **Secondary CTA:** `Discover Tours`
- **Secondary CTA Link:** `/tours`

#### Features Section:
Create a section with type `features` containing:
1. **Luxury Accommodation**
   - Icon: `star`
   - Color: `yellow`
   - Description: `World-class hotels with premium amenities and exceptional service.`

2. **Prime Locations**
   - Icon: `mapPin`
   - Color: `blue`
   - Description: `Strategically located properties in the most beautiful destinations.`

3. **Safe & Secure**
   - Icon: `shield`
   - Color: `green`
   - Description: `Your safety and comfort are our top priorities.`

4. **Award-Winning**
   - Icon: `award`
   - Color: `purple`
   - Description: `Recognized for excellence in hospitality and tourism.`

#### Stats Section:
Create a section with type `stats` containing:
1. **25+ Years of Excellence** (Icon: `award`)
2. **50K+ Happy Guests** (Icon: `users`)
3. **15+ Luxury Hotels** (Icon: `star`)
4. **100+ Tour Packages** (Icon: `mapPin`)

### 3. About Page Content
**Document Type:** `content`
**Page Type:** `about`
**Language:** `en`

#### Hero Section:
- **Title:** `About Fairway Hotels`
- **Subtitle:** `Crafting exceptional experiences in the heart of Sri Lanka since 1995`

#### Story Section:
Create a section with type `story`:
- **Title:** `Our Story`
- **Content:** Add your company story using the rich text editor

#### Values Section:
Create a section with type `values` containing:
1. **Excellence**
   - Icon: `checkCircle`
   - Color: `blue`
   - Description: `We strive for excellence in every aspect of our service, from the quality of our accommodations to the warmth of our hospitality.`

2. **Sustainability**
   - Icon: `sun`
   - Color: `green`
   - Description: `We're committed to sustainable practices that protect Sri Lanka's natural beauty for future generations to enjoy.`

3. **Authenticity**
   - Icon: `heart`
   - Color: `purple`
   - Description: `We believe in authentic experiences that showcase the real Sri Lanka, from local cuisine to cultural traditions.`

#### Stats Section:
Create a section with type `stats` containing:
1. **25+ Years of Excellence** (Icon: `award`)
2. **5 Luxury Hotels** (Icon: `star`)
3. **50+ Tour Packages** (Icon: `mapPin`)
4. **10k+ Happy Guests** (Icon: `users`)

#### Team Section:
Create a section with type `team` containing:
1. **Rajith Perera** - Chief Executive Officer
2. **Priya Fernando** - Operations Director
3. **Dinesh Silva** - Head of Guest Experience

### 4. Contact Page Content
**Document Type:** `content`
**Page Type:** `contact`
**Language:** `en`

#### Hero Section:
- **Title:** `Contact Us`
- **Subtitle:** `We're here to help you plan your perfect Sri Lankan adventure`

#### Contact Section:
Create a section with type `contact` containing:
1. **Phone**
   - Type: `phone`
   - Title: `Phone`
   - Value: `+94 11 123 4567\n+94 11 123 4568`
   - Icon: `phone`

2. **Email**
   - Type: `email`
   - Title: `Email`
   - Value: `info@fairwayhotels.com\nbookings@fairwayhotels.com`
   - Icon: `mail`

3. **Address**
   - Type: `address`
   - Title: `Address`
   - Value: `123 Galle Road\nColombo 03\nWestern Province\nSri Lanka`
   - Icon: `mapPin`

4. **Business Hours**
   - Type: `hours`
   - Title: `Business Hours`
   - Value: `Monday - Friday: 8:00 AM - 8:00 PM\nSaturday: 9:00 AM - 6:00 PM\nSunday: 10:00 AM - 4:00 PM`
   - Icon: `clock`

- **Emergency Contact:** `+94 11 123 9999`

### 5. Footer Content
**Document Type:** `content`
**Page Type:** `footer`
**Language:** `en`

This will be automatically populated from the site settings, but you can add additional sections if needed.

## Hotel Content Setup

### Creating Hotels
**Document Type:** `hotel`

#### Required Fields:
- **Title:** Hotel name
- **Slug:** Auto-generated from title
- **Language:** `en`
- **Summary:** Brief description (max 200 characters)
- **Description:** Full description using rich text editor
- **Hero Image:** Main hotel image
- **Rating:** 3-5 stars
- **Price From:** Starting price in USD
- **Currency:** USD
- **Amenities:** Array of amenities
- **Address:** Complete address with coordinates
- **Contact:** Phone, email, website
- **Rooms:** Room types and pricing
- **Policies:** Hotel policies
- **Active:** `true`
- **Featured:** `true` (for featured hotels)

#### Important Notes:
- Set `featured: true` for hotels you want to appear on the home page
- Use `order` field to control display order
- Add multiple images in the gallery
- Include detailed room information

## Tour Content Setup

### Creating Tours
**Document Type:** `tour`

#### Required Fields:
- **Title:** Tour name
- **Slug:** Auto-generated from title
- **Language:** `en`
- **Summary:** Brief description (max 200 characters)
- **Description:** Full description using rich text editor
- **Hero Image:** Main tour image
- **Duration Days:** Number of days
- **Price From:** Starting price in USD
- **Currency:** USD
- **Group Size:** Min and max participants
- **Difficulty:** Easy/Moderate/Challenging/Expert
- **Itinerary:** Day-by-day breakdown
- **Inclusions:** What's included
- **Exclusions:** What's not included
- **Available Dates:** Tour dates and pricing
- **Locations:** Tour destinations
- **Highlights:** Key tour highlights
- **Requirements:** Any special requirements
- **Active:** `true`
- **Featured:** `true` (for featured tours)

#### Important Notes:
- Set `featured: true` for tours you want to appear on the home page
- Use `order` field to control display order
- Add multiple images in the gallery
- Include detailed itinerary information

## Blog Content Setup

### Creating Blog Posts
**Document Type:** `blog`

#### Required Fields:
- **Title:** Post title
- **Slug:** Auto-generated from title
- **Language:** `en`
- **Excerpt:** Brief summary (max 300 characters)
- **Body:** Full content using rich text editor
- **Hero Image:** Featured image
- **Published At:** Publication date
- **Author:** Select from authors
- **Tags:** Relevant tags
- **Category:** Post category
- **Active:** `true`
- **Featured:** `true` (for featured posts)

## Location Content Setup

### Creating Locations
**Document Type:** `location`

#### Required Fields:
- **Name:** Location name
- **Slug:** Auto-generated from name
- **Language:** `en`
- **Summary:** Brief description
- **Description:** Full description
- **Type:** City/Beach/Mountain/Cultural/etc.
- **Geo:** Latitude and longitude
- **Address:** Complete address
- **Images:** Location photos
- **Active:** `true`

## Content Management Tips

### 1. Image Guidelines
- **Hero Images:** 1200x800px minimum, JPG/PNG
- **Gallery Images:** 800x600px minimum, JPG/PNG
- **Logos:** 200x60px, PNG/SVG preferred
- **Favicon:** 32x32px, ICO/PNG

### 2. SEO Best Practices
- Use descriptive titles and summaries
- Include relevant keywords naturally
- Add alt text to all images
- Use proper heading structure in rich text

### 3. Content Organization
- Use consistent naming conventions
- Tag content appropriately
- Keep descriptions concise but informative
- Update content regularly

### 4. Multilingual Support
- Create content for each supported language
- Use consistent translations
- Maintain the same structure across languages

## Troubleshooting

### Popular Tours Not Showing
1. Check that tours have `featured: true`
2. Verify tours have `isActive: true`
3. Ensure tours have required fields filled
4. Check Sanity configuration in environment variables

### Content Not Updating
1. Clear browser cache
2. Check if CDN is enabled (disable for testing)
3. Verify content is published in Sanity
4. Check for JavaScript errors in browser console

### Images Not Loading
1. Verify image uploads completed successfully
2. Check image URLs in browser network tab
3. Ensure Sanity image service is configured
4. Verify image permissions in Sanity

## Next Steps

1. **Create Site Settings first** - This is essential for the site to function properly
2. **Add Home Page content** - This will populate your homepage
3. **Create About and Contact pages** - These will replace the hardcoded content
4. **Add Hotels and Tours** - Start with featured ones for the homepage
5. **Add Blog content** - For content marketing
6. **Test all pages** - Ensure everything works correctly
7. **Add multilingual content** - If supporting multiple languages

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify your Sanity project configuration
3. Ensure all environment variables are set correctly
4. Check the Sanity Studio for content status

The website is now fully CMS-driven and ready for content management through Sanity Studio!
