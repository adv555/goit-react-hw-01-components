import PropTypes from 'prop-types';
import s from 'components/FriendList/FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.container}>
      {friends.map(({ avatar, name, isOnline = false, id }) => {
        return (
          <li className={s.item} key={id}>
            <span
              className={s.status}
              style={{ backgroundColor: isOnline ? '#008000' : '#ff6347' }}
            ></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FriendList;
