import PropTypes from 'prop-types';

import styles from './index.module.scss';

export const Contacts = ({ title, boxes }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>{title}</div>
      <div className={styles.grid3}>
        {boxes.map((box) => (
          <div key={box.id} className={styles.linkbox}>
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

const linkType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
});

const contactBoxType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(linkType).isRequired,
});

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
  boxes: PropTypes.arrayOf(contactBoxType).isRequired,
};
