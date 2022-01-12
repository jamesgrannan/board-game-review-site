import { deleteComment } from "../utils";

const DeleteComment = ({ id, setDeletedComment }) => {
  const handleOnClick = () => {
    deleteComment(id);
    setDeletedComment(true);
  };

  return <button onClick={handleOnClick}>Delete</button>;
};
export default DeleteComment;
