import { useContext } from "react";
import { userContext } from "../contexts/user";
import Nav from "./Nav";
import Trending from "./Trending";
import GameList from "./GameList";

const Games = () => {
  const { user } = useContext(userContext);
  return (
    <div>
      <Nav />
      <Trending />
      <GameList />
    </div>
  );
};
export default Games;
