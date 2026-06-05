import { useState } from 'react';

import styles from './ServicesPage.module.scss';
import { FormModal } from '../../components/FormModal';
import { Showreel } from '../../components/Showreel';
import { ClientShowcase } from './molecules/ClientShowcase';
import {
  SHOWREEL,
  SERVICES_INTRO,
  CLIENT_ROSTER,
  HOME_CASES,
  SERVICE_LINKS,
} from './data';

export const ServicesPage = () => {
  const [isFormOpened, setIsFormOpened] = useState(false);

  const handleFormOpen = () => {
    setIsFormOpened(true);
  };

  const handleFormClose = () => {
    setIsFormOpened(false);
  };

  return (
    <section className={styles.container} id="services">
      <div className={styles.page}>
        <h2 className={styles.title}>SERVICES</h2>

        <div className={styles.showreel}>
          <Showreel url={SHOWREEL.url} title={SHOWREEL.title} />
        </div>

        <p className={styles.intro}>{SERVICES_INTRO}</p>

        <div className={styles.services}>
          <h3 className={styles.servicesHeading}>What we do</h3>
          <ul className={styles.serviceList}>
            {SERVICE_LINKS.map((link) => (
              <li key={link.label} className={styles.serviceItem}>
                {link.href ? (
                  <a href={link.href} className={styles.serviceLink}>
                    {link.label}
                  </a>
                ) : (
                  link.label
                )}
              </li>
            ))}
          </ul>
        </div>

        <ClientShowcase
          roster={CLIENT_ROSTER}
          cases={HOME_CASES}
          rosterHeading="Selected clients"
          casesHeading="Selected work"
        />

        <article className={styles.description_box}>
          <p className={styles.cta}>Have a project in mind?</p>

          <button className={styles.link} onClick={handleFormOpen} aria-label="contact us">
            <div className={styles.svg_icon}></div>
          </button>
        </article>

        {isFormOpened && <FormModal onClose={handleFormClose} />}
      </div>
    </section>
  );
};
