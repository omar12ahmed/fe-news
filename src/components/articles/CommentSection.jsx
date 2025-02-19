import { useEffect, useState } from "react";
import { fetchCommentArticle } from "../../../api";
import CommentCard from "./CommentCard";

function CommentSection(article_id) {
  const id = article_id.article_id;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentArticle(id).then((comments) => {
      setComments(comments);
      console.log(comments);
    });
  }, [id]);

  return (
    <ul style={{ border: "solid black 2px", marginTop: "40px" }}>
      <h1>Comments</h1>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </ul>
  );
}
export default CommentSection;
