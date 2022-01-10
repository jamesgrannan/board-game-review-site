import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Meeple Café</h1>
      <h2>Discover</h2>
      <p>
        Unsure which new game to try out. The many reviews will have you spoilt
        for choice.
      </p>
      <h2>Review</h2>
      <p>
        Have your say! Write and share reviews on any games that you've played.
      </p>
      <h2>Interact</h2>
      <p>Get discussing! Comment and up/down vote on other people's reviews.</p>
      <Link to="/login">
        <button>Log In</button>
      </Link>
    </div>
  );
};

export default Home;
