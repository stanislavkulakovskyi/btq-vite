/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import classNames from "classnames";

import burger from "../../assets/icons/burger_corner.svg";

import styles from "./TopMenu.module.scss";

export const TopMenu = () => {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
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
              className={styles.link}
              href="#about"
            >
              about
            </a>
            <a
              className={styles.link}
              href="#artists"
            >
              artists
            </a>
            <a
              className={styles.link}
              href="#services"
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
          className={`${styles.link} ${styles.link_music}`}
          href="#music"
        >
          music
        </a>
      </div>
    </div>
  );
};
