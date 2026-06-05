import { Seo } from '../../components/Seo';
import { SEO, SITE_URL } from '../../api/seo';
import { buildServiceLd, buildBreadcrumbLd } from '../../api/jsonLd';
import { ServiceHeader } from '../../components/ServiceHeader';

import { PAGE, HEADER } from './data';

import styles from './ServicesSoundDesignPage.module.scss';

export const ServicesSoundDesignPage = () => {
  return (
    <div className={styles.page}>
      <Seo
        {...SEO.servicesSoundDesign}
        jsonLd={[
          buildServiceLd({
            name: 'Sound Design & SFX',
            description:
              'Sound design, SFX and audio post-production for advertising, film and brand content — from concept to final mix.',
            serviceType: 'Sound design & SFX',
            url: `${SITE_URL}/services/sound-design`,
          }),
          buildBreadcrumbLd([
            { name: 'Home', url: SITE_URL },
            { name: 'Services', url: `${SITE_URL}/services/sound-design` },
            { name: 'Sound Design', url: `${SITE_URL}/services/sound-design` },
          ]),
        ]}
      />

      <ServiceHeader {...HEADER} />

      <section className={styles.section} id="intro">
        <div className={styles.container}>
          <h1 className={styles.h1}>{PAGE.h1}</h1>
          {PAGE.intro.map((paragraph, index) => (
            <p key={index} className={styles.lead}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className={styles.section} id="what-we-do">
        <div className={styles.container}>
          <h2 className={styles.h2}>{PAGE.whatWeDo.heading}</h2>
          {PAGE.whatWeDo.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <ul className={styles.list}>
            {PAGE.whatWeDo.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} id="work">
        <div className={styles.container}>
          <h2 className={styles.h2}>{PAGE.cases.heading}</h2>
          <ul className={styles.list}>
            {PAGE.cases.items.map((item, index) => (
              <li key={index}>
                {`${item.brand} — ${item.role} for ${item.medium}`}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} id="contact">
        <div className={styles.container}>
          <h2 className={styles.h2}>{PAGE.cta.heading}</h2>
          <p>{PAGE.cta.body}</p>
          <a className={styles.email} href={`mailto:${PAGE.cta.email}`}>
            {PAGE.cta.email}
          </a>
          <div className={styles.links}>
            <a className={styles.link} href={PAGE.cta.crossLink.href}>
              {PAGE.cta.crossLink.label}
            </a>
            <a className={styles.link} href={PAGE.cta.homeLink.href}>
              {PAGE.cta.homeLink.label}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
