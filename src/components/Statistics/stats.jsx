import { StatList, StatItem } from 'components/Statistics/Statistic.styled';

export const Statistics = ({ events }) => {
  return (
    <StatList>
      {events.map(event => (
        <StatItem key={event.id} style={{ background: getRandomHexColor() }}>
          <span className="label">{event.label}</span>
          <span className="percentage">{event.percentage}</span>
        </StatItem>
      ))}
    </StatList>
  );
};



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
