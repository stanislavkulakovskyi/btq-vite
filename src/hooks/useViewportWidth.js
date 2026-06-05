import { useEffect, useState } from 'react';

const SSR_DEFAULT_WIDTH = 1920;

const getViewportWidth = () =>
  typeof window === 'undefined' ? SSR_DEFAULT_WIDTH : window.innerWidth;

export const useViewportWidth = () => {
  const [width, setWidth] = useState(getViewportWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    setWidth(window.innerWidth);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return width;
};
