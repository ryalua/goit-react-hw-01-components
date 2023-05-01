import PropTypes from 'prop-types'; 
import { MyFriend, Status, Avatar,Name } from 'components/FriendListItem/FriendListItem.styled';

export const FriendListItem = ({
  isOnline,
  avatar,
  name,
}) => {
  return (
    <MyFriend>
      <Status
        style={{ backgroundColor: isOnline ? "green" : "red" }}
      ></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </MyFriend>
  )
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
  
}