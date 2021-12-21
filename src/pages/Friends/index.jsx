import { useState, useEffect } from "react";
import { FriendPreview } from "../../components/FriendPreview";
import { http } from "../../libs/http";
import styles from "./Friends.module.scss";

const Friends = () => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    http("/friends").then((friendsList) => setFriendsList(friendsList));
  }, []);

  return (
    <div className={styles.Friends}>
      {friendsList.map((friend) => (
        <FriendPreview data={friend} key={friend.id} />
      ))}
    </div>
  );
};

export default Friends;