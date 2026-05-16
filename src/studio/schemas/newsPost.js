export const newsPost = {
  name: 'newsPost',
  title: 'News post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'staff' }],
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Shown on listing pages and in social shares. Up to 200 characters.',
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt text', type: 'string' },
            { name: 'caption', title: 'Caption', type: 'string' },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featuredImage',
      title: 'Featured image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'featuredImageAlt',
      title: 'Featured image alt text',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.featuredImage && !value) return 'Alt text is required when an image is present.';
          return true;
        }),
    },
    {
      name: 'consentConfirmed',
      title: 'Photo consent confirmed',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'title', title: 'SEO title', type: 'string', validation: (Rule) => Rule.max(70) },
        { name: 'description', title: 'SEO description', type: 'text', rows: 2, validation: (Rule) => Rule.max(160) },
      ],
    },
  ],
  preview: {
    select: { title: 'title', publishedAt: 'publishedAt', media: 'featuredImage' },
    prepare({ title, publishedAt, media }) {
      const date = publishedAt ? new Date(publishedAt).toLocaleDateString('en-GB') : '';
      return { title, subtitle: date, media };
    },
  },
  orderings: [
    { title: 'Newest first', name: 'newest', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
};
