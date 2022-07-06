import { StatList, StatItem } from 'components/Statistics/Statistic.styled';
import PropTypes from 'prop-types';


export const Statistics = ({ events }) => {
  return (
    <StatList>
      {events.map(({ id, label, percentage }) => (
        <StatItem key={id} style={{ background: getRandomHexColor() }}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </StatItem>
      ))}
    </StatList>
  );
};



Statistics.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
