import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './index.module.scss';

const renderParagraph = (paragraph) => {
  if (typeof paragraph === 'string') {
    return paragraph;
  }

  return paragraph.map((segment, index) => {
    if (segment.emphasis === 'em') {
      return <em key={index}>{segment.text}</em>;
    }

    if (segment.emphasis === 'strong') {
      return <strong key={index}>{segment.text}</strong>;
    }

    return segment.text;
  });
};

export const CollapsibleCard = ({
  title,
  shortText,
  longParagraphs,
  closedLabel,
  collapseLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>{title}</div>
      <p className={styles.textShort}>{shortText}</p>
      <button
        type="button"
        className={classNames(styles.toggle, { [styles.open]: isOpen })}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={styles.arrow}>▼</span>
        <span>{isOpen ? collapseLabel : closedLabel}</span>
      </button>
      <div className={classNames(styles.textLong, { [styles.open]: isOpen })}>
        {longParagraphs.map((paragraph, index) => (
          <p key={index}>{renderParagraph(paragraph)}</p>
        ))}
      </div>
    </div>
  );
};

const paragraphType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      emphasis: PropTypes.oneOf(['em', 'strong']),
    }),
  ),
]);

CollapsibleCard.propTypes = {
  title: PropTypes.string.isRequired,
  shortText: PropTypes.string.isRequired,
  longParagraphs: PropTypes.arrayOf(paragraphType).isRequired,
  closedLabel: PropTypes.string.isRequired,
  collapseLabel: PropTypes.string.isRequired,
};
