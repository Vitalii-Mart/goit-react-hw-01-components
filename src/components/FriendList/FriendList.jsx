import FriendListItem from './FriendListItem';
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


export default FriendList;