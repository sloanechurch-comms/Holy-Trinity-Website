import { useEffect, useState } from 'react';
import { sanityClient, isSanityConfigured } from '../sanity/client.js';

export function useSanityData(query, params = null, options = {}) {
  const { fallback = null, skip = false } = options;
  const [data, setData] = useState(fallback);
  const [loading, setLoading] = useState(!skip && isSanityConfigured);
  const [error, setError] = useState(null);

  const paramsKey = params ? JSON.stringify(params) : '';

  useEffect(() => {
    if (skip || !isSanityConfigured) {
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    sanityClient
      .fetch(query, params || undefined)
      .then((result) => {
        if (cancelled) return;
        setData(result);
        setError(null);
      })
      .catch((err) => {
        if (cancelled) return;
        // eslint-disable-next-line no-console
        console.warn('[Sanity] fetch failed', err.message);
        setError(err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, paramsKey, skip]);

  return { data, loading, error, isConfigured: isSanityConfigured };
}
