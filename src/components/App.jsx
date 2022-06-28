import user from 'components/user';

function Profile(props) {
  return (
    <div className="prof__profile">
      <div className="prof__description">
        <img src={props.avatar} alt={props.username} className="prof__avatar" />
        <p className="prof__name">{props.username}</p>
        <p className="prof__tag">@{props.tag}</p>
        <p className="prof__location">{props.location}</p>
      </div>

      <ul className="prof__stats">
        <li className="prof__list">
          <span className="prof__label">Followers</span>
          <span className="prof__quantity">{props.stats.followers}</span>
        </li>
        <li className="prof__list">
          <span className="prof__label">Views</span>
          <span className="prof__quantity">{props.stats.views}</span>
        </li>
        <li className="prof__list">
          <span className="prof__label">Likes</span>
          <span className="prof__quantity">{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};
