import { useState, useEffect } from "react";
import CreateFriend from "../../components/CreateFriend";
import { FriendPreview } from "../../components/FriendPreview";
// import Pagination from "./../../components/Pagination";
import { http } from "../../libs/http";
import styles from "./Friends.module.scss";

import Pagination from "../../components/Pagination";

const Friends = () => {
  const [actualFriendsList, setActualFriendsList] = useState([]);
  const [actualButtonNum, setActualButtonNum] = useState(1);

  useEffect(() => {
    http(`/friends?_page=${actualButtonNum}`).then((friendsList) =>
      setActualFriendsList(friendsList)
    );
  }, [actualButtonNum]);

  return (
    <div className={styles.Friends}>
      <CreateFriend />

      <div className={styles.__friendsList}>
        {actualFriendsList.map((friend) => (
          <FriendPreview data={friend} key={friend.id} />
        ))}
      </div>

      <div className={styles.__pagination}>
        <Pagination setActualButtonNum={setActualButtonNum} />
      </div>
    </div>
  );
};

export default Friends;
