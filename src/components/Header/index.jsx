import styles from  './Header.module.scss'

const Header = (props) => {
   const  name = props.name || 'App';
   const  links = props.links || [{link:"", label:"Links"}]
    return(
        <header  className={styles.header}>
            <h1>{name}</h1>
            <nav>
                <ul>
                {links.map((item, index) => ( 
                    <li >
                        <a href={item.link}>{item.label}</a>
                    </li>
                ))}
                </ul>
            </nav>
        </header>
    )
}

export default  Header;
