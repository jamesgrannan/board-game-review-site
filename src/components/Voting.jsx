import { useEffect, useState } from "react";
import { patchComment, patchReview } from "../utils";

const Voting = ({ game }) => {
  const [currentVotes, setCurrentVotes] = useState(game.votes);
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
        Like
      </button>
      <button
        onClick={() => {
          handleClick(-1);
        }}
      >
        Dislike
      </button>
      <p>{err}</p>
      <p>Votes: {currentVotes}</p>
    </div>
  );
};

export default Voting;
