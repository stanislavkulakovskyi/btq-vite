import { Background } from './Background';
import { SideMenu } from '../../components/SideMenu';
import { TopMenu } from '../../components/TopMenu';
import styles from './MainLayout.module.scss';
import { AboutPage } from '../../pages/AboutPage';
import { ArtistsPage } from '../../pages/ArtistsPage';
import { ServicesPage } from '../../pages/ServicesPage';
import { MusicPage } from '../../pages/MusicPage';
import { useState, useEffect } from 'react';
import { PlusIcons } from '../../components/PlusIcons/PlusIcons';
import { Scrollama, Step } from 'react-scrollama';

export const MainLayout = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const [activePage, setActivePage] = useState('about');
  const [line3Position, setLine3Position] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isTablet = windowWidth <= 1366;
  const isMobile = windowWidth <= 640;

  const divider = isMobile ? 37 : 24;
  const lineTopMargin = isMobile ? 80 : 100;

  const handleScroll = (event) => {
    const scrollHeight = (event.target.scrollTop - (event.target.scrollTop * 10) / divider) || event.target.scrollTop;
    const newPosition = (scrollHeight / (event.target.scrollHeight - event.target.clientHeight)) * event.target.clientHeight;
    setLine3Position(newPosition);
  };

  const pages = ['about', 'artists', 'services', 'music'];

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
    setActivePage(pages[data]);
  };

  const isBgWhite = currentStepIndex === 1 || currentStepIndex === 2;

  return (
    <main className={styles.container}>
      {isTablet && <TopMenu activePage={activePage} />}
      
      <section className={styles.content} onScroll={handleScroll}>
        {!isTablet && <SideMenu activePage={activePage} />}

        <div className={styles.content_container}>
          <Scrollama offset={0.5} onStepEnter={onStepEnter}>
            <Step data={0}>
              <main className={styles.page}>
                <AboutPage />
              </main>
            </Step>

            <Step data={1}>
              <main className={styles.page} style={{ background: isBgWhite ? '#f5f1f0' : '#ffffff00' }} >
                <ArtistsPage/>
              </main>
            </Step>

            <Step data={2}>
              <main className={styles.page} style={{ background: isBgWhite ? '#f5f1f0' : '#ffffff00' }}>
                <ServicesPage/>
              </main>
            </Step>

            <Step data={3}>
              <main className={styles.page}>
                <MusicPage/>
              </main>
            </Step>
          </Scrollama>
        </div>

        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3} style={{ top: `${line3Position + lineTopMargin}px` }}></div>

        <PlusIcons />
      </section>

      <Background />
    </main>
  );
};
