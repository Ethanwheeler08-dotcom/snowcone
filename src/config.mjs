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
  title: 'Snowcone | Growth Marketing With Serious Flavour',
  description:
    'Growth marketing for service businesses, from getting recommended by ChatGPT and Google’s AI answers to ads that bring in enquiries. Sharp strategy, results you can measure.',

  email: 'hello@snowcone.com.au', // TODO: confirm contact email
  phone: '', // optional, e.g. '08 1234 5678'
  // Where every "Book My Growth Audit" button goes (Typeform, Calendly, etc.).
  bookingUrl: 'mailto:hello@snowcone.com.au?subject=Free%20Growth%20Audit', // TODO: confirm, or swap for a booking form link

  // Shown in the footer. Leave text empty to show the service area instead.
  address: { text: '', mapUrl: '' },
  serviceArea: 'Working with service businesses worldwide',

  // Add a URL to show a social link in the footer; empty ones are hidden.
  socials: [
    { label: 'Instagram', icon: 'instagram', url: '' },
    { label: 'Facebook', icon: 'facebook', url: '' },
    { label: 'LinkedIn', icon: 'linkedin', url: '' },
  ],

  // Google rating badge, shown above the hero headline once there's a real score.
  // `badge` is optional text shown there instead while there's no rating.
  rating: { score: '', label: 'from reviews', url: '' },
  badge: '',

  auditValue: '100% free, no strings attached',

  // Closing line on each service page. Leave empty to hide it.
  planNote: 'We only take on a handful of new clients each month, so we can give each one the attention it takes to deliver.', // TODO: confirm
};

// Logo strip under the hero. Hidden while empty. Once clients have agreed to be
// named, add their logos: { name: 'Client', src: '/assets/img/clients/client.svg' }.
export const marquee = {
  heading: 'Trusted By Brands Who Came For More',
  items: [],
};

// Home page numbers card and the band near the top of each service page.
// These are commitments, so only keep the ones Snowcone will stand behind.
// When there are real client results, replace them, e.g. { value: '$2.4M', count: true, label: 'Revenue generated for clients' },
// and update the wording to match: eyebrow 'Our Results', a lead such as 'Every result
// below is real and attributed', and serviceTitle 'Trusted By Service Businesses Across <em>Australia</em>'.
// Values count up on scroll when `count` is true. The website and strategy pages
// have their own list (`results` in src/data/services.mjs).
export const results = {
  eyebrow: 'Our Promise',
  title: 'The Numbers Don’t Lie. Neither Do We.',
  lead: 'We track everything we do, and you see every number we see. From the first week.',
  serviceTitle: 'What Every Snowcone Client <em>Gets</em>',
  items: [
    { value: '100%', count: true, label: 'Of your ad accounts, data and creative stay in your name' }, // TODO: confirm
    { value: '24/7', label: 'Access to a live dashboard of every campaign' }, // TODO: confirm
    { value: 'Weekly', label: 'Updates in plain English on what we changed and why' }, // TODO: confirm
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
// { text: 'Review text…', name: 'Reviewer name', when: '2 months ago', stars: 5 }.
// The reviews section (home and About) only appears once there's at least one.
export const reviews = [];

// About page story. Add a name and photo to turn it into a founder profile
// (the label switches to 'About The Founder'); rewrite the bio in their voice too.
export const founder = {
  name: '',
  role: '',
  photo: '', // e.g. '/assets/img/team/founder.jpg'
  linkedin: '',
  bio: [
    'Snowcone started because we got sick of watching good businesses get average results from agencies that cared more about the retainer than the result.',
    'You’ve probably met them. Recycled campaigns. Reports full of big numbers that don’t mean much. A monthly call where nobody can tell you what your money actually did.',
    'So we built the agency we’d want to hire ourselves. Clear thinking, plain English, and nothing watered down.',
  ],
};

// About page team grid, e.g. { name: 'Name', role: 'Head of Growth', photo: '/assets/img/team/name.jpg', linkedin: 'https://…' }.
// While this is empty, the About page shows the values below instead.
export const team = [];

export const values = [
  ['Straight talk', 'If something isn’t working, you’ll hear it from us first. Then we’ll tell you what we’re doing about it.'],
  ['Your accounts stay yours', 'Ad accounts, tracking and creative get set up in your name. Nobody’s holding anything hostage.'],
  ['Built around your numbers', 'Every plan starts with your margins and your goals. We don’t copy and paste from the last client.'],
  ['Test, learn, repeat', 'Each campaign goes out with something to prove, and whatever we learn goes into the next one.'],
  ['Creative that works for a living', 'Looking good is the easy part. Every ad, page and email has a job to do.'],
  ['In it for the long haul', 'We care where your business is in a year’s time, and we stick around to help get it there.'],
];

// About page "Modern Tech Stack": the tools behind the services, grouped by job.
// TODO: confirm these are the tools Snowcone actually uses
export const techStack = [
  { group: 'Advertising', icon: 'megaphone', blurb: 'Where your campaigns run and your ad budget gets managed.', tools: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager'] },
  { group: 'Tracking & reporting', icon: 'chart', blurb: 'How every lead gets counted and every dollar gets traced.', tools: ['Google Analytics 4', 'Google Tag Manager', 'Looker Studio'] },
  { group: 'Search', icon: 'search', blurb: 'How we find what people are searching for, then get you found.', tools: ['Google Search Console', 'Google Business Profile', 'Semrush'] },
  { group: 'Email & CRM', icon: 'mail', blurb: 'Where follow-ups, nurture flows and lead lists live.', tools: ['Klaviyo', 'Mailchimp', 'HubSpot'] },
  { group: 'Websites', icon: 'web', blurb: 'What we build fast, easy-to-edit sites on.', tools: ['WordPress', 'Webflow', 'Cloudflare'] },
  { group: 'Creative', icon: 'brush', blurb: 'Where the ads, landing pages and short videos get made.', tools: ['Figma', 'Canva', 'CapCut'] },
];
