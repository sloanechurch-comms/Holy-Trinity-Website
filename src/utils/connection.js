export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
}

export function isSlowConnection() {
  if (typeof navigator === 'undefined') return false;
  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (!conn) return false;
  if (conn.saveData) return true;
  if (conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g') return true;
  return false;
}

export function shouldUseVideoFallback() {
  return prefersReducedMotion() || isSlowConnection();
}
