import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfileInfo } from "../utils";
import styles from "../css-modules/comments.module.css";
import VotingComments from "./VotingComments";
import { userContext } from "../contexts/user";
import DeleteComment from "./DeleteComment";

const CommentCard2 = ({ comment, setDeletedComment }) => {
  const { user } = useContext(userContext);
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
        {user === comment.author ? (
          <DeleteComment
            id={comment.comment_id}
            setDeletedComment={setDeletedComment}
          />
        ) : null}
        <VotingComments comment={comment} />
      </div>
    </div>
  );
};

export default CommentCard2;
