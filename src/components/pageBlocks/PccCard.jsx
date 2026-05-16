import { urlFor } from '../../sanity/imageBuilder.js';

export default function PccCard({ member, compact = false }) {
  if (!member) return null;
  const imageUrl = member.photo
    ? urlFor(member.photo).width(400).height(400).fit('crop').auto('format').url()
    : null;

  if (compact || !imageUrl) {
    return (
      <article className="border border-border bg-cream/70 p-5">
        <h3 className="font-serif text-h3 text-ink">{member.name}</h3>
        <p className="font-sans text-sm uppercase tracking-wider text-crimson mt-1">
          {member.role}
          {member.roleNote && <span className="text-mid normal-case tracking-normal"> · {member.roleNote}</span>}
        </p>
        {member.bio && <p className="mt-3 text-base text-ink/90">{member.bio}</p>}
        {!member.viaParishOffice && member.email && (
          <p className="mt-3 text-sm">
            <a href={`mailto:${member.email}`}>{member.email}</a>
          </p>
        )}
      </article>
    );
  }

  return (
    <article className="border border-border bg-white">
      <div className="aspect-square overflow-hidden bg-cream">
        <img
          src={imageUrl}
          alt={member.photoAlt || member.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-h3 text-ink">{member.name}</h3>
        <p className="font-sans text-sm uppercase tracking-wider text-crimson mt-1">{member.role}</p>
        {member.bio && <p className="mt-3 text-base text-ink/90">{member.bio}</p>}
      </div>
    </article>
  );
}
