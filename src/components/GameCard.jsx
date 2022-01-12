import { useState } from "react";
import GameCard2 from "./GameCard2";

const GameCard = ({ game }) => {
  const [deleted, setDeleted] = useState(false);

  return deleted ? (
    <h3>Review deleted</h3>
  ) : (
    <GameCard2 game={game} setDeleted={setDeleted} />
  );
};

export default GameCard;
