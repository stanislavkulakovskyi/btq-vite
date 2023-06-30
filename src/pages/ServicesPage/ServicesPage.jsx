import styles from './ServicesPage.module.scss';
import { Slider } from '../../components/Slider';
import { VideoModal } from '../../components/VideoModal';
import { FormModal } from '../../components/FormModal';
import { useState, useEffect } from 'react';
// import bgText from '../../assets/images/bg_illustration.webp';

export const ServicesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isFormOpened, setIsFormOpened] = useState(false);
  
  const handleFormOpen = () => {
    setIsFormOpened(true);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleFormClose = () => {
    setIsFormOpened(false);
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openModal = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideoUrl(null);
  };

  const isMobile = windowWidth <= 640;

  return (
    <div className={styles.container} id="services">
      <div className={styles.page}>
        <h2 className={styles.title}>SERVICES</h2>

        <div className={styles.slider_container}> 
          <div
            className={styles.slider_box}
            style={{ clipPath: !isMobile ? 'url(#mask)' : null }}
          >
            <Slider openModal={openModal} />
            <svg height="0">
              <clipPath
                id="mask"
                clipPathUnits="objectBoundingBox"
                transform={`scale(0.0009, 0.0023)`}
                height="0"
              >
                <path
                  d="M0,400V.05C274.82,36.84,865.29,36.83,1140,0V400C865.29,363.18,274.83,363.16,0,400Z"
                  fill="black"
                  fillOpacity="0.2"
                  height="0"
                />
              </clipPath>
            </svg>
          </div>

          <div className={styles.description_box}>
            <p className={styles.description}>
              Belletriq creates and delivers high quality audio solutions such as music production, mixing, mastering, scoring, SFX and also we provide licensing &
              sync services.
            </p>

            <button className={styles.link} onClick={handleFormOpen}>
              <div className={styles.svg_icon}></div>
            </button>
          </div>
        </div>
      </div>

      {/* <img
        src={bgText}
        alt="belletriq"
        className={styles.bgIllustration}
        loading='lazy'
      /> */}

      {isModalOpen && (
        <VideoModal url={selectedVideoUrl} closeModal={closeModal} />
      )}

      {isFormOpened && <FormModal onClose={handleFormClose} />}
    </div>
  );
};