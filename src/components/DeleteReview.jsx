import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteReview } from "../utils";

const DeleteReview = ({ id, setDeleted }) => {
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleOnClick = () => {
    setError(null);
    deleteReview(id)
      .then((res) => {
        setDeleted(true);
        navigate("/games");
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
export default DeleteReview;
