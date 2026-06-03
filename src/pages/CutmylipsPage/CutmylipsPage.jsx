import { BIO, ABOUT, PRESS } from './data';

import { Nav } from './molecules/Nav';
import { StreamEmbed } from './molecules/StreamEmbed';
import { CollapsibleCard } from './molecules/CollapsibleCard';
import { MediaLinks } from './molecules/MediaLinks';
import { Contacts } from './molecules/Contacts';
import { Footer } from './molecules/Footer';

import styles from './CutmylipsPage.module.scss';

export const CutmylipsPage = () => {
  return (
    <div className={styles.page}>
      <Nav />

      <section className={styles.section} id="stream">
        <div className={styles.container}>
          <StreamEmbed />
        </div>
      </section>

      <section className={styles.section} id="bio">
        <div className={`${styles.container} ${styles.twoCol}`}>
          <CollapsibleCard
            title={BIO.title}
            shortText={BIO.shortText}
            longParagraphs={BIO.longParagraphs}
            closedLabel={BIO.closedLabel}
          />
          <CollapsibleCard
            title={ABOUT.title}
            shortText={ABOUT.shortText}
            longParagraphs={ABOUT.longParagraphs}
            closedLabel={ABOUT.closedLabel}
          />
        </div>
      </section>

      <section className={styles.section} id="press">
        <div className={styles.container}>
          <CollapsibleCard
            title={PRESS.title}
            shortText={PRESS.shortText}
            longParagraphs={PRESS.longParagraphs}
            closedLabel={PRESS.closedLabel}
          />
        </div>
      </section>

      <section className={styles.section} id="media">
        <MediaLinks />
      </section>

      <section className={styles.section} id="contacts">
        <Contacts />
      </section>

      <Footer />
    </div>
  );
};
