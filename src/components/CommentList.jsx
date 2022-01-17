import { useEffect, useState } from "react";
import { getComments } from "../utils";
import CommentCard from "./CommentCard";
import styles from "../css-modules/main.module.css";
import Pagination from "./Pagination";
import WriteComment from "./WriteComment";

const CommentList = ({ id }) => {
  const [commented, setCommented] = useState(false);
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    getComments(id, page)
      .then(({ comments, total_count }) => {
        setComments(comments);
        setCommented(false);
        setCount(total_count);
      })
      .catch((err) => {
        setError("Sorry, couldn't load comments");
      });
  }, [commented, page]);

  {
    return error ? (
      <p>{error}</p>
    ) : (
      <div>
        {count === 1 ? <h3>1 Comment</h3> : <h3>{count} Comments</h3>}
        <WriteComment id={id} setCommented={setCommented} />
        <ul className={styles.lists}>
          {comments.map((comment) => {
            return (
              <li key={comment.body}>
                <CommentCard comment={comment} />
              </li>
            );
          })}
        </ul>
        <Pagination setPage={setPage} page={page} count={count} />
      </div>
    );
  }
};

export default CommentList;
