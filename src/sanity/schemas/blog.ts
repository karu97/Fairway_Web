import { defineField, defineType } from 'sanity';

export const blog = defineType({
  name: 'blog',
  title: 'Blog Post',
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
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
        {
          type: 'code',
          options: {
            withFilename: true,
          },
        },
      ],
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Travel Tips', value: 'travel-tips' },
          { title: 'Destination Guide', value: 'destination-guide' },
          { title: 'Hotel Reviews', value: 'hotel-reviews' },
          { title: 'Tour Experiences', value: 'tour-experiences' },
          { title: 'Local Culture', value: 'local-culture' },
          { title: 'Food & Dining', value: 'food-dining' },
          { title: 'Adventure', value: 'adventure' },
          { title: 'Luxury Travel', value: 'luxury-travel' },
          { title: 'Family Travel', value: 'family-travel' },
          { title: 'Business Travel', value: 'business-travel' },
          { title: 'Seasonal', value: 'seasonal' },
          { title: 'Events', value: 'events' },
        ],
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Travel Guide', value: 'travel-guide' },
          { title: 'Hotel & Resort', value: 'hotel-resort' },
          { title: 'Tour Packages', value: 'tour-packages' },
          { title: 'Local Insights', value: 'local-insights' },
          { title: 'Travel Tips', value: 'travel-tips' },
          { title: 'News & Updates', value: 'news-updates' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'relatedHotels',
      title: 'Related Hotels',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'hotel' }] }],
    }),
    defineField({
      name: 'relatedTours',
      title: 'Related Tours',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tour' }] }],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false,
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
      author: 'author.name',
      publishedAt: 'publishedAt',
      media: 'heroImage',
    },
    prepare(selection) {
      const { title, locale, author, publishedAt } = selection;
      return {
        title: `${title} (${locale.toUpperCase()})`,
        subtitle: `By ${author} on ${publishedAt ? new Date(publishedAt).toLocaleDateString() : 'Draft'}`,
        media: selection.media,
      };
    },
  },
  orderings: [
    {
      title: 'Published Date (Newest)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Featured First',
      name: 'featuredDesc',
      by: [{ field: 'featured', direction: 'desc' }, { field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
});
