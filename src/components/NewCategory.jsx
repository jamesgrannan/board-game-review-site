import { getCategories, postCategory } from "../utils";
import styles from "../css-modules/review.module.css";
import { useState } from "react";

const NewCategory = ({
  newCategory,
  setNewCategory,
  setCategories,
  setInputFields,
}) => {
  const [error, setError] = useState("");
  const handleChange = (event) => {
    return setNewCategory((currentCategory) => {
      currentCategory[event.target.name] = event.target.value;
      return { ...currentCategory };
    });
  };
  const handleSubmit = (event) => {
    setError("");
    event.preventDefault();
    return postCategory(newCategory)
      .then(() => {
        return getCategories()
          .then((data) => {
            setCategories(data);
            return setInputFields((currentInput) => {
              currentInput.category = newCategory.slug;
              return { ...currentInput };
            });
          })
          .catch((err) => {
            setError(
              "Sorry, category list can't update at the moment. Please try again later."
            );
          });
      })
      .catch((err) => {
        setError(
          "Sorry, we couldn't add your category at this time. Please try again later."
        );
        if (err.response) {
          setError(err.response.data.msg);
          setNewCategory({ slug: "", description: "" });
        }
      });
  };
  return (
    <div>
      <h3>Category not there? Create your own</h3>
      <form onSubmit={handleSubmit} className={styles.reviewForm}>
        <span>
          <label htmlFor="slug">Category Name: </label>
          <input
            name="slug"
            id="slug"
            type="text"
            required
            onChange={handleChange}
            value={newCategory.slug}
          />
        </span>
        <span>
          <label htmlFor="newCategory">Description: </label>
          <input
            name="description"
            id="description"
            type="text"
            required
            onChange={handleChange}
            value={newCategory.description}
          />
        </span>
        <button type="submit">Submit Category</button>
      </form>
      <p>{error}</p>
    </div>
  );
};
export default NewCategory;
