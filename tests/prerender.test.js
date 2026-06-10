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

const SERVICE_PAGES = [
  {
    dir: 'bespoke-music',
    title: 'Bespoke music composition for brands &amp; film | belletriq',
    canonical: 'https://belletriq.com/services/bespoke-music',
  },
  {
    dir: 'sound-design',
    title: 'Sound design &amp; SFX for advertising &amp; film | belletriq',
    canonical: 'https://belletriq.com/services/sound-design',
  },
  {
    dir: 'audio-post-production',
    title: 'Audio post-production for video &amp; film | belletriq',
    canonical: 'https://belletriq.com/services/audio-post-production',
  },
  {
    dir: 'mixing',
    title: 'Mixing — stereo &amp; surround sound | belletriq',
    canonical: 'https://belletriq.com/services/mixing',
  },
  {
    dir: 'mastering',
    title: 'Audio mastering for streaming &amp; broadcast | belletriq',
    canonical: 'https://belletriq.com/services/mastering',
  },
  {
    dir: 'sonic-branding',
    title: 'Sonic branding &amp; audio identity | belletriq',
    canonical: 'https://belletriq.com/services/sonic-branding',
  },
];

let home;
let disantrefact;
let cutmylips;
const serviceHtml = {};

beforeAll(() => {
  execSync('npm run build', { stdio: 'inherit', timeout: BUILD_TIMEOUT_MS });
  home = read('index.html');
  disantrefact = read('disantrefact', 'index.html');
  cutmylips = read('cutmylips', 'index.html');
  SERVICE_PAGES.forEach((page) => {
    serviceHtml[page.dir] = read('services', page.dir, 'index.html');
  });
}, BUILD_TIMEOUT_MS);

describe('prerendered build output', () => {
  it('emits a prerendered file for every static route and no stray catch-all file', () => {
    expect(existsSync(distPath('index.html'))).toBe(true);
    expect(existsSync(distPath('disantrefact', 'index.html'))).toBe(true);
    expect(existsSync(distPath('cutmylips', 'index.html'))).toBe(true);
    SERVICE_PAGES.forEach((page) => {
      expect(existsSync(distPath('services', page.dir, 'index.html'))).toBe(true);
    });
    expect(home.length).toBeGreaterThan(2000);
    expect(disantrefact.length).toBeGreaterThan(2000);
    expect(cutmylips.length).toBeGreaterThan(2000);
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

  it('links to the six service landing pages', () => {
    SERVICE_PAGES.forEach((page) => {
      expect(home).toContain(`href="/services/${page.dir}"`);
    });
  });
});

describe('dist/services/* (service landing pages)', () => {
  SERVICE_PAGES.forEach((page) => {
    describe(`/services/${page.dir}`, () => {
      it('is prerendered with real content', () => {
        expect(serviceHtml[page.dir].length).toBeGreaterThan(2000);
        expect(serviceHtml[page.dir]).not.toContain('<div id="root"></div>');
      });

      it('renders its <title> in the prerendered head', () => {
        expect(serviceHtml[page.dir]).toContain(
          `<title data-rh="true">${page.title}</title>`,
        );
      });

      it('renders a self-referential canonical', () => {
        expect(serviceHtml[page.dir]).toMatch(canonicalMatcher(page.canonical));
      });

      it('embeds Service + BreadcrumbList JSON-LD', () => {
        expect(serviceHtml[page.dir]).toContain('type="application/ld+json"');
        expect(serviceHtml[page.dir]).toContain('"@type":"Service"');
        expect(serviceHtml[page.dir]).toContain('"@type":"BreadcrumbList"');
      });

      it('renders exactly one h1', () => {
        expect((serviceHtml[page.dir].match(/<h1[ >]/g) || []).length).toBe(1);
      });

      it('is indexable (no robots noindex)', () => {
        expect(serviceHtml[page.dir]).not.toContain('noindex');
      });
    });
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
  it('lists every indexable route (home, disantrefact, services) and excludes cutmylips', () => {
    expect(existsSync(distPath('sitemap.xml'))).toBe(true);
    const sitemap = read('sitemap.xml');
    expect(sitemap).toContain('<loc>https://belletriq.com</loc>');
    expect(sitemap).toContain('<loc>https://belletriq.com/disantrefact</loc>');
    SERVICE_PAGES.forEach((page) => {
      expect(sitemap).toContain(`<loc>${page.canonical}</loc>`);
    });
    expect(sitemap).not.toContain('cutmylips');
  });
});

describe('OG image assets', () => {
  it('ships og-default.png and og-disantrefact.png in dist', () => {
    expect(existsSync(distPath('og-default.png'))).toBe(true);
    expect(existsSync(distPath('og-disantrefact.png'))).toBe(true);
  });
});
