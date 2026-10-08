import { founder, team, values, techStack } from '../config.mjs';
import { page, icons, auditButton, media, sectionHead, reviewsSection, auditSection } from '../layout.mjs';

const hero = `
<section class="about-hero">
  ${media('', 'The Snowcone team', 'about-hero__bg')}
  <div class="container about-hero__inner">
    <h1 class="about-hero__title reveal"><span>Performance</span><span>With <em>Personality</em></span></h1>
    <p class="about-hero__text reveal">We’re the growth agency that gets service businesses the one thing that really matters. More enquiries.</p>
  </div>
</section>`;

const story = `
<section class="section story">
  <div class="container">
    <h2 class="h2 h2--lg reveal">We Built The Antidote</h2>
    <div class="split split--story">
      <figure class="founder reveal">
        ${media(founder.photo, founder.name, 'founder__photo')}
        <figcaption>${
          founder.name
            ? `<span class="script script--primary">${founder.name}</span><small>${founder.role}${
                founder.linkedin ? ` · <a href="${founder.linkedin}" target="_blank" rel="noopener">LinkedIn</a>` : ''
              }</small>`
            : '<span class="script script--primary">Snowcone</span><small>Growth marketing for service businesses</small>'
        }</figcaption>
      </figure>
      <div class="prose reveal">
        <p class="eyebrow eyebrow--primary">${founder.name ? 'About The Founder' : 'Our Story'}</p>
        ${founder.bio.map((p) => `<p>${p}</p>`).join('')}
        ${auditButton('primary')}
      </div>
    </div>
  </div>
</section>`;

const teamSection = !team.length
  ? ''
  : `
<section class="section team">
  <div class="container">
    <div class="section-head reveal"><h2 class="h2 h2--lg">Our Team</h2>${auditButton('primary')}</div>
    <ul class="team__grid">
      ${team
        .map(
          (m) => `
      <li class="member reveal">
        ${media(m.photo, `${m.name}, ${m.role}`, 'member__photo')}
        <div class="member__info"><span class="script">${m.name}</span><small>${m.role}</small></div>
        ${m.linkedin ? `<a class="member__link" href="${m.linkedin}"${/^https?:/.test(m.linkedin) ? ' target="_blank" rel="noopener"' : ''} aria-label="${m.name} on LinkedIn">${icons.linkedin()}</a>` : ''}
      </li>`,
        )
        .join('')}
    </ul>
  </div>
</section>`;

// Shown instead of the team grid until real team members are added.
const valuesSection = team.length
  ? ''
  : `
<section class="section values">
  <div class="container">
    ${sectionHead('Our values', 'What We <em>Stand For</em>')}
    <ul class="values__grid">
      ${values
        .map(
          ([title, text]) => `
      <li class="value reveal">
        <h3 class="h3">${title}</h3>
        <p>${text}</p>
      </li>`,
        )
        .join('')}
    </ul>
  </div>
</section>`;

const stack = `
<section class="section stack">
  <div class="container">
    ${sectionHead('The tools behind the work', 'Modern Tech <em>Stack</em>')}
    <p class="lead lead--dark stack__lead reveal">Good tools don’t make good marketing. But they do mean every lead gets tracked, every dollar gets traced and nothing slips through the cracks.</p>
    <ul class="stack__grid">
      ${techStack
        .map(
          (g) => `
      <li class="stack-card reveal">
        <span class="stack-card__icon">${icons[g.icon](22)}</span>
        <h3 class="stack-card__title">${g.group}</h3>
        <p>${g.blurb}</p>
        <ul class="chips">${g.tools.map((t) => `<li>${t}</li>`).join('')}</ul>
      </li>`,
        )
        .join('')}
    </ul>
  </div>
</section>`;

export default () =>
  page({
    path: '/about/',
    title: 'About',
    description: 'Meet Snowcone, the growth marketing agency for service businesses who want more enquiries, straight answers and a partner who cares about the outcome.',
    body: [hero, story, teamSection, valuesSection, reviewsSection(), stack, auditSection()].join('\n'),
  });
