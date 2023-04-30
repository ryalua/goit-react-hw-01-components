import PropTypes from 'prop-types'; 
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ title, label, percentage }) => {
  // const { label, percentage } = stats;
  console.log(title);
  console.log(label);
  console.log(percentage);
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
        <li className={css.item}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}</span>
        </li>
      </ul>
    </section>
  );
  
};

Statistics.propTypes = {

  title: PropTypes.string,
  // stats: PropTypes.number,
  label: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
}