export const SITE_NAME = 'Holy Trinity Sloane Square';
export const SITE_TAGLINE = 'Anglican worship in Chelsea, in the Catholic tradition of the Church of England';
export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://sloanechurch.org';

export const FALLBACK_SETTINGS = {
  openingHours: '10am – 5pm, Monday to Saturday',
  address: '146 Sloane Street, Chelsea, London SW1X 9BZ',
  phone: '020 7730 7270',
  emailParish: 'parishoffice@sloanechurch.org',
  emailRector: 'rector@sloanechurch.org',
  emailEvents: 'manager@sloanechurch.org',
  emailMusic: 'music@sloanechurch.org',
  instagramUrl: 'https://instagram.com/sloanechurch',
  facebookUrl: 'https://facebook.com/sloanechurch',
  giveUrl: 'https://mydona.com/give/holy-trinity-sloane-square',
  ticketSourceBaseUrl: 'https://www.ticketsource.co.uk/holytrinitysloanesquare',
};

export const NAV_ITEMS = [
  {
    label: 'Worship',
    href: '/worship/services',
    children: [
      { label: 'Service times', href: '/worship/services' },
      { label: 'What to expect', href: '/worship/what-to-expect' },
      { label: 'Junior Church', href: '/worship/junior-church' },
      { label: 'Baptisms, weddings, funerals', href: '/worship/life-events' },
      { label: 'Confirmation', href: '/worship/confirmation' },
    ],
  },
  {
    label: 'Music & Events',
    href: '/music-events/events',
    children: [
      { label: 'About the music', href: '/music-events/about-the-music' },
      { label: 'The choir', href: '/music-events/the-choir' },
      { label: 'Events', href: '/music-events/events' },
      { label: 'Hire a space', href: '/music-events/hire-a-space' },
    ],
  },
  {
    label: 'Visit',
    href: '/visit/plan-your-visit',
    children: [
      { label: 'Plan your visit', href: '/visit/plan-your-visit' },
      { label: 'The building', href: '/visit/the-building' },
      { label: 'Arts and Crafts', href: '/visit/arts-and-crafts' },
      { label: 'History', href: '/visit/history' },
    ],
  },
  {
    label: 'Community',
    href: '/community/our-team',
    children: [
      { label: 'Our team', href: '/community/our-team' },
      { label: 'Governance', href: '/community/governance' },
      { label: 'Outreach', href: '/community/outreach' },
      { label: 'Our school', href: '/community/school' },
      { label: 'Neighbourhood', href: '/community/neighbourhood' },
    ],
  },
  {
    label: 'Support',
    href: '/support/give',
    children: [
      { label: 'Give', href: '/support/give' },
      { label: 'News and notices', href: '/support/news' },
      { label: 'Stay connected', href: '/support/stay-connected' },
    ],
  },
];

export const FOOTER_LINKS = [
  { label: 'Safeguarding', href: '/safeguarding' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Cookies', href: '/cookies' },
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'Contact', href: '/contact' },
];

export const SEARCHABLE_PAGES = [
  { title: 'Home', href: '/', keywords: 'home holy trinity sloane square chelsea anglican' },
  { title: 'Service times', href: '/worship/services', keywords: 'service times sunday mass eucharist evensong' },
  { title: 'What to expect at a service', href: '/worship/what-to-expect', keywords: 'newcomer first visit what to expect order of service communion' },
  { title: 'Junior Church', href: '/worship/junior-church', keywords: 'children sunday school junior church' },
  { title: 'Baptisms, weddings and funerals', href: '/worship/life-events', keywords: 'baptism christening wedding funeral life events' },
  { title: 'Confirmation', href: '/worship/confirmation', keywords: 'confirmation classes bishop' },
  { title: 'About the music', href: '/music-events/about-the-music', keywords: 'music director choir organ' },
  { title: 'The choir', href: '/music-events/the-choir', keywords: 'choir choristers audition rehearsal' },
  { title: 'Events', href: '/music-events/events', keywords: 'concerts events what is on songs and soup' },
  { title: 'Hire a space', href: '/music-events/hire-a-space', keywords: 'venue hire space rental concert booking' },
  { title: 'Plan your visit', href: '/visit/plan-your-visit', keywords: 'visit address opening hours map sloane street' },
  { title: 'The building', href: '/visit/the-building', keywords: 'building sedding grade one listed architecture nave' },
  { title: 'Arts and Crafts', href: '/visit/arts-and-crafts', keywords: 'arts crafts morris burne-jones stained glass east window' },
  { title: 'History', href: '/visit/history', keywords: 'history victorian sedding cathedral arts crafts' },
  { title: 'Our team', href: '/community/our-team', keywords: 'staff clergy team rector director music' },
  { title: 'Governance', href: '/community/governance', keywords: 'pcc churchwardens patron parochial church council' },
  { title: 'Outreach', href: '/community/outreach', keywords: 'outreach community projects songs and soup' },
  { title: 'Our school', href: '/community/school', keywords: 'school primary parish school' },
  { title: 'Neighbourhood', href: '/community/neighbourhood', keywords: 'chelsea neighbourhood sloane square' },
  { title: 'Give', href: '/support/give', keywords: 'give giving donation mydona standing order' },
  { title: 'News and notices', href: '/support/news', keywords: 'news notices weekly bulletin' },
  { title: 'Stay connected', href: '/support/stay-connected', keywords: 'newsletter mailchimp subscribe' },
  { title: 'Contact', href: '/contact', keywords: 'contact parish office phone email address' },
  { title: 'Safeguarding', href: '/safeguarding', keywords: 'safeguarding child protection vulnerable adults' },
  { title: 'Accessibility', href: '/accessibility', keywords: 'accessibility statement wcag screen reader' },
];

export const HOMEPAGE_PATHWAYS = [
  {
    title: 'New here?',
    description: 'What to expect at a service.',
    href: '/worship/what-to-expect',
    image: '/images/nave-from-west-door.jpg',
    placeholder: 'Photograph of the nave from the west door, looking towards the high altar',
  },
  {
    title: 'This Sunday',
    description: 'Service times and details.',
    href: '/worship/services',
    image: '/images/choir-in-stalls.jpg',
    placeholder: 'Photograph of the choir in stalls during the Sunday Eucharist',
  },
  {
    title: 'Visit the building',
    description: 'The Cathedral of the Arts and Crafts.',
    href: '/visit/the-building',
    image: '/images/east-window.jpg',
    placeholder: 'Photograph of the Burne-Jones east window in morning light',
  },
  {
    title: 'Music & events',
    description: "Concerts, choirs, and what's on.",
    href: '/music-events/events',
    image: '/images/concert-audience.jpg',
    placeholder: 'Photograph of a concert audience in the nave',
  },
];

export const STUB_INSTAGRAM = [
  {
    href: 'https://instagram.com/sloanechurch',
    caption: 'Sunday morning light through the Burne-Jones east window.',
    placeholder: 'East window photograph for Instagram',
  },
  {
    href: 'https://instagram.com/sloanechurch',
    caption: 'Songs and Soup is back this Tuesday at 1pm. Music, a hot lunch, and good company.',
    placeholder: 'Songs and Soup photograph for Instagram',
  },
  {
    href: 'https://instagram.com/sloanechurch',
    caption: "The choir rehearsed Victoria's Missa O Magnum Mysterium this week. Sung at the Eucharist on Sunday.",
    placeholder: 'Choir rehearsal photograph for Instagram',
  },
];
