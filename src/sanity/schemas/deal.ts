import { defineField, defineType } from 'sanity';

export const deal = defineType({
  name: 'deal',
  title: 'Special Deal',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Deal Title',
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
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'appliesTo',
      title: 'Applies To',
      type: 'object',
      fields: [
        {
          name: 'hotels',
          title: 'Hotels',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'hotel' }] }],
        },
        {
          name: 'tours',
          title: 'Tours',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'tour' }] }],
        },
        {
          name: 'categories',
          title: 'Categories',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            list: [
              { title: 'All Hotels', value: 'all-hotels' },
              { title: 'All Tours', value: 'all-tours' },
              { title: 'Luxury', value: 'luxury' },
              { title: 'Budget', value: 'budget' },
              { title: 'Family', value: 'family' },
              { title: 'Adventure', value: 'adventure' },
              { title: 'Cultural', value: 'cultural' },
              { title: 'Beach', value: 'beach' },
              { title: 'Mountain', value: 'mountain' },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'discountType',
      title: 'Discount Type',
      type: 'string',
      options: {
        list: [
          { title: 'Percentage Off', value: 'percentage' },
          { title: 'Fixed Amount Off', value: 'fixed' },
          { title: 'Free Night', value: 'free-night' },
          { title: 'Free Upgrade', value: 'free-upgrade' },
          { title: 'Package Deal', value: 'package' },
          { title: 'Early Bird', value: 'early-bird' },
          { title: 'Last Minute', value: 'last-minute' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Discount Value',
      type: 'number',
      description: 'Percentage (1-100) or fixed amount in USD',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'startAt',
      title: 'Start Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endAt',
      title: 'End Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'terms',
      title: 'Terms & Conditions',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'image',
      title: 'Deal Image',
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
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Deal',
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
  ],
  preview: {
    select: {
      title: 'title',
      locale: 'locale',
      discountType: 'discountType',
      value: 'value',
      media: 'image',
    },
    prepare(selection) {
      const { title, locale, discountType, value } = selection;
      let subtitle = '';
      if (discountType === 'percentage') {
        subtitle = `${value}% off`;
      } else if (discountType === 'fixed') {
        subtitle = `$${value} off`;
      } else {
        subtitle = discountType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
      }
      return {
        title: `${title} (${locale.toUpperCase()})`,
        subtitle,
        media: selection.media,
      };
    },
  },
  orderings: [
    {
      title: 'Featured First',
      name: 'featuredDesc',
      by: [{ field: 'featured', direction: 'desc' }, { field: 'startAt', direction: 'desc' }],
    },
    {
      title: 'Start Date (Newest)',
      name: 'startAtDesc',
      by: [{ field: 'startAt', direction: 'desc' }],
    },
    {
      title: 'End Date (Soonest)',
      name: 'endAtAsc',
      by: [{ field: 'endAt', direction: 'asc' }],
    },
  ],
});
