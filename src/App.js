import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ArticlesPage from './ArticlesPage';
import CreatePost from './CreatPost';
import { useState } from 'react';

function App() {
  const [articles, setArticles] = useState([]);
  
    const addArticle = (newArticle) => {
      setArticles([...articles, newArticle]);
    };  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePost addArticle={addArticle} />} />
        <Route path="/articles" element={<ArticlesPage articles={articles} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
