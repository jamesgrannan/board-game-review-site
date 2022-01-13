import { useState } from "react";
import { deleteComment } from "../utils";

const DeleteComment = ({ id, setDeletedComment }) => {
  const [error, setError] = useState("");
  const handleOnClick = () => {
    setError(null);
    deleteComment(id)
      .then((res) => {
        setDeletedComment(true);
      })
      .catch((err) => {
        setError("Please try again");
      });
  };

  return (
    <>
      <button onClick={handleOnClick}>Delete</button>
      <p>{error}</p>
    </>
  );
};
export default DeleteComment;
