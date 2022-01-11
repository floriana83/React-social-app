import { useState, useEffect } from "react";
import { httpPOST } from "../../libs/http";

import Modal from "./../Modal";
import styles from "./CreatePost.module.scss";

const CreatePost = () => {
  const [authorInput, setAuthorInput] = useState("");
  const [imgInput, setImgInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [formPostObj, setFormPostObj] = useState({});
  const [isModalVisible, setModalVisibile] = useState(false);

  const handleSendBtn = (event) => {
    event.preventDefault();
    httpPOST("/posts", formPostObj);
    setModalVisibile(true);

    setTimeout(() => {
      setModalVisibile(false);
    }, 3000);
  };

  useEffect(() => {
    setFormPostObj({
      author: authorInput,
      text: messageInput,
      date: new Date().toISOString(),
      photo: imgInput,
    });
  }, [authorInput, imgInput, messageInput]);

  return (
    <div className={styles.createPost}>
      {isModalVisible && (
        <Modal bgColor="lightskyblue" text="Il post è stato aggiunto" />
      )}

      <form>
        <div className={styles.__author}>
          <input
            value={authorInput}
            onChange={(e) => setAuthorInput(e.target.value)}
            name="author"
            id="author"
            type="text"
            placeholder="Author"
            required
          />

          <input
            onChange={(e) => setImgInput(e.target.value)}
            value={imgInput}
            name="img"
            id="img"
            type="text"
            placeholder="Img URL"
          />

          <button type="submit" onClick={handleSendBtn}>
            SEND
          </button>
        </div>

        <textarea
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
      </form>
    </div>
  );
};

export default CreatePost;