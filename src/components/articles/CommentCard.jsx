import DeleteButton from "./DeleteButton";
import { UserContext } from "./UserContext";
import { useContext } from "react";

function CommentCard({ comment, setComments }) {
  const { user, setUser } = useContext(UserContext);

  return (
    <div style={{ border: "solid black 2px" }}>
      <p>{comment.comment_id}</p>
      <p>{comment.author}</p>
      <p>{comment.body}</p>
      <p>{comment.created_at}</p>
      <p>Votes: {comment.votes}</p>
      {user.username === comment.author ? (
        <DeleteButton
          comment_id={comment.comment_id}
          setComment={setComments}
        />
      ) : null}
    </div>
  );
}

export default CommentCard;
