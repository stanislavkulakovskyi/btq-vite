import { Button } from '../../components/Button';
import { TopMenu } from '../../components/TopMenu';
import styles from './AboutPage.module.scss';

export const AboutPage = () => {
  return (
    <section className={styles.container} id="about">
      <TopMenu />
      <div className={styles.content}>
        <h1 className={styles.title}>belletriq</h1>
        {/* <Button /> */}
        
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
