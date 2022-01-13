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
  const navigate = useNavigate();
  const handleChange = (event) => {
    return setInputFields((currentInput) => {
      currentInput[event.target.name] = event.target.value;
      return { ...currentInput };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    return postReview(inputFields, user).then((res) => {
      navigate(`/reviews/${res.review.review_id}`);
    });
  };

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <div>
      <Nav user={user} />
      <h2>Write your own review</h2>
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
              return <option value={category.slug}>{category.slug}</option>;
            })}
          </select>
        </span>
        <span>
          <label htmlFor="review_body">Your Review: </label>
          <input
            name="review_body"
            id="review_body"
            type="text"
            required
            onChange={handleChange}
            value={inputFields.review_body}
            className={styles.reviewFormWrite}
          />
        </span>
        <button type="submit">Submit Review</button>
      </form>
      <NewCategory
        newCategory={newCategory}
        setNewCategory={setNewCategory}
        setCategories={setCategories}
        setInputFields={setInputFields}
      />
    </div>
  );
};

export default Review;
