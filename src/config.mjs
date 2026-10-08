// ─────────────────────────────────────────────────────────────────────────────
// Snowcone site content
//
// Everything Snowcone-specific lives here. Anything marked TODO is placeholder
// content that must be replaced with real Snowcone details before launch.
// `npm run build` lists every TODO still left in this file.
//
// Text fields may contain simple HTML, e.g. <em>word</em> renders the italic
// serif accent used across the site.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  // While true, a small "draft" ribbon shows on every page so nobody mistakes
  // placeholder content for the real thing. Set to false once all TODOs are done.
  draft: true,

  name: 'Snowcone',
  legalName: 'Snowcone Marketing',
  url: 'https://snowcone.com.au', // TODO: final domain (used for canonical + social tags)
  title: 'Snowcone — Growth Marketing With Serious Flavour',
  description:
    'Growth marketing agency for service businesses across Australia. Sharp strategy, standout creative and results you can measure. Nothing watered down.',

  email: 'hello@snowcone.com.au', // TODO: real contact email
  // Where every "Book My Growth Audit" button goes (Typeform, Calendly, etc.).
  bookingUrl: 'mailto:hello@snowcone.com.au?subject=Growth%20Audit', // TODO: booking form link

  address: {
    text: 'Your Street Address, Suburb STATE 0000', // TODO
    mapUrl: 'https://maps.google.com/?q=Snowcone%20Marketing', // TODO
  },

  socials: [
    { label: 'Instagram', icon: 'instagram', url: '#' }, // TODO
    { label: 'Facebook', icon: 'facebook', url: '#' }, // TODO
    { label: 'LinkedIn', icon: 'linkedin', url: '#' }, // TODO
  ],

  // Google rating badge shown in the hero, reviews and audit sections.
  rating: { score: '5.0', label: 'from reviews', url: '#' }, // TODO: real score + Google reviews link

  // Value shown on the free audit offer.
  auditValue: 'Worth $X,XXX completely free', // TODO
};

// Logos in the hero "Trusted by" marquee. Add `src: '/assets/img/clients/name.svg'`
// to show a real logo; without it the name is shown as a wordmark.
export const clients = {
  heading: 'Trusted By Brands Who Came For More', // TODO: e.g. "Trusted By 50+ Brands…" once true
  logos: ['Client One', 'Client Two', 'Client Three', 'Client Four', 'Client Five', 'Client Six', 'Client Seven'].map(
    (name) => ({ name, src: '' }), // TODO
  ),
};

// Headline numbers. Values count up on scroll when they contain a number.
export const stats = [
  { value: '$XXM+', label: 'Revenue generated across paid social, paid search and SEO' }, // TODO
  { value: 'XXX%', label: 'Average return on investment' }, // TODO
  { value: 'XXK+', label: 'Qualified leads created' }, // TODO
  { value: 'XXX%', label: 'Traffic increase' }, // TODO
];

// "Hot Off The Press". Set enabled: false to hide the section until there's coverage.
export const press = {
  enabled: true,
  articles: [1, 2, 3, 4].map((n) => ({
    outlet: 'Publication', // TODO
    title: `Press headline about Snowcone #${n}`, // TODO
    summary: 'One or two sentences summarising the article. Link through to the original piece.', // TODO
    url: '#', // TODO
    image: '', // optional: '/assets/img/press/article.jpg'
  })),
};

// "Cold Hard Results" case study tabs.
export const caseStudies = [1, 2, 3, 4].map((n) => ({
  tab: `Client ${n}`, // TODO
  industry: 'Industry', // TODO
  name: `Client ${n}`, // TODO
  summary:
    'What the client came to Snowcone for, what we changed, and what happened next. Two to three sentences works best.', // TODO
  stats: [
    { value: 'XX%', label: 'Headline result' }, // TODO
    { value: 'XX%', label: 'Second result' }, // TODO
    { value: 'XXK+', label: 'Third result' }, // TODO
  ],
  image: '', // optional: '/assets/img/cases/client.jpg'
}));

// Google reviews. Only use real reviews, copied word for word.
export const reviews = [1, 2, 3, 4, 5].map(() => ({
  text: 'Paste a real client review here, word for word. Short, specific reviews that mention results work best.', // TODO
  name: 'Client Name', // TODO
  when: 'Google review', // TODO: e.g. "2 months ago"
}));

export const founder = {
  name: 'Founder Name', // TODO
  role: 'Director & Founder', // TODO
  photo: '', // optional: '/assets/img/team/founder.jpg'
  linkedin: '#', // TODO
  // TODO: replace with the founder's real story.
  bio: [
    'Snowcone started because we got tired of watching good businesses get mediocre results. Too many agencies cared more about their own retainer than their clients’ growth.',
    'You know the type. Recycled campaigns. Reports full of numbers that look impressive and mean nothing. A monthly call where nobody can quite tell you what your money did. We knew there was a better way to run an agency, so we built one.',
    'No watered-down partnerships. No melted marketing. Just sharp thinking, straight answers, and growth with serious flavour.',
  ],
};

export const team = [
  founder,
  ...['Head of Growth', 'Performance Manager', 'SEO Growth Manager', 'Senior Growth Strategist', 'Creative Strategist'].map(
    (role) => ({ name: 'Team Member', role, photo: '', linkedin: '#' }), // TODO
  ),
];

// Tools shown on the About page ("Modern Tech Stack").
export const techStack = ['Google Ads', 'Meta', 'GA4', 'Looker Studio', 'HubSpot', 'Klaviyo', 'Semrush', 'Webflow', 'Zapier']; // TODO: the tools Snowcone actually uses
