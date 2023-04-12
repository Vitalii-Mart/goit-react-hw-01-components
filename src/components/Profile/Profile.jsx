import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Items,
  Label,
  Quantity,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <ProfileCard>
    <Description>
      <Avatar src={avatar} alt={username} />
      <Name>{username}</Name>
      <Tag>{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <Stats>
      <Items>
        <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
      </Items>
      <Items>
        <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
      </Items>
      <Items>
        <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
      </Items>
    </Stats>
  </ProfileCard>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
