import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  List,
  Label,
} from 'components/Card/card.styled';
import PropTypes from 'prop-types';


export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <List>
          <Label>Followers</Label>
          <span>{stats.followers}</span>
        </List>
        <List>
          <Label>Views</Label>
          <span>{stats.views}</span>
        </List>
        <List>
          <Label>Likes</Label>
          <span>{stats.likes}</span>
        </List>
      </Stats>
    </ProfileCard>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};