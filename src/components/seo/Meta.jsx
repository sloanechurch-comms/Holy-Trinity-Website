import { Head } from 'vite-react-ssg';
import { useLocation } from 'react-router-dom';
import { SITE_NAME, SITE_URL } from '../../data/static.js';
import { buildCanonical, buildPageTitle } from '../../utils/seo.js';

export default function Meta({
  title,
  description,
  image,
  imageAlt,
  type = 'website',
  noindex = false,
  structuredData,
  canonicalOverride,
}) {
  const location = useLocation();
  const pageTitle = buildPageTitle(title);
  const canonical = canonicalOverride || buildCanonical(location.pathname);
  const ogImage = image || `${SITE_URL}/og-default.jpg`;
  const ogImageAlt =
    imageAlt ||
    'Holy Trinity Sloane Square: the nave looking east toward the Burne-Jones window';

  return (
    <Head>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Head>
  );
}
