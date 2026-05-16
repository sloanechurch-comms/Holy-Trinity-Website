export const pageContent = {
  name: 'pageContent',
  title: 'Page content block',
  type: 'document',
  description: 'Editable text blocks on otherwise-static pages. Look up by key from the frontend.',
  fields: [
    {
      name: 'key',
      title: 'Key',
      type: 'string',
      description: 'A unique identifier. e.g. "homepage-intro", "what-to-expect-opening".',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Admin title',
      type: 'string',
      description: 'For admin reference only. Not shown publicly.',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lastUpdated',
      title: 'Last updated',
      type: 'datetime',
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'key' },
  },
};
