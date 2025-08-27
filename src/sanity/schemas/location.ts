import { defineField, defineType } from 'sanity';

export const location = defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Location Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
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
    }),
    defineField({
      name: 'geo',
      title: 'Geographic Coordinates',
      type: 'object',
      fields: [
        { name: 'lat', type: 'number', title: 'Latitude' },
        { name: 'lng', type: 'number', title: 'Longitude' },
      ],
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
      ],
    }),
    defineField({
      name: 'type',
      title: 'Location Type',
      type: 'string',
      options: {
        list: [
          { title: 'City', value: 'city' },
          { title: 'Beach', value: 'beach' },
          { title: 'Mountain', value: 'mountain' },
          { title: 'Historical Site', value: 'historical' },
          { title: 'National Park', value: 'national-park' },
          { title: 'Temple', value: 'temple' },
          { title: 'Market', value: 'market' },
          { title: 'Museum', value: 'museum' },
          { title: 'Garden', value: 'garden' },
          { title: 'Waterfall', value: 'waterfall' },
        ],
      },
      validation: (Rule) => Rule.required(),
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
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'bestTimeToVisit',
      title: 'Best Time to Visit',
      type: 'string',
      options: {
        list: [
          { title: 'Year Round', value: 'year-round' },
          { title: 'Dry Season (Dec-Apr)', value: 'dry-season' },
          { title: 'Monsoon Season (May-Nov)', value: 'monsoon-season' },
          { title: 'Peak Season (Dec-Mar)', value: 'peak-season' },
          { title: 'Shoulder Season (Apr-May, Sep-Nov)', value: 'shoulder-season' },
        ],
      },
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
  ],
  preview: {
    select: {
      title: 'name',
      locale: 'locale',
      type: 'type',
      media: 'images.0',
    },
    prepare(selection) {
      const { title, locale, type } = selection;
      return {
        title: `${title} (${locale.toUpperCase()})`,
        subtitle: type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' '),
        media: selection.media,
      };
    },
  },
  orderings: [
    {
      title: 'Name A-Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
    {
      title: 'Type',
      name: 'typeAsc',
      by: [{ field: 'type', direction: 'asc' }],
    },
  ],
});
