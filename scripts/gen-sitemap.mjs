import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { SEO } from '../src/api/seo.js';

const distDir = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'dist');

const locs = Object.values(SEO)
  .filter((route) => !route.noindex)
  .map((route) => route.canonical);

const body = locs.map((loc) => `  <url>\n    <loc>${loc}</loc>\n  </url>`).join('\n');
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

writeFileSync(resolve(distDir, 'sitemap.xml'), xml);
console.log(`sitemap.xml generated from SEO config: ${locs.length} indexable urls`);
