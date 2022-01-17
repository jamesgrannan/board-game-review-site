import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getAReview } from "../utils";
import Nav from "./Nav";
import GameCard from "./GameCard";
import ThisReview from "./ThisReview";
import WriteComment from "./WriteComment";
import CommentList from "./CommentList";
import styles from "../css-modules/individual.module.css";

const IndividualGame = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [reviewPage, setReviewPage] = useState({});

  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    getAReview(params.review_id)
      .then((userData) => {
        setReviewPage(userData);
      })
      .catch((err) => {
        if (err.response) {
          if (
            err.response.data.msg ===
            `No review found at review_id: ${params.review_id}`
          ) {
            navigate("/review_does_not_exist");
          }
        } else {
          setError("Sorry, we couldn't load review");
        }
      });
  }, [params]);

  return (
    <div className={styles.individual}>
      <Nav />
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className={styles.individualCard}>
            <GameCard game={reviewPage} />
            <p>Category: {reviewPage.category}</p>
            <p>Designer: {reviewPage.designer}</p>
          </div>
          <ThisReview game={reviewPage} />
          <CommentList id={params.review_id} />{" "}
        </>
      )}
    </div>
  );
};

export default IndividualGame;
