import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch.js';

export default function SearchBar({ compact = false }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { search } = useSearch();

  const results = open ? search(query).slice(0, 6) : [];

  useEffect(() => {
    function onKey(e) {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === 'Escape') {
        setOpen(false);
        setQuery('');
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    function onClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim().length >= 2) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setOpen(false);
      setQuery('');
    }
  }

  function handleResultClick(href) {
    navigate(href);
    setOpen(false);
    setQuery('');
  }

  return (
    <div ref={containerRef} className="relative">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open search"
          className="p-2 text-ink hover:text-crimson transition-colors duration-150"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="flex items-center gap-2" role="search">
          <label htmlFor="searchbar-input" className="sr-only">
            Search the site
          </label>
          <input
            ref={inputRef}
            id="searchbar-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search…"
            className={`border border-border px-3 py-2 font-sans focus:border-crimson outline-none ${
              compact ? 'w-40' : 'w-56'
            }`}
            autoComplete="off"
          />
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setQuery('');
            }}
            aria-label="Close search"
            className="p-2 text-mid hover:text-crimson"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </form>
      )}

      {open && results.length > 0 && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-2 w-80 bg-white border border-border shadow-lg z-50 max-h-96 overflow-y-auto"
        >
          {results.map((r) => (
            <li key={`${r.type}:${r.href}`}>
              <button
                type="button"
                onClick={() => handleResultClick(r.href)}
                className="block w-full text-left px-4 py-3 hover:bg-cream border-b border-border last:border-b-0"
              >
                <span className="font-serif text-base text-ink">{r.title}</span>
                {r.snippet && <span className="block text-sm text-mid mt-1 line-clamp-1">{r.snippet}</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
