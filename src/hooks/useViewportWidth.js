import { useEffect, useState } from 'react';

const SSR_DEFAULT_WIDTH = 1920;

export const useViewportWidth = () => {
  const [width, setWidth] = useState(SSR_DEFAULT_WIDTH);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    setWidth(window.innerWidth);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return width;
};
