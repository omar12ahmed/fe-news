import { useState } from "react";
import "./App.css";
import AllArticles from "./components/articles/AllArticles";
import Home from "./components/Home";
import { Routes, Route, Router } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/topics" element={<p>topics</p>} />
        <Route path="/users" element={<p>Users</p>} />
      </Routes>
    </>
  );
}

export default App;
