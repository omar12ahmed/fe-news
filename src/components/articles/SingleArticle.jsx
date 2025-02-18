import { useParams } from "react-router";
import { fetchSingleArticle } from "../../../api";
import { useEffect, useState } from "react";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setIsArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!article_id) return undefined;
    fetchSingleArticle(article_id).then((data) => {
      setIsArticle(data);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <h2>Loading.....</h2>;
  }

  return (
    <div>
      <div></div>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p>Created At: {article.created_at}</p>
      <p>Votes:{article.votes}</p>
      <p>Article Id: {article_id}</p>
    </div>
  );
}

export default SingleArticle;
