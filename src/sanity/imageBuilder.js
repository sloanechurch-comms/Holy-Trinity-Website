import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from './client.js';

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  if (!source) return null;
  return builder.image(source);
}

export function imageSrcSet(source, widths = [400, 800, 1200, 1600]) {
  if (!source) return undefined;
  return widths
    .map((w) => `${urlFor(source).width(w).auto('format').quality(80).url()} ${w}w`)
    .join(', ');
}
