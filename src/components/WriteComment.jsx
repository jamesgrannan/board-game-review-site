import { useContext, useState } from "react";
import { userContext } from "../contexts/user";
import { postComment } from "../utils";
import styles from "../css-modules/comments.module.css";

const WriteComment = ({ id, setCommented }) => {
  const { user } = useContext(userContext);
  const [inputComment, setInputComment] = useState("");
  const [error, setError] = useState(null);
  const handleChange = (event) => setInputComment(event.target.value);

  const handleSubmit = (event) => {
    setError("");
    event.preventDefault();
    postComment(inputComment, user, id)
      .then((res) => {
        console.log("in then block");
        if (res) {
          setCommented(true);
          setInputComment("");
        }
      })
      .catch((err) => {
        console.log("ERROR");
        setError(
          "Sorry, something went wrong and we couldn't post your comment. Try again."
        );
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.commentsForm}>
        <label htmlFor="comment_body">Comment:</label>
        <textarea
          name="comment_body"
          id="comment_body"
          type="text"
          required
          onChange={handleChange}
          value={inputComment}
          placeholder="Write your comment here..."
        ></textarea>
        <button type="submit">Post Comment</button>
      </form>
      <p>{error}</p>
    </>
  );
};

export default WriteComment;
