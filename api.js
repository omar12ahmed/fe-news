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
  return ncApi.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

export const fetchCommentArticle = (article_id) => {
  return ncApi.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const patchVotes = (article_id, inc_votes) => {
  return ncApi.patch(`/articles/${article_id}`, { inc_votes }).catch((err) => {
    throw err;
  });
};
