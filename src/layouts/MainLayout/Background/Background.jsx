/* eslint-disable react/prop-types */
import bgText from '../../../assets/images/bg_illustration.webp';
// import bg from '../../../assets/lottie/bglow5.gif';
import poster from '../../../assets/lottie/fallback.webp';
import styles from "./Background.module.scss";
import bgVideo from '../../../assets/lottie/bgAnimation1080.mp4';
import bgVideo4k from '../../../assets/lottie/bgAnimation4k.mp4';
import bgVideo2k from '../../../assets/lottie/bgAnimation2k.mp4';

export const Background = ({ activePage }) => {
  const isBgWhite = activePage === 'artists' || activePage === 'services';
  const isSmall = window.innerWidth <= 1080;
  const isMedium = window.innerWidth <= 1440;
 
  return (
    <>
      <div className={styles.container}>
        {/* <img src={bg} alt="background" className={styles.animation} /> */}
        <video autoPlay loop muted playsInline poster={poster} className={styles.animation}>
          <source src={isSmall ? bgVideo : isMedium ? bgVideo2k : bgVideo4k} type='video/mp4' />
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