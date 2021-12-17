import { useState, useEffect } from 'react';
import FriendPreview from '../../components/FriendPreview/';
import {MessagePreview} from '../../components/MessagePreview';
import styles from './Home.module.scss';
import { Post } from '../../components/Post';
import { http } from '../../libs/http';

const friends = [];

const messages = [];

const posts = [];

const Home = () => {
    const [friendsPreview, setFriendsPreview] = useState(friends);           // informazione che sarà monitorata dal componente React
    // equivale a => const friendsPreview = [];
    const [allPosts, setAllPosts] = useState(posts); 
    const [messagesPreview, setMessagesPreview] = useState(messages); 

    //useEffect si usa quando si vuole lavorare con gli eventi del componente.
    // ha due parametri: funzione ed evento, dove per evento si intende un array con le prop da osservare. 
    // con useEffect la prima volta che il componente viene lanciato viene triggerato
    
    useEffect(() => {
        http("/friends?_limit=4").then((data) => setFriendsPreview(data));
     
        http("/messages?_limit=4").then((data) => setMessagesPreview(data));

        http("/posts").then((data) => setAllPosts(data));
        
    }, []);
   

    return (
        <section className={styles.home}>
            <h3>Benvenuto utente!</h3>
            <div className={styles.grid}>
                <aside>
                    {friendsPreview.map((friend, index) => <FriendPreview key={index} data={friend} />)}
                </aside>
                <main>
                    {allPosts.map((post, index) => <Post key={index} data={post} />)}
                </main>
                <aside>
                    {messagesPreview.map((message, index) => <MessagePreview key={index} data={message} />)}
                </aside>
            </div>
        </section>
    );
};

export default Home;

//! RICORDA: UN COMPONENTE JSX DEVE RITORNARE SEMPRE UN SOLO ELEMENTO PARENTE

//* PROPS E STATI
// Le props dicono "questi sono dati che vengono dall'esterno del componente"
// Lo stato fa il contrario, indica che i dati sono interni al componente e per questo se li manipola lui
