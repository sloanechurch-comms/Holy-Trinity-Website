import { useMemo } from 'react';
import Fuse from 'fuse.js';
import { SEARCHABLE_PAGES } from '../data/static.js';

export function useSearch(extraItems = []) {
  const fuse = useMemo(() => {
    const corpus = [
      ...SEARCHABLE_PAGES.map((p) => ({
        type: 'page',
        title: p.title,
        href: p.href,
        snippet: p.keywords,
      })),
      ...extraItems,
    ];
    return new Fuse(corpus, {
      keys: ['title', 'snippet', 'keywords'],
      threshold: 0.35,
      ignoreLocation: true,
      minMatchCharLength: 2,
    });
  }, [extraItems]);

  return {
    search: (query) => {
      if (!query || query.trim().length < 2) return [];
      return fuse.search(query.trim()).map((r) => r.item);
    },
  };
}
