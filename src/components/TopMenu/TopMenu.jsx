/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import classNames from "classnames";

import burger from "../../assets/icons/burger_corner.svg";

import styles from "./TopMenu.module.scss";
import links from "../../api/links";
import { icons } from "../../api/artists";

export const TopMenu = ({ activePage }) => {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const [activeLink, setActiveLink] = useState('about');
  const menuRef = useRef(null);

  useEffect(() => {
    setActiveLink(activePage);
  }, [activePage])

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
            {links.slice(0, -1).map(link => (
              <a
                key={link.title}
                className={activeLink === link.title ? styles.link_active : styles.link}
                href={link.hash || link.path}
                onClick={() => setActiveLink(link.title)}
                {...(link.path && { target: "_blank" })}
              >
                {link.title}
              </a>
            ))}
          </nav>

          <div
            className={classNames(styles.burger, styles.burger__bottom)}
            onClick={toggleBurger}
          >
            <img src={burger} alt="burger" />
          </div>
        </div>


        {links.slice(-1).map(link => (
          <a
            key={link.title}
            className={classNames(styles.link, styles.link_music, {
              [styles.link_active]: activeLink === link.title,
            })}
            href={link.hash || link.path}
            onClick={() => setActiveLink(link.title)}
            {...(link.path && { target: "_blank" })}
          >
            {link.title}
          </a>
        ))}



      </div>
    </div>
  );
};
