import { useContext } from "react";
import { userContext } from "../contexts/user";
import Nav from "./Nav";
import Trending from "./Trending";
import GameList from "./GameList";
import styles from "../css-modules/main.module.css";

const Games = () => {
  const { user } = useContext(userContext);
  return (
    <div className={styles.gamePage}>
      <Nav />
      <Trending />
      <GameList />
    </div>
  );
};
export default Games;
