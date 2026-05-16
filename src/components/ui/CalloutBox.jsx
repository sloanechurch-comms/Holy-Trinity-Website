export default function CalloutBox({ children, className = '', as: Tag = 'aside' }) {
  return (
    <Tag
      className={`bg-cream border border-border p-6 sm:p-8 my-8 ${className}`}
      style={{ borderLeft: '3px solid var(--crimson)' }}
    >
      {children}
    </Tag>
  );
}
