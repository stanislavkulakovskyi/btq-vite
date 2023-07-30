/* eslint-disable react/prop-types */
// import bgText from '../../../assets/images/bg_illustration.webp';
import bgTextStroke from '../../../assets/images/btq-bg-text-stroke.svg';
import bgTextFill from '../../../assets/images/btq-bg-text-filled.svg';
import poster from '../../../assets/lottie/fallback.webp';
import styles from "./Background.module.scss";
import bgVideo from '../../../assets/lottie/bgAnimation1080.mp4';
import bgVideo4k from '../../../assets/lottie/bgAnimation4k.mp4';
import bgVideo2k from '../../../assets/lottie/bgAnimation2k.mp4';

export const Background = ({ activePage }) => {
  const isBgWhite = activePage === 'artists' || activePage === 'services';
  const isSmall = window.innerWidth <= 1080;
  const isMedium = window.innerWidth <= 1440;
  const isTablet = window.innerWidth <= 1367;
 
  return (
    <>
      <div className={styles.container}>
        <video autoPlay loop muted playsInline poster={poster} className={styles.animation}>
          <source src={isSmall ? bgVideo : isMedium ? bgVideo2k : bgVideo4k} type='video/mp4' />
        </video>
      </div>

      <div className={styles.backdrop} style={{ backgroundColor: isBgWhite ? '#f5f1f0' : 'transparent',  }}></div>

      <img
        src={bgTextStroke}
        alt="belletriq"
        className={styles.bgIllustration}
      />
      <img
        src={bgTextFill}
        alt="belletriq"
        className={styles.bgIllustration}
        style={{ right: isTablet ? '53%' : '3.4%', top: '52.2%'}}
      />
  </>
  );
};