import { useState } from "react";
import "./App.css";
import AllArticles from "./components/articles/AllArticles";
import Home from "./components/Home";
import { Routes, Route, Router } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./components/NavBar";
import SingleArticle from "./components/articles/SingleArticle";

// import AddButton from "./components/articles/AddButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        {/* <Route path="add_comment" element={<SingleArticle />} /> */}
        <Route path="/topics" element={<p>topics</p>} />
        <Route path="/users" element={<p>Users</p>} />

        <Route path="/*" element={<p>Path Not found</p>} />
      </Routes>
    </div>
  );
}

export default App;
