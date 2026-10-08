// ─────────────────────────────────────────────────────────────────────────────
// Snowcone site content
//
// Everything Snowcone-specific lives here. Lines marked "TODO: confirm" are
// filled in but still need a human to check them before launch, and
// `npm run build` lists every one that's left.
//
// Some sections only make sense with real-world proof (client reviews, results,
// press, team photos). Those start empty and the site shows honest alternatives
// in their place. Add the real thing and the original section switches back on.
// Never add reviews, results or press that didn't happen.
//
// Text fields may contain simple HTML, e.g. <em>word</em> renders the italic
// serif accent used across the site.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  // While true, a small "draft" ribbon shows on every page.
  draft: false,

  name: 'Snowcone',
  legalName: 'Snowcone Marketing',
  url: 'https://snowcone.com.au', // TODO: confirm domain (used for canonical + social tags)
  title: 'Snowcone — Growth Marketing With Serious Flavour',
  description:
    'Growth marketing agency for service businesses across Australia. Sharp strategy, standout creative and results you can measure. Nothing watered down.',

  email: 'hello@snowcone.com.au', // TODO: confirm contact email
  phone: '', // optional, e.g. '08 1234 5678'
  // Where every "Book My Growth Audit" button goes (Typeform, Calendly, etc.).
  bookingUrl: 'mailto:hello@snowcone.com.au?subject=Free%20Growth%20Audit', // TODO: confirm, or swap for a booking form link

  // Shown in the footer. Leave text empty to show the service area instead.
  address: { text: '', mapUrl: '' },
  serviceArea: 'Working with service businesses across Australia',

  // Add a URL to show a social link in the footer; empty ones are hidden.
  socials: [
    { label: 'Instagram', icon: 'instagram', url: '' },
    { label: 'Facebook', icon: 'facebook', url: '' },
    { label: 'LinkedIn', icon: 'linkedin', url: '' },
  ],

  // Google rating badge. Leave score empty until there are real Google reviews;
  // the hero then shows the `badge` text instead.
  rating: { score: '', label: 'from reviews', url: '' },
  badge: 'Now booking free growth audits',

  auditValue: '100% free, no strings attached',
};

// Hero marquee. Shows the channels Snowcone works across. Once clients have
// agreed to be named, swap in their logos: { name: 'Client', src: '/assets/img/clients/client.svg' }.
export const marquee = {
  heading: 'Growth Across Every Channel Your Customers Use',
  items: ['Google Search', 'Google Maps', 'YouTube', 'Facebook', 'Instagram', 'LinkedIn', 'TikTok', 'ChatGPT', 'Email'].map(
    (name) => ({ name, src: '' }),
  ),
};

// Home page numbers card and the band near the top of each service page.
// These are commitments, so only keep the ones Snowcone will stand behind.
// When there are real client results, replace them, e.g. { value: '$2.4M', label: 'Revenue generated for clients' }.
// Values count up on scroll when `count` is true.
export const results = {
  eyebrow: 'Our Promise',
  title: 'The Numbers Don’t Lie. Neither Do We.',
  lead: 'We graph what we do, and you see every number we see. Here’s what that looks like from day one.',
  serviceTitle: 'What Every Snowcone Client <em>Gets</em>',
  items: [
    { value: '100%', count: true, label: 'Ownership of your ad accounts, data and creative' }, // TODO: confirm
    { value: '24/7', label: 'Live dashboard access to every campaign' }, // TODO: confirm
    { value: 'Weekly', label: 'Plain-English updates on what changed and why' }, // TODO: confirm
    { value: '0', label: 'Lock-in contracts. We earn the next month.' }, // TODO: confirm
  ],
};

// "Hot Off The Press". Hidden until there's real coverage to link to.
export const press = {
  enabled: false,
  articles: [
    // { outlet: 'Mumbrella', title: 'Headline', summary: 'One sentence.', url: 'https://…', image: '' },
  ],
};

// Real client results. While this is empty, the home page shows the
// industries below instead.
export const caseStudies = [
  // {
  //   tab: 'Client', industry: 'Trades', name: 'Client name',
  //   summary: 'What they came to Snowcone for, what we changed, what happened next.',
  //   stats: [{ value: '312%', label: 'More enquiries' }, …],
  //   image: '/assets/img/cases/client.jpg',
  // },
];

