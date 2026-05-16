export default function DropCap({ children, className = '' }) {
  if (!children || typeof children !== 'string') return <p className={className}>{children}</p>;
  const trimmed = children.trim();
  if (trimmed.length === 0) return null;
  const first = trimmed.charAt(0);
  const rest = trimmed.slice(1);
  return (
    <p className={`relative ${className}`}>
      <span
        className="float-left mr-2 leading-none font-serif italic text-crimson"
        style={{
          fontSize: '4.5rem',
          lineHeight: '0.9',
          marginTop: '0.2rem',
          marginBottom: '-0.1rem',
        }}
        aria-hidden="true"
      >
        {first}
      </span>
      <span className="sr-only">{first}</span>
      {rest}
    </p>
  );
}
