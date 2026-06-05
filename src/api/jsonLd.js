import links from './links';
import { SITE_URL, DISANTREFACT_OG_IMAGE } from './seo';

const SAME_AS_TITLES = ['instagram', 'linktree', 'youtube'];

const ORGANIZATION_NAME = 'belletriq';
const ALBUM_NAME = 'DISANTREFACT';
const ALBUM_ARTIST = 'Cutmylips';
const ALBUM_NUM_TRACKS = 25;

const getSameAs = () => {
  const resolved = SAME_AS_TITLES.map(
    (title) => links.find((link) => link.title === title)?.path,
  ).filter(Boolean);

  if (import.meta.env?.DEV && resolved.length < SAME_AS_TITLES.length) {
    console.warn(
      `[jsonLd] sameAs resolved ${resolved.length}/${SAME_AS_TITLES.length} links — a title in api/links.js may have changed`,
    );
  }

  return resolved;
};

export const buildOrganizationLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: ORGANIZATION_NAME,
  url: SITE_URL,
  sameAs: getSameAs(),
});

export const buildProfessionalServiceLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: ORGANIZATION_NAME,
  url: SITE_URL,
  description:
    'Bespoke music, scoring and sound design (SFX) for advertising, film and brands. Music production, mixing, mastering, licensing and sync.',
  areaServed: 'Worldwide',
});

export const buildMusicAlbumLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'MusicAlbum',
  name: ALBUM_NAME,
  byArtist: {
    '@type': 'MusicGroup',
    name: ALBUM_ARTIST,
  },
  numTracks: ALBUM_NUM_TRACKS,
  image: DISANTREFACT_OG_IMAGE,
  url: `${SITE_URL}/disantrefact`,
});
