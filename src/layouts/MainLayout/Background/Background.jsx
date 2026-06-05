/* eslint-disable react/prop-types */
import bgTextStroke from '../../../assets/images/btq-bg-text-stroke.svg';
import bgTextFill from '../../../assets/images/btq-bg-text-filled.svg';
import poster from '../../../assets/lottie/fallback.webp';
import styles from "./Background.module.scss";
import bgVideo from '../../../assets/lottie/bgAnimation1080.mp4';
import bgVideo4k from '../../../assets/lottie/bgAnimation4k.mp4';
import bgVideo2k from '../../../assets/lottie/bgAnimation2k.mp4';

import { useEffect, useRef, useState } from 'react';

import { useViewportWidth } from '../../../hooks/useViewportWidth';

export const Background = ({ activePage }) => {
  const windowWidth = useViewportWidth();
  const videoRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const isBgWhite = activePage === 'artists' || activePage === 'services';
  const isSmall = windowWidth <= 1080;
  const isMedium = windowWidth <= 1440;
  const isTablet = windowWidth <= 1367;
  const videoSource = isSmall ? bgVideo : isMedium ? bgVideo2k : bgVideo4k;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && videoRef.current) {
      videoRef.current.load();
    }
  }, [isMounted, videoSource]);

  return (
    <>
      <div className={styles.container}>
        <video ref={videoRef} autoPlay loop muted playsInline poster={poster} className={styles.animation}>
          {isMounted && <source src={videoSource} type='video/mp4' />}
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