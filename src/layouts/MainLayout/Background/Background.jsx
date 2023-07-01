// import { useState } from "react";
import { useState } from 'react';
import bgText from '../../../assets/images/bg_illustration.webp';
import bg from '../../../assets/lottie/bg.gif';
import bgDummy from '../../../assets/lottie/bgDummy.jpg';

import styles from "./Background.module.scss";

export const Background = () => {

  return (
    <div className={styles.container}>
      <img src={bg} alt="background" className={styles.animation} />

      <div className={styles.blur} />

      <img
        src={bgText}
        alt="belletriq"
        className={styles.bgIllustration}
      />
    </div>
  );
};