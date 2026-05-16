import { useEffect, useState } from 'react';
import PlaceholderImage from '../ui/PlaceholderImage.jsx';
import { shouldUseVideoFallback } from '../../utils/connection.js';

export default function HeroVideo({ videoSrc, posterSrc, posterAlt, fallbackLabel }) {
  const [useFallback, setUseFallback] = useState(true);

  useEffect(() => {
    setUseFallback(shouldUseVideoFallback());
  }, []);

  if (useFallback || !videoSrc) {
    if (posterSrc) {
      return (
        <img
          src={posterSrc}
          alt={posterAlt || 'Holy Trinity Sloane Square'}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      );
    }
    return (
      <PlaceholderImage
        label={
          fallbackLabel ||
          'Photograph or video loop of the congregation at the 11am Choral Eucharist'
        }
        aspectRatio="auto"
        className="absolute inset-0 w-full h-full"
        height="100%"
      />
    );
  }

  return (
    <video
      className="absolute inset-0 w-full h-full object-cover"
      playsInline
      autoPlay
      muted
      loop
      preload="metadata"
      poster={posterSrc}
      aria-hidden="true"
    >
      <source src={videoSrc} type="video/mp4" />
      <source src={videoSrc.replace(/\.mp4$/, '.webm')} type="video/webm" />
    </video>
  );
}
