
import React from "react";
import { useNavigate } from "react-router-dom";
import './ArticlesPage.css';

const ArticlesPage = ({ articles, setArticles }) => {
  const navigate = useNavigate();

  // ✅ Delete handler
  const handleDelete = (index) => {
    const updatedArticles = articles.filter((_, i) => i !== index);
    setArticles(updatedArticles);
  };

  return (
    <div>
      <h2>Articles</h2>

      {articles.length > 0 ? (
        <div className="articles-container">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <h3>{article.title}</h3>
              <p><strong>Description:</strong> {article.shortDescription}</p>
              <p><strong>Content:</strong> {article.content}</p>
              
              {/* ✅ Delete button */}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No articles yet. <button onClick={() => navigate("/create")}>Create One!</button></p>
      )}
      <div className="featured-article-card">
            <h3>📚 Mastering Time Management in College</h3>
            <p>Discover effective tips and strategies to balance academics, extracurriculars, and personal time efficiently.</p>
          </div>
          <div className="featured-article-card">
            
            <h3>💡 The Rise of AI in Education</h3>
            <p>Explore how artificial intelligence is transforming learning experiences through personalized education and smart tools.</p>
          </div>
          <div className="featured-article-card">
          
            <h3>🌿 Sustainable Living on Campus</h3>
            <p>Learn how students are adopting eco-friendly practices through green initiatives and sustainable lifestyle choices.</p>
          </div>
    </div>
  );
};

export default ArticlesPage;
