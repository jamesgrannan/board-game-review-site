import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../contexts/user";
import { getProfileInfo } from "../utils";
import Nav from "./Nav";

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
      <img src={avatar_url} alt={`${username}'s profile-pic`}></img>
      <h2>{username}</h2>
      <p>Name: {name}</p>
    </div>
  );
};

export default Username;
