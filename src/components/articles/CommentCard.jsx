function CommentCard(comment) {
  console.log(comment.comment.comment_id);

  return (
    <div style={{ border: "solid black 2px" }}>
      <p>{comment.comment.comment_id}</p>
      <p>{comment.comment.author}</p>
      <p>{comment.comment.body}</p>
      <p>{comment.comment.created_at}</p>
      <p>Votes: {comment.comment.votes}</p>
    </div>
  );
}

export default CommentCard;
