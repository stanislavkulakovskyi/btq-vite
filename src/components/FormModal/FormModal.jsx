/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import styles from './FormModal.module.scss';
import close from '../../assets/icons/close.svg';
import arrow from '../../assets/icons/arrow.svg';
import classNames from 'classnames';

export const FormModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [isSucces, setIsSuccess] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 640;

  const validateEmail = () => {
    if (!email) {
      setEmailError('email is required');
      return false;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      setEmailError('please enter a valid email address');
      return false;
    }

    setEmailError('');
    return true;
  };

  const validateMessage = () => {
    if (!message.trim()) {
      setMessageError(`message can't be empty`);
      return false;
    }

    setMessageError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail() || !validateMessage()) {
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.sendForm('service_eje8f6a', 'template_epc5myn', form.current, 'igUREw9V0b_JLHZgH');

      setIsSuccess(true);
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(`handleSubmit error: ${error}`);
    } finally {
      setIsLoading(false);

      setTimeout(() => {
        onClose();
      }, 4000);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.form_box}>
          <div className={styles.form_backdrop} onClick={onClose}></div>
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            ref={form}
          >
            <p className={styles.description}>
              {`If you'd like to request some services from our team, or if you
              have any questions, feel free to write us by filling out the form
              below.`}
            </p>
            <label
              htmlFor="mail"
              className={`${styles.label} ${emailError && styles.error_label}`}
            >
              {!emailError ? 'email to write you back:' : emailError}
            </label>
            <input
              type="text"
              name="from_email"
              id="mail"
              autoComplete="true"
              className={`${styles.email} ${emailError && styles.error_input}`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setEmailError(false)
              }}
              placeholder="your email"
            />
            <label
              htmlFor="message"
              className={`${styles.label} ${messageError && styles.error_label
                }`}
            >
              {!messageError ? 'your message:' : messageError}
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows={isMobile ? 5 : 10}
              className={`${styles.message} ${messageError && styles.error_input
                }`}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
                setMessageError(false)
              }}
              placeholder="message..."
            ></textarea>
            <button
              className={classNames(styles.btn, { [styles.btn_disabled]: isLoading })}
              type="submit"
              disabled={isLoading}
            >
              <img className={styles.arrow} src={arrow} alt="arrow" />
              SEND
            </button>
            <button className={styles.close_btn} onClick={onClose}>
              <img src={close} alt="close" />
            </button>
          </form>

          {isSucces && (
            <div className={styles.success_message}>
              <p>
                {`thanks for your message! we'll get back to you as soon as
                possible!`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};