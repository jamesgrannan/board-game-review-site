import { useContext, useEffect, useState } from "react";
import { getProfileInfo } from "../utils";
import { Link } from "react-router-dom";
import { userContext } from "../contexts/user";
import styles from "../css-modules/nav.module.css";
import Hamburger from "./Hamburger";

const Nav = () => {
  const { user } = useContext(userContext);
  const [error, setError] = useState(null);
  const [profilePic, setProfilePic] = useState("");
  useEffect(() => {
    getProfileInfo(user)
      .then(({ avatar_url }) => {
        setProfilePic(avatar_url);
      })
      .catch((err) => {
        setError("Image couldn't load");
      });
  }, [user]);
  return (
    <nav>
      <p className={styles.logo}>Meeple Café</p>
      <Hamburger />
      <Link to={`/users/${user}`} className={styles.userInfo}>
        {error ? (
          <p>{error}</p>
        ) : (
          <img
            src={profilePic}
            alt={`${user}'s profile-pic`}
            className={styles.navImage}
          />
        )}
        <p>{user}</p>
      </Link>
    </nav>
  );
};
export default Nav;
