import { useEffect, useState } from "react";
import { patchComment, patchReview } from "../utils";

const Voting = ({ game, setCurrentVotes, currentVotes }) => {
  const [err, setErr] = useState("");

  useEffect(() => {
    setCurrentVotes(game.votes);
  }, [game.votes]);

  const handleClick = (value) => {
    setErr(null);

    patchReview(value, game.review_id).catch((err) => {
      setCurrentVotes((currentVotes) => currentVotes - value);
      setErr("Something went wrong, please try again.");
    });
    setCurrentVotes(currentVotes + value);
  };

  return (
    <div>
      <button
        onClick={() => {
          handleClick(1);
        }}
      >
        <i class="fas fa-heart"></i>
      </button>
      <button
        onClick={() => {
          handleClick(-1);
        }}
      >
        <i class="fas fa-heart-broken"></i>
      </button>
      <p>{err}</p>
    </div>
  );
};

export default Voting;
