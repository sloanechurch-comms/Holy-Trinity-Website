let isInitialised = false;

export function initAnalytics(measurementId) {
  if (isInitialised || !measurementId || typeof window === 'undefined') return;
  if (window.gtag) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure',
  });

  isInitialised = true;
}

export function trackPageView(measurementId, pathname) {
  if (!isInitialised || !measurementId || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('config', measurementId, {
    page_path: pathname,
  });
}
