import { site, marquee, results, press, caseStudies, industries } from '../config.mjs';
import { services, homeServiceStart } from '../data/services.mjs';
import {
  page, icons, auditButton, button, ratingBadge, media, sliderControls, statList, logoMark,
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
  ['inspect', 'Inspect', 'We get under the hood', 'Before we touch a single campaign, we go through everything. Your ads, your website, how you show up in search, and what your competitors are up to. We work out where you’re losing leads and why. This is often where we find something that’s been quietly costing you enquiries.'],
  ['plan', 'Plan', 'We write the recipe', 'Then we build a plan around your numbers. Which channels to back, what to spend, and what good looks like at 30, 60 and 90 days. You sign off before anything goes live.'],
  ['build', 'Build', 'We lay the foundations', 'Tracking, landing pages, audiences and creative. We get the plumbing right first, so every result after this gets measured properly instead of guessed.'],
  ['launch', 'Launch', 'We go live', 'Campaigns go out with clear tests built in. Your dashboard is live from day one, so you can see what’s happening as it happens.'],
  ['optimise', 'Optimise', 'We sharpen it every week', 'We cut what isn’t working and back what is. Then we tell you about it in plain English.'],
  ['scale', 'Scale', 'We pour on the syrup', 'Once the numbers hold up, we spend more and add channels, without blowing out your cost per lead.'],
];

const homeFaqs = [
  ['We’ve Been Burned By An Agency Before. What Makes Snowcone Different?', 'You can see your accounts and your data whenever you like, and the people you talk to are the people doing the work. We tell you what’s working and what isn’t, and we show our working on every decision.'],
  ['What Does It Actually Cost To Work With You?', 'It depends on the channels and how much there is to do. After your free audit we’ll send a clear proposal with the scope and the fee spelled out, so there are no surprises later.'],
  ['How Quickly Will We See Results?', 'Google and Meta ads can start bringing in enquiries within the first few weeks. SEO takes longer, usually three to six months before it really moves. We’ll give you realistic timeframes for your business in the audit.'],
  ['What Happens After The Free Audit?', 'We walk you through what we found and what we’d fix first. If it makes sense to work together, we’ll put together a proposal with the scope, timeline and costs. If not, the plan is still yours to keep.'],
  ['We Don’t Have A Big Internal Marketing Team. Can You Work With That?', 'Absolutely. Most service businesses don’t, and that’s exactly who we’re built for. We handle the strategy and the doing, so you can get on with running the business.'],
];

const goodFit = [
  'You’re spending on ads but can’t say for sure where your leads come from.',
  'You’ve used an agency before and felt more like an invoice than a priority.',
  'You’ve got a real revenue target and need a plan to hit it.',
  'You want reporting you can actually understand.',
  'You’re ready to give a good strategy the time it needs to work.',
];

const primary = services.find((s) => s.featured);
const badge = ratingBadge('dark', { fallback: true });

const logoItem = (l) =>
  `<li>${l.src ? `<img src="${l.src}" alt="${l.name}" loading="lazy">` : `<span class="wordmark">${l.name}</span>`}</li><li class="marquee__cone" aria-hidden="true">${logoMark(18)}</li>`;

const hero = `
<section class="hero">
  <div class="container hero__inner">
    ${badge ? `<div class="reveal">${badge}</div>` : ''}
    <p class="hero__kicker reveal">We turn service businesses into <em>Lead Machines</em><br> and show you the numbers behind every lead</p>
    <h1 class="h1 reveal">Generating Leads For Brands With <em class="squiggle">Flavour</em></h1>
    <p class="hero__sub reveal">We’re a growth marketing agency that gets service businesses recommended by AI, found on Google and booked up.</p>
    <div class="btn-row reveal">
      ${auditButton()}
      ${primary ? button('Get Found By AI', '/#ai-search', 'ghost-light') : button('See How We Work', '/#method', 'ghost-light')}
    </div>
  </div>
  ${
    marquee.items.length
      ? `<div class="container hero__clients">
    <p class="eyebrow eyebrow--accent">${marquee.heading}</p>
    <div class="marquee">
      <ul class="marquee__track">${marquee.items.map(logoItem).join('')}</ul>
      <ul class="marquee__track" aria-hidden="true">${marquee.items.map(logoItem).join('')}</ul>
    </div>
  </div>`
      : ''
  }
</section>`;

// Snowcone's main service gets its own section straight after the hero.
const aiFeature = !primary
  ? ''
  : `
<section class="section ai-feature" id="ai-search">
  <div class="container">
    <div class="ai-feature__grid">
      <div class="ai-feature__copy reveal">
        <p class="eyebrow eyebrow--primary">Our Specialty</p>
        <h2 class="h2 h2--lg">Be The Business AI <em>Recommends</em></h2>
        <p class="lead lead--dark">More of your customers now ask ChatGPT, Gemini or Google’s AI who to call. If those tools don’t know you, they recommend someone else. Getting your name into those answers is what we focus on most.</p>
        <ul class="ai-feature__points">
          <li>${icons.drop(18)}<span><strong>Get recommended by AI.</strong> We shape how AI assistants describe your business and when they suggest it.</span></li>
          <li>${icons.drop(18)}<span><strong>Rank on Google too.</strong> The same work lifts your normal search rankings and map listing.</span></li>
          <li>${icons.drop(18)}<span><strong>See every mention.</strong> Your dashboard tracks where AI tools bring you up, and how often.</span></li>
        </ul>
        <div class="btn-row">${button('Explore AI Search', `/services/${primary.slug}/`, 'primary')}${auditButton('soft')}</div>
      </div>
      <figure class="ai-chat reveal">
        <div class="ai-chat__bar" aria-hidden="true"><span></span><span></span><span></span><small>AI assistant</small></div>
        <p class="ai-chat__msg ai-chat__msg--user">Who’s the best emergency plumber near me?</p>
        <div class="ai-chat__msg ai-chat__msg--ai">
          <p>Here are a few well-reviewed options nearby:</p>
          <ol>
            <li class="is-you"><strong>Your Business</strong><span>Fast call-outs, great reviews</span><em>Top pick</em></li>
            <li><strong>Another Plumber</strong><span>Open weekends</span></li>
            <li><strong>One More Option</strong><span>Family-owned</span></li>
          </ol>
        </div>
        <figcaption>Illustration: the kind of answer we work towards.</figcaption>
      </figure>
    </div>
    <div class="ai-feature__platforms reveal">
      <span>Where we get you found</span>
      <ul class="chips">${primary.platforms.map((p) => `<li>${p}</li>`).join('')}</ul>
    </div>
  </div>
</section>`;

