import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={`${styles.item} ${isOnline ? styles.online : styles.offline}`}>
    <img src={avatar} alt={`${name}'s avatar`} width="48" />
    <p className={styles.name}>{name}</p>
    <p className={isOnline ? styles.isOnline : styles.isOffline}>
      {isOnline ? "Online" : "Offline"}
    </p>
  </li>
);

export default FriendListItem;
