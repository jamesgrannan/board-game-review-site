import { useEffect, useState } from "react";
import { getReviews } from "../utils";
import GameCard from "./GameCard";
import styles from "../css-modules/main.module.css";
import SortBy from "../components/SortBy";
import Pagination from "./Pagination";

const GameList = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getReviews(query, page).then((res) => {
      console.log(page);
      setGames(res.reviews);
      setCount(res.total_count);
    });
  }, [query, page]);

  return (
    <div>
      <SortBy setGames={setGames} setCount={setCount} setQuery={setQuery} />
      <h3>Games</h3>
      <p>{count} results</p>
      <ul className={styles.lists}>
        {games.map((game) => {
          return (
            <li key={game.title}>
              <GameCard game={game} />
            </li>
          );
        })}
      </ul>
      <Pagination setPage={setPage} page={page} count={count} />
    </div>
  );
};
export default GameList;
