import PropTypes from 'prop-types';
import s from 'components/Statistics/Statistics.module.css';

// random color fn
const randomInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomColor = () => {
  let color = `rgb(${randomInterval(0, 255)},${randomInterval(
    0,
    255,
  )},${randomInterval(0, 255)})`;
  return color;
};
// end random color fn

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>Upload stats</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={s.item}
            style={{ backgroundColor: randomColor() }}
            key={id}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Statistics;
