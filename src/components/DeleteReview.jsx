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
      <button onClick={handleOnClick}>Delete</button>
      <p>{error}</p>
    </>
  );
};
export default DeleteReview;
