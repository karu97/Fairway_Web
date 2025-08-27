import { defineField, defineType } from 'sanity';

export const tour = defineType({
  name: 'tour',
  title: 'Tour Package',
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
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
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
      name: 'images',
      title: 'Gallery Images',
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
    }),
    defineField({
      name: 'durationDays',
      title: 'Duration (Days)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(30),
    }),
    defineField({
      name: 'priceFrom',
      title: 'Price From (USD)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      options: {
        list: [
          { title: 'USD', value: 'USD' },
          { title: 'EUR', value: 'EUR' },
          { title: 'LKR', value: 'LKR' },
        ],
      },
      initialValue: 'USD',
    }),
    defineField({
      name: 'groupSize',
      title: 'Group Size',
      type: 'object',
      fields: [
        { name: 'min', type: 'number', title: 'Minimum' },
        { name: 'max', type: 'number', title: 'Maximum' },
      ],
    }),
    defineField({
      name: 'difficulty',
      title: 'Difficulty Level',
      type: 'string',
      options: {
        list: [
          { title: 'Easy', value: 'easy' },
          { title: 'Moderate', value: 'moderate' },
          { title: 'Challenging', value: 'challenging' },
          { title: 'Expert', value: 'expert' },
        ],
      },
    }),
    defineField({
      name: 'itinerary',
      title: 'Itinerary',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day', type: 'number', title: 'Day' },
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'detail', type: 'text', title: 'Details' },
            { name: 'accommodation', type: 'string', title: 'Accommodation' },
            { name: 'meals', type: 'array', of: [{ type: 'string' }] },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'inclusions',
      title: 'What\'s Included',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Accommodation', value: 'accommodation' },
          { title: 'Meals', value: 'meals' },
          { title: 'Transportation', value: 'transportation' },
          { title: 'Guide', value: 'guide' },
          { title: 'Entrance Fees', value: 'entrance-fees' },
          { title: 'Activities', value: 'activities' },
          { title: 'Insurance', value: 'insurance' },
        ],
      },
    }),
    defineField({
      name: 'exclusions',
      title: 'What\'s Not Included',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Flights', value: 'flights' },
          { title: 'Personal Expenses', value: 'personal-expenses' },
          { title: 'Tips', value: 'tips' },
          { title: 'Optional Activities', value: 'optional-activities' },
          { title: 'Travel Insurance', value: 'travel-insurance' },
        ],
      },
    }),
    defineField({
      name: 'availableDates',
      title: 'Available Dates',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'startDate', type: 'date', title: 'Start Date' },
            { name: 'endDate', type: 'date', title: 'End Date' },
            { name: 'price', type: 'number', title: 'Price (USD)' },
            { name: 'available', type: 'boolean', title: 'Available', initialValue: true },
          ],
        },
      ],
    }),
    defineField({
      name: 'locations',
      title: 'Tour Locations',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'location' }] }],
    }),
    defineField({
      name: 'highlights',
      title: 'Tour Highlights',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'text',
      rows: 3,
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
      title: 'Featured Tour',
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
      duration: 'durationDays',
      price: 'priceFrom',
      media: 'heroImage',
    },
    prepare(selection) {
      const { title, locale, duration, price } = selection;
      return {
        title: `${title} (${locale.toUpperCase()})`,
        subtitle: `${duration} days from $${price}`,
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
      title: 'Price Low to High',
      name: 'priceAsc',
      by: [{ field: 'priceFrom', direction: 'asc' }],
    },
    {
      title: 'Duration Short to Long',
      name: 'durationAsc',
      by: [{ field: 'durationDays', direction: 'asc' }],
    },
  ],
});
