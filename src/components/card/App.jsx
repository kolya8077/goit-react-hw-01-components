import user from 'data/user';
import {Profile}  from 'components/Card/index';

export const Card = () => {
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


