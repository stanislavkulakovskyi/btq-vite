/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import classNames from "classnames";

import burger from "../../assets/icons/burger_corner.svg";

import styles from "./TopMenu.module.scss";

export const TopMenu = () => {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const [activeLink, setActiveLink] = useState('about');
  const menuRef = useRef(null);

  useEffect(() => {
    setIsBurgerOpened(false);
  }, [])

  const toggleBurger = () => {
    setIsBurgerOpened(!isBurgerOpened);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsBurgerOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div
        className={classNames(styles.container_mobile, {
          [styles.container_mobile__open]: isBurgerOpened,
        })}
      >
        <div className={styles.navContainer} ref={menuRef} onClick={toggleBurger}>
          <div
            className={classNames(styles.burger, styles.burger__top)}
            onClick={toggleBurger}
          >
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
            
          </nav>

          <div
            className={classNames(styles.burger, styles.burger__bottom)}
            onClick={toggleBurger}
          >
            <img src={burger} alt="burger" />
          </div>
        </div>

        
        <a
          className={classNames(styles.link, styles.link_music, {
            [styles.link_active]: activeLink === 'music',
          })}
          href="#music"
          onClick={() => setActiveLink('music')}
        >
          music
        </a>
      </div>
    </div>
  );
};
