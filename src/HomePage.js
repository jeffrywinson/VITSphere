import React,{useState} from 'react';
import './HomePage.css';
import './ArticlesPage.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import CreatePost from './CreatPost';


function HomePage() {
  
  const navigate = useNavigate();
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
        <div className="featured-article-grid">
          <div className="featured-article-card">
            <img src="/one.jpg" alt="Article 1" />
            <h3>📚 Mastering Time Management in College</h3>
            <p>Discover effective tips and strategies to balance academics, extracurriculars, and personal time efficiently.</p>
          </div>
          <div className="featured-article-card">
            <img src="/two.jpg" alt="Article 2" />
            <h3>💡 The Rise of AI in Education</h3>
            <p>Explore how artificial intelligence is transforming learning experiences through personalized education and smart tools.</p>
          </div>
          <div className="featured-article-card">
            <img src="/three.jpg" alt="Article 3" />
            <h3>🌿 Sustainable Living on Campus</h3>
            <p>Learn how students are adopting eco-friendly practices through green initiatives and sustainable lifestyle choices.</p>
          </div>
        </div>
      </section>

      <section>
        <button onClick={() => navigate("/create")}>
          Create New Post
        </button>
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
