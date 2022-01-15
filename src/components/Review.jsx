import { useContext, useEffect, useState } from "react";
import { userContext } from "../contexts/user";
import { getCategories, postReview } from "../utils";
import Nav from "./Nav";
import NewCategory from "./NewCategory";
import styles from "../css-modules/review.module.css";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const { user } = useContext(userContext);
  const [inputFields, setInputFields] = useState({
    title: "",
    designer: "",
    category: "",
    review_body: "",
  });
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ slug: "", description: "" });
  const [error, setError] = useState("");
  const [catError, setCatError] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    return setInputFields((currentInput) => {
      currentInput[event.target.name] = event.target.value;
      return { ...currentInput };
    });
  };
  const handleSubmit = (event) => {
    setError("");
    event.preventDefault();
    return postReview(inputFields, user)
      .then((res) => {
        navigate(`/reviews/${res.review.review_id}`);
      })
      .catch((err) => {
        setError(
          "Sorry, something went wrong and we couldn't post your review. Try again."
        );
      });
  };

  useEffect(() => {
    setCatError("");
    getCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        setCatError(
          "Sorry, category list won't load at the moment. Please try again later."
        );
      });
  }, []);

  return (
    <div>
      <Nav user={user} />
      <div className={styles.writeReview}>
        <h1>Write your own review</h1>
        <div className={styles.writeReviewBox}>
          <form onSubmit={handleSubmit} className={styles.reviewForm}>
            <span>
              <label htmlFor="title">Title: </label>
              <input
                name="title"
                id="title"
                type="text"
                required
                onChange={handleChange}
                value={inputFields.title}
                placeholder="Review title"
              />
            </span>
            <span>
              <label htmlFor="designer">Designer: </label>
              <input
                name="designer"
                id="designer"
                type="text"
                required
                onChange={handleChange}
                value={inputFields.designer}
                placeholder="Designer"
              />
            </span>
            <span>
              <label htmlFor="category">Category: </label>
              <select
                name="category"
                id="category"
                required
                onChange={handleChange}
                value={inputFields.category}
              >
                <option value="">--Please choose a category--</option>
                {categories.map((category) => {
                  return (
                    <option key={category.slug} value={category.slug}>
                      {category.slug}
                    </option>
                  );
                })}
              </select>
              <p>{catError}</p>
            </span>
            <span>
              <label htmlFor="review_body">Your Review: </label>
              <input
                name="review_body"
                id="review_body"
                type="textarea"
                required
                onChange={handleChange}
                value={inputFields.review_body}
                className={styles.reviewFormWrite}
                placeholder="Write your review here..."
              />
            </span>
            <button type="submit">Submit Review</button>
            <p>{error}</p>
          </form>
          <NewCategory
            newCategory={newCategory}
            setNewCategory={setNewCategory}
            setCategories={setCategories}
            setInputFields={setInputFields}
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
