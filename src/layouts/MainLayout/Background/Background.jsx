/* eslint-disable react/prop-types */
import bgText from '../../../assets/images/bg_illustration.webp';
import bg from '../../../assets/lottie/bglow5.gif';
import styles from "./Background.module.scss";
import bgVideo from '../../../assets/lottie/bgAnimation4k.mp4';

export const Background = ({ activePage }) => {
  const isBgWhite = activePage === 'artists' || activePage === 'services';
 
  return (
    <>
      <div className={styles.container}>
        {/* <img src={bg} alt="background" className={styles.animation} /> */}
        <video autoPlay loop muted poster={bg} className={styles.animation}>
            <source src={bgVideo} type='video/mp4' />
        </video>
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