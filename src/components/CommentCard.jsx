import { useState } from "react";
import CommentCard2 from "./CommentCard2";

const CommentCard = ({ comment }) => {
  const [deleted, setDeletedComment] = useState(false);

  return deleted ? (
    <h3>Comment deleted</h3>
  ) : (
    <CommentCard2 comment={comment} setDeletedComment={setDeletedComment} />
  );
};

export default CommentCard;
