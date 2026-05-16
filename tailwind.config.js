/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        crimson: '#802128',
        red: '#c32d2d',
        cream: '#eae5df',
        ink: '#1a1a1a',
        mid: '#5a5a5a',
        border: '#e5e0d8',
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['Arial', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'h1': ['clamp(2rem, 4.5vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.005em' }],
        'h2': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2' }],
        'h3': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3' }],
        'lede': ['1.25rem', { lineHeight: '1.6' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'prose': '68ch',
        'reading': '72ch',
      },
      transitionDuration: {
        '150': '150ms',
      },
      animation: {
        'shimmer': 'shimmer 1.6s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
