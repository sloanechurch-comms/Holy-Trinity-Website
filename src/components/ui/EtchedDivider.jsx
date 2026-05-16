export default function EtchedDivider({ className = '' }) {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={`flex items-center justify-center my-8 ${className}`}
    >
      <svg width="160" height="14" viewBox="0 0 160 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="5" x2="72" y2="5" stroke="#802128" strokeWidth="0.6" />
        <line x1="0" y1="9" x2="72" y2="9" stroke="#802128" strokeWidth="0.6" />
        <g transform="translate(80,7)" stroke="#802128" fill="none" strokeWidth="0.8">
          <path d="M -4 0 L 0 -4 L 4 0 L 0 4 Z" fill="#802128" />
        </g>
        <line x1="88" y1="5" x2="160" y2="5" stroke="#802128" strokeWidth="0.6" />
        <line x1="88" y1="9" x2="160" y2="9" stroke="#802128" strokeWidth="0.6" />
      </svg>
    </div>
  );
}
