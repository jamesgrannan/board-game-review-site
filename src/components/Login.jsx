import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../contexts/user";
import { getProfileInfo } from "../utils";

const Login = () => {
  const { setUser } = useContext(userContext);
  const [logInUser, setLogInUser] = useState("");
  const [logInError, setLogInError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    getProfileInfo(logInUser)
      .then((res) => {
        setUser(logInUser);
        navigate("/games");
      })
      .catch((err) => {
        setLogInError("Username not found. Try again.");
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
    <div>
      <h2>Meeple Café</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter your username</label>
        <input
          name="username"
          id="username"
          type="text"
          required
          onChange={handleChange}
          value={logInUser}
        />
        <button type="submit">Log In</button>
      </form>
      <button onClick={handleGuest}>Or Log in as a guest</button>
      <p>{logInError}</p>
    </div>
  );
};

export default Login;
