import styles from './MusicPage.module.scss';
import playerAnimation from '../../assets/images/Player vidget.gif';
import arrow from '../../assets/icons/arrow-lava.svg';
import spotifyIcon from '../../assets/icons/spotify.svg';

export const MusicPage = () => {
  return (
    <section className={styles.container} id="music">
      <div className={styles.content}>
        <h2 className={styles.title}>DISCOGRAPHY</h2>

        <div className={styles.animation_container}>
          <img
            src={playerAnimation}
            alt="player animation"
            className={styles.animation}
          />
        </div>
        <iframe
          className={styles.player}
          style={{border: 'none', background: 'ffffff'}}
          src="https://open.spotify.com/embed/playlist/2HpG3oafC84QrGQ01O47Aq?utm_source=generator&theme=0" width="100%" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
          title="spotify player"
        ></iframe>

        <div className={styles.kovdra}>
          <div>Designed by 
            <a 
              rel='noreferrer' 
              target='_blank' 
              href="https://kovdra-bureau.com/" 
              aria-label='Kovdra website'
            > Kovdra</a>
          </div>
            <a 
              rel='noreferrer' 
              target='_blank' 
              href='https://kovdra-bureau.com/' 
              aria-label='Kovdra website'
            >
              <img src={arrow} alt="arrow" />
            </a>
          </div>
      </div>

      <div className={styles.line}></div>
    </section>
  );
};
