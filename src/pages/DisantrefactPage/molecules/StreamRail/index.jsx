import classNames from 'classnames';

import { STREAM_LINKS } from '../../data';
import { Icon } from '../../icons';
import styles from './index.module.scss';

const GROUP_LABEL = 'Stream';

export const StreamRail = () => {
  return (
    <div className={styles.rail}>
      <div className={styles.group}>
        <div className={styles.groupLabel}>{GROUP_LABEL}</div>
        {STREAM_LINKS.map((stream) => (
          <a
            key={stream.label}
            className={classNames(styles.pill, { [styles.pill_presave]: stream.isPresave })}
            href={stream.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.icon}>
              <Icon name={stream.icon} />
            </span>
            {stream.label}
          </a>
        ))}
      </div>
    </div>
  );
};
