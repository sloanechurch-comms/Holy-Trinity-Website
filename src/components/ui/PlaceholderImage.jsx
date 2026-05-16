export default function PlaceholderImage({
  label,
  aspectRatio = '16/9',
  className = '',
  height,
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`bg-cream border border-border flex items-center justify-center text-center px-6 ${className}`}
      style={{ aspectRatio, height }}
    >
      <span className="font-serif italic text-mid text-base sm:text-lg max-w-prose">{label}</span>
    </div>
  );
}
