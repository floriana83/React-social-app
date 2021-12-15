import { useState } from 'react';
import FriendPreview from '../../components/FriendPreview';
import {MessagePreview} from '../../components/MessagePreview';
import styles from './Home.module.scss';
import { Post } from '../../components/Post';

const friends = [
    {name: "Chandler", photo:"http://randomuser.me/api/portraits/lego/5.jpg"},
    {name: "Pippo", photo:"http://randomuser.me/api/portraits/lego/7.jpg"},
    {name: "Cortana", photo:"http://randomuser.me/api/portraits/lego/8.jpg"},
];

const messages = [
    {text: 'ciao ragazzi!', date: new Date(), sender: 'Eliana'},
    {text: 'che facciamo stasera?', date: new Date(), sender: 'Peppone'},
    {text: 'pizza e giochi da noi che dite?', date: new Date(), sender: 'Ambra'},
    {text: 'ho preso un gioco nuovo, lo proviamo?', date: new Date(), sender: 'Salvo'},
    {text: 'a che ora ci vediamo?', date: new Date(), sender: 'Albi'},
    {text: 'Alle 20:00 da noi', date: new Date(), sender: 'Ambra'},
    {text: 'Ci sto raga! A più tardi!', date: new Date(), sender: 'Flò'},
];

const posts = [
    {
        author:"User",
        text:"In cerca di ispirazione",
        date:new Date(), 
        photo:"https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
        author:"User",
        text:"sto imparando react",
        date:new Date(), 
    }
];

const Home = () => {
    // const [friendsPreview, setFriendsPreview] = useState(friends);           // informazione che sarà monitorata dal componente React
    // // equivale a => const friendsPreview = [];
    // const [allPosts, setAllPosts] = useState(posts); 
    // const [messagesPreview, setMessagesPreview] = useState(messages); 

    const [friendsPreview] = useState(friends);           // informazione che sarà monitorata dal componente React
    // equivale a => const friendsPreview = [];
    const [allPosts] = useState(posts); 
    const [messagesPreview] = useState(messages); 

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
