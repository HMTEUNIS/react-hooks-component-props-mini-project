import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import ArticleList from "./ArticleList"
import About from "./About"



function App() {
  return (
    <div className="App">
      <Header blogName={blogData.name} />
      <About
        img={blogData.image}
        aTxt={blogData.about}
      />
      <ArticleList articles={blogData.posts}/>
    </div>
  );
}

export default App;
