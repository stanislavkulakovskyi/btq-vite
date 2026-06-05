import { Seo } from '../../components/Seo';
import { SEO, SITE_URL } from '../../api/seo';
import { buildServiceLd, buildBreadcrumbLd } from '../../api/jsonLd';
import { ServiceHeader } from '../../components/ServiceHeader';

import { PAGE, HEADER } from './data';

import styles from './ServicesBespokeMusicPage.module.scss';

export const ServicesBespokeMusicPage = () => {
  return (
    <div className={styles.page}>
      <Seo
        {...SEO.servicesBespokeMusic}
        jsonLd={[
          buildServiceLd({
            name: 'Bespoke Music Composition',
            description:
              'Original, bespoke music composed for advertising, film and brand content — from concept to final master.',
            serviceType: 'Bespoke music composition',
            url: `${SITE_URL}/services/bespoke-music`,
          }),
          buildBreadcrumbLd([
            { name: 'Home', url: SITE_URL },
            { name: 'Services', url: `${SITE_URL}/services/bespoke-music` },
            { name: 'Bespoke Music', url: `${SITE_URL}/services/bespoke-music` },
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
