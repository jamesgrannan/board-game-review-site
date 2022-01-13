import { useEffect, useState } from "react";
import { getReviews } from "../utils";
import GameCard from "./GameCard";
import styles from "../css-modules/main.module.css";
import SortBy from "../components/SortBy";

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getReviews().then((res) => {
      setGames(res);
    });
  }, []);

  return (
    <div>
      <SortBy setGames={setGames} />
      <h3>Games</h3>
      <ul className={styles.lists}>
        {games.map((game) => {
          return (
            <li key={game.title}>
              <GameCard game={game} />
            </li>
          );
        })}
      </ul>
      <p>Page 1</p>
    </div>
  );
};
export default GameList;
