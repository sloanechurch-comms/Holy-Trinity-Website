import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Meta from '../components/seo/Meta.jsx';
import Button from '../components/ui/Button.jsx';
import OrnamentalRule from '../components/ui/OrnamentalRule.jsx';
import HeroVideo from '../components/pageBlocks/HeroVideo.jsx';
import PathwayTile from '../components/pageBlocks/PathwayTile.jsx';
import ServiceCard from '../components/pageBlocks/ServiceCard.jsx';
import EventCard from '../components/pageBlocks/EventCard.jsx';
import NewsCard from '../components/pageBlocks/NewsCard.jsx';
import InstagramGrid from '../components/pageBlocks/InstagramGrid.jsx';
import { SkeletonCardGrid } from '../components/ui/Skeleton.jsx';
import { HOMEPAGE_PATHWAYS, FALLBACK_SETTINGS } from '../data/static.js';
import { useSanityData } from '../hooks/useSanityData.js';
import { THIS_WEEK_QUERY, RECENT_NEWS_QUERY, SETTINGS_QUERY } from '../sanity/queries.js';
import { buildChurchSchema } from '../utils/seo.js';

export default function HomePage() {
  const { data: thisWeek, loading: weekLoading } = useSanityData(THIS_WEEK_QUERY, null, {
    fallback: { services: [], events: [] },
  });
  const { data: recentNews, loading: newsLoading } = useSanityData(RECENT_NEWS_QUERY, null, { fallback: [] });
  const { data: settings } = useSanityData(SETTINGS_QUERY, null, { fallback: FALLBACK_SETTINGS });

  const upcomingServices = (thisWeek?.services || []).slice(0, 3);
  const upcomingEvents = (thisWeek?.events || []).slice(0, 2);
  const newsPreview = (recentNews || []).slice(0, 3);

  return (
    <>
      <Meta
        title=""
        description="Anglican worship in Chelsea, in the Catholic tradition of the Church of England. Holy Trinity Sloane Square is a Grade I listed Arts and Crafts parish church on Sloane Street."
        structuredData={buildChurchSchema(settings)}
      />

      {/* HERO */}
      <section className="relative h-[88vh] min-h-[560px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-ink/10" aria-hidden="true">
          <HeroVideo
            videoSrc="/videos/eucharist-loop.mp4"
            posterSrc="/images/hero-poster.jpg"
            posterAlt="Inside Holy Trinity Sloane Square during the Sunday Eucharist"
            fallbackLabel="Looping video of the congregation at the 11am Choral Eucharist, with a still photograph as fallback"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-14 lg:pb-22 w-full">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-serif text-display text-white drop-shadow-sm"
              style={{ color: '#fff' }}
            >
              Holy Trinity Sloane Square
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif italic text-white/95 text-xl sm:text-2xl mt-4 max-w-xl"
            >
              Anglican worship in Chelsea, in the Catholic tradition of the Church of England.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <Button to="/visit/plan-your-visit" variant="primary">
                Plan a visit
              </Button>
              <Link
                to="/worship/services"
                className="inline-flex items-center justify-center gap-2 font-serif text-[1.05rem] px-6 py-3 border border-white text-white no-underline hover:bg-white hover:text-crimson transition-colors duration-150"
              >
                This Sunday
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70"
          aria-hidden="true"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </section>

      {/* PATHWAYS */}
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-18 lg:py-22">
        <div className="grid gap-8 sm:grid-cols-2">
          {HOMEPAGE_PATHWAYS.map((p, i) => (
            <PathwayTile
              key={p.href}
              title={p.title}
              description={p.description}
              href={p.href}
              placeholder={p.placeholder}
              index={i}
            />
          ))}
        </div>
      </section>

      <OrnamentalRule />

      {/* INTRO */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-18 lg:py-22">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-serif text-xl sm:text-2xl leading-relaxed text-ink"
          >
            <p>
              For over 130 years, Holy Trinity has stood at the top of Sloane Street and opened its doors each day for prayer and the service of its neighbours. We are a parish church in the Catholic tradition of the Church of England; one of more than 400 parishes in the Diocese of London.
            </p>
            <p className="mt-5">
              We believe, with Dostoevsky, that the world will be saved by beauty: in worship, in music, in the building itself, and in the life we share. Whether you know the liturgy well or are coming for the first time, you are welcome.
            </p>
          </motion.div>
        </div>
      </section>

      <OrnamentalRule />

      {/* THIS WEEK */}
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-18">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-mid mb-2">This week</p>
            <h2 className="font-serif text-h2 text-red">At Holy Trinity</h2>
          </div>
          <Link
            to="/worship/services"
            className="font-sans text-sm uppercase tracking-wider text-crimson no-underline"
          >
            All services <span aria-hidden="true">→</span>
          </Link>
        </div>

        {weekLoading ? (
          <SkeletonCardGrid count={3} />
        ) : upcomingServices.length === 0 && upcomingEvents.length === 0 ? (
          <p className="text-mid">
            Service times and events are managed in the parish office. The full list lives on{' '}
            <Link to="/worship/services">our services page</Link>.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingServices.map((s) => (
              <ServiceCard key={s._id} service={s} />
            ))}
            {upcomingEvents.map((e) => (
              <EventCard key={e._id} event={e} />
            ))}
          </div>
        )}
      </section>

      {/* NEWS PREVIEW */}
      <section className="bg-cream">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-18">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-mid mb-2">From the parish</p>
              <h2 className="font-serif text-h2 text-red">News and notices</h2>
            </div>
            <Link
              to="/support/news"
              className="font-sans text-sm uppercase tracking-wider text-crimson no-underline"
            >
              All news <span aria-hidden="true">→</span>
            </Link>
          </div>

          {newsLoading ? (
            <SkeletonCardGrid count={3} />
          ) : newsPreview.length === 0 ? (
            <p className="text-mid">
              The parish bulletin arrives weekly by email. <Link to="/support/stay-connected">Subscribe</Link>.
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-3">
              {newsPreview.map((p) => (
                <NewsCard key={p._id} post={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* INSTAGRAM TEASER */}
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-18">
        <div className="text-center mb-10">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-mid mb-2">@sloanechurch</p>
          <h2 className="font-serif text-h2 text-red">From Instagram</h2>
        </div>
        <InstagramGrid />
        <p className="text-center mt-6 text-mid">
          Follow us at{' '}
          <a href="https://instagram.com/sloanechurch" target="_blank" rel="noopener noreferrer">
            @sloanechurch
          </a>
          .
        </p>
      </section>
    </>
  );
}
