import PropTypes from 'prop-types';

import { STREAM_EMBED_URL } from '../../data';

import styles from './index.module.scss';

export const StreamEmbed = ({ title }) => {
  return (
    <div className={styles.playerWrap}>
      <iframe
        style={{ borderRadius: '24px', display: 'block' }}
        src={STREAM_EMBED_URL}
        title={title}
        width="100%"
        height="344"
        allowFullScreen
        allow="picture-in-picture"
        frameBorder="0"
        loading="lazy"
      />
    </div>
  );
};

StreamEmbed.propTypes = {
  title: PropTypes.string.isRequired,
};
