import { services } from '../data/services.mjs';
import { page, icons, auditButton, auditSection } from '../layout.mjs';

const hero = `
<section class="page-hero">
  <div class="container page-hero__inner">
    <p class="eyebrow eyebrow--accent reveal">Our Services</p>
    <h1 class="h1 reveal">Pick Your <em class="squiggle">Flavour</em></h1>
    <p class="hero__sub reveal">Six ways we help service businesses grow, starting with the one we’re known for: getting you recommended by AI. The free audit tells you which ones will make the biggest difference for you.</p>
    <div class="btn-row reveal">${auditButton()}</div>
  </div>
</section>`;

const primary = services.find((s) => s.featured);
const rest = services.filter((s) => s !== primary);

// The main service, on its own above the rest.
const featured = !primary
  ? ''
  : `
<section class="section svc-featured">
  <div class="container">
    <a class="feature-card reveal" href="/services/${primary.slug}/">
      <div class="feature-card__copy">
        <p class="eyebrow eyebrow--accent">Our Specialty</p>
        <h2 class="h2 h2--lg">${primary.name}</h2>
        <p class="feature-card__text">${primary.index}</p>
        <ul class="chips chips--dark">${primary.platforms.map((p) => `<li>${p}</li>`).join('')}</ul>
        <span class="btn btn--accent">Explore ${primary.tab} ${icons.arrow(14)}</span>
      </div>
      <div class="feature-card__incl">
        <span class="svc-row__label">What’s in the cup</span>
        <ol>${primary.steps.items.map(([t, d], i) => `<li><span class="feature-card__num">0${i + 1}</span><span><strong>${t}</strong>${d}</span></li>`).join('')}</ol>
      </div>
    </a>
  </div>
</section>`;

const list = `
<section class="section svc-list">
  <div class="container">
    <div class="section-head reveal"><h2 class="h2">Also On The <em>Menu</em></h2><p class="eyebrow">Mix and match</p></div>
    <ol class="svc-rows">
      ${rest
        .map(
          (s, i) => `
      <li class="reveal">
        <a class="svc-row" href="/services/${s.slug}/">
          <span class="svc-row__num">${String(i + 2).padStart(2, '0')}</span>
          <span class="svc-row__icon">${icons[s.icon](26)}</span>
          <span class="svc-row__main">
            <h2 class="svc-row__name">${s.name}</h2>
            <span class="svc-row__text">${s.index}</span>
          </span>
          <span class="svc-row__incl">
            <span class="svc-row__label">What’s in the cup</span>
            <ul>${s.steps.items.map(([t]) => `<li>${icons.drop(14)}${t}</li>`).join('')}</ul>
          </span>
          <span class="svc-row__go">Explore ${icons.arrow(16)}</span>
        </a>
      </li>`,
        )
        .join('')}
    </ol>
  </div>
</section>`;

export default () =>
  page({
    path: '/services/',
    title: 'Services',
    description: 'AI search and SEO, Meta Ads, Google Ads, websites, email marketing and growth strategy for service businesses.',
    body: [hero, featured, list, auditSection()].join('\n'),
  });
