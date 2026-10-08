import { services } from '../data/services.mjs';
import { page, icons } from '../layout.mjs';

export default () =>
  page({
    path: '/services/',
    title: 'Services',
    description: 'Meta Ads, Google Ads, SEO & AEO, email marketing, websites and growth strategy for service businesses across Australia.',
    body: `
<section class="section services-index">
  <div class="container">
    <div class="reveal">
      <p class="eyebrow eyebrow--primary">Our Services</p>
      <h1 class="h1 h1--dark">Growth With Serious <em>Flavour</em></h1>
      <p class="lead lead--dark services-index__lead">Sharp strategy, real personality and results you can measure. Pick a channel below, or book a growth audit and we’ll tell you where the biggest wins are hiding.</p>
    </div>
    <ul class="svc-grid">
      ${services
        .map(
          (s, i) => `
      <li class="reveal"><a class="svc-tile" href="/services/${s.slug}/">
        <span class="svc-tile__num">${String(i + 1).padStart(2, '0')}</span>
        <span class="svc-tile__icon">${icons[s.icon](26)}</span>
        <h2 class="h3">${s.name}</h2>
        <p>${s.index}</p>
        <span class="link">Explore ${icons.arrow()}</span>
      </a></li>`,
        )
        .join('')}
    </ul>
  </div>
</section>`,
  });
