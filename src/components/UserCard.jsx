import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfileInfo } from "../utils";
import styles from "../css-modules/userList.module.css";

const UserCard = ({ username }) => {
  const [profilePic, setProfilePic] = useState("");
  const [error, setError] = useState(null);
  useEffect(() => {
    setError(null);
    getProfileInfo(username)
      .then(({ avatar_url }) => {
        setProfilePic(avatar_url);
      })
      .catch((err) => {
        setError("Image couldn't load");
      });
  }, []);
  return (
    <div>
      <Link to={`/users/${username}`} className={styles.UserList}>
        {error ? (
          <p>{error}</p>
        ) : (
          <img src={`${profilePic}`} alt={`${username}'s pic`} />
        )}
        <p>{username}</p>
      </Link>
    </div>
  );
};

export default UserCard;
