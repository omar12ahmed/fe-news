import axios from "axios";

const ncApi = axios.create({
  baseURL: "https://be-nc-news-wl3m.onrender.com/api",
});

export const fetchArticles = (sort_by, order) => {
  return ncApi
    .get("/articles", { params: { sort_by: sort_by, order: order } })
    .then((response) => {
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
("lorum ipsum");

export const patchVotes = (article_id, inc_votes) => {
  return ncApi.patch(`/articles/${article_id}`, { inc_votes }).catch((err) => {
    throw err;
  });
};

export const postCommentArticle = (article_id, body, username) => {
  return ncApi
    .post(`/articles/${article_id}/comments`, { body, username })
    .then((response) => {
      return response.data.newComment;
    });
};

export const deleteCommentArticle = (comment_id) => {
  return ncApi.delete(`/comments/${comment_id}`);
};
