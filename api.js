import axios from "axios";

const ncApi = axios.create({
  baseURL: "https://be-nc-news-wl3m.onrender.com/api",
});

export const fetchArticles = () => {
  return ncApi.get("/articles").then((response) => {
    return response.data.articles;
  });
};

export const fetchSingleArticle = (article_id) => {
  return ncApi
    .get(`/articles/${article_id}`)
    .then((response) => {
      return response.data.article;
    })
    .catch((err) => {
      throw err;
    });
};
