import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfileInfo } from "../utils";
import Voting from "./Voting";

const GameCard = ({ game }) => {
  const [profilePic, setProfilePic] = useState("");
  useEffect(() => {
    console.log(game.owner);
    getProfileInfo(game.owner).then(({ avatar_url }) => {
      setProfilePic(avatar_url);
    });
  }, []);

  return (
    <div>
      <Link to={`/reviews/${game.review_id}`}>
        <img src={game.review_img_url} alt={game.title} />
        <h3>{game.title}</h3>
      </Link>
      <Link to={`/users/${game.owner}`}>
        <img src={profilePic} alt={`${game.owner}'s profile-pic`}></img>
        <p>{game.owner}</p>
      </Link>
      <p>{game.review_body}</p>
      <button>Like</button>
      <button>Dislike</button>
      <p>Votes: {game.votes}</p>
      {/* <Voting game={game} /> */}
      <p>Comments: {game.comment_count}</p>
    </div>
  );
};

export default GameCard;
