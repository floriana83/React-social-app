import { useState, useEffect } from "react";
import { httpPOST } from "../../libs/http";
import styles from "./CreateFriend.module.scss";
import Modal from "./../Modal";

const CreateFriend = () => {
  const [friendName, setFriendName] = useState("");
  const [friendPhoto, setFriendPhoto] = useState("");
  const [formPostObj, setFormPostObj] = useState({});
  const [isModalVisibile, setModalVisibile] = useState(false);

  const handleSendBtn = (event) => {
    event.preventDefault();
    httpPOST("/friends", formPostObj);
    // alert("L'amico è stato aggiunto");

    setModalVisibile(true);
    setTimeout(() => {
      setModalVisibile(false);
    }, 3000);
  };

  useEffect(() => {
    setFormPostObj({
      name: friendName,
      photo: friendPhoto,
    });
  }, [friendName, friendPhoto]);

//   return (
//     <div className={styles.createFriend}>
//       <form>
//         <div className={styles.__friend}>
//           <input
//             value={friendName}
//             onChange={(e) => setFriendName(e.target.value)}
//             name="friend"
//             id="friend"
//             type="text"
//             placeholder="Friend name"
//             required
//           />

//           <input
//             onChange={(e) => setFriendPhoto(e.target.value)}
//             value={friendPhoto}
//             name="photo"
//             id="photo"
//             type="text"
//             placeholder="Photo URL"
//           />

//           <button type="submit" onClick={handleSendBtn}>
//             ADD
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };


return (
  <div className={styles.createFriend}>
    {isModalVisibile && (
      <Modal bgColor="lightgreen" text="Hai un nuovo amico alla lista!" />
    )}
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
