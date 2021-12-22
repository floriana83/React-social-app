import { useState, useEffect } from "react";
import { httpPOST } from "../../libs/http";
import styles from "./CreateFriend.module.scss";

const CreateFriend = () => {
  const [friendName, setFriendName] = useState("");
  const [friendPhoto, setFriendPhoto] = useState("");
  const [formPostObj, setFormPostObj] = useState({});

  const handleSendBtn = (event) => {
    event.preventDefault();
    httpPOST("/friends", formPostObj);
    alert("L'amico è stato aggiunto");
  };

  useEffect(() => {
    setFormPostObj({
      name: friendName,
      photo: friendPhoto,
    });
  }, [friendName, friendPhoto]);

  return (
    <div className={styles.createFriend}>
      <form>
        <div className={styles.__friend}>
          <input
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
            name="friend"
            id="friend"
            type="text"
            placeholder="Friend name"
            required
          />

          <input
            onChange={(e) => setFriendPhoto(e.target.value)}
            value={friendPhoto}
            name="photo"
            id="photo"
            type="text"
            placeholder="Photo URL"
          />

          <button type="submit" onClick={handleSendBtn}>
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateFriend;
