/* eslint-disable react/prop-types */
// import classNames from "classnames";

// import burger from '../../assets/icons/burger_corner.svg';

// import styles from "./SideMenu.module.scss";

// export const SideMenu = () => {

//   return (
//     <div>
//       <div className={styles.container}>
//         <p className={styles.btqText}>belletriq</p>
//         <div className={styles.navContainer} >
//           <div className={classNames(styles.burger, styles.burger__top)}>
//             <img src={burger} alt="burger" />
//           </div>
          
//           <nav className={styles.nav}>
//             <a className={styles.link} href="#about" >about</a>
//             <a className={styles.link} href="#artists">artists</a>
//             <a className={styles.link} href="#services">services</a>
//             <a className={styles.link} href="#music">music</a>
//           </nav>
          
//           <div className={classNames(styles.burger, styles.burger__bottom)}>
//             <img src={burger} alt="burger" />
//           </div>
//         </div>
//         <p className={styles.btqText}>btq music</p>
//       </div>
//     </div>
//   );
// };




import classNames from 'classnames';
import { useState } from 'react';

import burger from '../../assets/icons/burger_corner.svg';
import styles from './SideMenu.module.scss';

export const SideMenu = () => {
  const [activeLink, setActiveLink] = useState('about');

  return (
    <div>
      <div className={styles.container}>
        <p className={styles.btqText}>belletriq</p>
        <div className={styles.navContainer}>
          <div className={classNames(styles.burger, styles.burger__top)}>
            <img src={burger} alt="burger" />
          </div>

          <nav className={styles.nav}>
          <a
              className={activeLink === 'about' ? styles.link_active : styles.link}
              href="#about"
              onClick={() => setActiveLink('about')}
            >
              about
            </a>
            <a
              className={activeLink === 'artists' ? styles.link_active : styles.link}
              href="#artists"
              onClick={() => setActiveLink('artists')}
            >
              artists
            </a>
            <a
              className={activeLink === 'services' ? styles.link_active : styles.link}
              href="#services"
              onClick={() => setActiveLink('services')}
            >
              services
            </a>
            <a
              className={classNames(styles.link, {
                [styles.link_active]: activeLink === 'music',
              })}
              href="#music"
              onClick={() => setActiveLink('music')}
            >
              music
            </a>
          </nav>

          <div className={classNames(styles.burger, styles.burger__bottom)}>
            <img src={burger} alt="burger" />
          </div>
        </div>
        <p className={styles.btqText}>btq music</p>
      </div>
    </div>
  );
};
