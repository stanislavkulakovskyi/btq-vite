/* eslint-disable react/prop-types */
import styles from './Button.module.scss';

export const Button = ({ children, link }) => {
  return (
    <button>      
      <a 
        className={styles.link} 
        href={link} 
        target="_blank" 
        rel="noreferrer" 
        aria-label={`linktree`}
      >
    <div className={styles.svg_icon}></div>
    {children}
  </a></button>
  )
}