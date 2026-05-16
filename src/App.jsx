import { Suspense, lazy, useEffect } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import SkipToContent from './components/layout/SkipToContent.jsx';
import NavBar from './components/layout/NavBar.jsx';
import Footer from './components/layout/Footer.jsx';
import CookieBanner from './components/layout/CookieBanner.jsx';
import { useConsent } from './hooks/useConsent.js';
import { useSanityData } from './hooks/useSanityData.js';
import { SETTINGS_QUERY } from './sanity/queries.js';
import { FALLBACK_SETTINGS } from './data/static.js';
import { initAnalytics, trackPageView } from './utils/analytics.js';
import { REDIRECTS } from './data/redirects.js';

import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import SearchResultsPage from './pages/SearchResultsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import SafeguardingPage from './pages/SafeguardingPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import CookiePage from './pages/CookiePage.jsx';
import AccessibilityPage from './pages/AccessibilityPage.jsx';

import ServicesPage from './pages/worship/ServicesPage.jsx';
import WhatToExpectPage from './pages/worship/WhatToExpectPage.jsx';
import JuniorChurchPage from './pages/worship/JuniorChurchPage.jsx';
import LifeEventsPage from './pages/worship/LifeEventsPage.jsx';
import ConfirmationPage from './pages/worship/ConfirmationPage.jsx';

import AboutMusicPage from './pages/music-events/AboutMusicPage.jsx';
import ChoirPage from './pages/music-events/ChoirPage.jsx';
import EventsPage from './pages/music-events/EventsPage.jsx';
import EventDetailPage from './pages/music-events/EventDetailPage.jsx';
import EventsArchivePage from './pages/music-events/EventsArchivePage.jsx';
import HireSpacePage from './pages/music-events/HireSpacePage.jsx';

import PlanVisitPage from './pages/visit/PlanVisitPage.jsx';
import BuildingPage from './pages/visit/BuildingPage.jsx';
import ArtsCraftsPage from './pages/visit/ArtsCraftsPage.jsx';
import HistoryPage from './pages/visit/HistoryPage.jsx';

import TeamPage from './pages/community/TeamPage.jsx';
import GovernancePage from './pages/community/GovernancePage.jsx';
import OutreachPage from './pages/community/OutreachPage.jsx';
import SchoolPage from './pages/community/SchoolPage.jsx';
import NeighbourhoodPage from './pages/community/NeighbourhoodPage.jsx';

import GivePage from './pages/support/GivePage.jsx';
import NewsPage from './pages/support/NewsPage.jsx';
import NewsPostPage from './pages/support/NewsPostPage.jsx';
import StayConnectedPage from './pages/support/StayConnectedPage.jsx';

const StudioRoute = lazy(() => import('./studio/StudioRoute.jsx'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function ClientRedirects() {
  const { pathname } = useLocation();
  const target = REDIRECTS[pathname];
  if (target) return <Navigate to={target} replace />;
  return null;
}

function AnalyticsLoader({ measurementId }) {
  const { consent } = useConsent();
  const { pathname } = useLocation();

  useEffect(() => {
    if (consent.analytics && measurementId) initAnalytics(measurementId);
  }, [consent.analytics, measurementId]);

  useEffect(() => {
    if (consent.analytics && measurementId) trackPageView(measurementId, pathname);
  }, [pathname, consent.analytics, measurementId]);

  return null;
}

function Layout() {
  const { data: settings } = useSanityData(SETTINGS_QUERY, null, { fallback: FALLBACK_SETTINGS });
  const measurementId =
    (settings?.ga4MeasurementId && settings.ga4MeasurementId.trim()) ||
    import.meta.env.VITE_GA4_MEASUREMENT_ID ||
    null;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SkipToContent />
      <ScrollToTop />
      <ClientRedirects />
      <AnalyticsLoader measurementId={measurementId} />
      <NavBar />
      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>
      <Footer settings={settings} />
      <CookieBanner />
    </div>
  );
}

function StudioShell() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center bg-cream">
          <p className="font-serif text-h2 text-crimson">Loading Studio…</p>
        </div>
      }
    >
      <StudioRoute />
    </Suspense>
  );
}

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },

      { path: 'worship', element: <Navigate to="/worship/services" replace /> },
      { path: 'worship/services', element: <ServicesPage /> },
      { path: 'worship/what-to-expect', element: <WhatToExpectPage /> },
      { path: 'worship/junior-church', element: <JuniorChurchPage /> },
      { path: 'worship/life-events', element: <LifeEventsPage /> },
      { path: 'worship/confirmation', element: <ConfirmationPage /> },

      { path: 'music-events', element: <Navigate to="/music-events/events" replace /> },
      { path: 'music-events/about-the-music', element: <AboutMusicPage /> },
      { path: 'music-events/the-choir', element: <ChoirPage /> },
      { path: 'music-events/events', element: <EventsPage /> },
      { path: 'music-events/events/archive', element: <EventsArchivePage /> },
      {
        path: 'music-events/events/:slug',
        element: <EventDetailPage />,
        getStaticPaths: async () => {
          const { fetchDynamicRoutes } = await import('./sanity/ssg-routes.js');
          const { eventSlugs } = await fetchDynamicRoutes();
          return eventSlugs.map((s) => `music-events/events/${s}`);
        },
      },
      { path: 'music-events/hire-a-space', element: <HireSpacePage /> },

      { path: 'visit', element: <Navigate to="/visit/plan-your-visit" replace /> },
      { path: 'visit/plan-your-visit', element: <PlanVisitPage /> },
      { path: 'visit/the-building', element: <BuildingPage /> },
      { path: 'visit/arts-and-crafts', element: <ArtsCraftsPage /> },
      { path: 'visit/history', element: <HistoryPage /> },

      { path: 'community', element: <Navigate to="/community/our-team" replace /> },
      { path: 'community/our-team', element: <TeamPage /> },
      { path: 'community/governance', element: <GovernancePage /> },
      { path: 'community/outreach', element: <OutreachPage /> },
      { path: 'community/school', element: <SchoolPage /> },
      { path: 'community/neighbourhood', element: <NeighbourhoodPage /> },

      { path: 'support', element: <Navigate to="/support/give" replace /> },
      { path: 'support/give', element: <GivePage /> },
      { path: 'support/news', element: <NewsPage /> },
      {
        path: 'support/news/:slug',
        element: <NewsPostPage />,
        getStaticPaths: async () => {
          const { fetchDynamicRoutes } = await import('./sanity/ssg-routes.js');
          const { newsSlugs } = await fetchDynamicRoutes();
          return newsSlugs.map((s) => `support/news/${s}`);
        },
      },
      { path: 'support/stay-connected', element: <StayConnectedPage /> },

      { path: 'search', element: <SearchResultsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'safeguarding', element: <SafeguardingPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: 'cookies', element: <CookiePage /> },
      { path: 'accessibility', element: <AccessibilityPage /> },

      { path: '*', element: <NotFoundPage /> },
    ],
  },
  {
    path: '/admin/*',
    element: <StudioShell />,
  },
];
