import { useCallback, useEffect, useRef, useState } from 'react';

const IFRAME_API_SRC = 'https://www.youtube.com/iframe_api';

const PLAYER_VARS = {
  autoplay: 0,
  controls: 0,
  playsinline: 1,
  enablejsapi: 1,
};

const loadIframeApi = (onReady) => {
  if (window.YT?.Player) {
    onReady();
    return;
  }

  const previous = window.onYouTubeIframeAPIReady;
  window.onYouTubeIframeAPIReady = () => {
    previous?.();
    onReady();
  };

  const isScriptPresent = Boolean(
    document.querySelector(`script[src="${IFRAME_API_SRC}"]`),
  );
  if (!isScriptPresent) {
    const script = document.createElement('script');
    script.src = IFRAME_API_SRC;
    document.head.appendChild(script);
  }
};

export const useYouTubePlayer = (videoId, containerRef) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    let isCancelled = false;

    const createPlayer = () => {
      if (isCancelled || !window.YT?.Player) return;
      playerRef.current = new window.YT.Player(container, {
        videoId,
        playerVars: { ...PLAYER_VARS, origin: window.location.origin || '*' },
        events: {
          onReady: () => {
            if (!isCancelled) setIsPlayerReady(true);
          },
          onStateChange: (event) => {
            const { PLAYING, PAUSED, ENDED } = window.YT.PlayerState;
            if (event.data === PLAYING) setIsPlaying(true);
            else if (event.data === PAUSED || event.data === ENDED) setIsPlaying(false);
          },
        },
      });
    };

    loadIframeApi(createPlayer);

    return () => {
      isCancelled = true;
      playerRef.current?.destroy?.();
      playerRef.current = null;
      setIsPlayerReady(false);
      setIsPlaying(false);
    };
  }, [videoId, containerRef]);

  const toggle = useCallback(() => {
    const player = playerRef.current;
    if (!isPlayerReady || !player) return;
    if (isPlaying) player.pauseVideo();
    else player.playVideo();
  }, [isPlayerReady, isPlaying]);

  return { isPlaying, isPlayerReady, toggle };
};
