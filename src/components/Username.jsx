import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userContext } from "../contexts/user";
import { getProfileInfo } from "../utils";
import Nav from "./Nav";
import styles from "../css-modules/username.module.css";

const Username = () => {
  const { user } = useContext(userContext);
  const params = useParams();
  const [userPage, setUserPage] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setError(null);
    getProfileInfo(params.username)
      .then((userData) => {
        setUserPage(userData);
      })
      .catch((err) => {
        if (err.response) {
          if (
            err.response.data.msg ===
            `No user found at username: ${params.username}`
          ) {
            navigate("/user_does_not_exist");
          }
        } else {
          setError(`Sorry, couldn't load ${params.username}'s user page`);
        }
      });
  }, []);
  const { name, username, avatar_url } = userPage;
  return (
    <div>
      <Nav user={user} />
      {error ? (
        <p>{error}</p>
      ) : (
        <div className={styles.usernameGrid}>
          <img src={avatar_url} alt={`${username}'s profile-pic`}></img>
          <div className={styles.usernameDetails}>
            <h2>{username}</h2>
            <p>Name: {name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Username;
