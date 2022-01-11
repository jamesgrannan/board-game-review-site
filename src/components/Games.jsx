import { useContext } from "react";
import { userContext } from "../contexts/user";
import Nav from "./Nav";
import Trending from "./Trending";

const Games = () => {
  const { user } = useContext(userContext);
  return (
    <div>
      <Nav />
      <Trending />
    </div>
  );
};
export default Games;
