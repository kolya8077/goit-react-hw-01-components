import { Item } from 'components/Friends/Friends.style';
import { FaCircle } from 'react-icons/fa';

export const FriendList = ({ events }) => {
  return (
    <ul>
      {events.map(event => (
        <Item key={event.id}>
          <span isOnline={event.isOnline}>
            <FaCircle style={{ color: colorAdd(event.isOnline) }} />
          </span>
          <img
            className="avatar"
            src={event.avatar}
            alt={event.name}
            width="48"
          />
          <p className="name">{event.name}</p>
        </Item>
      ))}
    </ul>
  );
};

function colorAdd(isOnline) {
  if (isOnline) {
    return 'green';
  }
  return 'red';
}
