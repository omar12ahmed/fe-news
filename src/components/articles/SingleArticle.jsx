import { useParams } from "react-router";
import { fetchSingleArticle } from "../../../api";
import { useEffect, useState } from "react";
import ArticleSection from "./ArticleSectio";
import CommentSection from "./CommentSection";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setIsArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSingleArticle(article_id)
      .then((data) => {
        setIsArticle(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        const errorCode = err.response.status;
        if (errorCode === 400) {
          setError(`${errorCode},  ${err.response.data.msg}`);
        } else if (errorCode === 404) {
          setError(`${errorCode},  ${err.response.data.msg}`);
        }
      });
  }, [article_id]);

  if (isLoading) {
    return <h2>Loading.....</h2>;
  }

  return (
    <div style={{ marginTop: "10%" }}>
      {error ? (
        <h2 className="text-danger">{error}</h2>
      ) : (
        <>
          <ArticleSection article={article} />
          <CommentSection article_id={article_id} />
        </>
      )}
    </div>
  );
}

export default SingleArticle;
