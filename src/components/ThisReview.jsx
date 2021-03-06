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
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = (event) => {
    return setInputReview((currentInput) => {
      currentInput[event.target.name] = event.target.value;
      return { ...currentInput };
    });
  };

  const handleSubmit = (event) => {
    setError("");
    event.preventDefault();
    const request_body = {
      title: inputReview.title,
      designer: game.designer,
      category: game.category,
      review_body: inputReview.review_body,
    };
    return postReview(request_body, user)
      .then((res) => {
        navigate(`/reviews/${res.review.review_id}`);
      })
      .catch((err) => {
        setError(
          "Sorry, something went wrong and we couldn't post your review. Try again."
        );
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.thisReviewForm}>
      <h3>Played this game before?</h3>
      <h3> Write your own Review:</h3>
      <div className={styles.writeReviewBox}>
        <span>
          <label htmlFor="title">Your own review title:</label>
          <input
            name="title"
            id="title"
            type="text"
            required
            onChange={handleChange}
            value={inputReview.title}
            placeholder="Your own review title"
          />
        </span>
        <span>
          <label htmlFor="review_body">
            Played this game? Write your Review here:
          </label>
          <textarea
            name="review_body"
            id="review_body"
            required
            onChange={handleChange}
            value={inputReview.review_body}
            className={styles.thisReviewFormWrite}
            placeholder="Write your Review here..."
          ></textarea>
        </span>
        <button type="submit">Submit Review</button>
      </div>
      <p>{error}</p>
      <hr />
    </form>
  );
};

export default ThisReview;
