import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAReview } from "../utils";
import Nav from "./Nav";
import GameCard from "./GameCard";
import ThisReview from "./ThisReview";
import WriteComment from "./WriteComment";
import CommentList from "./CommentList";

const IndividualGame = () => {
  const params = useParams();
  const [reviewPage, setReviewPage] = useState({});

  useEffect(() => {
    getAReview(params.review_id).then((userData) => {
      setReviewPage(userData);
    });
  }, []);
  console.log(reviewPage);
  return (
    <div>
      <Nav />
      <GameCard game={reviewPage} />
      <p>Category: {reviewPage.category}</p>
      <p>Designer: {reviewPage.designer}</p>
      <ThisReview game={reviewPage} />
      <WriteComment id={params.review_id} />
      <CommentList id={params.review_id} />
    </div>
  );
};

export default IndividualGame;
