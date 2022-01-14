import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getAReview } from "../utils";
import Nav from "./Nav";
import GameCard from "./GameCard";
import ThisReview from "./ThisReview";
import WriteComment from "./WriteComment";
import CommentList from "./CommentList";

const IndividualGame = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [reviewPage, setReviewPage] = useState({});
  const [commented, setCommented] = useState(false);
  const [error, setError] = useState(null);
  console.log(error);
  useEffect(() => {
    setError(null);
    getAReview(params.review_id)
      .then((userData) => {
        setReviewPage(userData);
      })
      .catch((err) => {
        if (
          err.response.data.msg ===
          `No review found at review_id: ${params.review_id}`
        ) {
          console.log("qwertyuioplkjhgfdsdfghjhgfdsdfghgfd");
          navigate("/review_does_not_exist");
        } else {
          console.log("qwertyuioplkjhgfdsdfghjhgfdsdfghgfd");
          setError("Sorry, we couldn't load review");
        }
      });
  }, [params]);

  return (
    <div>
      <Nav />
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <GameCard game={reviewPage} />
          <p>Category: {reviewPage.category}</p>
          <p>Designer: {reviewPage.designer}</p>
          <ThisReview game={reviewPage} />
          <WriteComment id={params.review_id} setCommented={setCommented} />
        </>
      )}
      <CommentList
        id={params.review_id}
        setCommented={setCommented}
        commented={commented}
      />
    </div>
  );
};

export default IndividualGame;
