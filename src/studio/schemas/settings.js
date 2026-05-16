export const settings = {
  name: 'settings',
  title: 'Site settings',
  type: 'document',
  description: 'Site-wide values. Singleton: edit the existing entry, do not create a second one.',
  fields: [
    {
      name: 'openingHours',
      title: 'Opening hours',
      type: 'text',
      rows: 2,
      initialValue: '10am – 5pm, Monday to Saturday',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 2,
      initialValue: '146 Sloane Street, Chelsea, London SW1X 9BZ',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      initialValue: '020 7730 7270',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'emailParish',
      title: 'Parish office email',
      type: 'string',
      initialValue: 'parishoffice@sloanechurch.org',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'emailRector',
      title: 'Rector email',
      type: 'string',
      initialValue: 'rector@sloanechurch.org',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'emailEvents',
      title: 'Events email',
      type: 'string',
      initialValue: 'manager@sloanechurch.org',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'emailMusic',
      title: 'Music email',
      type: 'string',
      initialValue: 'music@sloanechurch.org',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
      initialValue: 'https://instagram.com/sloanechurch',
    },
    {
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
      initialValue: 'https://facebook.com/sloanechurch',
    },
    {
      name: 'giveUrl',
      title: 'Give URL',
      type: 'url',
      description: 'MyDona giving link. Placeholder until MyDona embed is ready.',
    },
    {
      name: 'mailchimpEmbedCode',
      title: 'Mailchimp embed code',
      type: 'text',
      rows: 6,
      description:
        'Paste the embed code from Mailchimp. Leave blank to show a "Coming soon" placeholder on the Stay Connected page.',
    },
    {
      name: 'ticketSourceBaseUrl',
      title: 'TicketSource base URL',
      type: 'url',
      initialValue: 'https://www.ticketsource.co.uk/holytrinitysloanesquare',
    },
    {
      name: 'ga4MeasurementId',
      title: 'Google Analytics 4 measurement ID',
      type: 'string',
      description: 'Format: G-XXXXXXXXXX. Leave blank to disable analytics.',
    },
  ],
  preview: {
    prepare() {
      return { title: 'Site settings' };
    },
  },
};
