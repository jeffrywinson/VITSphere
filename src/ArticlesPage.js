import React from "react";
import { useNavigate } from "react-router-dom";

const ArticlesPage = ({ articles, setArticles }) => {
  const navigate = useNavigate();

  const handleDelete = (index) => {
    const updatedArticles = articles.filter((_, i) => i !== index);
    setArticles(updatedArticles);
  };

  const handleClick = (index, article) => {
    navigate(`/blog/${index}`, { state: { article } }); 
  };

  return (
    <div>
      <h2>Articles</h2>

      {articles.length > 0 ? (
        <div className="articles-container">
          {articles.map((article, index) => (
            <div
              key={index}
              className="article-card"
              onClick={() => handleClick(index, article)}  
            >
              <h3>{article.title}</h3>
              <p><strong>Description:</strong> {article.shortDescription}</p>
              <p><strong>Content:</strong> {article.content}</p>

              <div className="button-container">
                <button onClick={() => navigate(`/edit/${index}`)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))}
          <button onClick={() => navigate("/create")}>Create Another Post!</button>
        </div>
      ) : (
        <p>No articles yet. <button onClick={() => navigate("/create")}>Create One!</button></p>
      )}
    </div>
  );
};

export default ArticlesPage;

