import { formatRelative } from 'date-fns';
import {it} from 'date-fns/locale'

const DataSet = (props) => {
   
        return (
            <>
                {formatRelative(new Date(props.relative), 
                new Date(), { addSuffix: true, locale: it })}
            </>
        );
    };

export {DataSet}