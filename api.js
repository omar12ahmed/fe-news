import axios from "axios";

const ncApi = axios.create({
  baseURL: "https://be-nc-news-wl3m.onrender.com/api",
});

export const fetchArticles = (articles) => {
  return ncApi.get("/articles").then((response) => {
    return response.data.articles;
  });
};
