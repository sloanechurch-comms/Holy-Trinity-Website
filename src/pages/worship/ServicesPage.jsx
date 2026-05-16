import Meta from '../../components/seo/Meta.jsx';
import PageHero from '../../components/pageBlocks/PageHero.jsx';
import ServiceCard from '../../components/pageBlocks/ServiceCard.jsx';
import CalloutBox from '../../components/ui/CalloutBox.jsx';
import { SkeletonCardGrid } from '../../components/ui/Skeleton.jsx';
import { useSanityData } from '../../hooks/useSanityData.js';
import { SERVICES_QUERY } from '../../sanity/queries.js';
import { FALLBACK_SETTINGS } from '../../data/static.js';

const FALLBACK_SERVICES = [
  {
    _id: 'fallback-1',
    name: 'Choral Eucharist',
    day: 'Sunday',
    time: '11am',
    shortDescription:
      'The main service of the week. The choir sings; the building is incensed; Junior Church runs in parallel.',
  },
  {
    _id: 'fallback-2',
    name: 'Choral Evensong',
    day: 'Sunday',
    time: '6pm',
    shortDescription:
      'A sung service of evening prayer from the Book of Common Prayer. No communion. Around forty-five minutes.',
  },
  {
    _id: 'fallback-3',
    name: 'Said Eucharist',
    day: 'Wednesday',
    time: '6.30pm',
    shortDescription: 'A quieter mid-week said Eucharist, around thirty minutes.',
  },
];

const DAY_ORDER = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Daily'];

export default function ServicesPage() {
  const { data, loading, isConfigured } = useSanityData(SERVICES_QUERY, null, {
    fallback: FALLBACK_SERVICES,
  });

  const services = data && data.length > 0 ? data : FALLBACK_SERVICES;

  const grouped = DAY_ORDER.map((day) => ({
    day,
    items: services.filter((s) => s.day === day),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <Meta
        title="Service times"
        description="Sunday Choral Eucharist at 11am, Choral Evensong at 6pm, and a midweek said Eucharist on Wednesday at 6.30pm. All services at Holy Trinity Sloane Square."
      />
      <PageHero
        eyebrow="Worship"
        title="Service times"
        lede="The pattern of worship at Holy Trinity, week by week. Service times may vary on major feast days and through Holy Week; the weekly bulletin has the detail."
      />

      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-10">
        {loading && isConfigured ? (
          <SkeletonCardGrid count={3} />
        ) : (
          <div className="flex flex-col gap-12">
            {grouped.map((group) => (
              <div key={group.day}>
                <h2 className="font-serif text-h2 text-red mb-5">{group.day}</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((s) => (
                    <ServiceCard key={s._id} service={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-22">
        <CalloutBox>
          <p>
            Service times may vary during Holy Week, Christmas, and on major feast days. For up-to-date details, subscribe to the weekly bulletin or call the parish office on{' '}
            <a href={`tel:${FALLBACK_SETTINGS.phone.replace(/\s/g, '')}`}>{FALLBACK_SETTINGS.phone}</a>.
          </p>
        </CalloutBox>
      </section>
    </>
  );
}
