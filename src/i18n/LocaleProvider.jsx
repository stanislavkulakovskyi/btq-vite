import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { DEFAULT_LOCALE, readStoredLocale, writeStoredLocale } from './locale';

const LocaleContext = createContext({ locale: DEFAULT_LOCALE, setLocale: () => {} });

export const LocaleProvider = ({ children }) => {
  const [locale, setLocaleState] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    setLocaleState(readStoredLocale());
  }, []);

  const setLocale = useCallback((next) => {
    setLocaleState(next);
    writeStoredLocale(next);
  }, []);

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLocale = () => useContext(LocaleContext);
