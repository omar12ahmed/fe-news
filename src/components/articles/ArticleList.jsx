import { fetchArticles } from "../../../api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import SingleArticle from "./SingleArticle";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then((articlesdata) => {
        setArticles(articlesdata);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <h2>Loading ....</h2>;
  }
  return (
    <>
      <h2>Articles</h2>
      <ul>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
      <SingleArticle article_id={articles.article_id} />
    </>
  );
}

export default ArticleList;
