# Fairway Hotels Quick Reference Guide

## Content Types & Required Fields

### 🏨 Hotel
**Required Fields:**
- Title, Slug, Language, Description, Summary, Rating, Hero Image, Address

**Quick Setup:**
1. Title: "Hotel Name"
2. Language: Select (en/si/ta)
3. Rating: 3-5 stars
4. Hero Image: Upload main photo
5. Address: Fill location details
6. Amenities: Select from list
7. Mark as Featured if needed

**Common Amenities:**
- WiFi, Pool, Spa, Gym, Restaurant, Bar, Airport Transfer

---

### 🚌 Tour Package
**Required Fields:**
- Title, Slug, Language, Summary, Description, Hero Image, Duration, Price, Itinerary

**Quick Setup:**
1. Title: "Tour Name"
2. Language: Select (en/si/ta)
3. Duration: Number of days (1-30)
4. Price: Starting price in USD
5. Hero Image: Upload tour photo
6. Itinerary: Add day-by-day breakdown
7. Inclusions/Exclusions: Select from lists

**Difficulty Levels:**
- Easy, Moderate, Challenging, Expert

---

### 📝 Blog Post
**Required Fields:**
- Title, Slug, Language, Excerpt, Body, Hero Image, Author, Published Date, Category

**Quick Setup:**
1. Title: "Post Title"
2. Language: Select (en/si/ta)
3. Excerpt: Brief summary (max 300 chars)
4. Author: Select from existing authors
5. Category: Choose from predefined list
6. Tags: Select relevant tags
7. Body: Write content using rich editor

**Categories:**
- Travel Guide, Hotel & Resort, Tour Packages, Local Insights, Travel Tips, News & Updates

---

### 📍 Location
**Required Fields:**
- Name, Slug, Language, Summary, Type

**Quick Setup:**
1. Name: "Location Name"
2. Language: Select (en/si/ta)
3. Type: Select from list
4. Summary: Brief description
5. Address: Fill location details
6. Coordinates: Add lat/lng if available

**Location Types:**
- City, Beach, Mountain, Historical Site, National Park, Temple, Market, Museum, Garden, Waterfall

---

### 👤 Author
**Required Fields:**
- Name, Slug, Image

**Quick Setup:**
1. Name: "Author Name"
2. Image: Upload profile photo
3. Bio: Brief biography
4. Role: Select from list
5. Expertise: Select areas of expertise

**Roles:**
- Travel Writer, Hotel Manager, Tour Guide, Local Expert, Photographer, Chef, Cultural Expert

---

### 🎯 Special Deal
**Required Fields:**
- Title, Slug, Language, Description, Applies To, Discount Type, Value, Start Date, End Date

**Quick Setup:**
1. Title: "Deal Name"
2. Language: Select (en/si/ta)
3. Discount Type: Percentage/Fixed/Free Night/etc.
4. Value: Discount amount
5. Start/End Dates: Deal validity period
6. Applies To: Select hotels/tours/categories

**Discount Types:**
- Percentage, Fixed Amount, Free Night, Free Upgrade, Package Deal, Early Bird, Last Minute

---

## Common Operations

### ✨ Mark as Featured
- Toggle "Featured" checkbox
- Featured content appears first in listings
- Use "Display Order" to control sequence

### 🌐 Multilingual Content
- Create separate documents for each language
- Use consistent terminology across languages
- Keep content synchronized

### 📸 Image Management
- **Hero Image**: Main display image (required)
- **Gallery Images**: Additional photos
- **Alt Text**: Always required for accessibility
- **Captions**: Optional descriptions

### 🔗 Content Relationships
- Link hotels to tours and vice versa
- Connect blog posts to relevant content
- Reference locations in tours and hotels

---

## Field Mappings

### Hotel Fields
```
Title → Hotel Name
Slug → URL slug (auto-generated)
Locale → Language (en/si/ta)
Description → Rich text content
Summary → Brief description (max 200 chars)
Rating → 3/4/5 stars
Amenities → Array of selected options
Images → Gallery photos
Hero Image → Main photo
Address → Location object
Contact → Phone/Email/Website
Policies → Check-in/out, cancellation, etc.
Rooms → Room types and pricing
Nearby → Location references
SEO → Custom title/description/keywords
```

### Tour Fields
```
Title → Tour Name
Slug → URL slug (auto-generated)
Locale → Language (en/si/ta)
Summary → Brief description
Description → Rich text content
Hero Image → Main tour photo
Duration → Number of days
Price → Starting price in USD
Currency → USD/EUR/LKR
Group Size → Min/Max participants
Difficulty → Easy/Moderate/Challenging/Expert
Itinerary → Day-by-day breakdown
Inclusions → What's included
Exclusions → What's not included
Available Dates → Date ranges and pricing
Locations → Destination references
Highlights → Key attractions
Requirements → Physical/age restrictions
```

### Blog Fields
```
Title → Post Headline
Slug → URL slug (auto-generated)
Locale → Language (en/si/ta)
Excerpt → Brief summary (max 300 chars)
Body → Rich text content
Hero Image → Main post image
Author → Author reference
Published At → Publication date
Tags → Relevant tags
Category → Primary category
Related Hotels → Hotel references
Related Tours → Tour references
Featured → Featured post toggle
```

---

## Quick Tips

### 🚀 Speed Up Content Creation
1. **Use Templates**: Copy existing content and modify
2. **Batch Upload**: Upload multiple images at once
3. **Keyboard Shortcuts**: Learn Sanity Studio shortcuts
4. **Auto-save**: Content saves automatically

### 📱 Mobile Optimization
1. **Image Sizes**: Use appropriate dimensions
2. **Alt Text**: Always include for accessibility
3. **Responsive Content**: Test on different screen sizes

### 🔍 SEO Best Practices
1. **Unique Titles**: Avoid duplicate titles
2. **Descriptive URLs**: Let slugs auto-generate
3. **Meta Descriptions**: Write compelling summaries
4. **Keywords**: Use naturally in content

### 🌍 Multilingual Tips
1. **Consistent Terms**: Use same terminology across languages
2. **Cultural Context**: Adapt content for local audiences
3. **Translation Quality**: Use professional translation when possible
4. **Content Sync**: Keep all languages updated

---

## Troubleshooting Quick Fixes

### ❌ Content Not Showing
- Check "Active" status
- Verify language settings
- Ensure required fields are filled

### 🖼️ Image Issues
- Check file size (< 10MB recommended)
- Verify format (JPEG/PNG)
- Ensure alt text is filled

### 🔗 Broken Links
- Check reference fields
- Verify document exists
- Update broken references

### 📝 Validation Errors
- Fill all required fields
- Check field formats
- Verify data types

---

## Support Contacts

- **Sanity Documentation**: [sanity.io/docs](https://sanity.io/docs)
- **Community Forum**: [sanity.io/community](https://sanity.io/community)
- **Technical Support**: Contact your development team
- **Content Questions**: Refer to main tutorial document

---

*Last Updated: [Current Date]*
*Version: 1.0*
