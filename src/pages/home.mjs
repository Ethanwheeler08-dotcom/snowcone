import { site, clients, stats, press, caseStudies } from '../config.mjs';
import { services, homeServiceStart } from '../data/services.mjs';
import {
  page, icons, auditButton, button, ratingBadge, media, sliderControls,
  reviewsSection, faqList, personalitySection, auditSection,
} from '../layout.mjs';

const stepIcon = {
  inspect: '<circle cx="34" cy="34" r="26"/><circle cx="34" cy="34" r="11" fill="currentColor" stroke="none" opacity=".9"/><path d="m53 53 17 17"/>',
  plan: '<rect x="14" y="10" width="44" height="58" rx="6"/><path d="M26 10V6h20v4M24 30h24M24 42h24M24 54h14"/>',
  build: '<rect x="8" y="40" width="26" height="26" rx="4"/><rect x="38" y="40" width="26" height="26" rx="4"/><rect x="23" y="10" width="26" height="26" rx="4" fill="currentColor" stroke="none" opacity=".9"/>',
  launch: '<path d="M36 6c12 8 16 22 12 38H24C20 28 24 14 36 6Z"/><circle cx="36" cy="26" r="6" fill="currentColor" stroke="none"/><path d="M24 44 14 54l4 10 10-8M48 44l10 10-4 10-10-8M30 60l6 10 6-10"/>',
  optimise: '<path d="M10 18h52M10 36h52M10 54h52"/><circle cx="26" cy="18" r="6" fill="currentColor" stroke="none"/><circle cx="48" cy="36" r="6" fill="currentColor" stroke="none"/><circle cx="20" cy="54" r="6" fill="currentColor" stroke="none"/>',
  scale: '<path d="M8 64h56"/><rect x="12" y="44" width="10" height="16" rx="2"/><rect x="31" y="32" width="10" height="28" rx="2"/><rect x="50" y="14" width="10" height="46" rx="2" fill="currentColor" stroke="none" opacity=".9"/>',
};

const method = [
  ['inspect', 'Inspect', 'We get under the hood', 'Before we touch a single campaign, we dig into your full digital presence — your ads, your website, your search visibility and your competitors. We find out exactly where you’re losing leads and why. Most clients discover something at this stage they didn’t know was costing them enquiries.'],
  ['plan', 'Plan', 'We write the recipe', 'With the gaps mapped, we build a growth plan around your numbers: which channels to back, what to spend, and what success looks like at 30, 60 and 90 days. You sign off before anything goes live.'],
  ['build', 'Build', 'We lay the foundations', 'Tracking, landing pages, audiences and creative. We build the plumbing properly first, so every result from here on is measured and attributed, not guessed.'],
  ['launch', 'Launch', 'We go live', 'Campaigns go out with clear tests baked in. You get live access to your dashboard from day one, so you can watch what’s happening as it happens.'],
  ['optimise', 'Optimise', 'We sharpen every week', 'We cut what isn’t working, double down on what is, and report back in plain English. No vanity metrics, no mystery, no disappearing acts.'],
  ['scale', 'Scale', 'We pour on the syrup', 'Once the numbers hold, we scale spend and expand channels with confidence, compounding your growth without blowing out your cost-per-lead.'],
];

const homeFaqs = [
  ['We’ve Been Burned By An Agency Before. What Makes Snowcone Different?', 'You get live access to your accounts and data, straight answers every week, and a senior team that actually does the work. We tell you what’s working and what isn’t, and we earn your business every month instead of hiding behind a lock-in.'],
  ['What Does It Actually Cost To Work With You?', 'It depends on the channels and the scope. After your free growth audit we’ll give you a clear monthly fee with no hidden extras, so you know exactly what you’re paying for before you commit.'],
  ['How Quickly Will We See Results?', 'Paid channels like Google and Meta usually show meaningful movement within the first few weeks. SEO is a longer game, typically three to six months. We’ll set realistic expectations for your business in the audit.'],
  ['Are We Locked Into A Long Contract?', 'No. We’ll recommend a sensible starting term for your goals, but we’d rather keep you with results than with a contract.'],
  ['We Don’t Have A Big Internal Marketing Team. Can You Work With That?', 'Absolutely. Most of the businesses we work with don’t. We act as an extension of your team, handling the strategy and the execution so you can get on with running the business.'],
];

const goodFit = [
  'You’re spending on ads but can’t clearly trace where your leads are coming from.',
  'You’ve worked with an agency before and left feeling like an invoice, not a priority.',
  'You have a real revenue target, not a vague aspiration, and you need a strategy to hit it.',
  'You want transparent reporting, not a monthly PDF that raises more questions than it answers.',
  'You’re ready to back the process, not just the campaign.',
];

