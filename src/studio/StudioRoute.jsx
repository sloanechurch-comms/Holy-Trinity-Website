import { Suspense, lazy } from 'react';
import { studioConfig } from '../sanity/studio.config.js';
import { isSanityConfigured } from '../sanity/client.js';

const Studio = lazy(() => import('sanity').then((m) => ({ default: m.Studio })));

export default function StudioRoute() {
  if (!isSanityConfigured) {
    return (
      <main className="mx-auto max-w-prose px-6 py-22 prose-htss">
        <h1 className="font-serif text-h1 mb-4">Sanity Studio not configured</h1>
        <p>
          The Sanity project ID has not been set in the environment. Add{' '}
          <code>VITE_SANITY_PROJECT_ID</code> and <code>VITE_SANITY_DATASET</code> to your{' '}
          <code>.env</code> file, then restart the dev server.
        </p>
        <p>
          See <code>docs/INITIAL_SETUP.md</code> in the project root for a step-by-step walkthrough.
        </p>
      </main>
    );
  }

  return (
    <div className="h-screen w-screen">
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center bg-cream">
            <p className="font-serif text-h2 text-crimson">Loading Studio…</p>
          </div>
        }
      >
        <Studio config={studioConfig} />
      </Suspense>
    </div>
  );
}
