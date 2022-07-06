import data from 'data/friends';
import { FriendList } from './FriendList';

export const Friends = () => {
  return <FriendList events={data} />;
};


