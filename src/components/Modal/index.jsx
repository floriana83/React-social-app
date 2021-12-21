import styles from "./Modal.module.scss";

const Modal = props => {
    let result = "";

    if (props.value === "red"){
        result = "Post Deleted";
    } if (props.value === "cornflowerblue"){
        result = "Post Added"
    }
    return (
        <div className={styles.modal} style={{background: props.value}}>
            <p>{result}</p>
        </div>
    )
}


export default Modal;