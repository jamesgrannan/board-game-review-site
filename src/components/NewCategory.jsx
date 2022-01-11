import { getCategories, postCategory } from "../utils";

const NewCategory = ({ newCategory, setNewCategory, setCategories }) => {
  const handleChange = (event) => {
    return setNewCategory((currentCategory) => {
      currentCategory[event.target.name] = event.target.value;
      return { ...currentCategory };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    return postCategory(newCategory).then((response) => {
      return getCategories().then((data) => {
        setCategories(data);
      });
    });
  };

  return (
    <div>
      <h3>Category not there? Create your own</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="slug">Category Name: </label>
        <input
          name="slug"
          id="slug"
          type="text"
          required
          onChange={handleChange}
          value={newCategory.slug}
        />
        <label htmlFor="newCategory">Description: </label>
        <input
          name="description"
          id="description"
          type="text"
          required
          onChange={handleChange}
          value={newCategory.description}
        />
        <button type="submit">Submit Category</button>
      </form>
    </div>
  );
};
export default NewCategory;
