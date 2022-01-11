import { useState, useEffect } from "react";
import styles from "./Login.module.scss";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      userName,
      password,
    });
  };

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <form className={styles.Login}>
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="Username"
        required
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        required
      />
      <input onClick={handleSubmit} type="submit" value="Login" />
    </form>
  );
};

export default Login;
