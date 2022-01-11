import { useEffect, useState } from "react";
import { getComments } from "../utils";
import CommentCard from "./CommentCard";

const CommentList = ({ id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(id).then((res) => {
      setComments(res);
      console.log(comments);
    });
  }, []);

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => {
          return (
            <li>
              <CommentCard comment={comment} />;
            </li>
          );
        })}
      </ul>
      <p>Page 1</p>
    </div>
  );
};

export default CommentList;
