import { useState } from "react";
import { patchComment } from "../utils";

const VotingComments = ({ comment }) => {
  const [currentVotes, setCurrentVotes] = useState(comment.votes);
  const [err, setErr] = useState(null);

  const handleClick = (value) => {
    setErr(null);
    patchComment(value, comment.comment_id).catch((err) => {
      setCurrentVotes((currentVotes) => currentVotes - 1);
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
      <p>Votes: {currentVotes}</p>
    </div>
  );
};

export default VotingComments;