// Builds the static site. No dependencies.
//
//   node build.mjs              -> ./public    clean URLs (/about/) for a web host
//   node build.mjs --portable   -> ./portable  relative links (about/index.html) that
//                                              also work when index.html is opened
//                                              straight from disk
//   --out <dir>                 overrides the output folder
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { site } from './src/config.mjs';
import { services } from './src/data/services.mjs';
import home from './src/pages/home.mjs';
import about from './src/pages/about.mjs';
import servicesIndex from './src/pages/services.mjs';
import service from './src/pages/service.mjs';
import notFound from './src/pages/notfound.mjs';

const argv = process.argv.slice(2);
const portable = argv.includes('--portable');
const outFlag = argv.indexOf('--out');
const out = outFlag >= 0 ? argv[outFlag + 1] : portable ? 'portable' : 'public';
if (!out) throw new Error('--out needs a folder name');
rmSync(out, { recursive: true, force: true });
cpSync('src/assets', join(out, 'assets'), { recursive: true });

const pages = {
  'index.html': home(),
  'about/index.html': about(),
  'services/index.html': servicesIndex(),
  '404.html': notFound(),
  ...Object.fromEntries(services.map((s) => [`services/${s.slug}/index.html`, service(s)])),
};

// Rewrites root-relative links ("/about/", "/assets/x.css") so they resolve from
// `file` without a web server: relative to the page, with folder links pointing
// at their index.html.
const relativize = (html, file) => {
  const depth = file.split('/').length - 1;
  return html.replace(/(href|src)="\/(?!\/)([^"#]*)(#[^"]*)?"/g, (_, attr, path, hash = '') => {
    const target = path === '' || path.endsWith('/') ? `${path}index.html` : path;
    if (target === file && hash) return `${attr}="${hash}"`;
    return `${attr}="${'../'.repeat(depth)}${target}${hash}"`;
  });
};

for (const [file, html] of Object.entries(pages)) {
  const path = join(out, file);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, portable ? relativize(html, file) : html);
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

console.log(`Built ${Object.keys(pages).length} pages into ${out}`);

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
