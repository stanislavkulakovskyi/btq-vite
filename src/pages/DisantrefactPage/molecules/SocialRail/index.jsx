import instagramImg from '../../assets/instagram.webp';
import tiktokImg from '../../assets/tiktok.webp';
import { SOCIAL_LINKS } from '../../data';
import { Icon } from '../../icons';
import styles from './index.module.scss';

const IMAGES = {
  instagram: instagramImg,
  tiktok: tiktokImg,
};

export const SocialRail = () => {
  return (
    <div className={styles.rail}>
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.label}
          className={styles.card}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={IMAGES[social.image]} alt={social.label} />
          <span className={styles.label}>{social.label}</span>
          <div className={styles.logo}>
            <Icon name={social.icon} />
          </div>
        </a>
      ))}
    </div>
  );
};
