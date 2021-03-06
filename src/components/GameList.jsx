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
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    getReviews(query, page)
      .then((res) => {
        setGames(res.reviews);
        setCount(res.total_count);
      })
      .catch((err) => {
        setError("Sorry, couldn't load page results");
      });
  }, [query, page]);

  return error ? (
    <p>{error}</p>
  ) : (
    <div className={styles.gamesList}>
      <SortBy setGames={setGames} setCount={setCount} setQuery={setQuery} />
      <h3>Games</h3>
      {count === 1 ? <p>1 result</p> : <p>{count} results</p>}
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
