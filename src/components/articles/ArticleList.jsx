import { fetchArticles } from "../../../api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArticles().then((articlesdata) => {
      setArticles(articlesdata);
      console.log(articlesdata);
    });
  }, []);

  return (
    <>
      <ul>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
}

export default ArticleList;
