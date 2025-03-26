import React from "react";
import { useNavigate } from "react-router-dom";
import './ArticlePage.css'


const ArticlesPage = ({ articles, setArticles }) => {
  const navigate = useNavigate();

  const handleDelete = (index) => {
    const updatedArticles = articles.filter((_, i) => i !== index);
    setArticles(updatedArticles);
  };

  return (
    <div className="articles-outer">
      <h2>Articles</h2>
      {articles.length > 0 ? (
        <div className="article-container">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <h3>{article.title}</h3>
              <p><strong>Description:</strong> {article.shortDescription}</p>
              <p><strong>Content:</strong> {article.content}</p>
              
              <div className="button-container">
                <button className="btn" onClick={() => navigate(`/edit/${index}`)}>Edit</button>
                <button className="btn" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="initial">No articles yet. <button className="btn" onClick={() => navigate("/create")}>Create One!</button></p>
      )}
    </div>
    
  );
};

export default ArticlesPage;

