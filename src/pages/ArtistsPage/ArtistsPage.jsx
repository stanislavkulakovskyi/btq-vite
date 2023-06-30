import styles from './ArtistsPage.module.scss';
import { ArtistCard } from '../../components/ArtistCard';
import bgText from '../../assets/images/bg_illustration.webp';

import artists from '../../api/artists';

export const ArtistsPage = () => {
  return (
    <>
      <div className={styles.container} id="artists">
        <div className={styles.page}>
          <h2 className={styles.title}>BTQ ARTISTS</h2>
          <div className={styles.list}>
            {artists.map((artist) => {
              return (
                <ArtistCard
                  name={artist.name}
                  photo={artist.photo}
                  link={artist.linktree}
                  spotify={artist.spotify}
                  soundcloud={artist.soundcloud}
                  instagram={artist.instagram}
                  key={artist.id}
                />
              );
            })}
          </div>
        </div>
        
        <img src={bgText} alt="belletriq" className={styles.bgIllustration} />
      </div>
    </>
  );
};
