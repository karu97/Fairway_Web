# Fairway Hotels Content Management Tutorial

This comprehensive guide will walk you through adding and managing hotels, tours, blog posts, and other content using the Sanity CMS in your Fairway Hotels application.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Adding Hotels](#adding-hotels)
3. [Adding Tours](#adding-tours)
4. [Adding Blog Posts](#adding-blog-posts)
5. [Adding Locations](#adding-locations)
6. [Adding Authors](#adding-authors)
7. [Adding Special Deals](#adding-special-deals)
8. [Managing Content](#managing-content)
9. [Best Practices](#best-practices)
10. [Troubleshooting](#troubleshooting)

## Getting Started

### Accessing the Sanity Studio

1. **Navigate to the Studio**: Go to `/studio` in your application (e.g., `http://localhost:3000/studio`)
2. **Login**: Use your Sanity credentials to access the content management system
3. **Dashboard**: You'll see the organized content structure with sections for Hotels, Tours, Blog, etc.

### Understanding the Interface

The Sanity Studio is organized into logical sections:
- **Hotels**: Manage all hotel listings
- **Tours**: Manage tour packages
- **Blog**: Manage blog posts and articles
- **Locations**: Manage destination locations
- **Authors**: Manage content authors
- **Special Deals**: Manage promotional offers
- **Site Settings**: Global configuration

## Adding Hotels

### Step-by-Step Process

1. **Navigate to Hotels Section**
   - Click on "Hotels" in the left sidebar
   - Choose "All Hotels" or "By Language" for organization

2. **Create New Hotel**
   - Click the "Create new" button
   - Select "Hotel" document type

3. **Fill Required Fields**

   **Basic Information:**
   - **Title**: Hotel name (e.g., "Fairway Colombo Hotel")
   - **Slug**: Auto-generated from title (e.g., "fairway-colombo-hotel")
   - **Language**: Select English, Sinhala, or Tamil
   - **Summary**: Brief description (max 200 characters)
   - **Description**: Detailed description using rich text editor

   **Rating & Classification:**
   - **Rating**: Select 3, 4, or 5 stars
   - **Amenities**: Choose from available options:
     - Free WiFi, Swimming Pool, Spa, Gym
     - Restaurant, Bar, Conference Room
     - Airport Transfer, Room Service, Laundry
     - Parking, Business Center

4. **Add Images**
   - **Hero Image**: Main display image (required)
   - **Gallery Images**: Additional hotel photos
   - **Alt Text**: Descriptive text for accessibility
   - **Captions**: Optional image descriptions

5. **Location Details**
   - **Address**: Street, city, region, country, postal code
   - **Coordinates**: Latitude and longitude for maps
   - **Contact**: Phone, email, website

6. **Hotel Policies**
   - **Check-in/Check-out Times**
   - **Cancellation Policy**
   - **Children Policy**
   - **Pet Policy**

7. **Room Information**
   - **Room Types**: Name, description, capacity
   - **Pricing**: Starting prices in USD
   - **Room Images**: Photos of different room types
   - **Room Amenities**: Features specific to rooms

8. **SEO & Display**
   - **SEO Title**: Custom title for search engines
   - **SEO Description**: Meta description
   - **Keywords**: Search terms
   - **Featured**: Mark as featured hotel
   - **Display Order**: Control listing order
   - **Active Status**: Enable/disable hotel

### Hotel Content Examples

**Title**: "Fairway Colombo Luxury Hotel"
**Summary**: "Experience unparalleled luxury in the heart of Colombo with stunning city views, world-class amenities, and exceptional service."
**Amenities**: WiFi, Pool, Spa, Gym, Restaurant, Bar, Airport Transfer
**Rating**: 5 Stars

## Adding Tours

### Step-by-Step Process

1. **Navigate to Tours Section**
   - Click on "Tours" in the left sidebar
   - Choose "All Tours" or "By Language"

2. **Create New Tour**
   - Click "Create new" button
   - Select "Tour Package" document type

3. **Fill Required Fields**

   **Basic Information:**
   - **Title**: Tour name (e.g., "Colombo to Galle Cultural Tour")
   - **Slug**: Auto-generated from title
   - **Language**: Select language
   - **Summary**: Brief tour description
   - **Description**: Detailed tour information

   **Tour Details:**
   - **Duration**: Number of days (1-30)
   - **Price**: Starting price in USD
   - **Currency**: USD, EUR, or LKR
   - **Group Size**: Minimum and maximum participants
   - **Difficulty**: Easy, Moderate, Challenging, or Expert

4. **Itinerary Planning**
   - **Day-by-Day Breakdown**:
     - Day number
     - Daily title/theme
     - Detailed activities
     - Accommodation details
     - Meals included

5. **What's Included/Excluded**
   - **Inclusions**: Accommodation, meals, transportation, guide, entrance fees, activities, insurance
   - **Exclusions**: Flights, personal expenses, tips, optional activities, travel insurance

6. **Tour Images**
   - **Hero Image**: Main tour image
   - **Gallery**: Additional tour photos
   - **Alt Text**: Accessibility descriptions

7. **Available Dates & Pricing**
   - **Date Ranges**: Start and end dates
   - **Seasonal Pricing**: Different prices for different periods
   - **Availability Status**: Mark as available/unavailable

8. **Tour Locations**
   - **Destinations**: Reference to location documents
   - **Highlights**: Key attractions and experiences
   - **Requirements**: Physical fitness, age restrictions, etc.

### Tour Content Examples

**Title**: "Sri Lanka Cultural Heritage Tour"
**Duration**: 7 days
**Price**: $1,299 USD
**Difficulty**: Easy
**Group Size**: 2-12 people
**Highlights**: Ancient temples, tea plantations, wildlife safaris, beach relaxation

## Adding Blog Posts

### Step-by-Step Process

1. **Navigate to Blog Section**
   - Click on "Blog" in the left sidebar
   - Choose "All Posts" or "By Language"

2. **Create New Post**
   - Click "Create new" button
   - Select "Blog Post" document type

3. **Fill Required Fields**

   **Basic Information:**
   - **Title**: Post headline
   - **Slug**: Auto-generated URL
   - **Language**: Select language
   - **Excerpt**: Brief summary (max 300 characters)
   - **Body**: Main content using rich text editor

   **Content Elements:**
   - **Rich Text**: Paragraphs, headings, lists
   - **Images**: Inline images with alt text
   - **Code Blocks**: For technical content
   - **Links**: Internal and external references

4. **Author & Publishing**
   - **Author**: Select from existing authors
   - **Published Date**: Set publication date
   - **Tags**: Select relevant tags from predefined list
   - **Category**: Choose primary category

5. **Related Content**
   - **Related Hotels**: Link to relevant hotels
   - **Related Tours**: Link to relevant tours
   - **Featured Status**: Mark as featured post

6. **SEO Optimization**
   - **SEO Title**: Custom title for search engines
   - **SEO Description**: Meta description
   - **Keywords**: Search terms
   - **Open Graph Image**: Social media sharing image

### Blog Content Examples

**Title**: "Top 10 Luxury Hotels in Colombo"
**Category**: Hotel & Resort
**Tags**: Luxury Travel, Hotel Reviews, Colombo
**Excerpt**: "Discover the most luxurious accommodations in Sri Lanka's vibrant capital city, from beachfront resorts to urban sanctuaries."

## Adding Locations

### Step-by-Step Process

1. **Navigate to Locations Section**
   - Click on "Locations" in the left sidebar

2. **Create New Location**
   - Click "Create new" button
   - Select "Location" document type

3. **Fill Required Fields**

   **Basic Information:**
   - **Name**: Location name (e.g., "Galle Fort")
   - **Slug**: Auto-generated URL
   - **Language**: Select language
   - **Summary**: Brief description
   - **Description**: Detailed information

   **Location Details:**
   - **Type**: City, Beach, Mountain, Historical Site, National Park, Temple, Market, Museum, Garden, Waterfall
   - **Address**: Street, city, region, country, postal code
   - **Coordinates**: Latitude and longitude

4. **Visual Content**
   - **Images**: Location photos
   - **Highlights**: Key features and attractions
   - **Best Time to Visit**: Seasonal recommendations

5. **SEO Information**
   - **SEO Title**: Custom title
   - **SEO Description**: Meta description
   - **Keywords**: Search terms

### Location Content Examples

**Name**: "Sigiriya Rock Fortress"
**Type**: Historical Site
**Summary**: "Ancient palace and fortress complex built on a massive rock column, a UNESCO World Heritage site."
**Best Time**: Dry Season (Dec-Apr)

## Adding Authors

### Step-by-Step Process

1. **Navigate to Authors Section**
   - Click on "Authors" in the left sidebar

2. **Create New Author**
   - Click "Create new" button
   - Select "Author" document type

3. **Fill Required Fields**

   **Basic Information:**
   - **Name**: Author's full name
   - **Slug**: Auto-generated URL
   - **Image**: Profile photo
   - **Bio**: Brief biography

   **Professional Details:**
   - **Role**: Travel Writer, Hotel Manager, Tour Guide, Local Expert, Photographer, Chef, Cultural Expert
   - **Email**: Contact email
   - **Website**: Personal website
   - **Social Media**: Twitter, LinkedIn, Instagram, Facebook

4. **Expertise Areas**
   - **Areas of Expertise**: Select from predefined list:
     - Luxury Hotels, Adventure Travel, Cultural Tourism
     - Food & Dining, Beach Destinations, Mountain Tourism
     - Historical Sites, Wildlife Tourism, Business Travel, Family Travel

### Author Content Examples

**Name**: "Sarah Johnson"
**Role**: Travel Writer
**Bio**: "Award-winning travel journalist with 15+ years of experience exploring Asia and writing about luxury travel experiences."
**Expertise**: Luxury Hotels, Cultural Tourism, Food & Dining

## Adding Special Deals

### Step-by-Step Process

1. **Navigate to Special Deals Section**
   - Click on "Special Deals" in the left sidebar

2. **Create New Deal**
   - Click "Create new" button
   - Select "Special Deal" document type

3. **Fill Required Fields**

   **Basic Information:**
   - **Title**: Deal name (e.g., "Summer Sale - 30% Off")
   - **Slug**: Auto-generated URL
   - **Language**: Select language
   - **Description**: Deal details and benefits

   **Deal Configuration:**
   - **Applies To**: Select hotels, tours, or categories
   - **Discount Type**: Percentage, Fixed Amount, Free Night, Free Upgrade, Package Deal, Early Bird, Last Minute
   - **Discount Value**: Percentage (1-100) or fixed amount in USD
   - **Start/End Dates**: Deal validity period

4. **Terms & Conditions**
   - **Terms**: Detailed terms using rich text editor
   - **Image**: Promotional image
   - **Featured Status**: Mark as featured deal

### Deal Content Examples

**Title**: "Early Bird Special - Book 3 Months Ahead"
**Discount Type**: Percentage
**Discount Value**: 25%
**Applies To**: All Hotels
**Description**: "Save 25% when you book your stay 3 months in advance. Perfect for planning your dream vacation."

## Managing Content

### Content Organization

1. **Language-Based Organization**
   - Content is organized by language (English, Sinhala, Tamil)
   - Each language has its own content set
   - Easy to manage multilingual content

2. **Featured Content**
   - Mark important items as featured
   - Featured content appears first in listings
   - Control display order with order numbers

3. **Content Status**
   - Active/Inactive toggle for all content types
   - Draft mode for work-in-progress
   - Publish when ready

### Content Updates

1. **Editing Existing Content**
   - Click on any document to edit
   - Real-time preview available
   - Version history maintained

2. **Bulk Operations**
   - Select multiple items for batch operations
   - Update status, tags, or categories
   - Delete multiple items

3. **Content Relationships**
   - Link hotels to tours and vice versa
   - Connect blog posts to relevant hotels/tours
   - Build content networks

## Best Practices

### Content Quality

1. **Images**
   - Use high-quality, optimized images
   - Always include descriptive alt text
   - Maintain consistent aspect ratios
   - Use appropriate image sizes

2. **Content Structure**
   - Write clear, engaging descriptions
   - Use consistent formatting
   - Include relevant keywords naturally
   - Keep summaries concise but informative

3. **SEO Optimization**
   - Write unique titles and descriptions
   - Use relevant keywords
   - Include internal links
   - Optimize images with descriptive names

### Multilingual Content

1. **Translation Strategy**
   - Maintain consistent terminology
   - Consider cultural nuances
   - Use professional translation when possible
   - Keep content synchronized across languages

2. **Content Localization**
   - Adapt content for local audiences
   - Include region-specific information
   - Consider local holidays and events
   - Use appropriate cultural references

### Content Maintenance

1. **Regular Updates**
   - Keep information current
   - Update prices and availability
   - Refresh images periodically
   - Monitor and respond to feedback

2. **Content Audits**
   - Review content quality regularly
   - Check for broken links
   - Update outdated information
   - Optimize underperforming content

## Troubleshooting

### Common Issues

1. **Content Not Appearing**
   - Check if content is marked as active
   - Verify publication status
   - Check language settings
   - Ensure required fields are filled

2. **Image Upload Issues**
   - Check file size and format
   - Verify image dimensions
   - Ensure proper alt text
   - Check file permissions

3. **Slug Generation Problems**
   - Ensure title field is filled
   - Check for special characters
   - Verify slug uniqueness
   - Manual slug override if needed

### Performance Tips

1. **Image Optimization**
   - Compress images before upload
   - Use appropriate formats (JPEG for photos, PNG for graphics)
   - Implement lazy loading
   - Use responsive images

2. **Content Loading**
   - Implement pagination for large lists
   - Use search and filtering
   - Optimize database queries
   - Implement caching strategies

### Support Resources

1. **Sanity Documentation**
   - Official Sanity.io documentation
   - Community forums
   - Video tutorials
   - Best practices guides

2. **Application Support**
   - Check application logs
   - Review error messages
   - Test in different browsers
   - Verify environment configuration

## Conclusion

This tutorial provides a comprehensive guide to managing content in your Fairway Hotels application. By following these steps and best practices, you'll be able to effectively add and manage hotels, tours, blog posts, and other content to create a rich, engaging user experience.

Remember to:
- Maintain consistent content quality
- Optimize for search engines
- Keep content current and relevant
- Use the multilingual features effectively
- Follow the established content structure

For additional support or questions, refer to the Sanity documentation or contact your development team.
