import { defineField, defineType } from 'sanity';

export const hotel = defineType({
  name: 'hotel',
  title: 'Hotel',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'locale',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Sinhala', value: 'si' },
          { title: 'Tamil', value: 'ta' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        list: [
          { title: '3 Stars', value: 3 },
          { title: '4 Stars', value: 4 },
          { title: '5 Stars', value: 5 },
        ],
      },
      validation: (Rule) => Rule.required().min(3).max(5),
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Free WiFi', value: 'wifi' },
          { title: 'Swimming Pool', value: 'pool' },
          { title: 'Spa', value: 'spa' },
          { title: 'Gym', value: 'gym' },
          { title: 'Restaurant', value: 'restaurant' },
          { title: 'Bar', value: 'bar' },
          { title: 'Conference Room', value: 'conference' },
          { title: 'Airport Transfer', value: 'airport-transfer' },
          { title: 'Room Service', value: 'room-service' },
          { title: 'Laundry', value: 'laundry' },
          { title: 'Parking', value: 'parking' },
          { title: 'Business Center', value: 'business-center' },
        ],
      },
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility.',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        { name: 'street', type: 'string', title: 'Street Address' },
        { name: 'city', type: 'string', title: 'City' },
        { name: 'region', type: 'string', title: 'Region/State' },
        { name: 'country', type: 'string', title: 'Country' },
        { name: 'postalCode', type: 'string', title: 'Postal Code' },
        { name: 'lat', type: 'number', title: 'Latitude' },
        { name: 'lng', type: 'number', title: 'Longitude' },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'phone', type: 'string', title: 'Phone' },
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'website', type: 'url', title: 'Website' },
      ],
    }),
    defineField({
      name: 'policies',
      title: 'Hotel Policies',
      type: 'object',
      fields: [
        { name: 'checkIn', type: 'string', title: 'Check-in Time' },
        { name: 'checkOut', type: 'string', title: 'Check-out Time' },
        { name: 'cancellation', type: 'text', title: 'Cancellation Policy' },
        { name: 'children', type: 'text', title: 'Children Policy' },
        { name: 'pets', type: 'text', title: 'Pet Policy' },
      ],
    }),
    defineField({
      name: 'rooms',
      title: 'Room Types',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Room Name' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'sleeps', type: 'number', title: 'Sleeps' },
            { name: 'priceFrom', type: 'number', title: 'Price From (USD)' },
            { name: 'images', type: 'array', of: [{ type: 'image' }] },
            { name: 'amenities', type: 'array', of: [{ type: 'string' }] },
          ],
        },
      ],
    }),
    defineField({
      name: 'nearby',
      title: 'Nearby Attractions',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'location' }] }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'SEO Title' },
        { name: 'description', type: 'text', title: 'SEO Description' },
        { name: 'ogImage', type: 'image', title: 'Open Graph Image' },
        { name: 'keywords', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Hotel',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      locale: 'locale',
      rating: 'rating',
      media: 'heroImage',
    },
    prepare(selection) {
      const { title, locale, rating } = selection;
      return {
        title: `${title} (${locale.toUpperCase()})`,
        subtitle: `${rating} Stars`,
        media: selection.media,
      };
    },
  },
  orderings: [
    {
      title: 'Featured First',
      name: 'featuredDesc',
      by: [{ field: 'featured', direction: 'desc' }, { field: 'order', direction: 'asc' }],
    },
    {
      title: 'Name A-Z',
      name: 'nameAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
});
