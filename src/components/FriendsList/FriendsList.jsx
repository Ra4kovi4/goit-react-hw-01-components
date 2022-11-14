import PropTypes from 'prop-types';
import {
  ListOfFriends,
  FriendListItem,
  Status,
  Avatar,
  Name,
} from './FriendsList.styled';
import { Box } from '../Box/Box';

export const FriendsList = ({ friends }) => {
  return (
    <Box
      mx={0}
      mb={5}
      display="block"
      width="250px"
      textAlign="center"
      as="section"
    >
      <ListOfFriends>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem key={id}>
            <Status backgroundColor={isOnline ? 'green' : 'red'}></Status>
            <Avatar src={avatar} alt={name} />
            <Name>{name}</Name>
          </FriendListItem>
        ))}
      </ListOfFriends>
    </Box>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
