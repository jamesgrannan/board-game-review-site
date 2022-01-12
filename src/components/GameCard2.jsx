import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfileInfo } from "../utils";
import Voting from "./Voting";
import styles from "../css-modules/main.module.css";
import DeleteReview from "../components/DeleteReview";
import { userContext } from "../contexts/user";

const GameCard2 = ({ game, setDeleted }) => {
  const { user } = useContext(userContext);
  const [profilePic, setProfilePic] = useState("");
  useEffect(() => {
    getProfileInfo(game.owner).then(({ avatar_url }) => {
      setProfilePic(avatar_url);
    });
  }, [game]);

  return (
    <div>
      <div className={styles.wrapper}>
        <Link
          to={`/reviews/${game.review_id}`}
          className={styles.reviewImageGrid}
        >
          <img
            src={game.review_img_url}
            alt={game.title}
            className={styles.reviewImage}
          />
        </Link>
        <Link to={`/reviews/${game.review_id}`}>
          <h3 className={styles.gameTitle}>{game.title}</h3>
        </Link>
        <Link to={`/users/${game.owner}`} className={styles.profile}>
          <img
            src={profilePic}
            alt={`${game.owner}'s profile-pic`}
            className={styles.profileImage}
          />
          <p>{game.owner}</p>
        </Link>
      </div>
      <p>{game.review_body}</p>
      {user === game.owner ? (
        <DeleteReview id={game.review_id} setDeleted={setDeleted} />
      ) : null}
      <Voting game={game} />
      <p>Comments: {game.comment_count}</p>
    </div>
  );
};

export default GameCard2;
