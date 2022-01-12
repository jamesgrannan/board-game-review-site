import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../contexts/user";
import { postReview } from "../utils";

const ThisReview = ({ game }) => {
  const { user } = useContext(userContext);
  const [inputReview, setInputReview] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => setInputReview(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const request_body = {
      title: game.title,
      designer: game.designer,
      category: game.category,
      review_body: inputReview,
    };
    return postReview(request_body, user).then((res) => {
      navigate(`/reviews/${res.review.review_id}`);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="review_body">
        Played this game? Write your Review here:
      </label>
      <input
        name="review_body"
        id="review_body"
        type="text"
        required
        onChange={handleChange}
        value={inputReview}
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ThisReview;
