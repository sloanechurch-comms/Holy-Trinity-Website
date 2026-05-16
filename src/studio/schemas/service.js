export const service = {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Service name',
      type: 'string',
      description: 'e.g. Choral Eucharist, Choral Evensong.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'day',
      title: 'Day',
      type: 'string',
      options: {
        list: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Daily',
        ].map((d) => ({ title: d, value: d })),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'time',
      title: 'Time',
      type: 'string',
      description: 'Format: 11am, 6.30pm. Use lowercase am/pm without a space.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display order',
      type: 'number',
      validation: (Rule) => Rule.required().integer().min(0),
    },
    {
      name: 'shortDescription',
      title: 'Short description',
      type: 'text',
      rows: 3,
      description: 'Up to 200 characters. Shown on the services page card.',
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'fullDescription',
      title: 'Full description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Optional longer description.',
    },
    {
      name: 'isSeasonal',
      title: 'Seasonal',
      type: 'boolean',
      initialValue: false,
      description: 'Tick if this service only runs in a particular season (e.g. Advent carols).',
    },
    {
      name: 'seasonalNote',
      title: 'Seasonal note',
      type: 'text',
      rows: 2,
      description: 'Shown only when the service is marked seasonal. e.g. "Runs Advent Sundays only".',
    },
  ],
  preview: {
    select: { title: 'name', day: 'day', time: 'time' },
    prepare({ title, day, time }) {
      return { title, subtitle: `${day || ''} ${time || ''}`.trim() };
    },
  },
  orderings: [{ title: 'Display order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
};
