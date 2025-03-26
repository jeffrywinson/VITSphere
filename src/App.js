import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ArticlesPage from './ArticlesPage';

function App() {
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
