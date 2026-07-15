import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './index.module.scss';

const ACCENT_CLASS = {
  pink: styles.linkbox_pink,
  blue: styles.linkbox_blue,
};

export const MediaLinks = ({ title, groups }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>{title}</div>
      {groups.map((group, index) => (
        <div
          key={index}
          className={classNames(styles.grid3, {
            [styles.gridFirst]: index === 0,
            [styles.gridLast]: index === groups.length - 1,
          })}
        >
          {group.map((box) => (
            <div key={box.id} className={classNames(styles.linkbox, ACCENT_CLASS[box.accent])}>
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

const linkType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
});

const boxType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  accent: PropTypes.oneOf(['pink', 'blue']),
  links: PropTypes.arrayOf(linkType).isRequired,
});

MediaLinks.propTypes = {
  title: PropTypes.string.isRequired,
  groups: PropTypes.arrayOf(PropTypes.arrayOf(boxType)).isRequired,
};
