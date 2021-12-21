import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NewPost from "./pages/NewPost";
import Messages from "./pages/Messages";
import Friends from "./pages/Friends";

import Home from "./pages/Home";

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
      return { ...state, name: "Feisbell" };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  return (
    <div>
      <Header name={state.name} links={state.nav} />

      <button onClick={() => dispatch({ type: "change-name" })}>
        Cambia nome
      </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
