import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfileInfo } from "../utils";

const CommentCard = ({ comment }) => {
  const [profilePic, setProfilePic] = useState("");
  useEffect(() => {
    getProfileInfo(comment.author).then(({ avatar_url }) => {
      setProfilePic(avatar_url);
    });
  }, []);

  return (
    <div>
      <Link to={`/users/${comment.author}`}>
        <img src={profilePic} alt={`${comment.author}'s profile-pic`}></img>
        <p>{comment.author}</p>
      </Link>
      <p>{comment.body}</p>
      <button>Like</button>
      <button>Dislike</button>
      <p>Votes: {comment.votes}</p>
      {/* <Voting game={comment} /> */}
    </div>
  );
};

export default CommentCard;
