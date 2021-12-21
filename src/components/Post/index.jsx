
import styles from './Post.module.scss';
import {DataSet} from '../DataSet/dataSet.js'
import {httpDELETE} from "../../libs/http"
import Modal from '../Modal'
import {useState} from "react";

const Post = (props) => {
    const data = props.data || {
        author: 'user',
        text: 'text',
        date: new Date(),
        photo: 'https://images.unsplash.com/photo-1511149672083-577ee63de3dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80'
    };
    const [isModalShown, setModalShown] = useState(false);

    const handleDeletePost = () => {
        httpDELETE(`/posts/${props.data.id}`).then(() => {});
        // alert(`Post by ${props.data.author} was deleted`);
        setModalShown(!isModalShown);
        window.location.href = "/";
      };

    return (
        <article className={styles.post}>
            <button onClick={handleDeletePost} className={styles.deleteBtn}>X</button>
            {isModalShown && <Modal value="red"/>}
            <h3>{data.author}</h3>
            <p>
                {/* <small><DataSet relative={data.date}/></small> */}
                <small>{data.date ? <DataSet relative={data.date}/> : <></>}</small>
            </p>
        
            <p>{data.text}</p>

            {data.photo ? <img src={data.photo} alt={data.author} /> : <></>}
        </article>
    );
};

export { Post };