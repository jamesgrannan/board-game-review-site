import { useEffect, useState } from "react";
import { getComments } from "../utils";
import CommentCard from "./CommentCard";
import styles from "../css-modules/main.module.css";

const CommentList = ({ id, setCommented, commented }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(id).then((res) => {
      setComments(res);
      setCommented(false);
    });
  }, [commented]);

  return (
    <div>
      <h3>Comments</h3>
      <ul className={styles.lists}>
        {comments.map((comment) => {
          return (
            <li>
              <CommentCard comment={comment} />
            </li>
          );
        })}
      </ul>
      <p>Page 1</p>
    </div>
  );
};

export default CommentList;
