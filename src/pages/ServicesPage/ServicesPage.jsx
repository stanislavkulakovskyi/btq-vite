import styles from './ServicesPage.module.scss';
import { Slider } from '../../components/Slider';
import { VideoModal } from '../../components/VideoModal';
import { FormModal } from '../../components/FormModal';
import { useState, useLayoutEffect } from 'react';
// import bgText from '../../assets/images/bg_illustration.webp';

export const ServicesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isFormOpened, setIsFormOpened] = useState(false);
  
  const handleFormOpen = () => {
    setIsFormOpened(true);
  };

  const handleFormClose = () => {
    setIsFormOpened(false);
  }

  useLayoutEffect(() => {
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
    <section className={styles.container} id="services">
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

          <article className={styles.description_box}>
            <p className={styles.description}>
              We deliver high-quality, end-to-end audio solutions, including music production, mixing, mastering, scoring and SFX. 
              We also offer licensing and sync services, ensuring seamless sound integration into any creative project.
            </p>

            <button className={styles.link} onClick={handleFormOpen} aria-label="contact us">
              <div className={styles.svg_icon}></div>
            </button>
          </article>
        </div>

        {isModalOpen && (       
            <VideoModal url={selectedVideoUrl} closeModal={closeModal} />
        )}

        {isFormOpened && (
            <FormModal onClose={handleFormClose} />
        )}
      </div>      
    </section>
  );
};
