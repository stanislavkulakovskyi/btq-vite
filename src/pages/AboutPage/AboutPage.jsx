import styles from './AboutPage.module.scss';

export const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>belletriq</h2>
        <p className={styles.description}>
          We are the Ukrainian creative community which unites likeminded people
          and promotes cultural development in it’s own way. Mostly focused on
          sound, but featured in a vast variety of art forms.
        </p>
      </div>
      
      <div className={styles.line}></div>
    </div>
  );
};
