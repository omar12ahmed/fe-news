import axios from "axios";
import { fetchArticles } from "../../../api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArticles().then((articlesdata) => {
      setArticles(articlesdata);
    });
  }, []);
  console.log(articles);

  return (
    <>
      <ArticleCard articles={articles} />
    </>
  );
}

export default ArticleList;
