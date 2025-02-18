function ArticleCard({ articles }) {
  return (
    <ul>
      {articles.map((article, i) => {
        return (
          <div key={i} style={{ border: "solid black 2px", marginTop: "40px" }}>
            <h3>{article.title}</h3>
            <p>{article.author}</p>
          </div>
        );
      })}
    </ul>
  );
}

export default ArticleCard;
