import { useEffect, useState } from "react";
import { getProfilePic } from "../utils";

const Nav = ({ user }) => {
  const [profilePic, setProfilePic] = useState("");
  useEffect(() => {
    getProfilePic(user).then((url) => {
      setProfilePic(url);
    });
  }, [user]);
  return (
    <nav>
      <p>Meeple Café</p>
      <p>Games</p>
      <p>New Review</p>
      <img src={profilePic} alt={`${user}'s profile picture`}></img>
      <p>{user}</p>
    </nav>
  );
};
export default Nav;
