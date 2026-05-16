export const patron = {
  name: 'patron',
  title: 'Patron',
  type: 'document',
  description: 'Singleton document for the parish Patron. Edit the existing entry; do not create a second one.',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Full title and name. e.g. "The Earl Cadogan".',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Usually just "Patron".',
      initialValue: 'Patron',
    },
    {
      name: 'note',
      title: 'Note',
      type: 'text',
      rows: 4,
      description: 'Brief context about the Patron’s connection to the parish. Up to 300 characters.',
      validation: (Rule) => Rule.max(300),
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'photoAlt',
      title: 'Photo alt text',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.photo && !value) return 'Alt text is required when a photo is present.';
          return true;
        }),
    },
    {
      name: 'consentConfirmed',
      title: 'Photo consent confirmed',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'title', media: 'photo' },
  },
};
