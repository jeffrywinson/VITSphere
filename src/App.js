import React,{useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ArticlesPage from './ArticlesPage';
import CreatePost from './CreatPost';

function App() {

    const [articles, setArticles] = useState([]);  // ✅ State to hold articles

    const addArticle1 = (newArticle) => {
      setArticles((prevArticles) => [...prevArticles, newArticle]);
    };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePost addArticle={addArticle1} />} />
        <Route path="/articles" element={<ArticlesPage articles={articles} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
