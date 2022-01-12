import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfileInfo } from "../utils";
import styles from "../css-modules/comments.module.css";

const CommentCard = ({ comment }) => {
  const [profilePic, setProfilePic] = useState("");
  useEffect(() => {
    getProfileInfo(comment.author).then(({ avatar_url }) => {
      setProfilePic(avatar_url);
    });
  }, []);

  return (
    <div className={styles.commentGrid}>
      <Link
        to={`/users/${comment.author}`}
        className={styles.commentProfilePic}
      >
        <img src={profilePic} alt={`${comment.author}'s profile-pic`}></img>
      </Link>
      <div className={styles.commentDetails}>
        <Link to={`/users/${comment.author}`}>
          <p>{comment.author}</p>
        </Link>

        <p>{comment.body}</p>
        <button>Like</button>
        <button>Dislike</button>
        <p>Votes: {comment.votes}</p>
        {/* <Voting game={comment} /> */}
      </div>
    </div>
  );
};

export default CommentCard;
