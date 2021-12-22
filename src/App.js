import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import NewPost from "./pages/NewPost";
import Messages from "./pages/Messages";
import Friends from "./pages/Friends";
import Login from "./components/Login";

import Home from "./pages/Home";


function App() {

  return (
    <div>
      <Login />   
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
