// Builds the static site into ./public. No dependencies: `node build.mjs`.
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { site } from './src/config.mjs';
import { services } from './src/data/services.mjs';
import home from './src/pages/home.mjs';
import about from './src/pages/about.mjs';
import servicesIndex from './src/pages/services.mjs';
import service from './src/pages/service.mjs';
import notFound from './src/pages/notfound.mjs';

const out = 'public';
rmSync(out, { recursive: true, force: true });
cpSync('src/assets', join(out, 'assets'), { recursive: true });

const pages = {
  'index.html': home(),
  'about/index.html': about(),
  'services/index.html': servicesIndex(),
  '404.html': notFound(),
  ...Object.fromEntries(services.map((s) => [`services/${s.slug}/index.html`, service(s)])),
};

for (const [file, html] of Object.entries(pages)) {
  const path = join(out, file);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, html);
}

const base = site.url.replace(/\/$/, '');
const urls = Object.keys(pages)
  .filter((f) => f !== '404.html')
  .map((f) => `${base}/${f.replace(/index\.html$/, '')}`);
writeFileSync(
  join(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>\n`,
);
writeFileSync(join(out, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`);

console.log(`Built ${Object.keys(pages).length} pages into ./${out}`);

// Remind whoever runs the build what's still placeholder.
const todos = readFileSync('src/config.mjs', 'utf8')
  .split('\n')
  .map((line, i) => [i + 1, line])
  .filter(([, line]) => /\/\/ TODO/.test(line));
if (todos.length) {
  console.log(`\n${todos.length} placeholder(s) left in src/config.mjs:`);
  for (const [n, line] of todos) console.log(`  line ${n}: ${line.trim().slice(0, 100)}`);
}
if (site.draft) console.log('\nsite.draft is true, so pages show a "Draft preview" ribbon.');