const logoItem = (l) =>
  `<li>${l.src ? `<img src="${l.src}" alt="${l.name}" loading="lazy">` : `<span class="wordmark">${l.name}</span>`}</li>`;

const hero = `
<section class="hero">
  <div class="container hero__inner">
    <div class="reveal">${ratingBadge('dark')}</div>
    <p class="hero__kicker reveal">We turn service businesses into <em>Lead Machines</em><br> with the data to prove it</p>
    <h1 class="h1 reveal">Generating Leads For Brands With Flavour</h1>
    <p class="hero__sub reveal">We’re a growth marketing agency for service businesses who are done watching their ad spend melt away into nothing.</p>
    <div class="btn-row reveal">
      ${auditButton()}
      ${button('See Our Results', '/#case-studies', 'ghost-light')}
    </div>
  </div>
  <div class="container hero__clients">
    <p class="eyebrow eyebrow--accent">${clients.heading}</p>
    <div class="marquee" aria-label="Clients">
      <ul class="marquee__track">${clients.logos.map(logoItem).join('')}</ul>
      <ul class="marquee__track" aria-hidden="true">${clients.logos.map(logoItem).join('')}</ul>
    </div>
  </div>
</section>`;

const whoWeHelp = `
<section class="section who">
  <div class="container">
    <div class="split split--top">
      <p class="eyebrow eyebrow--blue who__eyebrow reveal">Who We Help</p>
      <div class="reveal">
        <h2 class="h2 h2--lg">For Businesses Who Are Done Playing Small.</h2>
        <p class="lead lead--dark">${site.name} works with service businesses ready to scale with sharper strategy, stronger campaigns and a partner who actually gives a damn about the outcome.</p>
      </div>
    </div>
    <hr class="rule">
    <div class="split split--media">
      ${media('', 'Who we help image', 'reveal')}
      <div class="fit reveal">
        <p class="fit__title"><em>You’re Probably A Good Fit If:</em></p>
        <ul class="checklist">${goodFit.map((t) => `<li>${icons.check(18)}<span>${t}</span></li>`).join('')}</ul>
        <p>If that sounds like your world, we should talk.</p>
        ${auditButton('blue')}
      </div>
    </div>
  </div>
</section>`;

const pressSection = !press.enabled
  ? ''
  : `
<section class="section press">
  <div class="container"><h2 class="h3 center reveal">Hot Off The Press</h2></div>
  <div class="slider" data-slider>
    <div class="slider__track container" data-track>
      ${press.articles
        .map(
          (a) => `
      <a class="press-card" href="${a.url}"${/^https?:/.test(a.url) ? ' target="_blank" rel="noopener"' : ''}>
        ${media(a.image, a.outlet, 'press-card__img')}
        <span class="press-card__outlet">${a.outlet}</span>
        <h3>${a.title}</h3>
        <p>${a.summary}</p>
        <span class="link">Read More ${icons.arrow()}</span>
      </a>`,
        )
        .join('')}
    </div>
    ${sliderControls()}
  </div>
</section>`;

const results = `
<section class="results">
  <div class="container">
    <div class="results__card reveal">
      <div class="results__head">
        <div>
          <p class="eyebrow eyebrow--blue">Our Results</p>
          <h2 class="h2 h2--lg">The Numbers Don’t Lie. Neither Do We.</h2>
        </div>
        <div>
          <p class="lead lead--dark">We graph what we do. Every result below is real, attributed and repeatable.</p>
          ${button('See Our Results', '/#case-studies', 'ink')}
        </div>
      </div>
      <dl class="stats">
        ${stats.map((s) => `<div class="stat"><dt class="stat__value" data-count>${s.value}</dt><dd>${s.label}</dd></div>`).join('')}
      </dl>
    </div>
  </div>
</section>`;

const serviceCards = `
<section class="section services-show" id="services">
  <div class="container center-head reveal">
    <h2 class="h2 h2--lg">Our Services</h2>
    ${auditButton()}
  </div>
  <div class="coverflow" data-coverflow data-start="${homeServiceStart}">
    <div class="tabs container" role="tablist" aria-label="Services">
      ${services.map((s, i) => `<button role="tab" class="tab" data-tab="${i}" aria-selected="${i === homeServiceStart}">${s.tab}</button>`).join('')}
    </div>
    <div class="coverflow__stage">
      ${services
        .map(
          (s, i) => `
      <article class="svc-card" data-card="${i}" aria-label="${s.label}">
        <div class="svc-card__top"><span>${String(i + 1).padStart(2, '0')}. ${s.label}</span>${icons[s.icon]()}</div>
        <h3>${s.card.title}</h3>
        <p>${s.card.text}</p>
        <div class="svc-card__visual">
          <span class="svc-card__icon">${icons[s.icon](64)}</span>
          <a class="btn btn--white btn--sm" href="/services/${s.slug}/">Learn More ${icons.chevron(12)}</a>
        </div>
      </article>`,
        )
        .join('')}
    </div>
  </div>
</section>`;

