import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendList.styled';


const FriendListItem = (props) => {
    const { id, name, avatar, isOnline } = props;
    return (
        <Item key={id}>
            <Status IsOnline={isOnline}>{isOnline}</Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </Item>
    )

};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendListItem;