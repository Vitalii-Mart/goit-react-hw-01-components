import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import { List } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;