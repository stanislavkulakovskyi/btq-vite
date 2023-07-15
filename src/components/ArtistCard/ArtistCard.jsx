/* eslint-disable react/prop-types */
import styles from './ArtistCard.module.scss';
import { icons } from '../../api/artists';

export const ArtistCard = ({ name, photo, linktree, links }) => {
  return (
    <div className={styles.card}>
      <div className={styles.photo_container}>
          <img
            src={photo}
            alt="artist"
            className={styles.photo}
          />
      </div>

      <h3 className={styles.name}>{name}</h3>

      <a className={styles.link} href={linktree} target="_blank" rel="noreferrer" aria-label={`${name}'s linktree`}>
        <div className={styles.svg_icon}></div>
      </a>
      
      <div className={styles.links_container}>
        <div className={styles.link_icons}>
          {Object.keys(links).map(link => {
            return (
              <a key={link} href={links[link]} target="_blank" rel="noreferrer" aria-label={`${name}'s ${link}`}>
                <img
                  className={styles.link_icon}
                  src={icons[link]}
                  alt="link"
                />
              </a>
            )})}
        </div>
      </div>
    </div>
  );
};