export const staff = {
  name: 'staff',
  title: 'Staff member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'e.g. Rector, Director of Music, Parish Administrator',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first on the Our Team page.',
      validation: (Rule) => Rule.required().integer().min(0),
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      description: 'Square or portrait orientation works best.',
    },
    {
      name: 'photoAlt',
      title: 'Photo alt text',
      type: 'string',
      description: 'Required if a photo is uploaded. Describe the image for screen readers.',
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
      description: 'Tick to confirm consent is on file for this image.',
      initialValue: false,
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Keep to 50 to 120 words. Warm, specific, and not CV-like.',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Optional. Shown on the team page if provided.',
      validation: (Rule) =>
        Rule.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { name: 'email', invert: false }).warning(
          'This does not look like a valid email address.',
        ),
    },
    {
      name: 'isClergy',
      title: 'Clergy member',
      type: 'boolean',
      description: 'Affects card styling on the team page.',
      initialValue: false,
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
  orderings: [{ title: 'Display order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
};
