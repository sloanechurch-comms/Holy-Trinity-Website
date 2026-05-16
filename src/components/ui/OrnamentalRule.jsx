export default function OrnamentalRule({ className = '' }) {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={`flex items-center justify-center my-12 ${className}`}
    >
      <svg width="240" height="20" viewBox="0 0 240 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="10" x2="96" y2="10" stroke="#802128" strokeWidth="1" />
        <g transform="translate(120,10)" stroke="#802128" strokeWidth="1" fill="none">
          <path d="M 0 -6 C 4 -4, 4 4, 0 6 C -4 4, -4 -4, 0 -6 Z" />
          <circle cx="0" cy="0" r="1.4" fill="#802128" />
          <path d="M -10 0 L -6 0" />
          <path d="M 6 0 L 10 0" />
        </g>
        <line x1="144" y1="10" x2="240" y2="10" stroke="#802128" strokeWidth="1" />
      </svg>
    </div>
  );
}
