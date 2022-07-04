import data from './friends';
import { FriendList } from './FriendList';
import PropTypes from 'prop-types';

export const Friends = () => {
  return <FriendList events={data} />;
};

FriendList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
