import { Background } from './Background';
import { SideMenu } from '../../components/SideMenu';
import { TopMenu } from '../../components/TopMenu';
import styles from './MainLayout.module.scss';
import { AboutPage } from '../../pages/AboutPage';
import { ArtistsPage } from '../../pages/ArtistsPage';
import { ServicesPage } from '../../pages/ServicesPage';
import { MusicPage } from '../../pages/MusicPage';
import { useState } from 'react';
import { PlusIcons } from '../../components/PlusIcons/PlusIcons';

export const MainLayout = () => {
  const [line3Position, setLine3Position] = useState(0);

  const handleScroll = (event) => {
    const scrollHeight = (event.target.scrollTop - (event.target.scrollTop * 10) / 24) || event.target.scrollTop;
    const newPosition = (scrollHeight / (event.target.scrollHeight - event.target.clientHeight)) * event.target.clientHeight;
    setLine3Position(newPosition);
  };

  return (
    <main className={styles.container}>
      <TopMenu />
      
      <section className={styles.content} onScroll={handleScroll}>
        <SideMenu />


        <div className={styles.content_container}>
          <div className={styles.page}>
            <AboutPage />
          </div>

          <div className={styles.page}>
            <ArtistsPage/>
          </div>

          <div className={styles.page}>
            <ServicesPage/>
          </div>

          <div className={styles.page}>
            <MusicPage/>
          </div>
        </div>

        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3} style={{ top: `${line3Position + 90}px` }}></div>

        <PlusIcons />

      </section>
      <Background />
    </main>
  );
};
