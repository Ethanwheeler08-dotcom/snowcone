import { services } from '../data/services.mjs';
import { page, icons, auditButton, auditSection } from '../layout.mjs';

const hero = `
<section class="page-hero">
  <div class="container page-hero__inner">
    <p class="eyebrow eyebrow--accent reveal">Our Services</p>
    <h1 class="h1 reveal">Pick Your <em class="squiggle">Flavour</em></h1>
    <p class="hero__sub reveal">Six ways we help service businesses grow. You probably don’t need all of them. The free audit tells you which ones will make the biggest difference for you.</p>
    <div class="btn-row reveal">${auditButton()}</div>
  </div>
</section>`;

const list = `
<section class="section svc-list">
  <div class="container">
    <ol class="svc-rows">
      ${services
        .map(
          (s, i) => `
      <li class="reveal">
        <a class="svc-row" href="/services/${s.slug}/">
          <span class="svc-row__num">${String(i + 1).padStart(2, '0')}</span>
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
    description: 'Meta Ads, Google Ads, SEO & AEO, email marketing, websites and growth strategy for service businesses across Australia.',
    body: [hero, list, auditSection()].join('\n'),
  });
