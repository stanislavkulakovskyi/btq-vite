import PropTypes from 'prop-types';
import { useRef } from 'react';

import circleBase from '../../assets/circle-base.png';
import circleHover from '../../assets/circle-hover.png';
import microImg from '../../assets/micro.png';
import { useDraggableCircle } from '../../hooks/useDraggableCircle';
import styles from './index.module.scss';

export const DraggableCircle = ({ onTap }) => {
  const wrapRef = useRef(null);
  const microRef = useRef(null);

  useDraggableCircle(wrapRef, microRef, onTap);

  return (
    <>
      <div ref={microRef} className={styles.microLayer}>
        <img src={microImg} alt="" />
      </div>

      <div ref={wrapRef} className={styles.wrap}>
        <img className={styles.base} src={circleBase} alt="" />
        <img className={styles.hover} src={circleHover} alt="" />
      </div>
    </>
  );
};

DraggableCircle.propTypes = {
  onTap: PropTypes.func.isRequired,
};
