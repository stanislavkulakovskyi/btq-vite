import { afterEach, describe, expect, it, vi } from 'vitest';

import {
  DEFAULT_LOCALE,
  LOCALES,
  STORAGE_KEY,
  isSupportedLocale,
  readStoredLocale,
  writeStoredLocale,
} from '../src/i18n/locale';
import { EN } from '../src/pages/CutmylipsPage/content/en';
import { UK } from '../src/pages/CutmylipsPage/content/uk';
import { selectContent } from '../src/pages/CutmylipsPage/data';

const PROTOTYPE_CHAIN_KEYS = [
  '__proto__',
  'constructor',
  'toString',
  'valueOf',
  'hasOwnProperty',
];

const UNSUPPORTED_VALUES = [
  { label: 'an unknown language code', value: 'fr' },
  { label: 'the empty string', value: '' },
  { label: 'null', value: null },
  { label: 'undefined', value: undefined },
  { label: 'the number zero', value: 0 },
  { label: 'a plain object', value: {} },
  { label: 'an array', value: [] },
];

const GETTER_BEHAVIOURS = [
  () => 'uk',
  () => 'en',
  () => 'fr',
  () => '',
  () => null,
  () => undefined,
  () => '__proto__',
  () => {
    throw new Error('private mode');
  },
];

const LONG_PARAGRAPH_COUNTS = [
  { block: 'bio', count: 5 },
  { block: 'about', count: 4 },
  { block: 'press', count: 8 },
];

const stubStorage = (localStorage) => {
  globalThis.window = { localStorage };
};

const shapeOf = (value) => {
  if (Array.isArray(value)) {
    return value.map(shapeOf);
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).map((key) => [key, shapeOf(value[key])]));
  }

  return typeof value;
};

afterEach(() => {
  delete globalThis.window;
});

describe('the locale constants', () => {
  it('default to Ukrainian, which the prerendered press kit depends on', () => {
    expect(LOCALES).toEqual(['uk', 'en']);
    expect(DEFAULT_LOCALE).toBe('uk');
  });
});

describe('isSupportedLocale', () => {
  LOCALES.forEach((locale) => {
    it(`accepts the supported locale ${locale}`, () => {
      expect(isSupportedLocale(locale)).toBe(true);
    });
  });

  UNSUPPORTED_VALUES.forEach(({ label, value }) => {
    it(`rejects ${label}`, () => {
      expect(isSupportedLocale(value)).toBe(false);
    });
  });

  PROTOTYPE_CHAIN_KEYS.forEach((key) => {
    it(`rejects the inherited object key ${key}`, () => {
      expect(isSupportedLocale(key)).toBe(false);
    });
  });
});

describe('readStoredLocale', () => {
  it('returns the stored locale when storage holds a supported one', () => {
    stubStorage({ getItem: () => 'en' });

    expect(readStoredLocale()).toBe('en');
  });

  it('reads the preference from the shared storage key', () => {
    const getItem = vi.fn(() => 'en');
    stubStorage({ getItem });

    readStoredLocale();

    expect(getItem).toHaveBeenCalledWith(STORAGE_KEY);
  });

  it('falls back to the default when storage holds an unsupported locale', () => {
    stubStorage({ getItem: () => 'fr' });

    expect(readStoredLocale()).toBe(DEFAULT_LOCALE);
  });

  it('falls back to the default when storage holds garbage', () => {
    stubStorage({ getItem: () => '{"locale":"en"}' });

    expect(readStoredLocale()).toBe(DEFAULT_LOCALE);
  });

  it('falls back to the default when nothing is stored', () => {
    stubStorage({ getItem: () => null });

    expect(readStoredLocale()).toBe(DEFAULT_LOCALE);
  });

  it('falls back to the default when window is absent, as it is during prerender', () => {
    expect('window' in globalThis).toBe(false);

    expect(readStoredLocale()).toBe(DEFAULT_LOCALE);
  });

  it('falls back to the default when the storage getter throws, as in private mode', () => {
    stubStorage({
      getItem: () => {
        throw new Error('private mode');
      },
    });

    expect(readStoredLocale()).toBe(DEFAULT_LOCALE);
  });

  it('is total — it returns a supported locale and never throws, whatever storage does', () => {
    GETTER_BEHAVIOURS.forEach((getItem) => {
      stubStorage({ getItem });

      expect(LOCALES).toContain(readStoredLocale());
    });
  });
});

