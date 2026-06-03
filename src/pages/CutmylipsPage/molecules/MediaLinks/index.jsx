import classNames from 'classnames';

import { MEDIA_TITLE, MEDIA_GROUPS } from '../../data';

import styles from './index.module.scss';

const ACCENT_CLASS = {
  pink: styles.linkbox_pink,
  blue: styles.linkbox_blue,
};

export const MediaLinks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>{MEDIA_TITLE}</div>
      {MEDIA_GROUPS.map((group, index) => (
        <div
          key={index}
          className={classNames(styles.grid3, {
            [styles.gridFirst]: index === 0,
            [styles.gridLast]: index === MEDIA_GROUPS.length - 1,
          })}
        >
          {group.map((box) => (
            <div key={box.label} className={classNames(styles.linkbox, ACCENT_CLASS[box.accent])}>
              <div className={styles.lbl}>{box.label}</div>
              {box.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.text}
                </a>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
