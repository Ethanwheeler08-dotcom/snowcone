import { stats } from '../config.mjs';
import { page, icons, auditButton, button, sectionHead, faqList, personalitySection, planSection } from '../layout.mjs';

export default (s) => {
  const hero = `
<section class="svc-hero">
  <div class="container">
    <div class="svc-hero__top">
      <h1 class="h1 h1--dark reveal">${s.hero.title}</h1>
      <div class="reveal">
        <p class="lead lead--dark">${s.hero.text}</p>
        <div class="btn-row">${auditButton('blue')}${button('See how it works', '#what-we-do', 'soft')}</div>
      </div>
    </div>
    <hr class="rule">
    <div class="svc-hero__visual reveal" aria-hidden="true">
      <span class="svc-hero__icon">${icons[s.icon](120)}</span>
      <span class="svc-hero__label">${s.label}</span>
    </div>
  </div>
</section>`;

  const trusted = `
<section class="section trusted">
  <div class="container">
    <h2 class="h2 h2--lg reveal">Trusted By Service Businesses Across <em>Australia</em></h2>
    <hr class="rule">
    <dl class="stats stats--plain reveal">
      ${stats.map((st) => `<div class="stat"><dt class="stat__value" data-count>${st.value}</dt><dd>${st.label}</dd></div>`).join('')}
    </dl>
  </div>
</section>`;

  const block = (eyebrow, data, id = '') => `
<section class="section text-block"${id ? ` id="${id}"` : ''}>
  <div class="container">
    <p class="eyebrow eyebrow--blue align-right reveal">${eyebrow}</p>
    <hr class="rule">
    <div class="text-block__body reveal">
      <h2 class="h2 h2--lg">${data.title}</h2>
      <p class="lead lead--dark">${data.text}</p>
      ${auditButton('blue')}
    </div>
  </div>
</section>`;

  const steps = `
<section class="section steps">
  <div class="container">
    <h2 class="h2 h2--lg reveal">${s.steps.title}</h2>
    <hr class="rule">
    <ol class="accordion-steps" data-steps>
      ${s.steps.items
        .map(
          ([t, d], i) => `
      <li class="acc-step${i === 1 ? ' is-active' : ''}" data-step-item>
        <button class="acc-step__btn" aria-expanded="${i === 1}"><span class="acc-step__num">0${i + 1}</span><span class="acc-step__spine">${t}</span></button>
        <div class="acc-step__content"><span class="script script--blue">0${i + 1}</span><h3 class="h3">${t}</h3><p>${d}</p></div>
      </li>`,
        )
        .join('')}
    </ol>
  </div>
</section>`;

  const faq = `
<section class="section faq-section" id="faq">
  <div class="container split split--faq">
    <div class="reveal">
      <h2 class="h2">Your Questions, <em>Answered</em></h2>
      <p class="lead lead--dark">${s.faqIntro}</p>
      ${button('Contact Us', '#book', 'blue')}
    </div>
    <div class="reveal">${faqList(s.faqs, 0)}</div>
  </div>
</section>`;

  return page({
    path: `/services/${s.slug}/`,
    title: s.name,
    description: s.hero.text,
    body: [
      hero,
      trusted,
      block('The Problem', s.problem),
      block('What We Do', s.solution, 'what-we-do'),
      steps,
      personalitySection({ text: `<p>${s.why}</p>`, eyebrow: 'Why Us?', id: 'why-us' }),
      faq,
      planSection(s.audit, s),
    ].join('\n'),
  });
};
