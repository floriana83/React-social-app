import {Link, useMatch, useResolvedPath} from "react-router-dom"
// import {NavLink} from "react-router-dom" 
import styles from  './Header.module.scss'


const Header = (props) => {
   const  name = props.name || 'App';
   const  links = props.links || [{link:"", label:"Links"}];
   
// //   usando NavLink

//     return(
//         <header  className={styles.header}>
//             <h1>{name}</h1>
//             <nav>
//                 <ul>
//                 {links.map((item, index) => ( 
//                     <li key={index}>
//                     <NavLink className = {({isActive})=> isActive ? styles.active :""} to={item.link}>{item.label}</NavLink>
//                         {/* <Link className={CheckActive(item.link)} to={item.link}>{item.label}</Link> */}
//                     </li>
//                 ))}
//                 </ul>
//             </nav>
//         </header>
//     )
// }

const CheckActive = (link) => {
    const resolved = useResolvedPath(link);
    const match = useMatch({ path: resolved.pathname, end: true });

    return match ? styles.active : "";
  };

  return (
    <header className={styles.header}>
      <h1 style={{ fontFamily: props.font }}>{name}</h1>
      <nav>
        <ul>
          {links.map((item, index) => (
            <li key={index}>
              <Link className={CheckActive(item.link)} to={item.link}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default  Header;
