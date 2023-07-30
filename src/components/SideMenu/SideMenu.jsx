import classNames from 'classnames';
import { useLayoutEffect, useState } from 'react';

import burger from '../../assets/icons/burger_corner.svg';
import styles from './SideMenu.module.scss';
import links from '../../api/links';
import { FormModal } from '../FormModal';
import { icons } from '../../api/artists';

// eslint-disable-next-line react/prop-types
export const SideMenu = ({ activePage}) => {
  const [activeLink, setActiveLink] = useState('about');
  const [isFormOpened, setIsFormOpened] = useState(false);
  
  const handleFormOpen = () => {
    setIsFormOpened(true);
  };

  const handleFormClose = () => {
    setIsFormOpened(false);
  }
  

  useLayoutEffect(() => {
    setActiveLink(activePage);
  }, [activePage])

  return (
    <div>
      <div className={styles.container}>
        <p className={styles.btqText} style={{ pointerEvents: 'none'}}>belletriq</p>
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
        <button onClick={handleFormOpen} className={styles.btqText}>contact</button>
        
      </div>
      {isFormOpened && (
          <FormModal onClose={handleFormClose} />
      )}
    </div>
  );
};
