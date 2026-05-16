export const SETTINGS_QUERY = `*[_type == "settings"][0]{
  openingHours, address, phone,
  emailParish, emailRector, emailEvents, emailMusic,
  instagramUrl, facebookUrl, giveUrl,
  mailchimpEmbedCode, ticketSourceBaseUrl, ga4MeasurementId
}`;

export const SERVICES_QUERY = `*[_type == "service"] | order(order asc){
  _id, name, day, time, order, shortDescription, fullDescription,
  isSeasonal, seasonalNote
}`;

export const UPCOMING_EVENTS_QUERY = `*[_type == "event" && date >= now()] | order(date asc){
  _id, title, "slug": slug.current, date, type, description,
  image, imageAlt, ticketUrl, price, isFeatured
}`;

export const FEATURED_EVENTS_QUERY = `*[_type == "event" && date >= now() && isFeatured == true] | order(date asc)[0...3]{
  _id, title, "slug": slug.current, date, type, description,
  image, imageAlt, ticketUrl, price
}`;

export const PAST_EVENTS_QUERY = `*[_type == "event" && date < now()] | order(date desc){
  _id, title, "slug": slug.current, date, type, description
}`;

export const EVENT_BY_SLUG_QUERY = `*[_type == "event" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, date, type, description, longDescription,
  image, imageAlt, ticketUrl, price, seo
}`;

export const STAFF_QUERY = `*[_type == "staff"] | order(order asc){
  _id, name, role, order, photo, photoAlt, bio, email, isClergy
}`;

export const PCC_MEMBERS_QUERY = `*[_type == "pccMember"] | order(role asc, order asc, name asc){
  _id, name, role, roleNote, order, photo, photoAlt, bio,
  viaParishOffice, email
}`;

export const PATRON_QUERY = `*[_type == "patron"][0]{
  name, title, note, photo, photoAlt
}`;

export const RECENT_NEWS_QUERY = `*[_type == "newsPost"] | order(publishedAt desc)[0...10]{
  _id, title, "slug": slug.current, publishedAt, excerpt,
  featuredImage, featuredImageAlt,
  "authorName": author->name
}`;

export const NEWS_POST_BY_SLUG_QUERY = `*[_type == "newsPost" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, publishedAt, excerpt, body,
  featuredImage, featuredImageAlt, tags, seo,
  "authorName": author->name,
  "authorRole": author->role
}`;

export const PAGE_CONTENT_BY_KEY_QUERY = `*[_type == "pageContent" && key == $key][0]{
  key, title, body
}`;

export const THIS_WEEK_QUERY = `{
  "services": *[_type == "service"] | order(order asc){_id, name, day, time, shortDescription},
  "events": *[_type == "event" && date >= now() && date <= dateTime(now()) + 60*60*24*7]
    | order(date asc)[0...3]{_id, title, "slug": slug.current, date, type, description}
}`;
