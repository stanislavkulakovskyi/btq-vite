import React from 'react';

import styles from './index.module.scss';

export const CubeText = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cube}>
        <div className={`${styles.face} ${styles.face_top}`}>belletriq</div>
        <div className={`${styles.face} ${styles.face_bottom}`}>belletriq</div>
        <div className={`${styles.face} ${styles.face_right}`}>belletriq</div>
        <div className={`${styles.face} ${styles.face_front}`}>belletriq</div>
        <div className={`${styles.face} ${styles.face_back}`}>belletriq</div>
      </div>
    </div>
  );
}
