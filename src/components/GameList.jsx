import { useEffect, useState } from "react";
import { getReviews } from "../utils";
import GameCard from "./GameCard";

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getReviews().then((res) => {
      console.log(res);
      setGames(res);
    });
  }, []);

  return (
    <div>
      <h3>Sort By</h3>
      <ul>
        <li>category</li>
        <li>newest</li>
        <li>votes</li>
        <li>comments</li>
        <li>a-z</li>
      </ul>
      <h3>Games</h3>
      <ul>
        {games.map((game) => {
          return (
            <li>
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