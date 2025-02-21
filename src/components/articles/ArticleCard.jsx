import { Link } from "react-router";

function ArticleCard({ article }) {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <div style={{ border: "solid black 2px", marginTop: "40px" }}>
        <h3>{article.title}</h3>
        <p>Author: {article.author}</p>
        <p>{article.topic}</p>
        <p>Comments: {article.comment_count}</p>
        <p>Votes: {article.votes}</p>
        <p>{article.created_at}</p>

        <p></p>
      </div>
    </Link>
  );
}

export default ArticleCard;
