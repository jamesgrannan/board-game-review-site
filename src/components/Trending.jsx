import { useEffect, useState } from "react";
import { getReviews } from "../utils";

const Trending = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getReviews("?sort_by=votes&limit=6").then((res) => {
      console.log(res);
      setTrends(res);
    });
  }, []);

  return (
    <div>
      <h3>Trending posts</h3>
      <ul>
        {trends.map((game) => {
          return (
            <li>
              <img src={`${game.review_img_url}`} alt={`${game.title}`} />
              <p>{game.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Trending;
