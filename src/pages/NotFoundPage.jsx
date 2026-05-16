import { Link } from 'react-router-dom';
import Meta from '../components/seo/Meta.jsx';
import OrnamentalRule from '../components/ui/OrnamentalRule.jsx';

export default function NotFoundPage() {
  return (
    <>
      <Meta title="Not found" description="The page you are looking for has moved or does not exist." noindex />
      <section className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8 py-30 text-center">
        <h1 className="font-serif text-display text-crimson">Not found</h1>
        <OrnamentalRule />
        <p className="font-serif text-xl text-ink leading-relaxed">
          This page does not exist, or has moved. Please use the links below to find what you are looking for.
        </p>
        <ul className="mt-10 flex flex-col sm:flex-row sm:justify-center gap-4 text-base">
          <li>
            <Link to="/" className="font-sans uppercase tracking-wider text-crimson no-underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/worship/services" className="font-sans uppercase tracking-wider text-crimson no-underline">
              Service times
            </Link>
          </li>
          <li>
            <Link to="/search" className="font-sans uppercase tracking-wider text-crimson no-underline">
              Search
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-sans uppercase tracking-wider text-crimson no-underline">
              Contact
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
