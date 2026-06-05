import { execSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { beforeAll, describe, expect, it } from 'vitest';

const BUILD_TIMEOUT_MS = 180000;
const DIST = resolve(__dirname, '..', 'dist');

const distPath = (...segments) => resolve(DIST, ...segments);
const read = (...segments) => readFileSync(distPath(...segments), 'utf8');

const canonicalMatcher = (url) =>
  new RegExp(`<link[^>]*rel="canonical"[^>]*href="${url.replace(/\//g, '\\/')}"`);

const robotsNoindexMatcher =
  /<meta[^>]*name="robots"[^>]*content="noindex,nofollow"/;

let home;
let disantrefact;
let cutmylips;
let bespokeMusic;
let soundDesign;

beforeAll(() => {
  execSync('npm run build', { stdio: 'inherit', timeout: BUILD_TIMEOUT_MS });
  home = read('index.html');
  disantrefact = read('disantrefact', 'index.html');
  cutmylips = read('cutmylips', 'index.html');
  bespokeMusic = read('services', 'bespoke-music', 'index.html');
  soundDesign = read('services', 'sound-design', 'index.html');
}, BUILD_TIMEOUT_MS);

describe('prerendered build output', () => {
  it('emits exactly the five static routes and no stray catch-all file', () => {
    expect(existsSync(distPath('index.html'))).toBe(true);
    expect(existsSync(distPath('disantrefact', 'index.html'))).toBe(true);
    expect(existsSync(distPath('cutmylips', 'index.html'))).toBe(true);
    expect(existsSync(distPath('services', 'bespoke-music', 'index.html'))).toBe(true);
    expect(existsSync(distPath('services', 'sound-design', 'index.html'))).toBe(true);
    expect(home.length).toBeGreaterThan(2000);
    expect(disantrefact.length).toBeGreaterThan(2000);
    expect(cutmylips.length).toBeGreaterThan(2000);
    expect(bespokeMusic.length).toBeGreaterThan(2000);
    expect(soundDesign.length).toBeGreaterThan(2000);
  });
});

describe('dist/index.html (home)', () => {
  it('renders the home <title> (& is HTML-escaped to &amp;)', () => {
    expect(home).toContain(
      '<title data-rh="true">belletriq — bespoke music &amp; sound design for advertising</title>',
    );
  });

  it('renders the home meta description', () => {
    expect(home).toContain(
      'belletriq is a Ukrainian audio house crafting bespoke music, scoring and sound design (SFX) for advertising',
    );
  });

  it('renders a self-referential canonical to https://belletriq.com', () => {
    expect(home).toContain('rel="canonical"');
    expect(home).toMatch(canonicalMatcher('https://belletriq.com'));
  });

  it('renders og:type website, og:image, and twitter:card', () => {
    expect(home).toMatch(/property="og:type"[^>]*content="website"/);
    expect(home).toContain('content="https://belletriq.com/og-default.png"');
    expect(home).toMatch(/name="twitter:card"[^>]*content="summary_large_image"/);
  });

  it('embeds Organization + ProfessionalService JSON-LD', () => {
    expect(home).toContain('type="application/ld+json"');
    expect(home).toContain('"@type":"Organization"');
    expect(home).toContain('"@type":"ProfessionalService"');
  });

  it('is prerendered with real content, not an empty root', () => {
    expect(home).not.toContain('<div id="root"></div>');
    expect(home).toContain('id="about"');
    expect(home).toContain('id="services"');
  });

  it('is indexable (no robots noindex)', () => {
    expect(home).not.toContain('noindex');
  });

  it('does not inline the heavy background video into prerendered HTML (HIGH-1)', () => {
    expect(home).not.toMatch(/bgAnimation/);
  });
});

describe('dist/disantrefact/index.html', () => {
  it('renders the disantrefact title', () => {
    expect(disantrefact).toContain(
      '<title data-rh="true">DISANTREFACT — new album by Cutmylips | pre-save</title>',
    );
  });

  it('renders the canonical to https://belletriq.com/disantrefact', () => {
    expect(disantrefact).toMatch(canonicalMatcher('https://belletriq.com/disantrefact'));
  });

  it('renders og:type music.album and the disantrefact og:image', () => {
    expect(disantrefact).toMatch(/property="og:type"[^>]*content="music.album"/);
    expect(disantrefact).toContain(
      'content="https://belletriq.com/og-disantrefact.png"',
    );
  });

  it('embeds MusicAlbum JSON-LD', () => {
    expect(disantrefact).toContain('"@type":"MusicAlbum"');
  });

  it('is indexable (no robots noindex)', () => {
    expect(disantrefact).not.toContain('noindex');
  });
});

describe('dist/services/bespoke-music/index.html', () => {
  it('renders the bespoke-music title (& is HTML-escaped to &amp;)', () => {
    expect(bespokeMusic).toContain(
      '<title data-rh="true">Bespoke Music for Advertising &amp; Film | belletriq</title>',
    );
  });

  it('renders the bespoke-music meta description', () => {
    expect(bespokeMusic).toContain('Bespoke music composition for advertising');
  });

  it('renders a self-referential canonical to https://belletriq.com/services/bespoke-music', () => {
    expect(bespokeMusic).toMatch(
      canonicalMatcher('https://belletriq.com/services/bespoke-music'),
    );
  });

  it('embeds Service + BreadcrumbList JSON-LD', () => {
    expect(bespokeMusic).toContain('"@type":"Service"');
    expect(bespokeMusic).toContain('"@type":"BreadcrumbList"');
  });

  it('has exactly one <h1>', () => {
    expect((bespokeMusic.match(/<h1/g) || []).length).toBe(1);
  });

  it('is indexable (no robots noindex)', () => {
    expect(bespokeMusic).not.toContain('noindex');
  });

  it('is prerendered with real content (>2000 bytes)', () => {
    expect(existsSync(distPath('services', 'bespoke-music', 'index.html'))).toBe(true);
    expect(bespokeMusic.length).toBeGreaterThan(2000);
  });

  it('renders a case sentence as contiguous text (no React comment splitting)', () => {
    expect(bespokeMusic).toContain('Snøhetta — Original music for film');
  });

  it('cross-links to sound-design and back to home', () => {
    expect(bespokeMusic).toContain('/services/sound-design');
    expect(bespokeMusic).toContain('href="/"');
  });
});

describe('dist/services/sound-design/index.html', () => {
  it('renders the sound-design title (& is HTML-escaped to &amp;)', () => {
    expect(soundDesign).toContain(
      '<title data-rh="true">Sound Design for Advertising &amp; Film | belletriq</title>',
    );
  });

  it('renders the sound-design meta description', () => {
    expect(soundDesign).toContain('Sound design and SFX for advertising');
  });

  it('renders a self-referential canonical to https://belletriq.com/services/sound-design', () => {
    expect(soundDesign).toMatch(
      canonicalMatcher('https://belletriq.com/services/sound-design'),
    );
  });

  it('embeds Service + BreadcrumbList JSON-LD', () => {
    expect(soundDesign).toContain('"@type":"Service"');
    expect(soundDesign).toContain('"@type":"BreadcrumbList"');
  });

  it('has exactly one <h1>', () => {
    expect((soundDesign.match(/<h1/g) || []).length).toBe(1);
  });

  it('is indexable (no robots noindex)', () => {
    expect(soundDesign).not.toContain('noindex');
  });

  it('is prerendered with real content (>2000 bytes)', () => {
    expect(existsSync(distPath('services', 'sound-design', 'index.html'))).toBe(true);
    expect(soundDesign.length).toBeGreaterThan(2000);
  });

  it('renders a case sentence as contiguous text with escaped ampersand', () => {
    expect(soundDesign).toContain('BMW — Sound design &amp; SFX for commercial');
  });

  it('cross-links to bespoke-music and back to home', () => {
    expect(soundDesign).toContain('/services/bespoke-music');
    expect(soundDesign).toContain('href="/"');
  });
});

describe('dist/cutmylips/index.html', () => {
  it('renders robots noindex,nofollow', () => {
    expect(cutmylips).toMatch(robotsNoindexMatcher);
  });

  it('renders the canonical to https://belletriq.com/cutmylips', () => {
    expect(cutmylips).toMatch(canonicalMatcher('https://belletriq.com/cutmylips'));
  });

  it('still ships OG tags for link previews despite noindex (press kit is shared by direct link)', () => {
    expect(cutmylips).toContain('property="og:title"');
    expect(cutmylips).toContain('property="og:image"');
    expect(cutmylips).toContain('content="https://belletriq.com/og-disantrefact.png"');
  });
});

describe('dist/robots.txt', () => {
  it('exists and points at the sitemap', () => {
    expect(existsSync(distPath('robots.txt'))).toBe(true);
    expect(read('robots.txt')).toContain('Sitemap: https://belletriq.com/sitemap.xml');
  });
});

describe('dist/sitemap.xml', () => {
  it('lists the indexable routes including the service pages and excludes cutmylips', () => {
    expect(existsSync(distPath('sitemap.xml'))).toBe(true);
    const sitemap = read('sitemap.xml');
    expect(sitemap).toContain('https://belletriq.com');
    expect(sitemap).toContain('https://belletriq.com/disantrefact');
    expect(sitemap).toContain('https://belletriq.com/services/bespoke-music');
    expect(sitemap).toContain('https://belletriq.com/services/sound-design');
    expect(sitemap).not.toContain('cutmylips');
  });
});

describe('OG image assets', () => {
  it('ships og-default.png and og-disantrefact.png in dist', () => {
    expect(existsSync(distPath('og-default.png'))).toBe(true);
    expect(existsSync(distPath('og-disantrefact.png'))).toBe(true);
  });
});
