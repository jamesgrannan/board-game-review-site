import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <p>Sorry, I don't know what page you are looking for</p>
      <Link to="/">
        <button>Let's go back to the site</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
