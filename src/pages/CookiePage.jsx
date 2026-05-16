import Meta from '../components/seo/Meta.jsx';
import PageHero from '../components/pageBlocks/PageHero.jsx';
import { useConsent } from '../hooks/useConsent.js';

export default function CookiePage() {
  const { reset } = useConsent();
  return (
    <>
      <Meta
        title="Cookie policy"
        description="The cookies used at sloanechurch.org and htss.org, and how to change your preferences."
      />
      <PageHero
        eyebrow="Cookies"
        title="Cookie policy"
        lede="The cookies used on this site, what each does, and how to change your preferences."
      />

      <article className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8 prose-htss pb-22">
        <p className="text-mid text-sm">Last updated: 16 May 2026.</p>

        <h2>What cookies are</h2>
        <p>
          Cookies are small text files that websites place on your device. We use them to keep the site working, to understand how the site is used, and to load embedded content from third parties.
        </p>

        <h2>The cookies we use</h2>

        <h3>Necessary</h3>
        <p>
          Always on. These are required for the site to function and cannot be opted out of.
        </p>
        <ul>
          <li>
            <strong>htss-cookie-consent-v1</strong>. Stores your cookie preferences in your browser. Set by us; expires when you reset it.
          </li>
        </ul>

        <h3>Analytics (off by default)</h3>
        <p>Set only if you accept analytics in the cookie banner.</p>
        <ul>
          <li>
            <strong>_ga, _ga_*</strong>. Google Analytics 4. Set by Google; expire after up to 2 years. Used to understand site usage in aggregate.
          </li>
        </ul>

        <h3>Marketing and embeds (off by default)</h3>
        <p>
          Set only if you accept marketing in the cookie banner. These are loaded by embedded content from third parties: Google Maps, Mailchimp, and MyDona.
        </p>
        <ul>
          <li>Cookies set by Google (Maps embed).</li>
          <li>Cookies set by Intuit Mailchimp (newsletter signup).</li>
          <li>Cookies set by MyDona (donation widget).</li>
        </ul>
        <p>
          For details of cookies set by these third parties, see their own cookie policies.
        </p>

        <h2>How to change your preferences</h2>
        <p>
          You can change your cookie preferences at any time. Press the button below to reopen the cookie banner.
        </p>
        <p>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center px-4 py-2 border border-crimson text-crimson hover:bg-crimson hover:text-white transition-colors duration-150 font-sans"
          >
            Change cookie preferences
          </button>
        </p>

        <h2>How to refuse cookies in your browser</h2>
        <p>
          Most browsers let you refuse cookies or delete them. See the help section of your browser for details. If you disable necessary cookies, parts of the site (including the cookie banner itself) may not work as expected.
        </p>
      </article>
    </>
  );
}
