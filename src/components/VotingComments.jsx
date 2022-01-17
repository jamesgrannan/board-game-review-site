import { useState } from "react";
import { patchComment } from "../utils";

const VotingComments = ({ comment, currentVotes, setCurrentVotes }) => {
  const [err, setErr] = useState("");

  const handleClick = (value) => {
    setErr(null);
    patchComment(value, comment.comment_id).catch((err) => {
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

export default VotingComments;
