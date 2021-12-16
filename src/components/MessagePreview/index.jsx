import styles from "./MessagePreview.module.scss";
import { formatDistance } from 'date-fns';
import {it} from 'date-fns/locale'

const MessagePreview = (props) => {
    const data = props.data || {
        text: 'lorem ipsum', date: new Date(), sender: 'user',
    };


    return (
        <div className={styles.message}>
            <h5>{data.sender}</h5>
            <p>
            {formatDistance(new Date(data.date), new Date(), { 
                addSuffix: true, 
                locale: it,
            })}            </p>
            <p>{data.text}</p>
        </div>
    );
};

export { MessagePreview };