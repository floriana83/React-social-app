
import { useReducer } from "react";
import Header from "./../Header";

// import {styles} from "./Login.module.scss";

const Login = (props) => {
    const username = props.username || "user";
    const password = props.password || "******";

    const INIT_STATE = {
        name: "Feisbrut",
        nav: [
          { link: "/", label: "Home" },
          { link: "/messages", label: "Messages" },
          { link: "/friends", label: "Friends" },
        ],
        friendsPreview: [],
      };

    const reducer = (state, action) => {
        switch (action.type) {
          case "change-name":
            return { ...state, name: `Ciao ${username.input}` };
          default:
            return state;
        }
      };


    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    return(
        <div>
            <Header name={state.name} links={state.nav} />
            <form>
                <label>Username: </label>
                <input className={props.username} type="text">
                </input>
                <label>password: </label>
                <input type="password">
                </input>
                <button type="button" onClick={() => dispatch({ type: "change-name" })}>
                    Cambia nome
                </button>
            </form>

            
        </div>
    )
};

export default Login;

