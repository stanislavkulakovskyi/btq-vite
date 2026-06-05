import PropTypes from 'prop-types';

import styles from './index.module.scss';

export const ClientShowcase = ({ roster, cases, rosterHeading, casesHeading }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{rosterHeading}</h3>
      <ul className={styles.roster}>
        {roster.map((name, index) => (
          <li key={index} className={styles.rosterItem}>
            <span>{name}</span>
          </li>
        ))}
      </ul>

      <h3 className={styles.heading}>{casesHeading}</h3>
      <ul className={styles.cases}>
        {cases.map((item) => (
          <li key={item.id} className={styles.caseItem}>
            <span className={styles.brand}>{item.brand}</span>
            {` — ${item.role} for ${item.medium}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

ClientShowcase.propTypes = {
  roster: PropTypes.arrayOf(PropTypes.string).isRequired,
  cases: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      medium: PropTypes.string.isRequired,
    }),
  ).isRequired,
  rosterHeading: PropTypes.string,
  casesHeading: PropTypes.string,
};
