import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useConsent } from '../../hooks/useConsent.js';

export default function CookieBanner() {
  const { hasDecided, acceptAll, acceptNecessary, setPreferences } = useConsent();
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  // Skip rendering during SSG and the very first client paint. This keeps
  // the banner out of the static HTML for every page and avoids a flash
  // for returning visitors whose consent decision is in localStorage.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || hasDecided) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ duration: 0.25 }}
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-desc"
        className="fixed inset-x-0 bottom-0 z-40 bg-ink text-white border-t border-crimson shadow-xl"
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6">
          {!showPrefs ? (
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h2 id="cookie-banner-title" className="font-serif text-lg sm:text-xl text-white mb-1">
                  We use cookies
                </h2>
                <p id="cookie-banner-desc" className="text-sm text-white/85 leading-relaxed">
                  Necessary cookies keep the site working. Analytics help us understand how the site is used. Marketing
                  cookies enable embedded content like maps, newsletter signup, and the donation widget.{' '}
                  <Link to="/cookies" className="text-cream underline underline-offset-2">
                    Read our cookie policy
                  </Link>
                  .
                </p>
              </div>
              <div className="flex flex-wrap gap-2 lg:flex-nowrap">
                <button
                  type="button"
                  onClick={() => setShowPrefs(true)}
                  className="px-4 py-2 border border-white/40 text-white hover:bg-white/10 transition-colors text-sm whitespace-nowrap"
                >
                  Choose preferences
                </button>
                <button
                  type="button"
                  onClick={acceptNecessary}
                  className="px-4 py-2 border border-white/40 text-white hover:bg-white/10 transition-colors text-sm whitespace-nowrap"
                >
                  Necessary only
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="px-4 py-2 bg-crimson text-white hover:bg-red transition-colors text-sm whitespace-nowrap"
                >
                  Accept all
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="font-serif text-xl text-white mb-3">Cookie preferences</h2>
              <ul className="flex flex-col gap-3 text-sm">
                <li className="flex items-start gap-3">
                  <input
                    id="cookie-necessary"
                    type="checkbox"
                    checked
                    disabled
                    className="mt-1"
                    aria-describedby="cookie-necessary-desc"
                  />
                  <label htmlFor="cookie-necessary" className="text-white/85 leading-relaxed">
                    <span className="font-semibold text-white">Necessary</span>{' '}
                    <span id="cookie-necessary-desc">
                      Required for the site to function. Always on.
                    </span>
                  </label>
                </li>
                <li className="flex items-start gap-3">
                  <input
                    id="cookie-analytics"
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="mt-1"
                  />
                  <label htmlFor="cookie-analytics" className="text-white/85 leading-relaxed">
                    <span className="font-semibold text-white">Analytics</span>. Google Analytics 4, to understand site usage.
                  </label>
                </li>
                <li className="flex items-start gap-3">
                  <input
                    id="cookie-marketing"
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="mt-1"
                  />
                  <label htmlFor="cookie-marketing" className="text-white/85 leading-relaxed">
                    <span className="font-semibold text-white">Marketing and embeds</span>. Google Maps, Mailchimp signup, MyDona donation widget.
                  </label>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-5">
                <button
                  type="button"
                  onClick={() => setShowPrefs(false)}
                  className="px-4 py-2 border border-white/40 text-white hover:bg-white/10 text-sm"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setPreferences({ analytics, marketing })}
                  className="px-4 py-2 bg-crimson text-white hover:bg-red text-sm"
                >
                  Save preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
