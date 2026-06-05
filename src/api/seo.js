export const SITE_URL = 'https://belletriq.com';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

export const DISANTREFACT_OG_IMAGE = `${SITE_URL}/og-disantrefact.png`;

export const SEO = {
  home: {
    path: '/',
    title: 'belletriq — bespoke music & sound design for advertising',
    description:
      'belletriq is a Ukrainian audio house crafting bespoke music, scoring and sound design (SFX) for advertising, film and brands. Music production, mixing, mastering, licensing and sync.',
    canonical: SITE_URL,
    ogTitle: 'belletriq — bespoke music & sound design for advertising',
    ogDescription:
      'Bespoke music, scoring and sound design for brands and advertising. Production, mixing, mastering, licensing and sync.',
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
  },
  disantrefact: {
    path: '/disantrefact',
    title: 'DISANTREFACT — new album by Cutmylips | pre-save',
    description:
      'Pre-save DISANTREFACT, the new 25-track album by Cutmylips — futuristic pop, indietronica and IDM. Pre-save on Spotify, Apple Music, YouTube Music and Deezer.',
    canonical: `${SITE_URL}/disantrefact`,
    ogTitle: 'DISANTREFACT — new album by Cutmylips',
    ogDescription:
      'Pre-save the new 25-track album by Cutmylips. Futuristic pop, indietronica, IDM.',
    ogImage: DISANTREFACT_OG_IMAGE,
    ogType: 'music.album',
  },
  cutmylips: {
    path: '/cutmylips',
    title: 'Cutmylips — DISANTREFACT press kit',
    description: 'Internal press kit.',
    canonical: `${SITE_URL}/cutmylips`,
    lang: 'uk',
    ogTitle: 'Cutmylips — DISANTREFACT',
    ogDescription: 'Прес-кіт альбому DISANTREFACT від Cutmylips.',
    ogImage: DISANTREFACT_OG_IMAGE,
    noindex: true,
  },
};