describe('writeStoredLocale', () => {
  it('reports success when the write lands', () => {
    stubStorage({ setItem: () => {} });

    expect(writeStoredLocale('en')).toBe(true);
  });

  it('writes the locale under the shared storage key', () => {
    const setItem = vi.fn();
    stubStorage({ setItem });

    writeStoredLocale('en');

    expect(setItem).toHaveBeenCalledWith(STORAGE_KEY, 'en');
  });

  it('reports failure without propagating when the setter throws, as on quota or in private mode', () => {
    stubStorage({
      setItem: () => {
        throw new Error('quota exceeded');
      },
    });

    expect(() => writeStoredLocale('en')).not.toThrow();
    expect(writeStoredLocale('en')).toBe(false);
  });

  it('reports failure when window is absent', () => {
    expect(writeStoredLocale('en')).toBe(false);
  });
});

describe('the window stub', () => {
  it('is torn down after every test, so nothing can pass on a leaked global', () => {
    expect('window' in globalThis).toBe(false);
  });
});

describe('selectContent', () => {
  it('maps uk to the ukrainian dictionary', () => {
    expect(selectContent('uk').press).toBe(UK.press);
    expect(selectContent('uk').mediaTitle).toBe(UK.mediaTitle);
  });

  it('maps en to the english dictionary', () => {
    expect(selectContent('en').press).toBe(EN.press);
    expect(selectContent('en').mediaTitle).toBe(EN.mediaTitle);
  });

  it('returns a referentially stable object across calls', () => {
    expect(selectContent('uk')).toBe(selectContent('uk'));
    expect(selectContent('en')).toBe(selectContent('en'));
  });

  UNSUPPORTED_VALUES.forEach(({ label, value }) => {
    it(`falls back to the ukrainian content for ${label}`, () => {
      expect(selectContent(value)).toBe(selectContent(DEFAULT_LOCALE));
    });
  });

  PROTOTYPE_CHAIN_KEYS.forEach((key) => {
    it(`falls back to the ukrainian content for the inherited object key ${key}`, () => {
      expect(selectContent(key)).toBe(selectContent(DEFAULT_LOCALE));
      expect(selectContent(key).navLinks).toBe(selectContent(DEFAULT_LOCALE).navLinks);
    });
  });
});

const undefinedPaths = (value, path = '') => {
  if (value === undefined) return [path];
  if (Array.isArray(value)) return value.flatMap((v, i) => undefinedPaths(v, `${path}[${i}]`));
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([k, v]) => undefinedPaths(v, path ? `${path}.${k}` : k));
  }
  return [];
};

describe('the spine-to-dictionary join', () => {
  LOCALES.forEach((locale) => {
    it(`resolves every label for ${locale}, so no spine id renders as undefined`, () => {
      expect(undefinedPaths(selectContent(locale))).toEqual([]);
    });
  });

  it('gives every locale the same set of resolved content keys', () => {
    expect(Object.keys(selectContent('en')).sort()).toEqual(Object.keys(selectContent('uk')).sort());
  });

  LOCALES.forEach((locale) => {
    it(`labels every nav item, media box and contact box for ${locale}`, () => {
      const content = selectContent(locale);
      const labels = [
        ...content.navLinks.map((link) => link.label),
        ...content.mediaGroups.flat().map((box) => box.label),
        ...content.contacts.map((box) => box.label),
      ];
      expect(labels.every((label) => typeof label === 'string' && label.length > 0)).toBe(true);
    });
  });
});

describe('the UK and EN dictionaries', () => {
  it('share an identical recursive shape, so no locale can ship an undefined string', () => {
    expect(shapeOf(EN)).toEqual(shapeOf(UK));
  });

  LONG_PARAGRAPH_COUNTS.forEach(({ block, count }) => {
    it(`carry ${count} ${block} paragraphs in both locales`, () => {
      expect(UK[block].longParagraphs).toHaveLength(count);
      expect(EN[block].longParagraphs).toHaveLength(count);
    });
  });
});
