import { useLocale } from '../../i18n/LocaleProvider';
import { selectContent } from './data';

import { Nav } from './molecules/Nav';
import { StreamEmbed } from './molecules/StreamEmbed';
import { CollapsibleCard } from './molecules/CollapsibleCard';
import { MediaLinks } from './molecules/MediaLinks';
import { Contacts } from './molecules/Contacts';
import { Footer } from './molecules/Footer';

import styles from './CutmylipsPage.module.scss';

import { Seo } from '../../components/Seo';
import { SEO } from '../../api/seo';

export const CutmylipsPage = () => {
  const { locale } = useLocale();
  const content = selectContent(locale);

  return (
    <div className={styles.page}>
      <Seo {...SEO.cutmylips} lang={locale} ogDescription={content.ogDescription} />

      <Nav navLinks={content.navLinks} releaseLink={content.releaseLink} />

      <section className={styles.section} id="stream">
        <div className={styles.container}>
          <StreamEmbed />
        </div>
      </section>

      <section className={styles.section} id="bio">
        <div className={`${styles.container} ${styles.twoCol}`}>
          <CollapsibleCard
            title={content.bio.title}
            shortText={content.bio.shortText}
            longParagraphs={content.bio.longParagraphs}
            closedLabel={content.bio.closedLabel}
            collapseLabel={content.collapseLabel}
          />
          <CollapsibleCard
            title={content.about.title}
            shortText={content.about.shortText}
            longParagraphs={content.about.longParagraphs}
            closedLabel={content.about.closedLabel}
            collapseLabel={content.collapseLabel}
          />
        </div>
      </section>

      <section className={styles.section} id="press">
        <div className={styles.container}>
          <CollapsibleCard
            title={content.press.title}
            shortText={content.press.shortText}
            longParagraphs={content.press.longParagraphs}
            closedLabel={content.press.closedLabel}
            collapseLabel={content.collapseLabel}
          />
        </div>
      </section>

      <section className={styles.section} id="media">
        <MediaLinks title={content.mediaTitle} groups={content.mediaGroups} />
      </section>

      <section className={styles.section} id="contacts">
        <Contacts title={content.contactsTitle} boxes={content.contacts} />
      </section>

      <Footer />
    </div>
  );
};
