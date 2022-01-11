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

//* SINTASSI CON USEREDUCER

// const initialState = {
//   formPostObj:
//   {
//       author: '',
//       text:'',
//       photo: '',
//       date: new Date().toISOString(),
//   },
//   isModalVisible: false
// };

// const formReducer = (state, action) => {
//   switch (action.type) {
//       case 'form':
//           return { ...state, formPostObj: { ...state.formPostObj, [action.value]: action.payload } };
//       case 'modal':
//           return { ...state, isModalVisible: action.payload };
//       default:
//           return state;
//   };
// };

// const CreatePost = () => {
//   const [state, dispatch] = useReducer(formReducer, initialState);

//   const handleSendBtn = (e) => {
//       e.preventDefault();
//       httpPost('/posts', state.formPostObj);
//       dispatch({ type: 'modal', payload: !state.isModalVisible })
//       setTimeout(() => {
//           dispatch({ type: 'modal' })
//         }, 2000);

//       // setTimeout(() => {
//       //     isModalVisible(false);
//       // }, 2000);          <== chiedere come aggiungere settimeout
//   }; 

//   useEffect(() => {
//       dispatch({ type: 'modal', payload: false });
//   }, [state.formPostObj]);

//   return (
//       <div className={styles.createPost}>
//           {/* {isModalVisible &&
//               <Modal bgColor={'#3498db'}
//                   text={'Your post has been published'} />} */}
//           <form>
//               <div className={styles.__author}>
//                   <input
//                       value={state.formPostObj.author}
//                       onChange={(e) => dispatch({ type: 'form', value: 'author', payload: e.target.value })}
//                       name='author'
//                       id='author'
//                       type='text'
//                       placeholder='Author'
//                       required />

//                   <input
//                       value={state.formPostObj.photo}
//                       onChange={(e) => dispatch({ type: 'form', value: 'photo', payload: e.target.value })}
//                       name='photo'
//                       id='photo'
//                       type='photo'
//                       placeholder='photo URL' />

//                   <button
//                       type='submit'
//                       onClick={handleSendBtn}>
//                       Send
//                   </button>
//                   {state.isModalVisible &&
//                       <Modal
//                           bgColor={'#3498db'}
//                           text={'Your post has been published'}
//                       />}

//               </div>

//               <textarea
//                   value={state.formPostObj.text}
//                   onChange={(e) => dispatch({ type: 'form', value: 'text', payload: e.target.value })}
//                   name='text'
//                   id='text'
//                   type='text'
//                   cols='30'
//                   rows='10'
//                   placeholder='text'
//                   required>
//               </textarea>
//           </form>
//       </div>
//   )
// };
export default CreatePost;

