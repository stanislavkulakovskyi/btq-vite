/* eslint-disable react/prop-types */
import bgText from '../../../assets/images/bg_illustration.webp';
import bg from '../../../assets/lottie/bglow5.gif';
import styles from "./Background.module.scss";

export const Background = ({ activePage }) => {
  const isBgWhite = activePage === 'artists' || activePage === 'services';
 
  return (
    <>
      <div className={styles.container}>
        <img src={bg} alt="background" className={styles.animation} />
      </div>

      <div className={styles.backdrop} style={{ backgroundColor: isBgWhite ? '#f5f1f0' : 'transparent' }}></div>

      <img
        src={bgText}
        alt="belletriq"
        className={styles.bgIllustration}
      />
  </>
  );
};