import { useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'htss-cookie-consent-v1';

const DEFAULT_CONSENT = {
  necessary: true,
  analytics: false,
  marketing: false,
  decidedAt: null,
};

function readStored() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_CONSENT, ...parsed, necessary: true };
  } catch {
    return null;
  }
}

function writeStored(value) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent('htss-consent-changed', { detail: value }));
  } catch {
    /* localStorage may be disabled */
  }
}

export function useConsent() {
  const [consent, setConsent] = useState(() => readStored() || DEFAULT_CONSENT);
  const [hasDecided, setHasDecided] = useState(() => !!readStored()?.decidedAt);

  useEffect(() => {
    const handler = (event) => {
      const next = event.detail || readStored();
      if (next) {
        setConsent(next);
        setHasDecided(!!next.decidedAt);
      }
    };
    window.addEventListener('htss-consent-changed', handler);
    return () => window.removeEventListener('htss-consent-changed', handler);
  }, []);

  const acceptAll = useCallback(() => {
    const next = { necessary: true, analytics: true, marketing: true, decidedAt: new Date().toISOString() };
    writeStored(next);
    setConsent(next);
    setHasDecided(true);
  }, []);

  const acceptNecessary = useCallback(() => {
    const next = { necessary: true, analytics: false, marketing: false, decidedAt: new Date().toISOString() };
    writeStored(next);
    setConsent(next);
    setHasDecided(true);
  }, []);

  const setPreferences = useCallback((prefs) => {
    const next = {
      necessary: true,
      analytics: !!prefs.analytics,
      marketing: !!prefs.marketing,
      decidedAt: new Date().toISOString(),
    };
    writeStored(next);
    setConsent(next);
    setHasDecided(true);
  }, []);

  const reset = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(STORAGE_KEY);
      window.dispatchEvent(new CustomEvent('htss-consent-changed', { detail: DEFAULT_CONSENT }));
    }
    setConsent(DEFAULT_CONSENT);
    setHasDecided(false);
  }, []);

  return { consent, hasDecided, acceptAll, acceptNecessary, setPreferences, reset };
}
