import PropTypes from 'prop-types';
import { Box } from '../Box/Box';
import {
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
} from './ProfileUser.styled';

export const ProfileUser = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      mx={0}
      mb={5}
      pt={6}
      display="flex"
      flexDirection="column"
      alignItems="center"
      border="normal"
      borderRadius="normal"
      borderColor="backgroundSecondary"
      width="200px"
      textAlign="center"
      bg="white"
    >
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </Stats>
    </Box>
  );
};

ProfileUser.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
