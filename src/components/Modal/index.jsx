// import styles from "./Modal.module.scss";

// const Modal = props => {
//     let result = "";

//     if (props.value === "red"){
//         result = "Post Deleted";
//     } if (props.value === "cornflowerblue"){
//         result = "Post Added"
//     }
//     return (
//         <div className={styles.modal} style={{background: props.value}}>
//             <p>{result}</p>
//         </div>
//     )
// }


// export default Modal;

import styles from "./Modal.module.scss";

const Modal = ({ bgColor, text }) => {
  return (
    <div className={styles.Modal} style={{ background: `${bgColor}` }}>
      <p>{text}</p>
    </div>
  );
};

export default Modal;
