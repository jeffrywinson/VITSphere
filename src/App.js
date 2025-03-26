import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ArticlesPage from './ArticlesPage';
import CreatePost from './CreatPost';
import EditPost from './EditPost';
import BlogDetails from './BlogDetails';
import './App.css';

function App() {

  const [articles, setArticles] = useState([]); 

  const addArticle1 = (newArticle) => {
    setArticles((prevArticles) => [...prevArticles, newArticle]);
  };

  const handleUpdate = (index, updatedArticle) => {
    const updatedArticles = [...articles];
    updatedArticles[index] = updatedArticle;
    setArticles(updatedArticles);
  };

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePost addArticle={addArticle1} />} />
        <Route path="/articles" element={<ArticlesPage articles={articles} setArticles={setArticles} />} />
        <Route
          path="/edit/:index"
          element={<EditPost articles={articles} handleUpdate={handleUpdate} />}
        />
        <Route path="/blog/:index" element={<BlogDetails articles={articles} handleUpdate={handleUpdate}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
