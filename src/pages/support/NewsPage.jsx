import Meta from '../../components/seo/Meta.jsx';
import PageHero from '../../components/pageBlocks/PageHero.jsx';
import NewsCard from '../../components/pageBlocks/NewsCard.jsx';
import { SkeletonCardGrid } from '../../components/ui/Skeleton.jsx';
import { useSanityData } from '../../hooks/useSanityData.js';
import { RECENT_NEWS_QUERY } from '../../sanity/queries.js';
import { Link } from 'react-router-dom';

export default function NewsPage() {
  const { data, loading, isConfigured } = useSanityData(RECENT_NEWS_QUERY, null, { fallback: [] });
  const posts = data || [];

  return (
    <>
      <Meta
        title="News and notices"
        description="News, notices, and reflections from Holy Trinity Sloane Square."
      />
      <PageHero
        eyebrow="Support"
        title="News and notices"
        lede="What we are doing, what is coming up, and the Rector's occasional reflections. The full weekly news comes by email."
      />

      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-22">
        {loading && isConfigured ? (
          <SkeletonCardGrid count={6} />
        ) : posts.length === 0 ? (
          <p className="text-mid max-w-prose">
            No posts yet. The weekly bulletin will reach you sooner than this page does;{' '}
            <Link to="/support/stay-connected">subscribe here</Link>.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <NewsCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