const cases = `
<section class="section cases" id="case-studies">
  <div class="container">
    <div class="center-head reveal">
      <p class="script">Cold Hard Results</p>
      <h2 class="h2 h2--xl">Results People Remember</h2>
      <p class="lead">Numbers are satisfying. Stories are convincing. Here’s what happens when strategy meets a real appetite for growth.</p>
      ${auditButton('blue')}
    </div>
    <div class="case-tabs" data-tabs>
      <div class="pill-tabs" role="tablist" aria-label="Case studies">
        ${caseStudies.map((c, i) => `<button role="tab" class="pill-tab" data-tab="${i}" aria-selected="${i === 0}">${c.tab}</button>`).join('')}
      </div>
      ${caseStudies
        .map(
          (c, i) => `
      <div class="case" role="tabpanel" data-panel="${i}"${i === 0 ? '' : ' hidden'}>
        <div class="case__body">
          <p class="eyebrow">${c.industry}</p>
          <h3 class="h3">${c.name}</h3>
          <p>${c.summary}</p>
          <dl class="case__stats">${c.stats.map((s) => `<div><dt>${s.value}</dt><dd>${s.label}</dd></div>`).join('')}</dl>
        </div>
        ${media(c.image, `${c.name} results`, 'case__media')}
      </div>`,
        )
        .join('')}
    </div>
  </div>
</section>`;

const methodSection = `
<section class="method" data-method>
  <div class="container">
    <div class="method__head reveal">
      <p class="eyebrow eyebrow--accent">Our Secret Syrup</p>
      <h2 class="h2 h2--xl">The Snowcone Method</h2>
      ${auditButton()}
    </div>
    <div class="method__body">
      <div class="method__steps" aria-live="polite">
        ${method
          .map(
            ([, name, title, text], i) => `
        <div class="method__step" data-step="${i}"${i === 0 ? '' : ' hidden'}>
          <p class="script script--accent">${name}</p>
          <h3 class="h3">${title}</h3>
          <p>${text}</p>
        </div>`,
          )
          .join('')}
      </div>
      <div class="method__orbit" aria-hidden="true">
        <div class="method__ring"></div>
        ${method.map((_, i) => `<span class="method__dot" data-dot="${i}">${String(i + 1).padStart(2, '0')}</span>`).join('')}
        ${method
          .map(
            ([key], i) =>
              `<svg class="method__icon" data-icon="${i}" viewBox="0 0 76 76" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${stepIcon[key]}</svg>`,
          )
          .join('')}
      </div>
    </div>
    <div class="method__controls">
      <div class="slider__btns">
        <button class="icon-btn icon-btn--light" data-prev aria-label="Previous step">${icons.chevronLeft()}</button>
        <button class="icon-btn icon-btn--light" data-next aria-label="Next step">${icons.chevron()}</button>
      </div>
      <div class="method__dashes">${method.map((_, i) => `<span data-dash="${i}"></span>`).join('')}</div>
    </div>
  </div>
</section>`;

const faqSection = `
<section class="section faq-section">
  <div class="container split split--faq">
    <div class="reveal">
      <h2 class="h2">The Questions Businesses Always Ask Us First</h2>
      <p class="lead lead--dark">We’d rather answer them here than leave you wondering.</p>
      ${auditButton('blue')}
    </div>
    <div class="reveal">${faqList(homeFaqs)}</div>
  </div>
</section>`;

const about = personalitySection({
  text: `
        <p>${site.name} was founded by marketers who got tired of watching good businesses get mediocre results from agencies more interested in their own retainer than their clients’ growth. So we built the antidote.</p>
        <p>We embed ourselves in your data, your culture and your goals. We tell you the truth about what’s working, and what isn’t. We bring sharper thinking, AI and automation to every account. And we treat every client like a partner, not an account number, because that’s the only way the work ever gets really good.</p>
        <p>No bland thinking. No recycled campaigns. No disappearing acts. Just growth with serious flavour.</p>`,
});

export default () =>
  page({
    path: '/',
    body: [hero, whoWeHelp, pressSection, results, serviceCards, cases, reviewsSection(), methodSection, faqSection, about, auditSection()].join('\n'),
  });
