import { Link } from "react-router";

function ArticleCard({ article }) {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <div style={{ border: "solid black 2px", marginTop: "40px" }}>
        <h3>{article.title}</h3>
        <p>{article.author}</p>
      </div>
    </Link>
  );
}

export default ArticleCard;
