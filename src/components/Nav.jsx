import { useEffect, useState } from "react";
import { getProfileInfo } from "../utils";
import { Link } from "react-router-dom";

const Nav = ({ user }) => {
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
      <Link to={`/users/${user}`}>
        <img src={profilePic} alt={`${user}'s profile-pic`}></img>
        <p>{user}</p>
      </Link>
    </nav>
  );
};
export default Nav;
