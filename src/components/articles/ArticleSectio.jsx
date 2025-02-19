import { Children, useState } from "react";
import Votes from "./Votes";

function ArticleSection({ article }) {
  return (
    <div>
      <div></div>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p>Created At: {article.created_at}</p>
      <p>Article Id: {article.article_id}</p>
      <Votes votes={article.votes} />
    </div>
  );
}

export default ArticleSection;
