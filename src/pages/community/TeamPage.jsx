import { Link } from 'react-router-dom';
import Meta from '../../components/seo/Meta.jsx';
import PageHero from '../../components/pageBlocks/PageHero.jsx';
import StaffCard from '../../components/pageBlocks/StaffCard.jsx';
import { SkeletonCardGrid } from '../../components/ui/Skeleton.jsx';
import { useSanityData } from '../../hooks/useSanityData.js';
import { STAFF_QUERY } from '../../sanity/queries.js';

const FALLBACK_STAFF = [
  { _id: 'fb-1', name: 'Fr Michael Robinson', role: 'Rector', isClergy: true, bio: null },
  { _id: 'fb-2', name: 'Max Barley', role: 'Director of Music', isClergy: false, bio: null },
  { _id: 'fb-3', name: 'Makoto', role: 'Organist', isClergy: false, bio: null },
  { _id: 'fb-4', name: 'Clinton McMaster', role: 'Events Manager', isClergy: false, bio: null },
  { _id: 'fb-5', name: 'Fiona Parsons', role: 'Parish Administrator', isClergy: false, bio: null },
];

export default function TeamPage() {
  const { data, loading, isConfigured } = useSanityData(STAFF_QUERY, null, {
    fallback: FALLBACK_STAFF,
  });
  const staff = data && data.length > 0 ? data : FALLBACK_STAFF;

  return (
    <>
      <Meta
        title="Our team"
        description="The clergy and staff who serve Holy Trinity Sloane Square day to day."
      />
      <PageHero
        eyebrow="Community"
        title="Our team"
        lede="The clergy and staff who serve the parish day to day. For the Patron, churchwardens, and PCC, see Governance."
      />

      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-22">
        <p className="mb-10 max-w-prose text-mid">
          For the Patron, churchwardens, treasurer, and elected lay members of the Parochial Church Council, see{' '}
          <Link to="/community/governance">Governance</Link>.
        </p>

        {loading && isConfigured ? (
          <SkeletonCardGrid count={6} />
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((person) => (
              <StaffCard key={person._id} person={person} />
            ))}
          </div>
        )}
        {/* TODO: Rosie to populate team bios via /admin once profiles are written. */}
      </section>
    </>
  );
}
