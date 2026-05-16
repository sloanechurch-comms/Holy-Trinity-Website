export const pccMember = {
  name: 'pccMember',
  title: 'PCC member',
  type: 'document',
  description:
    'PCC membership changes annually after the APCM (Annual Parochial Church Meeting). Refresh this list once a year.',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Churchwarden', value: 'Churchwarden' },
          { title: 'Treasurer', value: 'Treasurer' },
          { title: 'PCC Secretary', value: 'PCC Secretary' },
          { title: 'Deanery Synod Representative', value: 'Deanery Synod Representative' },
          { title: 'Lay Member', value: 'Lay Member' },
          { title: 'Other', value: 'Other' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'roleNote',
      title: 'Role note',
      type: 'string',
      description: 'Optional free-text addition if the role needs clarification.',
    },
    {
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first within their role grouping.',
      validation: (Rule) => Rule.required().integer().min(0),
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional. Most lay PCC members do not provide a photo, which is fine.',
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
    {
      name: 'bio',
      title: 'Short bio',
      type: 'text',
      rows: 4,
      description: 'Shorter than a staff bio. Up to 400 characters.',
      validation: (Rule) => Rule.max(400),
    },
    {
      name: 'viaParishOffice',
      title: 'Contact via parish office only',
      type: 'boolean',
      initialValue: true,
      description: 'When on, no personal email is shown. The parish office handles routing.',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Only used if "contact via parish office only" is off.',
      validation: (Rule) =>
        Rule.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { name: 'email', invert: false }).warning(
          'This does not look like a valid email address.',
        ),
    },
    {
      name: 'termEnd',
      title: 'Term end',
      type: 'date',
      description: 'Internal reference only. Not shown publicly. Helps you plan the next APCM refresh.',
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
  orderings: [
    {
      title: 'Role then order',
      name: 'roleOrder',
      by: [
        { field: 'role', direction: 'asc' },
        { field: 'order', direction: 'asc' },
        { field: 'name', direction: 'asc' },
      ],
    },
  ],
};
