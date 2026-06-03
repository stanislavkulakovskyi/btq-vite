import { STREAM_EMBED_URL, STREAM_EMBED_TITLE } from '../../data';

import styles from './index.module.scss';

export const StreamEmbed = () => {
  return (
    <div className={styles.playerWrap}>
      <iframe
        style={{ borderRadius: '24px', display: 'block' }}
        src={STREAM_EMBED_URL}
        title={STREAM_EMBED_TITLE}
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
