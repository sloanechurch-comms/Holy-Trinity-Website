import Meta from '../../components/seo/Meta.jsx';
import PageHero from '../../components/pageBlocks/PageHero.jsx';
import PccCard from '../../components/pageBlocks/PccCard.jsx';
import CalloutBox from '../../components/ui/CalloutBox.jsx';
import OrnamentalRule from '../../components/ui/OrnamentalRule.jsx';
import { useSanityData } from '../../hooks/useSanityData.js';
import { PCC_MEMBERS_QUERY, PATRON_QUERY } from '../../sanity/queries.js';
import { FALLBACK_SETTINGS } from '../../data/static.js';

function groupByRole(members) {
  const out = { Churchwarden: [], Officer: [], 'Lay Member': [], Other: [] };
  for (const m of members || []) {
    if (m.role === 'Churchwarden') out.Churchwarden.push(m);
    else if (['Treasurer', 'PCC Secretary', 'Deanery Synod Representative'].includes(m.role)) out.Officer.push(m);
    else if (m.role === 'Lay Member') out['Lay Member'].push(m);
    else out.Other.push(m);
  }
  return out;
}

export default function GovernancePage() {
  const { data: patron } = useSanityData(PATRON_QUERY);
  const { data: members } = useSanityData(PCC_MEMBERS_QUERY, null, { fallback: [] });

  const grouped = groupByRole(members);

  return (
    <>
      <Meta
        title="Governance"
        description="The Patron, churchwardens, officers, and elected lay members of the Parochial Church Council at Holy Trinity Sloane Square."
      />
      <PageHero
        eyebrow="Community"
        title="Governance"
        lede="The Patron, the churchwardens, and the elected lay members of the Parochial Church Council. PCC membership refreshes each spring after the Annual Parochial Church Meeting."
      />

      <section className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8 prose-htss mb-12">
        <p>
          The Parochial Church Council, known as the PCC, is the elected lay body responsible, alongside the Rector, for the governance and good order of the parish. It is made up of churchwardens, officers, and lay members elected at the Annual Parochial Church Meeting. Members serve in a voluntary capacity; for routine enquiries, please contact the parish office, who will direct you to the right person.
        </p>
      </section>

      {/* PATRON */}
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mb-14">
        <h2 className="font-serif text-h2 text-red mb-6">Patron</h2>
        {patron && patron.name ? (
          <div className="max-w-2xl">
            <PccCard
              member={{
                name: patron.name,
                role: patron.title || 'Patron',
                bio: patron.note,
                photo: patron.photo,
                photoAlt: patron.photoAlt,
                viaParishOffice: true,
              }}
            />
          </div>
        ) : (
          <CalloutBox className="max-w-2xl">
            <p className="text-mid">
              {/* TODO: Rosie to add Patron via /admin → Governance → Patron singleton. */}
              Patron details to be confirmed.
            </p>
          </CalloutBox>
        )}
      </section>

      <OrnamentalRule />

      {/* CHURCHWARDENS */}
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mb-14">
        <h2 className="font-serif text-h2 text-red mb-6">Churchwardens</h2>
        {grouped.Churchwarden.length === 0 ? (
          <p className="text-mid max-w-prose">
            {/* TODO: Rosie to populate churchwardens after the APCM (typically April or May). */}
            Churchwarden names to be confirmed after the next Annual Parochial Church Meeting.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {grouped.Churchwarden.map((m) => (
              <PccCard key={m._id} member={m} />
            ))}
          </div>
        )}
      </section>

      {/* OFFICERS */}
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mb-14">
        <h2 className="font-serif text-h2 text-red mb-6">Officers</h2>
        {grouped.Officer.length === 0 ? (
          <p className="text-mid max-w-prose">PCC officers (Treasurer, Secretary, Deanery Synod Representatives) to be confirmed.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {grouped.Officer.map((m) => (
              <PccCard key={m._id} member={m} compact />
            ))}
          </div>
        )}
      </section>

      {/* LAY MEMBERS */}
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mb-14">
        <h2 className="font-serif text-h2 text-red mb-6">Elected lay members</h2>
        {grouped['Lay Member'].length === 0 ? (
          <p className="text-mid max-w-prose">Elected lay membership to be added after the next APCM.</p>
        ) : (
          <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
            {grouped['Lay Member'].map((m) => (
              <li key={m._id} className="text-ink">
                <span className="font-serif">{m.name}</span>
                {m.roleNote && <span className="text-mid text-sm"> · {m.roleNote}</span>}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mx-auto max-w-prose px-4 sm:px-6 lg:px-8 prose-htss pb-22">
        <p className="text-mid">
          Direct contact with PCC members is normally via the parish office, on{' '}
          <a href={`tel:${FALLBACK_SETTINGS.phone.replace(/\s/g, '')}`}>{FALLBACK_SETTINGS.phone}</a> or{' '}
          <a href={`mailto:${FALLBACK_SETTINGS.emailParish}`}>{FALLBACK_SETTINGS.emailParish}</a>.
        </p>
        <p className="text-mid">
          Holy Trinity Sloane Square is part of the{' '}
          <a href="https://www.london.anglican.org" target="_blank" rel="noopener noreferrer">
            Diocese of London
          </a>
          . The parish is formally the Parish of Holy Trinity and St Saviour, Upper Chelsea.
        </p>
      </section>
    </>
  );
}
