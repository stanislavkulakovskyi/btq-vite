import plusIcon from '../../assets/icons/plus.svg';
import styles from './PlusIcons.module.scss';

export const PlusIcons = () => {
  return (
    <>
      <img
        src={plusIcon} 
        className={styles.plus} 
        style={{ top: '20px', left: '20px' }}
        alt='plus_icon'
      >
      </img>

      <img
        src={plusIcon} 
        className={styles.plus} 
        style={{ top: '20px', right: '20px' }}
        alt='plus_icon'
      >
      </img>

      <img
        src={plusIcon} 
        className={styles.plus} 
        style={{ bottom: '20px', left: '20px' }}
        alt='plus_icon'
      >
      </img>

      <img
        src={plusIcon} 
        className={styles.plus} 
        style={{ bottom: '20px', right: '20px' }}
        alt='plus_icon'
      >
      </img>
    </>
  )
}