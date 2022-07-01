export const FriendList = ({ events }) => {
  return (
    <ul className="friend-list">
      {events.map(event => (
        <li className="item" key={event.id}>
          <span className="status">{ event.isOnline }</span>
          <img className="avatar" src={event.avatar} alt={event.name} width="48" />
          <p className="name">{event.name}</p>
        </li>
      ))}
    </ul>
  );
};
