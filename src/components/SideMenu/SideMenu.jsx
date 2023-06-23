/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";

import { getIsRouteActive } from "../../utils/helpers/navigation";

import burger from '../../assets/icons/burger_corner.svg';

import styles from "./SideMenu.module.scss";

export const SideMenu = ({ links }) => {
  const { pathname, hash } = useLocation();

  const renderNavigation = () => {
    return links.map((route) => {
      const { title, path } = route;
      const isActive = getIsRouteActive(pathname, hash, path);

      return (
        <NavLink
          key={path}
          to={path}
          className={classNames(styles.link, {
            [styles.link__active]: isActive,
          })}
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
        <div className={styles.container}>
          <p className={styles.btqText}>belletriq</p>
          <div className={styles.navContainer} >
            <div className={classNames(styles.burger, styles.burger__top)}>
              <img src={burger} alt="burger" />
            </div>
            
            <nav className={styles.nav}>{renderNavigation()}</nav>
            
            <div className={classNames(styles.burger, styles.burger__bottom)}>
              <img src={burger} alt="burger" />
            </div>
          </div>
          <p className={styles.btqText}>btq music</p>
        </div>
    </div>
  );
};