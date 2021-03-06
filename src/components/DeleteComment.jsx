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
      <button onClick={handleOnClick}>
        <i class="fas fa-trash-alt"></i>
      </button>
      <p>{error}</p>
    </>
  );
};
export default DeleteComment;
