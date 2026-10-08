import { site, reviews, team } from './config.mjs';
import { services } from './data/services.mjs';

// ── Icons ────────────────────────────────────────────────────────────────────

const svg = (body, { size = 24, vb = '0 0 24 24', cls = '' } = {}) =>
  `<svg class="icon ${cls}" width="${size}" height="${size}" viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

export const icons = {
  chevron: (s = 14) => svg('<path d="m9 6 6 6-6 6"/>', { size: s }),
  chevronLeft: (s = 14) => svg('<path d="m15 6-6 6 6 6"/>', { size: s }),
  arrow: (s = 14) => svg('<path d="M5 12h14M13 6l6 6-6 6"/>', { size: s }),
  check: (s = 20) => svg('<path d="m4.5 12.5 5 5 10-11"/>', { size: s }),
  plus: (s = 20) => svg('<path d="M12 5v14M5 12h14"/>', { size: s }),
  menu: (s = 22) => svg('<path d="M4 7h16M4 12h16M4 17h16"/>', { size: s }),
  close: (s = 22) => svg('<path d="M6 6l12 12M18 6 6 18"/>', { size: s }),
  linkedin: (s = 16) =>
    `<svg class="icon" width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.5h4V21H3V9.5Zm7 0h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06C21.6 9.04 22 11.5 22 14.7V21h-4v-5.6c0-1.34-.03-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96V21H10V9.5Z"/></svg>`,
  instagram: (s = 16) =>
    svg('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>', { size: s }),
  facebook: (s = 16) =>
    `<svg class="icon" width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.87.25-1.46 1.5-1.46h1.6V4.46A21 21 0 0 0 14.3 4.3c-2.3 0-3.8 1.4-3.8 3.96v2.24H8v3h2.5V21h3Z"/></svg>`,
  google: (s = 22) =>
    `<svg class="icon" width="${s}" height="${s}" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.5 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.9a5.04 5.04 0 0 1-2.2 3.3v2.75h3.56c2.08-1.92 3.24-4.74 3.24-8.06Z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.98.66-2.24 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"/><path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.07H2.18a11 11 0 0 0 0 9.87l3.66-2.84Z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.2 1.64l3.15-3.15A10.96 10.96 0 0 0 12 1 11 11 0 0 0 2.18 7.07L5.84 9.9C6.71 7.3 9.14 5.38 12 5.38Z"/></svg>`,
  // Service icons
  meta: (s = 22) => svg('<path d="M7 8c-2.6 0-4 2.1-4 4.2S4.3 16 6.5 16c3.6 0 5.7-8 10-8 2.6 0 4.5 1.8 4.5 4.2S20 16 17.5 16c-3.7 0-5.9-8-10.5-8Z"/>', { size: s }),
  search: (s = 22) => svg('<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.4-4.4"/>', { size: s }),
  web: (s = 22) => svg('<rect x="3" y="4.5" width="18" height="15" rx="2.5"/><path d="M3 9h18M6.5 6.8h.01M9 6.8h.01"/>', { size: s }),
  mail: (s = 22) => svg('<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/>', { size: s }),
  strategy: (s = 22) => svg('<path d="m3 17 6-6 4 4 8-8"/><path d="M14 7h7v7"/>', { size: s }),
  // Industry icons
  wrench: (s = 22) => svg('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z"/>', { size: s }),
  scale: (s = 22) => svg('<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>', { size: s }),
  pulse: (s = 22) => svg('<path d="M3 12h4l2-5 4 10 2-5h6"/>', { size: s }),
  // Syrup drop, used as the list bullet
  drop: (s = 18) => `<svg class="icon icon--drop" width="${s}" height="${s}" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5c3.6 4.7 6.5 8.4 6.5 12a6.5 6.5 0 0 1-13 0c0-3.6 2.9-7.3 6.5-12Z" fill="currentColor"/><path d="M9.2 14.6a3 3 0 0 0 2.4 2.9" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".8"/></svg>`,
  megaphone: (s = 22) => svg('<path d="M4 10v4a1 1 0 0 0 1 1h2l5 4V5L7 9H5a1 1 0 0 0-1 1Z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11"/>', { size: s }),
  chart: (s = 22) => svg('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>', { size: s }),
  brush: (s = 22) => svg('<path d="M18.4 2.6a2 2 0 0 1 3 3L12 15l-3-3 9.4-9.4Z"/><path d="M9 12c-2.5 0-4 1.6-4 4 0 1.5-.8 2.6-2 3 3.8 1.3 9 .4 9-4"/>', { size: s }),
  briefcase: (s = 22) => svg('<rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12.5h18"/>', { size: s }),
};

