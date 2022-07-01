import css from './style.module.css';

export const Statistics = ({ events }) => {
  return (
    <ul className={css.statList}>
      {events.map(event => (
        <li
          className={css.item}
          key={event.id}
          style={{ backgroundColor: `${randomColor}` }}
        >
          <span className="label">{event.label}</span>
          <span className="percentage">{event.percentage}</span>
        </li>
      ))}
    </ul>
  );
};

const randomColor = getRandomHexColor();

console.log(randomColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
