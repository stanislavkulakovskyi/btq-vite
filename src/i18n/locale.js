export const LOCALES = ['uk', 'en'];
export const DEFAULT_LOCALE = 'uk';
export const STORAGE_KEY = 'btq-locale';

export const isSupportedLocale = (value) => LOCALES.includes(value);

export const readStoredLocale = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isSupportedLocale(stored) ? stored : DEFAULT_LOCALE;
  } catch {
    return DEFAULT_LOCALE;
  }
};

export const writeStoredLocale = (locale) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
    return true;
  } catch {
    return false;
  }
};
