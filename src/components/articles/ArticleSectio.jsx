import { Children, useState } from "react";

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
    </div>
  );
}

export default ArticleSection;

{
}
