export default function Profile({ avatar, username, tag, location, stats }) {
  return (
    <div className="prof__profile">
      <div className="prof__description">
        <img src={avatar} alt={username} className="prof__avatar" />
        <p className="prof__name">{username}</p>
        <p className="prof__tag">@{tag}</p>
        <p className="prof__location">{location}</p>
      </div>

      <ul className="prof__stats">
        <li className="prof__list">
          <span className="prof__label">Followers</span>
          <span className="prof__quantity">{stats.followers}</span>
        </li>
        <li className="prof__list">
          <span className="prof__label">Views</span>
          <span className="prof__quantity">{stats.views}</span>
        </li>
        <li className="prof__list">
          <span className="prof__label">Likes</span>
          <span className="prof__quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}