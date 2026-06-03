import { FOOTER_TEXT } from '../../data';

import styles from './index.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>{FOOTER_TEXT}</div>
    </div>
  );
};
