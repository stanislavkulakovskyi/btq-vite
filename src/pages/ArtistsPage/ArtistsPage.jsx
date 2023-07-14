import { ArtistCard } from '../../components/ArtistCard';
import styles from './ArtistsPage.module.scss';
import bgText from '../../assets/images/bg_illustration.webp';

import { artists } from '../../api/artists';

export const ArtistsPage = () => {
  return (
    <>
      <section className={styles.container} id="artists">
        <div className={styles.page}>
          <h2 className={styles.title}>BTQ ARTISTS</h2>
          <div className={styles.list}>
            {artists.map(artist => {
              return (
                <ArtistCard
                  name={artist.name}
                  photo={artist.photo}
                  linktree={artist.linktree}
                  links={artist.links}
                  key={artist.id}
                />
              );
            })}
          </div>
        </div>
        
        <img src={bgText} alt="belletriq" className={styles.bgIllustration} />
      </section>
    </>
  );
};
