import styles from './AboutPage.module.scss';
import textVideo from '../../assets/text.mp4';

export const AboutPage = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <h1 className={styles.title}>
          <div className={styles.title_layer_1}>
            belletriq
          </div>

          <div className={styles.cube_wrapper}>
            <div className={styles.cube}>
              <div className={`${styles.face} ${styles.top}`}>belletriq</div>
              <div className={`${styles.face} ${styles.bottom}`}>belletriq</div>
              <div className={`${styles.face} ${styles.front}`}>belletriq</div>
              <div className={`${styles.face} ${styles.back}`}>belletriq</div>
            </div>
          </div>

          <span className={styles.text_video}>
            <video type='video/mp4' autoPlay muted loop>
              <source src={textVideo} />
            </video>
          </span>
        </h1>
        
        <p className={styles.description}>
          We are the Ukrainian creative community which unites likeminded people
          and promotes cultural development in it’s own way. Mostly focused on
          sound, but featured in a vast variety of art forms.
        </p>
      </div>

      
      
      <div className={styles.line}></div>
    </section>
  );
};
