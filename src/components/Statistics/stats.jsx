import PropTypes from 'prop-types';
import {
  StatList,
  StatItem,
  TextTitle,
  ContainerSt,
  Statistic,
} from 'components/Statistics/Statistic.styled';


export const Statistics = ({ title, events }) => {
  return (
    <ContainerSt>
      <Statistic>
        {title && <TextTitle>{title}</TextTitle>}
        <StatList>
          {events.map(({ id, label, percentage }) => (
            <StatItem key={id} style={{ background: getRandomHexColor() }}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </StatItem>
          ))}
        </StatList>
      </Statistic>
    </ContainerSt>
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
