import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to College Insights</h1>
          <p>Explore articles about college life, tips, and more.</p>
          <Link to="/articles">
            <button>Discover More</button>
          </Link>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="featured-articles">
        <h2>Featured Articles</h2>
        <div className="article-grid">
          <div className="article-card">
            <img src="https://example.com/article1.jpg" alt="Article 1" />
            <h3>Article Title 1</h3>
            <p>Short description of article 1.</p>
          </div>
          <div className="article-card">
            <img src="https://example.com/article2.jpg" alt="Article 2" />
            <h3>Article Title 2</h3>
            <p>Short description of article 2.</p>
          </div>
          <div className="article-card">
            <img src="https://example.com/article3.jpg" alt="Article 3" />
            <h3>Article Title 3</h3>
            <p>Short description of article 3.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest articles.</p>
          <form>
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
