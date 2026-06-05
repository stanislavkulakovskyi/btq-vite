/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { useRef, useEffect, useState, useCallback } from 'react';
import 'swiper/scss';

import styles from './Slider.module.scss';
import '../../styles/extends.scss';
import playButton from '../../assets/icons/play.svg';
import arrow from '../../assets/icons/arrow-right.svg';

import thumbs from '../../api/thumbnails';
import { useViewportWidth } from '../../hooks/useViewportWidth';

SwiperCore.use([Autoplay, Navigation]);

export const Slider = ({ openModal }) => {
  const swiperRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const windowWidth = useViewportWidth();

  const isTablet = windowWidth <= 1366;

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    swiper.autoplay.start();
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div className={styles.slider_container}>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={100}
        navigation={{
          prevEl: `.${styles.btn_prev}`,
          nextEl: `.${styles.btn_next}`,
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className={styles.swiper}
        loop={true}
        speed={5000}
      >
        {thumbs.map((slide) => (
          <SwiperSlide
            className={styles.swiperslide}
            key={slide.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={slide.image}
              alt="slide"
              className={styles.slide}
            />

            {(isHovered || isTablet) && (
              <button
                className={styles.playButton}
                onClick={() => openModal(slide.videoUrl)}
              >
                <img src={playButton} alt="play" />
              </button>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <button className={styles.btn_prev}>
        <img src={arrow} alt="previous" className={styles.prev_button} />
      </button>

      <button className={styles.btn_next}>
        <img src={arrow} alt="next" className={styles.next_button} />
      </button> */}
    </div>
  );
};
