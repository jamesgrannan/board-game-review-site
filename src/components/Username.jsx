import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../contexts/user";
import { getProfileInfo } from "../utils";
import Nav from "./Nav";
import styles from "../css-modules/username.module.css";

const Username = () => {
  const { user } = useContext(userContext);
  const params = useParams();
  const [userPage, setUserPage] = useState({});

  useEffect(() => {
    getProfileInfo(params.username).then((userData) => {
      setUserPage(userData);
    });
  }, []);
  const { name, username, avatar_url } = userPage;
  return (
    <div>
      <Nav user={user} />
      <div className={styles.usernameGrid}>
        <img src={avatar_url} alt={`${username}'s profile-pic`}></img>
        <div className={styles.usernameDetails}>
          <h2>{username}</h2>
          <p>Name: {name}</p>
        </div>
      </div>
    </div>
  );
};

export default Username;
