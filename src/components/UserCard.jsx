import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfileInfo } from "../utils";
import styles from "../css-modules/userList.module.css";

const UserCard = ({ username }) => {
  const [profilePic, setProfilePic] = useState("");
  useEffect(() => {
    getProfileInfo(username).then(({ avatar_url }) => {
      setProfilePic(avatar_url);
    });
  }, []);
  return (
    <div>
      <Link to={`/users/${username}`} className={styles.UserList}>
        <img src={`${profilePic}`} alt={`${username}'s pic`} />
        <p>{username}</p>
      </Link>
    </div>
  );
};

export default UserCard;
