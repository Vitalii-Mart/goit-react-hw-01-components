import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendList.styled';


const FriendListItem = (props) => {
    const { name, avatar, isOnline } = props;
    return (
        <Item>
            <Status IsOnline={isOnline}>{isOnline}</Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </Item>
    )

};

FriendListItem.propTypes = {
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;