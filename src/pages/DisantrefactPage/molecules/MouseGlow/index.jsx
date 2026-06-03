import { useMouseGlow } from '../../hooks/useMouseGlow';
import styles from './index.module.scss';

export const MouseGlow = () => {
  const canvasRef = useMouseGlow();

  return <canvas ref={canvasRef} className={styles.canvas} />;
};
