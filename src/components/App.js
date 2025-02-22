import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import About from './About';
import ArticleList from "./ArticleList";

function App() {

  return (
    <div className="App">
      <Header headerName={blogData.name}/>
      <About 
      image={blogData.image}
      about={blogData.about}
      />
      <ArticleList postsData={blogData.posts}/>
    </div>
  );
}

export default App;