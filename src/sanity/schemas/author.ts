import { defineField, defineType } from 'sanity';

export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
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
      name: 'image',
      title: 'Image',
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
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Travel Writer', value: 'travel-writer' },
          { title: 'Hotel Manager', value: 'hotel-manager' },
          { title: 'Tour Guide', value: 'tour-guide' },
          { title: 'Local Expert', value: 'local-expert' },
          { title: 'Photographer', value: 'photographer' },
          { title: 'Chef', value: 'chef' },
          { title: 'Cultural Expert', value: 'cultural-expert' },
        ],
      },
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'social',
      title: 'Social Media',
      type: 'object',
      fields: [
        { name: 'twitter', type: 'url', title: 'Twitter/X' },
        { name: 'linkedin', type: 'url', title: 'LinkedIn' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'facebook', type: 'url', title: 'Facebook' },
      ],
    }),
    defineField({
      name: 'expertise',
      title: 'Areas of Expertise',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Luxury Hotels', value: 'luxury-hotels' },
          { title: 'Adventure Travel', value: 'adventure-travel' },
          { title: 'Cultural Tourism', value: 'cultural-tourism' },
          { title: 'Food & Dining', value: 'food-dining' },
          { title: 'Beach Destinations', value: 'beach-destinations' },
          { title: 'Mountain Tourism', value: 'mountain-tourism' },
          { title: 'Historical Sites', value: 'historical-sites' },
          { title: 'Wildlife Tourism', value: 'wildlife-tourism' },
          { title: 'Business Travel', value: 'business-travel' },
          { title: 'Family Travel', value: 'family-travel' },
        ],
      },
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
      role: 'role',
      media: 'image',
    },
    prepare(selection) {
      const { title, role } = selection;
      return {
        title,
        subtitle: role ? role.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Author',
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
      title: 'Role',
      name: 'roleAsc',
      by: [{ field: 'role', direction: 'asc' }],
    },
  ],
});
