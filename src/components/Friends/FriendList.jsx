import { Item } from 'components/Friends/Friends.style';
import { FaCircle } from 'react-icons/fa';

export const FriendList = ({ events }) => {
  return (
    <ul>
      {events.map(({ id, isOnline, avatar, name }) => (
        <Item key={id}>
          isOnline={isOnline}
          <span>
            <FaCircle style={{ color: colorAdd(isOnline) }} />
          </span>
          <img className="avatar" src={avatar} alt={name} width="48" />
          <p className="name">{name}</p>
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
