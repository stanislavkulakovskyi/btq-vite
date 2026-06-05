import PropTypes from 'prop-types';

import { Seo } from '../../components/Seo';
import { SEO, SITE_URL } from '../../api/seo';
import { buildServiceLd, buildBreadcrumbLd } from '../../api/jsonLd';
import {
  SERVICES,
  CLIENT_ROSTER,
  TRACK_RECORD,
  CONTACT_EMAIL,
} from '../../api/services';

import styles from './ServicesLandingPage.module.scss';

export const ServicesLandingPage = ({ service }) => {
  const seo = SEO[service.seoKey];
  const related = SERVICES.filter((item) => item.slug !== service.slug);
  const mailto = `mailto:${CONTACT_EMAIL}`;

  const jsonLd = [
    buildServiceLd({
      name: service.name,
      serviceType: service.serviceType,
      description: seo.description,
      url: seo.canonical,
    }),
    buildBreadcrumbLd([
      { name: 'belletriq', url: SITE_URL },
      { name: service.name, url: seo.canonical },
    ]),
  ];

  return (
    <div className={styles.page}>
      <Seo {...seo} jsonLd={jsonLd} />

      <header className={styles.nav}>
        <div className={styles.navInner}>
          <a className={styles.wordmark} href="/">
            belletriq
          </a>
          <a className={styles.navCta} href={mailto}>
            {CONTACT_EMAIL}
          </a>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.container}>
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <a href="/">belletriq</a>
            <span aria-hidden="true">/</span>
            <span>services</span>
          </nav>
          <h1 className={styles.h1}>{service.h1}</h1>
          <p className={styles.lead}>{service.lead}</p>
          <a className={styles.cta} href={mailto}>
            Start a project
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.prose}`}>
          {service.paragraphs.map((text) => (
            <p key={text} className={styles.paragraph}>
              {text}
            </p>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.h2}>Selected clients</h2>
          <p className={styles.trackRecord}>{TRACK_RECORD}</p>
          <ul className={styles.roster}>
            {CLIENT_ROSTER.map((brand) => (
              <li key={brand}>{brand}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.h2}>More from belletriq</h2>
          <ul className={styles.related}>
            {related.map((item) => (
              <li key={item.slug}>
                <a href={`/services/${item.slug}`}>{item.name}</a>
              </li>
            ))}
          </ul>
          <a className={styles.backHome} href="/">
            ← Back to belletriq
          </a>
        </div>
      </section>

      <section className={styles.section} id="contact">
        <div className={styles.container}>
          <h2 className={styles.h2}>Start a project</h2>
          <p className={styles.lead}>
            Tell us about the picture, the brief and the deadline — we will shape
            the sound.
          </p>
          <a className={styles.cta} href={mailto}>
            {CONTACT_EMAIL}
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>belletriq — sound for brands © 2026</div>
      </footer>
    </div>
  );
};

ServicesLandingPage.propTypes = {
  service: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    seoKey: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    serviceType: PropTypes.string.isRequired,
    h1: PropTypes.string.isRequired,
    lead: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
