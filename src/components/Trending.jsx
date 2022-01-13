import { useEffect, useState } from "react";
import { getReviews } from "../utils";
import styles from "../css-modules/trending.module.css";
import { Link } from "react-router-dom";

const Trending = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getReviews("sort_by=votes&limit=6").then((res) => {
      setTrends(res);
    });
  }, []);

  return (
    <div>
      <h3>Trending posts</h3>
      <ul className={styles.trendingUl}>
        {trends.map((game) => {
          return (
            <Link to={`/reviews/${game.review_id}`}>
              <li className={styles.trendingLi}>
                <img
                  src={`${game.review_img_url}`}
                  alt={`${game.title}`}
                  className={styles.trendingImage}
                />
                <p className={styles.trendingP}>{game.title}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Trending;
