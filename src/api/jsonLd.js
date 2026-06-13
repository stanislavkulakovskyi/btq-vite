import { ALBUM_STREAM_URLS } from './disantrefact';
import links from './links';
import { SITE_URL, DISANTREFACT_OG_IMAGE } from './seo';

const SAME_AS_TITLES = ['instagram', 'linktree', 'youtube'];

const ORGANIZATION_NAME = 'belletriq';
const ALBUM_NAME = 'DISANTREFACT';
const ALBUM_ARTIST = 'Cutmylips';
const ALBUM_NUM_TRACKS = 25;
const ALBUM_GENRE = ['Futuristic pop', 'Indietronica', 'IDM'];
const ALBUM_ARTIST_SAME_AS = [
  'https://open.spotify.com/artist/107LVbAcRXB1TBzqo6itz2',
  'https://soundcloud.com/cutmylips',
];

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
    sameAs: ALBUM_ARTIST_SAME_AS,
  },
  numTracks: ALBUM_NUM_TRACKS,
  genre: ALBUM_GENRE,
  image: DISANTREFACT_OG_IMAGE,
  url: `${SITE_URL}/disantrefact`,
  sameAs: ALBUM_STREAM_URLS,
});

export const buildServiceLd = ({ name, serviceType, description, url }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  serviceType,
  description,
  url,
  areaServed: 'Worldwide',
  provider: {
    '@type': 'ProfessionalService',
    name: ORGANIZATION_NAME,
    url: SITE_URL,
  },
});

export const buildBreadcrumbLd = (crumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
});
