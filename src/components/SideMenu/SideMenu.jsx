import classNames from 'classnames';
import { useEffect, useState } from 'react';

import burger from '../../assets/icons/burger_corner.svg';
import styles from './SideMenu.module.scss';
import links from '../../api/links';

// eslint-disable-next-line react/prop-types
export const SideMenu = ({ activePage }) => {
  const [activeLink, setActiveLink] = useState('about');

  useEffect(() => {
    setActiveLink(activePage);
  }, [activePage])

  return (
    <div>
      <div className={styles.container}>
        <p className={styles.btqText}>belletriq</p>
        <div className={styles.navContainer}>
          <div className={classNames(styles.burger, styles.burgerTop)}>
            <img src={burger} alt="burger" />
          </div>

          <nav className={styles.nav}>
            {links.map(link => (
                <a
                  key={link.title}
                  className={activeLink === link.title ? styles.link_active : styles.link}
                  href={link.hash}
                  onClick={() => setActiveLink(link.title)}
                >
                  {link.title}
                </a>
            ))}
          </nav>

          <div className={classNames(styles.burger, styles.burgerBottom)}>
            <img src={burger} alt="burger" />
          </div>
        </div>
        <p className={styles.btqText}>btq music</p>
      </div>
    </div>
  );
};
