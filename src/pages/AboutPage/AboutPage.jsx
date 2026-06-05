import styles from './AboutPage.module.scss';
import { CubeText } from './molecules/CubeText';

export const AboutPage = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <CubeText />

        <div className={styles.hero}>
          <h1 className={styles.title}>Sonic vision. Sound for brands.</h1>
          <p className={styles.lead}>
            Audio post-production, mixing, sound design, and bespoke music for
            advertising, film and brands.
          </p>
          <p className={styles.description}>
            We craft sonic vision — shaping how stories feel, move, and resonate.
            From bespoke music to final mix, we design sound as an essential
            narrative layer.
          </p>
          <p className={styles.description}>
            Beyond commissioned work, belletriq functions as a music label and
            creative platform, releasing original music and developing cultural
            projects.
          </p>
        </div>
      </div>

      <div className={styles.line}></div>
    </section>
  );
};
