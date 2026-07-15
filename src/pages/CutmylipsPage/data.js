import { DEFAULT_LOCALE, isSupportedLocale } from '../../i18n/locale';
import { UK } from './content/uk';
import { EN } from './content/en';

export const STREAM_EMBED_URL = 'https://untitled.stream/embed/H3xSaOijozAe';
export const FOOTER_TEXT = 'Cutmylips — DISANTREFACT © 2026';

const DISANTREFACT_URL = 'https://belletriq.com/disantrefact';

const NAV_ITEMS = [
  { id: 'stream', href: '#stream' },
  { id: 'bio', href: '#bio' },
  { id: 'press', href: '#press' },
  { id: 'media', href: '#media' },
  { id: 'contacts', href: '#contacts' },
];

const MEDIA_BOXES = [
  [
    { id: 'release', accent: 'pink', links: [{ text: 'belletriq.com/disantrefact', href: DISANTREFACT_URL }] },
    {
      id: 'photos',
      accent: 'blue',
      links: [
        {
          text: 'Google Drive →',
          href: 'https://drive.google.com/drive/folders/1Bqi7aR7nBsM0IIvB8H9Dfc0Sw4NQoqTk?usp=share_link',
        },
      ],
    },
  ],
  [
    { id: 'instagram', links: [{ text: 'instagram.com/cutmylips', href: 'https://www.instagram.com/cutmylips/' }] },
    { id: 'bandcamp', links: [{ text: 'cutmylips.bandcamp.com', href: 'https://cutmylips.bandcamp.com' }] },
    { id: 'youtubeMusic', links: [{ text: 'music.youtube.com/@cutmylips', href: 'https://music.youtube.com/@cutmylips' }] },
  ],
  [
    {
      id: 'spotify',
      links: [
        {
          text: 'open.spotify.com/artist/107LVbAcRXB1TBzqo6itz2',
          href: 'https://open.spotify.com/artist/107LVbAcRXB1TBzqo6itz2?si=-9c68CphQAqsVuYy9-K9AA',
        },
      ],
    },
    {
      id: 'appleMusic',
      links: [
        {
          text: 'music.apple.com/us/artist/cutmylips',
          href: 'https://music.apple.com/us/artist/cutmylips/1057980442',
        },
      ],
    },
  ],
];

const CONTACT_BOXES = [
  {
    id: 'email',
    links: [
      { text: 'belletriq@gmail.com', href: 'mailto:belletriq@gmail.com' },
      { text: 'cutmylips@gmail.com', href: 'mailto:cutmylips@gmail.com' },
    ],
  },
  { id: 'whatsapp', links: [{ text: '+38 063 782 36 86', href: 'tel:+380637823686' }] },
];

const buildContent = (t) => ({
  navLinks: NAV_ITEMS.map(({ id, href }) => ({ href, label: t.nav[id] })),
  releaseLink: { href: DISANTREFACT_URL, label: t.releaseLink },
  collapseLabel: t.collapseLabel,
  langSwitchLabel: t.langSwitchLabel,
  streamEmbedTitle: t.streamEmbedTitle,
  bio: t.bio,
  about: t.about,
  press: t.press,
  mediaTitle: t.mediaTitle,
  mediaGroups: MEDIA_BOXES.map((group) => group.map((box) => ({ ...box, label: t.mediaLabels[box.id] }))),
  contactsTitle: t.contactsTitle,
  contacts: CONTACT_BOXES.map((box) => ({ ...box, label: t.contactLabels[box.id] })),
  ogDescription: t.ogDescription,
});

const CONTENT = {
  uk: buildContent(UK),
  en: buildContent(EN),
};

export const selectContent = (locale) =>
  (isSupportedLocale(locale) && CONTENT[locale]) || CONTENT[DEFAULT_LOCALE];
