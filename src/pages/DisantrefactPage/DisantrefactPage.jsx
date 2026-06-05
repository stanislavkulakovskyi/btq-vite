import { useRef } from 'react';

import bg from './assets/bg.webp';
import { YT_VIDEO_ID } from './data';
import { useYouTubePlayer } from './hooks/useYouTubePlayer';
import { DraggableCircle } from './molecules/DraggableCircle';
import { MouseGlow } from './molecules/MouseGlow';
import { PlayIndicator } from './molecules/PlayIndicator';
import { SocialRail } from './molecules/SocialRail';
import { StreamRail } from './molecules/StreamRail';
import styles from './DisantrefactPage.module.scss';

import { Seo } from '../../components/Seo';
import { SEO } from '../../api/seo';
import { buildMusicAlbumLd } from '../../api/jsonLd';

export const DisantrefactPage = () => {
  const ytPlayerRef = useRef(null);
  const { isPlaying, toggle } = useYouTubePlayer(YT_VIDEO_ID, ytPlayerRef);

  return (
    <section className={styles.container} id="disantrefact">
      <Seo {...SEO.disantrefact} jsonLd={buildMusicAlbumLd()} />

      <div className={styles.bg} style={{ backgroundImage: `url(${bg})` }} />

      <MouseGlow />

      <SocialRail />

      <DraggableCircle onTap={toggle} />

      <StreamRail />

      <div className={styles.ytContainer}>
        <div ref={ytPlayerRef} />
      </div>

      <PlayIndicator isPlaying={isPlaying} />
    </section>
  );
};
