import { useEffect, useState } from "react";
import { getCategories, getReviews } from "../utils";

const SortBy = ({ setGames }) => {
  const [sorting, setSorting] = useState({ category: "", sort: "" });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  const handleCategoryChange = (event) => {
    return setSorting((currentInput) => {
      currentInput.category = event.target.value;
      return { ...currentInput };
    });
  };

  const handleChange = (event) => {
    return setSorting((currentInput) => {
      currentInput.sort = event.target.value;
      return { ...currentInput };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { category, sort } = sorting;
    let queryStr = "";
    if (category.length > 0 && sort.length > 0) {
      queryStr += `category=${category}&${sort}`;
    } else if (category.length > 0) {
      queryStr += "category=" + category;
    } else if (sort.length > 0) {
      queryStr += sort;
    }
    getReviews(queryStr)
      .then((res) => {
        setGames(res);
      })
      .catch((err) => console.dir(err));
  };

  return (
    <div>
      <h3>Sort By</h3>
      <form onSubmit={onSubmit}>
        <select
          name="category"
          id="category"
          onChange={handleCategoryChange}
          value={sorting.categories}
        >
          <option value="" disabled selected>
            --Categories--
          </option>
          <option value="">All</option>
          {categories.map((category) => {
            return (
              <option key={category.slug} value={category.slug}>
                {category.slug}
              </option>
            );
          })}
        </select>

        <select
          name="popular"
          id="popular"
          placeholder="category"
          onChange={handleChange}
          value={sorting.sort}
        >
          <option value="" disabled selected>
            --Popular--
          </option>
          <option value="">Any Popularity</option>
          <option value="sort_by=votes&order=DESC">Most Votes</option>
          <option value="sort_by=votes">Least Votes</option>
          <option value="sort_by=comment_count&order=DESC">
            Most Comments
          </option>
          <option value="sort_by=comment_count">Least Comments</option>
        </select>

        <select
          name="other"
          id="other"
          placeholder="other"
          onChange={handleChange}
          value={sorting.sort}
        >
          <option value="" disabled selected>
            --Other--
          </option>
          <option value="">Newest</option>
          <option value="sort_by=title">A-Z by Title</option>
          <option value="sort_by=title&order=DESC">Z-A by Title</option>
          <option value="sort_by=owner">A-Z by Reviewer</option>
          <option value="sort_by=owner&order=DESC">Z-A by Reviewer</option>
        </select>
        <button type="submit">Sort</button>
      </form>
    </div>
  );
};

export default SortBy;
