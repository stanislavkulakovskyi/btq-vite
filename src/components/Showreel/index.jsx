import PropTypes from 'prop-types';

import styles from './index.module.scss';

export const Showreel = ({ url, title }) => {
  return (
    <div className={styles.frame}>
      <iframe
        src={url}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};

Showreel.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
