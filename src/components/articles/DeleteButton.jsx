import { useState } from "react";
import { deleteCommentArticle } from "../../../api";
function DeleteButton({ comment_id, setComment }) {
  const [error, setError] = useState("");
  const [deleting, setDeleting] = useState(false);
  const handleDelete = () => {
    setDeleting(true);
    deleteCommentArticle(comment_id)
      .then(() => {
        setError(null);
        setDeleting(false);
        setComment((currentComments) =>
          currentComments.filter((comment) => comment.comment_id !== comment_id)
        );
      })
      .catch((err) => {
        setError("Something went wrong! please try again later");
        setDeleting(false);
      });
  };
  if (deleting) {
    return <p className="text-danger"> Deleting .... </p>;
  }
  return (
    <>
      {error ? <p className="text-danger"> {error} </p> : null}
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

export default DeleteButton;