const whoWeHelp = `
<section class="section who">
  <div class="container">
    <div class="split split--top">
      <p class="eyebrow eyebrow--primary who__eyebrow reveal">Who We Help</p>
      <div class="reveal">
        <h2 class="h2 h2--lg">For Businesses Who Are Done Playing Small.</h2>
        <p class="lead lead--dark">${site.name} works with service businesses ready to scale with sharper strategy, stronger campaigns and a partner who actually gives a damn about the outcome.</p>
      </div>
    </div>
    <hr class="rule">
    <div class="split split--media">
      ${media('', 'Service business owners working with Snowcone', 'reveal')}
      <div class="fit reveal">
        <p class="fit__title"><em>You’re probably a good fit if</em></p>
        <ul class="checklist">${goodFit.map((t) => `<li>${icons.drop(18)}<span>${t}</span></li>`).join('')}</ul>
        <p>If that sounds like you, let’s talk.</p>
        ${auditButton('primary')}
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

const resultsSection = `
<section class="results">
  <div class="container">
    <div class="results__card reveal">
      <div class="results__head">
        <div>
          <p class="eyebrow eyebrow--primary">${results.eyebrow}</p>
          <h2 class="h2 h2--lg">${results.title}</h2>
        </div>
        <div>
          <p class="lead lead--dark">${results.lead}</p>
          ${caseStudies.length ? button('See Our Results', '/#case-studies', 'ink') : button('See How We Work', '/#method', 'ink')}
        </div>
      </div>
      ${statList(results.items)}
    </div>
  </div>
</section>`;

const serviceCards = `
<section class="section services-show" id="services">
  <div class="container center-head reveal">
    <p class="script">Pick your flavour</p>
    <h2 class="h2 h2--lg">Our Services</h2>
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

const casesSection = `
<section class="section cases" id="case-studies">
  <div class="container">
    <div class="center-head reveal">
      <p class="script">Cold Hard Results</p>
      <h2 class="h2 h2--xl">Results People Remember</h2>
      <p class="lead">Numbers are satisfying. Stories are convincing. Here’s what happens when strategy meets a real appetite for growth.</p>
      ${auditButton('primary')}
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

// Until there are real case studies, the same tabbed panel shows how Snowcone
// approaches each kind of service business.
const industriesSection = `
<section class="section cases" id="industries">
  <div class="container">
    <div class="center-head reveal">
      <p class="script">Who We Grow</p>
      <h2 class="h2 h2--xl">Built For Service Businesses</h2>
      <p class="lead">Every industry has its own buying cycle, margins and objections. Here’s where we’d start with yours.</p>
    </div>
    <div class="case-tabs" data-tabs>
      <div class="pill-tabs" role="tablist" aria-label="Industries">
        ${industries.map((c, i) => `<button role="tab" class="pill-tab" data-tab="${i}" aria-selected="${i === 0}">${c.tab}</button>`).join('')}
      </div>
      ${industries
        .map(
          (c, i) => `
      <div class="case" role="tabpanel" data-panel="${i}"${i === 0 ? '' : ' hidden'}>
        <div class="case__body">
          <p class="eyebrow">Industry</p>
          <h3 class="h3">${c.name}</h3>
          <p>${c.summary}</p>
          <dl class="case__stats case__stats--levers">${c.levers.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
        </div>
        ${media('', '', 'case__media', c.icon)}
      </div>`,
        )
        .join('')}
    </div>
  </div>
</section>`;

const methodSection = `
<section class="method" id="method" data-method>
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
      <p class="lead lead--dark">We’d rather answer them here than leave you wondering. Got another one? Email <a href="mailto:${site.email}">${site.email}</a>.</p>
    </div>
    <div class="reveal">${faqList(homeFaqs)}</div>
  </div>
</section>`;

const about = personalitySection({
  text: `
        <p>${site.name} is a growth marketing agency for service businesses. We dig into your numbers, learn how your business actually makes money, and build the marketing around that.</p>
        <p>You’ll always know what’s working and what isn’t, because we’ll tell you. We look after your budget like it’s our own, and we care how things turn out for you.</p>
        <p>No bland thinking. No recycled campaigns. No disappearing acts.</p>`,
});

export default () =>
  page({
    path: '/',
    body: [hero, aiFeature, whoWeHelp, pressSection, resultsSection, serviceCards, caseStudies.length ? casesSection : industriesSection, reviewsSection(), methodSection, faqSection, about, auditSection()].join('\n'),
  });
