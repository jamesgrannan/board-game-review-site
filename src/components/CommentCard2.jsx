import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProfileInfo } from "../utils";
import styles from "../css-modules/comments.module.css";
import VotingComments from "./VotingComments";
import { userContext } from "../contexts/user";
import DeleteComment from "./DeleteComment";

const CommentCard2 = ({ comment, setDeletedComment }) => {
  const { user } = useContext(userContext);
  const [profilePic, setProfilePic] = useState("");
  const [error, setError] = useState(null);
  const [currentVotes, setCurrentVotes] = useState(comment.votes);
  useEffect(() => {
    setError(null);
    getProfileInfo(comment.author)
      .then(({ avatar_url }) => {
        setProfilePic(avatar_url);
      })
      .catch((err) => {
        setError("Image couldn't load");
      });
  }, []);

  return (
    <>
      <div className={styles.commentGrid}>
        <Link
          to={`/users/${comment.author}`}
          className={styles.commentProfilePic}
        >
          {error ? (
            <p>{error}</p>
          ) : (
            <img src={profilePic} alt={`${comment.author}'s profile-pic`} />
          )}
        </Link>
        <div className={styles.commentDetails}>
          <span className={styles.profiletext}>
            <Link to={`/users/${comment.author}`}>
              <p>{comment.author}</p>
            </Link>

            <p>
              <i class="fas fa-poll"></i> {currentVotes}
            </p>
          </span>
          <span>
            <VotingComments
              comment={comment}
              currentVotes={currentVotes}
              setCurrentVotes={setCurrentVotes}
            />
            {user === comment.author ? (
              <DeleteComment
                id={comment.comment_id}
                setDeletedComment={setDeletedComment}
              />
            ) : null}
          </span>
        </div>
      </div>
      <p className={styles.commentBody}>{comment.body}</p>{" "}
    </>
  );
};

export default CommentCard2;
