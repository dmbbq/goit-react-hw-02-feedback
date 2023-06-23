import React, { useState } from 'react';
import styles from './Counter.module.css';

const FeedbackApp = () => {
  const [feedbackCount, setFeedbackCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleFeedback = (type) => {
    setFeedbackCount(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedbackCount;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedbackCount;
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  };

  return (
    <div className={styles.container}>
      <h2>Статистика зворотного зв'язку</h2>
      <button className={styles.buttonGood} onClick={() => handleFeedback('good')}>Добре</button>
      <button className={styles.buttonNormal} onClick={() => handleFeedback('neutral')}>Нейтрально</button>
      <button className={styles.buttonBad} onClick={() => handleFeedback('bad')}>Погано</button>
      <p>Добре: {feedbackCount.good}</p>
      <p>Нейтрально: {feedbackCount.neutral}</p>
      <p>Погано: {feedbackCount.bad}</p>
      <p>Загальна кількість відгуків: {countTotalFeedback()}</p>
      <p>Відсоток позитивних відгуків: {countPositiveFeedbackPercentage()}%</p>
    </div>
  );
};

export default FeedbackApp;