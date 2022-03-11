import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../contexts/user";
import { getProfileInfo } from "../utils";
import styles from "../css-modules/login.module.css";

const Login = () => {
  const { setUser } = useContext(userContext);
  const [logInUser, setLogInUser] = useState("");
  const [logInError, setLogInError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLogInError("");
    getProfileInfo(logInUser)
      .then((res) => {
        setUser(logInUser);
        navigate("/games");
      })
      .catch((err) => {
        setLogInError(
          "Sorry, we couldn't fetch your log-in data at the moment. Try again later."
        );
        if (
          err.response.data.msg === `No user found at username: ${logInUser}`
        ) {
          setLogInUser("");
          setLogInError("Username not found. Try again.");
        }
      });
  };

  const handleChange = (event) => {
    setLogInUser(event.target.value);
  };

  const handleGuest = () => {
    setLogInUser("jessjelly");
    navigate("/games");
  };

  return (
    <div className={styles.login}>
      <h1>Meeple Café</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Enter your username</label>

          <input
            name="username"
            id="username"
            type="text"
            required
            onChange={handleChange}
            value={logInUser}
            className="fa"
            placeholder="&#xF007; Username"
          />

          <button type="submit" className={styles.loginButton}>
            Log In
          </button>
        </form>
      </div>
      <button onClick={handleGuest} className={styles.guest}>
        Or Log in as a guest
      </button>
      <p>{logInError}</p>
    </div>
  );
};

export default Login;
