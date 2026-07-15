import PropTypes from 'prop-types';

import styles from './index.module.scss';

export const Nav = ({ navLinks, releaseLink }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <a
          style={{ marginLeft: 'auto', color: '#ff8fd0' }}
          href={releaseLink.href}
          target="_blank"
          rel="noreferrer"
        >
          {releaseLink.label}
        </a>
      </div>
    </nav>
  );
};

const navLinkType = PropTypes.shape({
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
});

Nav.propTypes = {
  navLinks: PropTypes.arrayOf(navLinkType).isRequired,
  releaseLink: navLinkType.isRequired,
};
