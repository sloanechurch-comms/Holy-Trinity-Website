import { Link } from 'react-router-dom';
import PlaceholderImage from '../ui/PlaceholderImage.jsx';
import { urlFor } from '../../sanity/imageBuilder.js';

function formatDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function NewsCard({ post }) {
  if (!post) return null;
  const href = `/support/news/${post.slug}`;
  const imageUrl = post.featuredImage
    ? urlFor(post.featuredImage).width(800).height(500).fit('crop').auto('format').url()
    : null;

  return (
    <article className="group flex flex-col bg-white border border-border transition-shadow duration-150 hover:shadow-sm">
      <Link to={href} className="block no-underline">
        <div className="relative aspect-[16/10] overflow-hidden bg-cream">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={post.featuredImageAlt || post.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          ) : (
            <PlaceholderImage label={`Image for ${post.title}`} aspectRatio="16/10" className="absolute inset-0" />
          )}
        </div>
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <p className="font-sans text-xs uppercase tracking-[0.15em] text-mid">{formatDate(post.publishedAt)}</p>
        <h3 className="font-serif text-h3 text-ink mt-1.5">
          <Link to={href} className="no-underline hover:text-crimson">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 text-ink text-base flex-grow">{post.excerpt}</p>
        <p className="mt-4">
          <Link to={href} className="font-sans text-sm uppercase tracking-wider text-crimson no-underline">
            Read on <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </article>
  );
}
