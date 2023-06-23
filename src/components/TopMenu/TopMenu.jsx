/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";

import { getIsRouteActive } from "../../utils/helpers/navigation";

import burger from "../../assets/icons/burger_corner.svg";

import styles from "./TopMenu.module.scss";

export const TopMenu = ({ links }) => {
  const { pathname, hash } = useLocation();
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

  const renderNavigation = () => {
    return links.slice(0, -1).map((route) => {
      const { title, path } = route;
      const isActive = getIsRouteActive(pathname, hash, path);

      return (
        <NavLink
          key={path}
          to={path}
          className={classNames(styles.link, {
            [styles.link__active]: isActive,
          })}
          onClick={toggleBurger}
        >
          {title}
        </NavLink>
      );
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

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

          <nav className={styles.nav}>{renderNavigation()}</nav>

          <div
            className={classNames(styles.burger, styles.burger__bottom)}
            onClick={toggleBurger}
          >
            <img src={burger} alt="burger" />
          </div>
        </div>

        <NavLink
          key={"/music"}
          to={"/music"}
          className={classNames(styles.link, styles.link_music, {
            [styles.link__active]: pathname === "/music"
          })}
          onClick={() => setIsBurgerOpened(false)}
          
        >
          music
        </NavLink>
      </div>
    </div>
  );
};
