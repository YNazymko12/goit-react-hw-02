import css from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback }) => {
  const positiveFeedback =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;
  return (
    <ul className={css.list}>
      <li className={css.item}>Good: {feedback.good}</li>
      <li className={css.item}>Neutral: {feedback.neutral}</li>
      <li className={css.item}>Bad: {feedback.bad}</li>
      <li className={css.item}>Total: {totalFeedback}</li>
      <li className={css.item}>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
