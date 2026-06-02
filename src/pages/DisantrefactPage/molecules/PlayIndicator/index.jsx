import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

const BAR_COUNT = 4;
const BARS = Array.from({ length: BAR_COUNT }, (_, index) => index);
const LABEL_PLAYING = 'now playing';
const LABEL_IDLE = 'click to play';

export const PlayIndicator = ({ isPlaying }) => {
  return (
    <div className={styles.indicator}>
      <span className={classNames(styles.bars, { [styles.bars_playing]: isPlaying })}>
        {BARS.map((index) => (
          <span
            key={index}
            className={classNames(styles.bar, { [styles.bar_playing]: isPlaying })}
          />
        ))}
      </span>
      <span className={classNames(styles.label, { [styles.label_playing]: isPlaying })}>
        {isPlaying ? LABEL_PLAYING : LABEL_IDLE}
      </span>
    </div>
  );
};

PlayIndicator.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
};
