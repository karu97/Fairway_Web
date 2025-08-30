import { defineField, defineType } from 'sanity';

export const content = defineType({
  name: 'content',
  title: 'Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          { title: 'Home Page', value: 'home' },
          { title: 'About Page', value: 'about' },
          { title: 'Contact Page', value: 'contact' },
          { title: 'Footer', value: 'footer' },
        ],
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
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'subtitle', type: 'text', title: 'Subtitle', rows: 2 },
        { name: 'description', type: 'text', title: 'Description', rows: 3 },
        { name: 'backgroundImage', type: 'image', title: 'Background Image' },
        { name: 'ctaPrimary', type: 'string', title: 'Primary CTA Text' },
        { name: 'ctaPrimaryLink', type: 'string', title: 'Primary CTA Link' },
        { name: 'ctaSecondary', type: 'string', title: 'Secondary CTA Text' },
        { name: 'ctaSecondaryLink', type: 'string', title: 'Secondary CTA Link' },
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'features',
          title: 'Features Section',
          fields: [
            { name: 'title', type: 'string', title: 'Section Title' },
            { name: 'description', type: 'text', title: 'Section Description', rows: 2 },
            {
              name: 'features',
              type: 'array',
              title: 'Features',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'title', type: 'string', title: 'Feature Title' },
                    { name: 'description', type: 'text', title: 'Feature Description', rows: 2 },
                    { name: 'icon', type: 'string', title: 'Icon Name' },
                    { name: 'color', type: 'string', title: 'Color Theme' },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'object',
          name: 'stats',
          title: 'Stats Section',
          fields: [
            { name: 'title', type: 'string', title: 'Section Title' },
            { name: 'description', type: 'text', title: 'Section Description', rows: 2 },
            {
              name: 'stats',
              type: 'array',
              title: 'Statistics',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'number', type: 'string', title: 'Number' },
                    { name: 'label', type: 'string', title: 'Label' },
                    { name: 'icon', type: 'string', title: 'Icon Name' },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'object',
          name: 'team',
          title: 'Team Section',
          fields: [
            { name: 'title', type: 'string', title: 'Section Title' },
            { name: 'description', type: 'text', title: 'Section Description', rows: 2 },
            {
              name: 'members',
              type: 'array',
              title: 'Team Members',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'name', type: 'string', title: 'Name' },
                    { name: 'position', type: 'string', title: 'Position' },
                    { name: 'bio', type: 'text', title: 'Bio', rows: 3 },
                    { name: 'image', type: 'image', title: 'Profile Image' },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'object',
          name: 'contact',
          title: 'Contact Section',
          fields: [
            { name: 'title', type: 'string', title: 'Section Title' },
            { name: 'description', type: 'text', title: 'Section Description', rows: 2 },
            {
              name: 'contactMethods',
              type: 'array',
              title: 'Contact Methods',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'type', type: 'string', title: 'Type (phone, email, address, hours)' },
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'value', type: 'text', title: 'Value', rows: 2 },
                    { name: 'icon', type: 'string', title: 'Icon Name' },
                  ],
                },
              ],
            },
            { name: 'emergencyContact', type: 'string', title: 'Emergency Contact Number' },
          ],
        },
        {
          type: 'object',
          name: 'story',
          title: 'Story Section',
          fields: [
            { name: 'title', type: 'string', title: 'Section Title' },
            { name: 'content', type: 'array', title: 'Story Content', of: [{ type: 'block' }] },
          ],
        },
        {
          type: 'object',
          name: 'values',
          title: 'Values Section',
          fields: [
            { name: 'title', type: 'string', title: 'Section Title' },
            { name: 'description', type: 'text', title: 'Section Description', rows: 2 },
            {
              name: 'values',
              type: 'array',
              title: 'Values',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'title', type: 'string', title: 'Value Title' },
                    { name: 'description', type: 'text', title: 'Value Description', rows: 2 },
                    { name: 'icon', type: 'string', title: 'Icon Name' },
                    { name: 'color', type: 'string', title: 'Color Theme' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'SEO Title' },
        { name: 'description', type: 'text', title: 'SEO Description' },
        { name: 'keywords', type: 'array', of: [{ type: 'string' }], title: 'Keywords' },
        { name: 'ogImage', type: 'image', title: 'Open Graph Image' },
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
      title: 'pageType',
      locale: 'locale',
    },
    prepare(selection) {
      const { title, locale } = selection;
      return {
        title: `${title.charAt(0).toUpperCase() + title.slice(1)} Page`,
        subtitle: `Language: ${locale.toUpperCase()}`,
      };
    },
  },
});
