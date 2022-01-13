import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../contexts/user";
import { postReview } from "../utils";
import styles from "../css-modules/thisreviewform.module.css";

const ThisReview = ({ game }) => {
  const { user } = useContext(userContext);
  const [inputReview, setInputReview] = useState({
    title: "",
    review_body: "",
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    return setInputReview((currentInput) => {
      currentInput[event.target.name] = event.target.value;
      return { ...currentInput };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const request_body = {
      title: inputReview.title,
      designer: game.designer,
      category: game.category,
      review_body: inputReview.review_body,
    };
    return postReview(request_body, user).then((res) => {
      navigate(`/reviews/${res.review.review_id}`);
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.thisReviewForm}>
      <h3>Played this game? Write your Review here:</h3>
      <span>
        <label htmlFor="title">Your own review title:</label>
        <input
          name="title"
          id="title"
          type="text"
          required
          onChange={handleChange}
          value={inputReview.title}
        />
      </span>
      <span>
        <label htmlFor="review_body">
          Played this game? Write your Review here:
        </label>
        <input
          name="review_body"
          id="review_body"
          type="text"
          required
          onChange={handleChange}
          value={inputReview.review_body}
          className={styles.thisReviewFormWrite}
        />
      </span>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ThisReview;