// Inline brand mark: a snowcone (scoop + cone) in the accent colours.
export const logoMark = (size = 30) => `<svg class="logo-mark" width="${size}" height="${size}" viewBox="0 0 32 32" aria-hidden="true">
  <path d="M7 13.5h18L17.3 29.2a1.5 1.5 0 0 1-2.6 0L7 13.5Z" fill="var(--cone)"/>
  <path d="M10 18.5h12M12.5 23h7" stroke="var(--cone-line)" stroke-width="1.4" stroke-linecap="round"/>
  <path d="M5.5 13.6c-.9-5 4.2-10 10.5-10s11.4 5 10.5 10c-.2 1-1.4 1.3-2 .5-.6-.8-1.8-.8-2.4 0-.7 1-2.1 1-2.8 0-.7-1-2.1-1-2.8 0-.7 1-2.2 1-2.9 0-.6-.8-1.8-.8-2.4 0-.6.8-1.8.5-2-.5Z" fill="var(--scoop)"/>
  <path d="M16 3.6c3.4 0 6.4 1.5 8.3 3.9-2.6-1.4-5.4-1.9-8.6-.7-2.4.9-4.9.6-7-.4C10.6 4.7 13.2 3.6 16 3.6Z" fill="var(--scoop-hi)"/>
</svg>`;

export const logo = (cls = '') =>
  `<span class="logo ${cls}">${logoMark()}<span class="logo-word">snowcone</span></span>`;

// ── Small helpers ────────────────────────────────────────────────────────────

export const isExternal = (url) => /^(https?:|mailto:)/.test(url);
const linkAttrs = (url) => (/^https?:/.test(url) ? ' target="_blank" rel="noopener"' : '');

// Primary button with the flip-on-hover label from the original.
export const button = (label, url = site.bookingUrl, variant = 'accent', extra = '') =>
  `<a class="btn btn--${variant} ${extra}" href="${url}"${linkAttrs(url)}><span class="btn__label" data-label="${label}"><span>${label}</span></span>${icons.chevron()}</a>`;

export const auditButton = (variant = 'accent', extra = '') => button('Book My Growth Audit', site.bookingUrl, variant, extra);

export const stars = (n = 5) => {
  const full = Math.max(0, Math.min(5, Math.round(Number(n) || 0)));
  return `<span class="stars" role="img" aria-label="${full} out of 5 stars">${'★'.repeat(full)}<span class="stars__off" aria-hidden="true">${'★'.repeat(5 - full)}</span></span>`;
};

// Google rating badge. Without a real score it renders nothing, or with
// `fallback` the site badge text (used in the hero).
export const ratingBadge = (variant = 'dark', { fallback = false } = {}) => {
  if (site.rating.score)
    return `
  <a class="rating rating--${variant}" href="${site.rating.url || '#'}"${linkAttrs(site.rating.url)}>
    <span class="rating__top">${icons.google(16)}${stars(site.rating.score)}</span>
    <span class="rating__text">${site.rating.score} ${site.rating.label}</span>
  </a>`;
  return fallback && site.badge
    ? `<a class="badge" href="${site.bookingUrl}"${linkAttrs(site.bookingUrl)}><span class="badge__dot" aria-hidden="true"></span>${site.badge}</a>`
    : '';
};

// Image slot: shows the photo if a src is given, otherwise decorative brand art
// (shaved-ice gradients with the snowcone mark, or `icon` if one is passed).
export const media = (src, label, cls = '', icon = '') =>
  src
    ? `<div class="media ${cls}"><img src="${src}" alt="${label}" loading="lazy"></div>`
    : `<div class="media media--art ${cls}" aria-hidden="true"><span class="media__art">${icon ? icons[icon](72) : logoMark(72)}</span></div>`;

// Big-number list used by the home results card and the service pages.
export const statList = (items, cls = '') => `
      <dl class="stats ${cls}">
        ${items.map((s) => `<div class="stat"><dt class="stat__value"${s.count ? ' data-count' : ''}>${s.value}</dt><dd>${s.label}</dd></div>`).join('')}
      </dl>`;

