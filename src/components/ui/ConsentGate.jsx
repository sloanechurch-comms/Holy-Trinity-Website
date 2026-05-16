import { useConsent } from '../../hooks/useConsent.js';

const CATEGORY_LABELS = {
  analytics: 'analytics',
  marketing: 'marketing and embeds',
};

export default function ConsentGate({ category = 'marketing', label, children }) {
  const { consent, acceptAll } = useConsent();
  const allowed = consent[category];

  if (allowed) return children;

  const human = CATEGORY_LABELS[category] || category;

  return (
    <div className="bg-cream border border-border p-6 sm:p-8 my-6 text-center">
      <p className="font-serif text-lg text-ink mb-3">
        {label || 'This content requires your consent to load.'}
      </p>
      <p className="text-mid text-sm mb-4 max-w-prose mx-auto">
        It uses cookies in the {human} category. Choose your preferences in the cookie banner, or accept all to load this block.
      </p>
      <button
        type="button"
        onClick={acceptAll}
        className="inline-flex items-center px-4 py-2 border border-crimson text-crimson hover:bg-crimson hover:text-white transition-colors duration-150 font-serif"
      >
        Accept all cookies and load
      </button>
    </div>
  );
}
