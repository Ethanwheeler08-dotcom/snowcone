import { page, button } from '../layout.mjs';

export default () =>
  page({
    path: '/404.html',
    title: 'Page not found',
    body: `
<section class="hero hero--short">
  <div class="container hero__inner">
    <p class="script script--accent">Brain freeze</p>
    <h1 class="h1">This Page Melted</h1>
    <p class="hero__sub">The page you’re after doesn’t exist, or it’s moved. Let’s get you somewhere useful.</p>
    <div class="btn-row">${button('Back Home', '/', 'accent')}${button('Our Services', '/services/', 'ghost-light')}</div>
  </div>
</section>`,
  });
