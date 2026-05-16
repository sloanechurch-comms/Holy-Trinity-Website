export function SkeletonBlock({ className = '', style }) {
  return <div className={`shimmer rounded-sm ${className}`} style={style} aria-hidden="true" />;
}

export function SkeletonCard() {
  return (
    <div className="flex flex-col gap-3" aria-hidden="true">
      <SkeletonBlock className="w-full" style={{ aspectRatio: '16/9' }} />
      <SkeletonBlock className="w-3/4 h-6" />
      <SkeletonBlock className="w-full h-4" />
      <SkeletonBlock className="w-1/2 h-4" />
    </div>
  );
}

export function SkeletonCardGrid({ count = 3 }) {
  return (
    <div
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      role="status"
      aria-label="Loading"
    >
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
