import { defineField, defineType } from 'sanity';

export const settings = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'defaultLocale',
      title: 'Default Language',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Sinhala', value: 'si' },
          { title: 'Tamil', value: 'ta' },
        ],
      },
      initialValue: 'en',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'supportedLocales',
      title: 'Supported Languages',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Sinhala', value: 'si' },
          { title: 'Tamil', value: 'ta' },
        ],
      },
      initialValue: ['en'],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'defaultSEO',
      title: 'Default SEO',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Default Title' },
        { name: 'description', type: 'text', title: 'Default Description' },
        { name: 'ogImage', type: 'image', title: 'Default Open Graph Image' },
        { name: 'keywords', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
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
      name: 'siteIcon',
      title: 'Site Icon (Favicon)',
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
      name: 'brandColors',
      title: 'Brand Colors',
      type: 'object',
      fields: [
        { name: 'primary', type: 'string', title: 'Primary Color (hex)', initialValue: '#2563eb' },
        { name: 'secondary', type: 'string', title: 'Secondary Color (hex)', initialValue: '#1e40af' },
        { name: 'accent', type: 'string', title: 'Accent Color (hex)', initialValue: '#3b82f6' },
        { name: 'text', type: 'string', title: 'Text Color (hex)', initialValue: '#1f2937' },
        { name: 'background', type: 'string', title: 'Background Color (hex)', initialValue: '#ffffff' },
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'phone', type: 'string', title: 'Phone' },
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'address', type: 'text', title: 'Address' },
      ],
    }),
    defineField({
      name: 'social',
      title: 'Social Media',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'url', title: 'Facebook' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'twitter', type: 'url', title: 'Twitter/X' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
      locale: 'defaultLocale',
    },
    prepare(selection) {
      const { title, locale } = selection;
      return {
        title: `${title} Settings`,
        subtitle: `Default: ${locale.toUpperCase()}`,
      };
    },
  },
});
