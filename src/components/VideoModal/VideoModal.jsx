/* eslint-disable react/prop-types */
import styles from './VideoModal.module.scss';
import closeBtn from '../../assets/icons/close.svg';

export const VideoModal = ({ url, closeModal }) => {
  return (
    <section className={styles.container}>
      <div className={styles.backdrop} onClick={closeModal} >
        <div className={styles.video_container}>
          <iframe
            width="1024"
            height="640"
            src={url}
            title="Video player"
            allowFullScreen={true}
            className={styles.video}
          ></iframe>

          <button className={styles.close_btn} onClick={closeModal}>
            <img src={closeBtn} alt="close" />
          </button>
        </div>
      </div>
    </section>
  );
};