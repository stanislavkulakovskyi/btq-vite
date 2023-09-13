import { useState } from 'react';
import styles from './MainLayout.module.scss';

import { AboutPage } from '../../pages/AboutPage';
import { ArtistsPage } from '../../pages/ArtistsPage';
import { MusicPage } from '../../pages/MusicPage';
import { ServicesPage } from '../../pages/ServicesPage';

import { Background } from './Background';
import { SideMenu } from '../../components/SideMenu';
import { TopMenu } from '../../components/TopMenu';

import { PlusIcons } from '../../components/PlusIcons/PlusIcons';
import { Scrollama, Step } from 'react-scrollama';


export const MainLayout = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const [activePage, setActivePage] = useState('about');
  const [line3Position, setLine3Position] = useState(0);
  const [isFormOpened, setIsFormOpened] = useState(false);
  
  const handleFormOpen = () => {
    setIsFormOpened(true);
  };

  const isTablet = window.innerWidth <= 1366;
  const isMobile = window.innerWidth <= 640;

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

  return (
    <main className={styles.container}>
      {isTablet && <TopMenu activePage={activePage} />}
      
        {!isTablet && <SideMenu activePage={activePage} handleFormOpen={handleFormOpen} />}
      <section className={styles.content} onScroll={handleScroll} >

        <div className={styles.content_container}>
           <Scrollama offset={0.5} onStepEnter={onStepEnter}>
             <Step data={0}>
               <main className={styles.page}>
                 <AboutPage />
               </main>
             </Step>

             <Step data={1}>
               <main className={styles.page}>
                 <ArtistsPage/>
               </main>
             </Step>

             <Step data={2}>
               <main className={styles.page} >
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

      </section>

        <PlusIcons />
      <Background activePage={activePage} />
    </main>
  );
};
