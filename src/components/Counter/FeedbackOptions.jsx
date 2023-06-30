import React from 'react';
import styles from './Counter.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <button className={styles.buttonGood} onClick={() => onLeaveFeedback('good')}>Добре</button>
      <button className={styles.buttonNormal} onClick={() => onLeaveFeedback('neutral')}>Нейтрально</button>
      <button className={styles.buttonBad} onClick={() => onLeaveFeedback('bad')}>Погано</button>
    </div>
  );
};

export default FeedbackOptions;