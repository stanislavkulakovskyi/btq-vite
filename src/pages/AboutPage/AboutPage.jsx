import styles from './AboutPage.module.scss';
import { CubeText } from './molecules/CubeText';

export const AboutPage = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <CubeText />

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
