import { useContext, useEffect, useState } from "react";
import { getProfileInfo } from "../utils";
import { Link } from "react-router-dom";
import { userContext } from "../contexts/user";
import styles from "../css-modules/nav.module.css";

const Nav = () => {
  const { user } = useContext(userContext);
  const [profilePic, setProfilePic] = useState("");
  useEffect(() => {
    getProfileInfo(user).then(({ avatar_url }) => {
      setProfilePic(avatar_url);
    });
  }, [user]);
  return (
    <nav>
      <p>Meeple Café</p>
      <Link to="/games">
        <p>Games</p>
      </Link>
      <Link to="/review">
        <p>New Review</p>
      </Link>
      <Link to="/users">
        <p>Users</p>
      </Link>
      <Link to={`/users/${user}`} className={styles.userInfo}>
        <img
          src={profilePic}
          alt={`${user}'s profile-pic`}
          className={styles.navImage}
        />
        <p>{user}</p>
      </Link>
    </nav>
  );
};
export default Nav;
