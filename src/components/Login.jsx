import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../contexts/user";
import { signIn } from "../utils";

const Login = () => {
  const { setUser } = useContext(userContext);
  const [logInUser, setLogInUser] = useState("");
  const [logInError, setLogInError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(logInUser).then((result) => {
      if (result) {
        setUser(logInUser);
        navigate("/games");
      } else {
        setLogInError("Username not found. Try again.");
      }
    });
  };

  const handleChange = (event) => {
    setLogInUser(event.target.value);
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
      <Link to="/games">
        <button>Or Log in as a guest</button>
      </Link>
      <p>{logInError}</p>
    </div>
  );
};

export default Login;
