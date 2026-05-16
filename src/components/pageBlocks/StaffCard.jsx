import { PortableText } from '@portabletext/react';
import PlaceholderImage from '../ui/PlaceholderImage.jsx';
import { urlFor } from '../../sanity/imageBuilder.js';

export default function StaffCard({ person }) {
  if (!person) return null;
  const imageUrl = person.photo
    ? urlFor(person.photo).width(600).height(600).fit('crop').auto('format').url()
    : null;
  const isClergy = person.isClergy;

  return (
    <article
      className={`group flex flex-col bg-white ${isClergy ? 'border-2 border-crimson/20' : 'border border-border'}`}
    >
      <div className="relative aspect-square overflow-hidden bg-cream">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={person.photoAlt || person.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <PlaceholderImage label={`Portrait of ${person.name}`} aspectRatio="1/1" className="absolute inset-0" />
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-h3 text-ink">{person.name}</h3>
        <p className="font-sans text-sm uppercase tracking-wider text-crimson mt-1">{person.role}</p>
        {person.bio && (
          <div className="mt-3 prose-htss text-base text-ink/90">
            <PortableText value={person.bio} />
          </div>
        )}
        {person.email && (
          <p className="mt-4 text-sm">
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </p>
        )}
      </div>
    </article>
  );
}
