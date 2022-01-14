import { Link } from "react-router-dom";
import styles from "../css-modules/home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Meeple Café</h1>
      <div className={styles.homeBox}>
        <h2>Discover</h2>
        <p>
          Unsure which new game to try out. The many reviews will have you
          spoilt for choice.
        </p>
      </div>
      <div className={styles.homeBox}>
        <h2>Review</h2>
        <p>
          Have your say! Write and share reviews on any games that you've
          played.
        </p>
      </div>
      <div className={styles.homeBox}>
        <h2>Interact</h2>
        <p>
          Get discussing! Comment and up/down vote on other people's reviews.
        </p>
      </div>
      <Link to="/login">
        <button>Log In</button>
      </Link>
    </div>
  );
};

export default Home;
