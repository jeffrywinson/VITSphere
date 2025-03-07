import React from 'react';
import './ArticlesPage.css';

function ArticlesPage() {
  return (
    <div className="articles-page">
      <h1>Explore Our Articles</h1>
      <div className="article-list">
        <div className="article-card">
          <h3>Article Title 1</h3>
          <p>Short description of article 1.</p>
          <button>Read More</button>
        </div>
        <div className="article-card">
          <h3>Article Title 2</h3>
          <p>Short description of article 2.</p>
          <button>Read More</button>
        </div>
        <div className="article-card">
          <h3>Article Title 3</h3>
          <p>Short description of article 3.</p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default ArticlesPage;
