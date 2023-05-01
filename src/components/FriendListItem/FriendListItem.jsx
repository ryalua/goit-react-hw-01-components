import PropTypes from 'prop-types'; 
import css from 'components/FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({
  isOnline,
  avatar,
  name,
}) => {
  return (
    <li className={css.item}>
      <span className={css.status}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  )
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
  
}