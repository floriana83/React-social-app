import { useState, useEffect } from "react";
import CreateFriend from "../../components/CreateFriend";
import { FriendPreview } from "../../components/FriendPreview";
// import Pagination from "./../../components/Pagination";
import { http } from "../../libs/http";
import styles from "./Friends.module.scss";

const Friends = () => {
  const [friendsList, setFriendsList] = useState([]);
  // const [pagination, setPagination] = useState(1);

  useEffect(() => {
    http(`/friends?_page=1`).then((friendsList) => setFriendsList(friendsList));
  }, []);

  return (
    <div className={styles.Friends}>
      <CreateFriend />

      {/* <div>
        <Pagination />
      </div> */}

      <div className={styles.__friendsList}>
        {friendsList.map((friend) => (
          <FriendPreview data={friend} key={friend.id} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
