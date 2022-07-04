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

export default function Profile({ avatar, username, tag, location, stats }) {
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
