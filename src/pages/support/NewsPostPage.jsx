import { useParams, Link, Navigate } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import Meta from '../../components/seo/Meta.jsx';
import OrnamentalRule from '../../components/ui/OrnamentalRule.jsx';
import DropCap from '../../components/ui/DropCap.jsx';
import PlaceholderImage from '../../components/ui/PlaceholderImage.jsx';
import { useSanityData } from '../../hooks/useSanityData.js';
import { NEWS_POST_BY_SLUG_QUERY } from '../../sanity/queries.js';
import { urlFor } from '../../sanity/imageBuilder.js';
import { buildArticleSchema } from '../../utils/seo.js';

function formatDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

function isLongPost(body) {
  if (!Array.isArray(body)) return false;
  const blocks = body.filter((b) => b._type === 'block').length;
  return blocks >= 4;
}

const portableComponents = {
  block: {
    h2: ({ children }) => (
      <>
        <OrnamentalRule />
        <h2>{children}</h2>
      </>
    ),
    h3: ({ children }) => <h3>{children}</h3>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  types: {
    image: ({ value }) =>
      value?.asset ? (
        <figure className="not-prose my-8">
          <img
            src={urlFor(value).width(1200).auto('format').url()}
            alt={value.alt || ''}
            className="w-full h-auto"
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="mt-2 text-sm text-mid italic">{value.caption}</figcaption>
          )}
        </figure>
      ) : null,
  },
};

export default function NewsPostPage() {
  const { slug } = useParams();
  const { data: post, loading, isConfigured } = useSanityData(NEWS_POST_BY_SLUG_QUERY, { slug });

  if (loading && isConfigured) {
    return (
      <div className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8 py-22">
        <div className="shimmer h-10 w-3/4 mb-3" />
        <div className="shimmer h-5 w-1/3" />
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/support/news" replace />;
  }

  const imageUrl = post.featuredImage ? urlFor(post.featuredImage).width(1600).auto('format').url() : null;
  const long = isLongPost(post.body);
  const firstBlock = Array.isArray(post.body) ? post.body.find((b) => b._type === 'block') : null;
  const firstText = firstBlock?.children?.map((c) => c.text || '').join('') || '';
  const restBody = Array.isArray(post.body) && long ? post.body.slice(post.body.indexOf(firstBlock) + 1) : post.body;

  return (
    <>
      <Meta
        title={post.seo?.title || post.title}
        description={post.seo?.description || post.excerpt}
        image={imageUrl}
        imageAlt={post.featuredImageAlt}
        type="article"
        structuredData={buildArticleSchema({
          title: post.title,
          excerpt: post.excerpt,
          publishedAt: post.publishedAt,
          featuredImageUrl: imageUrl,
          author: post.authorName,
        })}
      />

      <section className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <Link to="/support/news" className="font-sans text-sm uppercase tracking-wider text-crimson no-underline">
          ← All news
        </Link>
        <header className="mt-5">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-mid">
            {formatDate(post.publishedAt)}
            {post.authorName ? ` · ${post.authorName}` : ''}
          </p>
          <h1 className="font-serif text-h1 text-crimson mt-3">{post.title}</h1>
        </header>
      </section>

      {imageUrl ? (
        <figure className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 mt-8">
          <img
            src={imageUrl}
            alt={post.featuredImageAlt || ''}
            className="w-full h-auto"
            loading="lazy"
          />
        </figure>
      ) : (
        <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 mt-8">
          <PlaceholderImage label={`Image for ${post.title}`} aspectRatio="16/9" />
        </div>
      )}

      <article className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8 prose-htss py-14">
        {long && firstText ? (
          <>
            <DropCap>{firstText}</DropCap>
            {Array.isArray(restBody) && <PortableText value={restBody} components={portableComponents} />}
          </>
        ) : (
          Array.isArray(post.body) && <PortableText value={post.body} components={portableComponents} />
        )}
      </article>
    </>
  );
}