// Industries panel: how Snowcone approaches each kind of service business.
export const industries = [
  {
    tab: 'Trades',
    name: 'Trades & Home Services',
    icon: 'wrench',
    summary:
      'When a pipe bursts, nobody scrolls. They search, call the first business that looks trustworthy, and book. We put you at the top of those searches and make sure the call comes to you.',
    levers: [
      ['Search', 'Google Ads on high-intent local terms like “emergency plumber near me”'],
      ['Maps', 'A Google Business Profile and review flow that wins the map pack'],
      ['Mobile', 'Fast landing pages with click-to-call front and centre'],
    ],
  },
  {
    tab: 'Legal',
    name: 'Law Firms',
    icon: 'scale',
    summary:
      'People choose a lawyer on trust, usually at a stressful moment. We build visibility on the exact questions they’re asking and campaigns that turn that trust into booked consultations.',
    levers: [
      ['SEO', 'Answer-first content for the questions clients search and ask AI'],
      ['Search', 'Practice-area campaigns with careful, compliant copy'],
      ['Email', 'Follow-up for enquiries that aren’t ready to book yet'],
    ],
  },
  {
    tab: 'Finance',
    name: 'Finance & Accounting',
    icon: 'strategy',
    summary:
      'Lending, accounting and advice are crowded, high-value categories. We find the profitable pockets of demand and build funnels that qualify people before they reach your team.',
    levers: [
      ['Search', 'Intent-led campaigns that filter out low-quality clicks'],
      ['Meta', 'Lead forms with qualifying questions built in'],
      ['Data', 'Tracking that ties ad spend to settled loans and signed clients'],
    ],
  },
  {
    tab: 'Health',
    name: 'Health & Allied Health',
    icon: 'pulse',
    summary:
      'Clinics run on booked appointments and a full diary. We make you the obvious local choice for new patients and keep existing ones coming back.',
    levers: [
      ['Maps', 'Local search visibility for every clinic location'],
      ['Meta', 'Awareness campaigns that reach new patients nearby'],
      ['Email', 'Recall and reactivation flows that fill gaps in the diary'],
    ],
  },
  {
    tab: 'Professional',
    name: 'Professional Services',
    icon: 'briefcase',
    summary:
      'Longer sales cycles need more than one touchpoint. We combine LinkedIn, search and email so decision-makers see you, trust you and book the call.',
    levers: [
      ['LinkedIn', 'Targeting by role, company size and industry'],
      ['Search', 'Capturing buyers already comparing providers'],
      ['Email', 'Nurture sequences that stay useful until they’re ready'],
    ],
  },
];

// Google reviews, copied word for word, e.g.
// { text: 'Review text…', name: 'Reviewer name', when: '2 months ago' }.
// While this is empty, the reviews section shows Snowcone's promises instead.
export const reviews = [];

export const promises = [
  'You’ll always know what your money did, because you see the same dashboard we do.',
  'You own your ad accounts, your data and your creative. If we ever part ways, it all stays with you.',
  'We’ll tell you when something isn’t working before you have to ask.',
  'Every recommendation comes with the reasoning behind it, in plain English.',
  'No lock-in contracts. If we’re not earning our keep, you’re free to go.',
];

// About page story. Add a name and photo to turn it into a founder profile.
export const founder = {
  name: '',
  role: '',
  photo: '', // e.g. '/assets/img/team/founder.jpg'
  linkedin: '',
  bio: [
    'Snowcone started because we got tired of watching good businesses get mediocre results. Too many agencies cared more about their own retainer than their clients’ growth.',
    'You know the type. Recycled campaigns. Reports full of numbers that look impressive and mean nothing. A monthly call where nobody can quite tell you what your money did. We knew there was a better way to run an agency, so we built one.',
    'No watered-down partnerships. No melted marketing. Just sharp thinking, straight answers, and growth with serious flavour.',
  ],
};

// About page team grid, e.g. { name: 'Name', role: 'Head of Growth', photo: '/assets/img/team/name.jpg', linkedin: 'https://…' }.
// While this is empty, the About page shows the values below instead.
export const team = [];

export const values = [
  ['Straight answers', 'If something isn’t working, you’ll hear it from us first, along with what we’re doing about it.'],
  ['Your accounts, your data', 'Everything we build in your name stays in your name. No hostage ad accounts.'],
  ['Senior thinking', 'Strategy comes from people who’ve done it before, not from a template.'],
  ['Test, learn, repeat', 'Every campaign ships with a hypothesis, and every result feeds the next one.'],
  ['Creative with a job', 'Good-looking isn’t enough. Every ad, page and email has to earn its place.'],
  ['Partners, not vendors', 'We care about the outcome the way you do, and we stick around to improve it.'],
];

// About page "Modern Tech Stack": the platforms behind the services.
export const techStack = ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Google Analytics 4', 'Tag Manager', 'Search Console', 'Looker Studio']; // TODO: confirm