export const sectionHead = (eyebrow, title, extra = '') => `
  <div class="section-head reveal">
    <h2 class="h2">${title}</h2>
    ${extra}
    <p class="eyebrow">${eyebrow}</p>
  </div>`;

// ── Shared sections ──────────────────────────────────────────────────────────

// Real Google reviews. The section only appears once there's at least one.
const reviewCard = (r) => `
      <article class="review-card">
        <div class="review-card__top">${stars(r.stars ?? 5)}${icons.google()}</div>
        <p class="review-card__text">${r.text}</p>
        <div class="review-card__by">
          <span class="avatar" aria-hidden="true">${r.name.trim()[0]}</span>
          <span><strong>${r.name}</strong><small>${r.when || ''}</small></span>
        </div>
      </article>`;

export const reviewsSection = ({ id = 'reviews' } = {}) =>
  !reviews.length
    ? ''
    : `
<section class="section reviews" id="${id}">
  <div class="container">
    <div class="center-head reveal">
      ${ratingBadge('light')}
      <h2 class="h2 h2--xl">Did Someone Order Extra Syrup On That <em>ROI?</em></h2>
      <p class="lead">Don’t take our word for it. Here’s what our clients say.</p>
    </div>
  </div>
  <div class="slider" data-slider>
    <div class="slider__track container" data-track>
      ${reviews.map(reviewCard).join('')}
    </div>
    ${sliderControls('reviews')}
  </div>
</section>`;

export const sliderControls = (noun = '') => `
    <div class="slider__controls container">
      <div class="slider__status"><span data-status data-noun="${noun}">Showing ${noun ? noun + ' ' : ''}1 of 1</span><span class="slider__bar"><span data-bar></span></span></div>
      <div class="slider__btns">
        <button class="icon-btn" data-prev aria-label="Previous">${icons.chevronLeft()}</button>
        <button class="icon-btn" data-next aria-label="Next">${icons.chevron()}</button>
      </div>
    </div>`;

export const faqList = (faqs, open = -1) => `
  <div class="faq">
    ${faqs
      .map(
        ([q, a], i) => `
    <details class="faq__item"${i === open ? ' open' : ''}>
      <summary><span>${q}</span>${icons.plus()}</summary>
      <div class="faq__a"><p>${a}</p></div>
    </details>`,
      )
      .join('')}
  </div>`;

export const personalitySection = ({ text, eyebrow = 'About Us', id = 'about' }) => `
<section class="section personality" id="${id}">
  <div class="container">
    ${sectionHead(eyebrow, 'Performance With <em>Personality</em>')}
    <div class="split split--media">
      <div class="prose reveal">
        ${text}
        ${button(team.length ? 'Meet Our Team' : 'Get To Know Us', '/about/', 'ink')}
      </div>
      ${media('', 'The Snowcone team', 'reveal media--wide')}
    </div>
  </div>
</section>`;

// Closing call to action at the bottom of every page: one clean card.
const ctaCard = ({ eyebrow, title, lead, items, note = '' }) => `
<section class="cta" id="book">
  <div class="container">
    <div class="cta__card reveal">
      <div class="cta__head">
        ${ratingBadge('dark')}
        <p class="eyebrow eyebrow--accent">${eyebrow}</p>
        <h2 class="cta__title">${title}</h2>
        <p class="cta__lead">${lead}</p>
        <div class="btn-row">${auditButton()}${button('Email Us', `mailto:${site.email}`, 'ghost-light')}</div>
        ${note ? `<p class="cta__note">${note}</p>` : ''}
      </div>
      <ul class="cta__list">
        ${items.map(([t, d]) => `<li>${icons.drop(18)}<div><h3>${t}</h3>${d ? `<p>${d}</p>` : ''}</div></li>`).join('')}
      </ul>
    </div>
  </div>
</section>`;

export const auditSection = () =>
  ctaCard({
    eyebrow: site.auditValue,
    title: 'Get Your Free <em>Growth Audit</em>',
    lead: 'We look at your ads, your website and how you show up in search and AI, then tell you where you’re losing leads and what to fix first.',
    items: [
      ['Full performance review', 'Where leads are dropping off across your ads, site and search.'],
      ['Competitor check', 'Who’s outranking and outspending you, and how to take their spot.'],
      ['Quick-win plan', 'The fastest fixes for more enquiries, in priority order.'],
    ],
  });

