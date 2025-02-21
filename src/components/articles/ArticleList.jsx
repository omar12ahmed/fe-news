import { fetchArticles } from "../../../api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import SingleArticle from "./SingleArticle";
import Dropdown from "react-bootstrap/Dropdown";
import { useParams, useRouteLoaderData, useSearchParams } from "react-router";
function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortByQuery, setSortByQuery] = useState("created_at");
  const [orderQuery, setOrderQuery] = useState("DESC");
  const [error, setError] = useState("");

  const sortby = searchParams.get("sort_by");
  const order = searchParams.get("order");

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetchArticles(sortby, order)
      .then((articlesdata) => {
        setArticles(articlesdata);
        setError(null);

        setIsLoading(false);
      })
      .catch((err) => {
        setError("Something Went wrong! Try again later.");
        setIsLoading(false);
      });
  }, [sortby, order]);

  const handleSort = (e) => {
    setSortByQuery(e.target.value);
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", e.target.value);
    setSearchParams(newParams);
  };

  const handleOrder = (e) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", e.target.value);
    setSearchParams(newParams);
  };
  if (isLoading) {
    return <h2>Loading ....</h2>;
  }

  if (error) return <h2>{error}</h2>;
  return (
    <div style={{ marginTop: "20%" }}>
      <h2>Articles</h2>

      <div>
        <select value={sortByQuery} onChange={handleSort}>
          <option value="title"> Title</option>
          <option value="author"> Author</option>
          <option value="created_at"> Date</option>
          <option value="comment_count"> Comment Count</option>
          <option value="votes"> votes</option>
          <option value="topic"> Topic</option>
        </select>

        <div>
          <button onClick={handleOrder} value="ASC">
            ASC
          </button>
          <button onClick={handleOrder} value="DESC">
            DESC
          </button>
        </div>
      </div>

      <ul>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </div>
  );
}

export default ArticleList;
// btn btn-secondary
