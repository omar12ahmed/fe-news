function ArticleCard({ article }) {
  return (
    <div style={{ border: "solid black 2px", marginTop: "40px" }}>
      <h3>{article.title}</h3>
      <p>{article.author}</p>
    </div>
  );
}

export default ArticleCard;
