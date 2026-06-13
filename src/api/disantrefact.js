export const STREAM_LINKS = [
  {
    label: 'Spotify',
    icon: 'spotify',
    href: 'https://open.spotify.com/album/48INkrzUDxeVtKj5fqn3Ub?si=_bpUuBZTTP-LIxEGLnCV2g',
    isAlbumPage: true,
  },
  {
    label: 'Apple Music',
    icon: 'appleMusic',
    href: 'https://music.apple.com/au/album/disantrefact/6768293725',
    isAlbumPage: true,
  },
  {
    label: 'YouTube Music',
    icon: 'youtubeMusic',
    href: 'https://music.youtube.com/playlist?list=OLAK5uy_lUHQkmJlijq2r-47lTh53s_Dg7uRW1BKA&si=VjiSa0-l41HHkjGa',
    isAlbumPage: true,
  },
  {
    label: 'Deezer',
    icon: 'deezer',
    href: 'https://link.deezer.com/s/33wa9nzAdSzJeVDSkWm41',
    isAlbumPage: true,
  },
  {
    label: 'Tidal',
    icon: 'tidal',
    href: 'https://tidal.com/album/523459824/u',
    isAlbumPage: true,
  },
  {
    label: 'Bandcamp',
    icon: 'bandcamp',
    href: 'https://cutmylips.bandcamp.com/album/disantrefact',
    isAlbumPage: true,
  },
  {
    label: 'YouTube',
    icon: 'youtube',
    href: 'https://youtu.be/Tm_GbJLUew4',
    isAlbumPage: false,
  },
];

export const ALBUM_STREAM_URLS = STREAM_LINKS.filter(
  (link) => link.isAlbumPage,
).map((link) => link.href);
