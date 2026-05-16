import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
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

// Worship
import ServicesPage from './pages/worship/ServicesPage.jsx';
import WhatToExpectPage from './pages/worship/WhatToExpectPage.jsx';
import JuniorChurchPage from './pages/worship/JuniorChurchPage.jsx';
import LifeEventsPage from './pages/worship/LifeEventsPage.jsx';
import ConfirmationPage from './pages/worship/ConfirmationPage.jsx';

// Music & Events
import AboutMusicPage from './pages/music-events/AboutMusicPage.jsx';
import ChoirPage from './pages/music-events/ChoirPage.jsx';
import EventsPage from './pages/music-events/EventsPage.jsx';
import EventDetailPage from './pages/music-events/EventDetailPage.jsx';
import EventsArchivePage from './pages/music-events/EventsArchivePage.jsx';
import HireSpacePage from './pages/music-events/HireSpacePage.jsx';

// Visit
import PlanVisitPage from './pages/visit/PlanVisitPage.jsx';
import BuildingPage from './pages/visit/BuildingPage.jsx';
import ArtsCraftsPage from './pages/visit/ArtsCraftsPage.jsx';
import HistoryPage from './pages/visit/HistoryPage.jsx';

// Community
import TeamPage from './pages/community/TeamPage.jsx';
import GovernancePage from './pages/community/GovernancePage.jsx';
import OutreachPage from './pages/community/OutreachPage.jsx';
import SchoolPage from './pages/community/SchoolPage.jsx';
import NeighbourhoodPage from './pages/community/NeighbourhoodPage.jsx';

// Support
import GivePage from './pages/support/GivePage.jsx';
import NewsPage from './pages/support/NewsPage.jsx';
import NewsPostPage from './pages/support/NewsPostPage.jsx';
import StayConnectedPage from './pages/support/StayConnectedPage.jsx';

// Studio
const StudioRoute = lazy(() => import('./studio/StudioRoute.jsx'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
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
    if (consent.analytics && measurementId) {
      initAnalytics(measurementId);
    }
  }, [consent.analytics, measurementId]);

  useEffect(() => {
    if (consent.analytics && measurementId) {
      trackPageView(measurementId, pathname);
    }
  }, [pathname, consent.analytics, measurementId]);

  return null;
}

export default function App() {
  const { data: settings } = useSanityData(SETTINGS_QUERY, null, { fallback: FALLBACK_SETTINGS });
  const measurementId =
    (settings?.ga4MeasurementId && settings.ga4MeasurementId.trim()) ||
    import.meta.env.VITE_GA4_MEASUREMENT_ID ||
    null;
  const { pathname } = useLocation();
  const isStudio = pathname.startsWith('/admin');

  if (isStudio) {
    return (
      <Suspense
        fallback={
          <div className="flex h-screen w-screen items-center justify-center bg-cream">
            <p className="font-serif text-h2 text-crimson">Loading Studio…</p>
          </div>
        }
      >
        <Routes>
          <Route path="/admin/*" element={<StudioRoute />} />
        </Routes>
      </Suspense>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SkipToContent />
      <ScrollToTop />
      <ClientRedirects />
      <AnalyticsLoader measurementId={measurementId} />
      <NavBar />
      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/worship/services" element={<ServicesPage />} />
          <Route path="/worship/what-to-expect" element={<WhatToExpectPage />} />
          <Route path="/worship/junior-church" element={<JuniorChurchPage />} />
          <Route path="/worship/life-events" element={<LifeEventsPage />} />
          <Route path="/worship/confirmation" element={<ConfirmationPage />} />
          <Route path="/worship" element={<Navigate to="/worship/services" replace />} />

          <Route path="/music-events/about-the-music" element={<AboutMusicPage />} />
          <Route path="/music-events/the-choir" element={<ChoirPage />} />
          <Route path="/music-events/events" element={<EventsPage />} />
          <Route path="/music-events/events/archive" element={<EventsArchivePage />} />
          <Route path="/music-events/events/:slug" element={<EventDetailPage />} />
          <Route path="/music-events/hire-a-space" element={<HireSpacePage />} />
          <Route path="/music-events" element={<Navigate to="/music-events/events" replace />} />

          <Route path="/visit/plan-your-visit" element={<PlanVisitPage />} />
          <Route path="/visit/the-building" element={<BuildingPage />} />
          <Route path="/visit/arts-and-crafts" element={<ArtsCraftsPage />} />
          <Route path="/visit/history" element={<HistoryPage />} />
          <Route path="/visit" element={<Navigate to="/visit/plan-your-visit" replace />} />

          <Route path="/community/our-team" element={<TeamPage />} />
          <Route path="/community/governance" element={<GovernancePage />} />
          <Route path="/community/outreach" element={<OutreachPage />} />
          <Route path="/community/school" element={<SchoolPage />} />
          <Route path="/community/neighbourhood" element={<NeighbourhoodPage />} />
          <Route path="/community" element={<Navigate to="/community/our-team" replace />} />

          <Route path="/support/give" element={<GivePage />} />
          <Route path="/support/news" element={<NewsPage />} />
          <Route path="/support/news/:slug" element={<NewsPostPage />} />
          <Route path="/support/stay-connected" element={<StayConnectedPage />} />
          <Route path="/support" element={<Navigate to="/support/give" replace />} />

          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/safeguarding" element={<SafeguardingPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiePage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer settings={settings} />
      <CookieBanner />
    </div>
  );
}
