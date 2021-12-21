import { useState, useEffect } from "react";
import { FriendPreview } from "../../components/FriendPreview";
import { MessagePreview } from "../../components/MessagePreview";
import { Post } from "../../components/Post";
import { http } from "./../../libs/http";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const friends = [];

const messages = [];

const posts = [];

const Home = () => {
  const [friendsPreview, setFriendsPreview] = useState(friends);
  const [allPosts, setAllPosts] = useState(posts);
  const [messagesPreview, setMessagesPreview] = useState(messages);

  // GETTER -> const friendPreview = [];
  // SETTER -> friendPreview = [...]

  // Esegui del codice quando il componente è inizializzato (montato in pagina)
  // componentDidMount() --> simile a "DOMContentLoaded" ma solo per il componente
  useEffect(() => {
    // fetch("https://edgemony-backend.herokuapp.com/friends?_limit=4")
    //   .then((response) => response.json())
    //   .then((data) => setFriendsPreview(data));

    http("/friends?_limit=4").then((data) => setFriendsPreview(data));
    http("/messages?_limit=4").then((data) => setMessagesPreview(data));
    http("/posts").then((data) => setAllPosts(data.reverse()));

    // Promise.all([
    //   http("/friends?_limit=4"),
    //   http("/messages?_limit=4"),
    //   http("/posts")
    // ]).then((data) => console.log(data[0]))
  }, []);

  return (
    <section className={styles.home}>
      <h3>Bevenuto utente</h3>
      <div className={styles.grid}>
        <aside>
          {friendsPreview.map((friend, index) => (
            <FriendPreview key={index} data={friend} />
          ))}
        </aside>
        <main>
          <Link to="/new-post">
            <button className={styles.createPostBtn}>
              + Create a new post!
            </button>
          </Link>
          {allPosts.map((post, index) => (
            <Post key={index} data={post} />
          ))}
        </main>
        <aside>
          {messagesPreview.map((message, index) => (
            <MessagePreview key={index} data={message} />
          ))}
        </aside>
      </div>
    </section>
  );
};

export default Home;
