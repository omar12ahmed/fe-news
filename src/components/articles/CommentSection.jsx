import { useEffect, useState } from "react";
import { fetchCommentArticle } from "../../../api";
import CommentCard from "./CommentCard";
import AddButton from "./AddButton";
// import AddComment from "./AddComment";

function CommentSection(article_id) {
  const id = article_id.article_id;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentArticle(id).then((comments) => {
      setComments(comments);
    });
  }, [id]);

  return (
    <>
      <h1>Comments</h1>
      <ul style={{ border: "solid black 2px", marginTop: "40px" }}>
        {comments.map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              setComments={setComments}
            />
          );
        })}
      </ul>
      <AddButton setComments={setComments} />
    </>
  );
}
export default CommentSection;
