import PropTypes from 'prop-types';

import styles from './index.module.scss';

export const ServiceHeader = ({ homeHref = '/', email }) => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.wordmark} href={homeHref}>
          belletriq
        </a>
        <a className={styles.contact} href={`mailto:${email}`}>
          Contact
        </a>
      </div>
    </header>
  );
};

ServiceHeader.propTypes = {
  homeHref: PropTypes.string,
  email: PropTypes.string.isRequired,
};
