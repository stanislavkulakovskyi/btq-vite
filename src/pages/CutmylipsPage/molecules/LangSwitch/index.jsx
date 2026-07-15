import classNames from 'classnames';

import { LOCALES } from '../../../../i18n/locale';
import { useLocale } from '../../../../i18n/LocaleProvider';

import styles from './index.module.scss';

const LOCALE_LABELS = { uk: 'УКР', en: 'ENG' };

export const LangSwitch = () => {
  const { locale, setLocale } = useLocale();

  return (
    <div className={styles.group} role="group" aria-label="Language">
      {LOCALES.map((option) => (
        <button
          key={option}
          type="button"
          lang={option}
          aria-pressed={option === locale}
          className={classNames(styles.option, {
            [styles.active]: option === locale,
          })}
          onClick={() => setLocale(option)}
        >
          {LOCALE_LABELS[option]}
        </button>
      ))}
    </div>
  );
};
