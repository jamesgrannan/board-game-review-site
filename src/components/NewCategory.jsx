import { getCategories, postCategory } from "../utils";
import styles from "../css-modules/review.module.css";

const NewCategory = ({
  newCategory,
  setNewCategory,
  setCategories,
  setInputFields,
}) => {
  const handleChange = (event) => {
    return setNewCategory((currentCategory) => {
      currentCategory[event.target.name] = event.target.value;
      return { ...currentCategory };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    return postCategory(newCategory)
      .then(() => {
        return getCategories().then((data) => {
          setCategories(data);
          return setInputFields((currentInput) => {
            currentInput.category = newCategory.slug;
            return { ...currentInput };
          });
        });
      })
      .catch((err) => console.log(err));
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
    </div>
  );
};
export default NewCategory;
