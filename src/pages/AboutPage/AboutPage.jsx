import styles from './AboutPage.module.scss';
import { CubeText } from './molecules/CubeText';

export const AboutPage = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <CubeText />

        <div className={styles.description}>
          <h1 className={styles.headline}>SONIC VISION</h1>
          <p className={styles.tagline}>Sound for brands.</p>
          <p className={styles.lead}>
            Audio post-production, mixing, sound design, and bespoke music.
          </p>
          <p className={styles.note}>
            Beyond commissioned work, belletriq functions as a music label and
            creative platform — releasing forward-thinking electronic music from
            Ukraine and Eastern Europe and developing cultural projects.
          </p>
        </div>
      </div>

      <div className={styles.line}></div>
    </section>
  );
};