// Service-page variant.
export const planSection = (items) =>
  ctaCard({
    eyebrow: site.auditValue,
    title: 'Book The Audit, Walk Away With A <em>Plan</em>',
    lead: 'Even if we never work together, you’ll leave the call knowing:',
    items: items.map((t) => [t, '']),
    note: site.planNote,
  });

// ── Page shell ───────────────────────────────────────────────────────────────

const primary = services.find((s) => s.featured);
const primaryPath = primary ? `/services/${primary.slug}/` : '/services/';

const header = (path) => `
<header class="header" data-header>
  <div class="container header__inner">
    <a href="/" class="header__logo" aria-label="${site.name} home">${logo()}</a>
    <nav class="nav" id="nav" aria-label="Main">
      <a href="/about/"${path.startsWith('/about') ? ' aria-current="page"' : ''}>About</a>
      <a href="/services/"${path.startsWith('/services') && !path.startsWith(primaryPath) ? ' aria-current="page"' : ''}>Services</a>
      ${primary ? `<a class="nav__feature" href="${primaryPath}"${path.startsWith(primaryPath) ? ' aria-current="page"' : ''}>${primary.tab}</a>` : ''}
      ${auditButton('accent', 'btn--sm')}
    </nav>
    <button class="nav-toggle" data-nav-toggle aria-controls="nav" aria-expanded="false" aria-label="Open menu">${icons.menu()}${icons.close()}</button>
  </div>
</header>`;

const socials = site.socials.filter((s) => s.url);

const footer = () => `
<footer class="footer">
  <div class="container">
    <div class="footer__card">
      <div class="footer__cols">
        <div>
          <h2 class="footer__h">Company</h2>
          <ul><li><a href="/">Home</a></li><li><a href="/about/">About</a></li><li><a href="/services/">Services</a></li></ul>
        </div>
        <div>
          <h2 class="footer__h">Services</h2>
          <ul>${services.map((s) => `<li><a href="/services/${s.slug}/">${s.name}</a></li>`).join('')}</ul>
        </div>
        <div>
          <h2 class="footer__h">Contact Us</h2>
          ${
            site.address.text
              ? `<p class="footer__label">Location</p>
          <p>${site.address.mapUrl ? `<a href="${site.address.mapUrl}" target="_blank" rel="noopener">${site.address.text}</a>` : site.address.text}</p>`
              : `<p class="footer__label">Where</p>
          <p>${site.serviceArea}</p>`
          }
          <p class="footer__label">Email</p>
          <p><a href="mailto:${site.email}">${site.email}</a></p>
          ${site.phone ? `<p class="footer__label">Phone</p>\n          <p><a href="tel:${site.phone.replace(/\s/g, '')}">${site.phone}</a></p>` : ''}
        </div>
        ${
          socials.length
            ? `<div>
          <h2 class="footer__h">Connect With Us</h2>
          <ul class="footer__social">${socials
            .map((s) => `<li><a href="${s.url}"${linkAttrs(s.url)}>${icons[s.icon]()}${s.label}</a></li>`)
            .join('')}</ul>
        </div>`
            : `<div>
          <h2 class="footer__h">Get Started</h2>
          <ul><li><a href="${site.bookingUrl}"${linkAttrs(site.bookingUrl)}>Book a free growth audit</a></li><li><a href="/services/">Explore our services</a></li></ul>
        </div>`
        }
      </div>
      <div class="footer__brand">${logo('logo--xl')}</div>
      <p class="footer__legal"><span>© ${site.legalName} ${new Date().getFullYear()}. All rights reserved.</span><span>Served fresh in Australia ${logoMark(16)}</span></p>
    </div>
  </div>
</footer>`;

export const page = ({ path, title, description = site.description, body }) => {
  const fullTitle = title ? `${title} | ${site.name}` : site.title;
  const canonical = site.url.replace(/\/$/, '') + path;
  return `<!doctype html>
<html lang="en-AU">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${fullTitle}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
  <meta name="theme-color" content="#000000">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${site.name}">
  <meta property="og:title" content="${fullTitle}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${site.url.replace(/\/$/, '')}/assets/img/og.png">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Inter+Tight:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap">
  <link rel="stylesheet" href="/assets/css/styles.css">
  <script>document.documentElement.classList.add('js')</script>
  <script src="/assets/js/main.js" defer></script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${header(path)}
<main id="main">
${body}
</main>
${footer()}
${site.draft ? '<div class="draft-ribbon" role="note">Draft preview: some content is placeholder</div>' : ''}
</body>
</html>
`;
};
