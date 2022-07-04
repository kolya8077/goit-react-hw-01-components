import { StatList, StatItem } from 'components/Statistics/Statistic.styled';

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



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
