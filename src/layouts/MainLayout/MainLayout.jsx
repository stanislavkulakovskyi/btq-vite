/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from 'framer-motion';
import { Background } from './molecules/Background';
import { SideMenu } from '../../components/SideMenu';
import { TopMenu } from '../../components/TopMenu';
import { useLocation } from 'react-router-dom';
import { PUBLIC_ROUTES } from '../../utils/constants/routes';
import styles from './MainLayout.module.scss';

export const MainLayout = ({ children }) => {
  const location = useLocation();

  console.log(location.pathname);
  const isServices = location.pathname === '/services';

  const animationProps = {
    className: styles.children,
    key: location.key,
    initial: { opacity: 0, filter: 'blur(50px)' },
    animate: { opacity: 1, filter: isServices ? 'none' : 'blur(0px)'},
    exit: { opacity: 0, filter: 'blur(50px)' },
    transition: { duration: 0.5 },
  };

  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <SideMenu links={PUBLIC_ROUTES} />

        <TopMenu links={PUBLIC_ROUTES} />

        <AnimatePresence
          layout
          initial={false}
          custom={location.pathname}
          mode="popLayout"
        >
          <motion.div {...animationProps} layout>
            {children}
          </motion.div>
        </AnimatePresence>
      </section>
      <Background />
    </main>
  );
};
