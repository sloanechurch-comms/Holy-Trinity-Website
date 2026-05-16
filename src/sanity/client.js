import { createClient } from '@sanity/client';

export const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'placeholder-project-id';
export const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
export const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2026-05-16';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
  token: import.meta.env.VITE_SANITY_READ_TOKEN || undefined,
});

export const isSanityConfigured = projectId !== 'placeholder-project-id';
