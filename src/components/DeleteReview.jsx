import { useNavigate } from "react-router-dom";
import { deleteReview } from "../utils";

const DeleteReview = ({ id, setDeleted }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    deleteReview(id);
    navigate("/games");
    setDeleted(true);
  };

  return <button onClick={handleOnClick}>Delete</button>;
};
export default DeleteReview;
