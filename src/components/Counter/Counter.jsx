import React, { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import styles from './Counter.module.css';

const Counter = () => {
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
      <Section title="Зворотний зв'язок">
        <FeedbackOptions options={feedbackCount} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title="Статистика">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={feedbackCount.good}
            neutral={feedbackCount.neutral}
            bad={feedbackCount.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default Counter;