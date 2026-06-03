import { CONTACTS_TITLE, CONTACTS } from '../../data';

import styles from './index.module.scss';

export const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>{CONTACTS_TITLE}</div>
      <div className={styles.grid3}>
        {CONTACTS.map((box) => (
          <div key={box.label} className={styles.linkbox}>
            <div className={styles.lbl}>{box.label}</div>
            {box.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.text}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
