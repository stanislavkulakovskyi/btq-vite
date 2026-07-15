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
  servicesBespokeMusic: {
    path: '/services/bespoke-music',
    title: 'Bespoke music composition for brands & film | belletriq',
    description:
      'Original, bespoke music composed to picture for advertising, film and brands — forward-thinking electronic scores and commercial soundtracks by belletriq.',
    canonical: `${SITE_URL}/services/bespoke-music`,
    ogTitle: 'Bespoke Music Composition — belletriq',
    ogDescription:
      'Original music composed to picture and brief for advertising, film and brand storytelling.',
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
  },
  servicesSoundDesign: {
    path: '/services/sound-design',
    title: 'Sound design & SFX for advertising & film | belletriq',
    description:
      'Custom sound design and SFX for commercial video production, film and digital. Designed sound and sonic textures built as a narrative layer by belletriq.',
    canonical: `${SITE_URL}/services/sound-design`,
    ogTitle: 'Sound Design & SFX — belletriq',
    ogDescription:
      'Custom sound design and SFX for commercial video production, film and digital.',
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
  },
  servicesAudioPost: {
    path: '/services/audio-post-production',
    title: 'Audio post-production for video & film | belletriq',
    description:
      'Full-cycle audio post-production for video and film — dialogue, sound design, mix and delivery. One team from picture-lock to final master, by belletriq.',
    canonical: `${SITE_URL}/services/audio-post-production`,
    ogTitle: 'Audio Post-Production — belletriq',
    ogDescription:
      'Full-cycle audio post for video and film, from dialogue and sound design to the final mix.',
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
  },
  servicesMixing: {
    path: '/services/mixing',
    title: 'Mixing — stereo & surround sound | belletriq',
    description:
      'Mixing for picture and music in stereo and surround — balanced, translation-ready masters for broadcast, cinema and streaming, by belletriq.',
    canonical: `${SITE_URL}/services/mixing`,
    ogTitle: 'Mixing (Stereo & Surround) — belletriq',
    ogDescription:
      'Stereo and surround mixing for picture and music — balanced, translation-ready masters.',
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
  },
  servicesMastering: {
    path: '/services/mastering',
    title: 'Audio mastering for streaming & broadcast | belletriq',
    description:
      'Audio and music mastering that translates across systems and meets streaming, broadcast and cinema loudness specs. Release- and air-ready masters by belletriq.',
    canonical: `${SITE_URL}/services/mastering`,
    ogTitle: 'Mastering — belletriq',
    ogDescription:
      'Final masters that translate across systems and meet streaming, broadcast and cinema specs.',
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
  },
  servicesSonicBranding: {
    path: '/services/sonic-branding',
    title: 'Sonic branding & audio identity | belletriq',
    description:
      'Sonic branding and audio identity for brands — sonic logos, brand themes and sound systems consistent across every touchpoint, by belletriq.',
    canonical: `${SITE_URL}/services/sonic-branding`,
    ogTitle: 'Sonic Branding — belletriq',
    ogDescription:
      'Audio identity for brands — sonic logos, brand themes and consistent sound systems.',
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
  },
  disantrefact: {
    path: '/disantrefact',
    title: 'DISANTREFACT — new album by Cutmylips',
    description:
      'Stream DISANTREFACT, the new 25-track album by Cutmylips — futuristic pop, indietronica and IDM. Out now on Spotify, Apple Music, YouTube Music, Deezer, Tidal and Bandcamp.',
    canonical: `${SITE_URL}/disantrefact`,
    ogTitle: 'DISANTREFACT — new album by Cutmylips',
    ogDescription:
      'Stream the new 25-track album by Cutmylips. Futuristic pop, indietronica, IDM.',
    ogImage: DISANTREFACT_OG_IMAGE,
    ogType: 'music.album',
  },
  cutmylips: {
    path: '/cutmylips',
    title: 'Cutmylips — DISANTREFACT press kit',
    description: 'Internal press kit.',
    canonical: `${SITE_URL}/cutmylips`,
    ogTitle: 'Cutmylips — DISANTREFACT',
    ogImage: DISANTREFACT_OG_IMAGE,
    noindex: true,
  },
};
