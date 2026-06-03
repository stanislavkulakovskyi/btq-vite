import { NAV_LINKS, RELEASE_LINK } from '../../data';

import styles from './index.module.scss';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <a
          style={{ marginLeft: 'auto', color: '#ff8fd0' }}
          href={RELEASE_LINK.href}
          target="_blank"
          rel="noreferrer"
        >
          {RELEASE_LINK.label}
        </a>
      </div>
    </nav>
  );
};
