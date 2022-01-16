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
  const [error, setError] = useState(null);
  const [currentVotes, setCurrentVotes] = useState(game.votes);
  useEffect(() => {
    setError(null);
    getProfileInfo(game.owner)
      .then(({ avatar_url }) => {
        setProfilePic(avatar_url);
      })
      .catch((err) => {
        setError("Image couldn't load");
      });
  }, [game]);

  return (
    <div>
      <div>
        <Link to={`/reviews/${game.review_id}`}>
          <h3 className={styles.gameTitle}>{game.title}</h3>
        </Link>
        <div className={styles.reviewInfo}>
          <Link to={`/reviews/${game.review_id}`}>
            {error ? (
              <p>{error}</p>
            ) : (
              <img
                src={game.review_img_url}
                alt={game.title}
                className={styles.reviewImage}
              />
            )}
          </Link>
          <div>
            <Link to={`/users/${game.owner}`} className={styles.profile}>
              <img
                src={profilePic}
                alt={`${game.owner}'s profile-pic`}
                className={styles.profileImage}
              />
              <p>{game.owner}</p>
            </Link>
            <span className={styles.gameCardSpan}>
              <p>
                <i class="fas fa-comments"></i> {game.comment_count}
              </p>{" "}
              <p>
                <i class="fas fa-poll"></i> {currentVotes}
              </p>
            </span>
            <span className={styles.gameCardSpan}>
              <Voting
                game={game}
                setCurrentVotes={setCurrentVotes}
                currentVotes={currentVotes}
              />
              {user === game.owner ? (
                <DeleteReview id={game.review_id} setDeleted={setDeleted} />
              ) : null}
            </span>
          </div>
        </div>
      </div>
      <p className={styles.cardReviewBody}>{game.review_body}</p>
    </div>
  );
};

export default GameCard2;
