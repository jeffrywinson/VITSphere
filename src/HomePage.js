import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './HomePage.css';

function HomePage() {
  
  const navigate = useNavigate();
  return (
    <div className="home-page">

      <section className="hero">
        <div className="hero-content">
          <h1>VITSphere</h1>
          <p>Discover articles about college life, tips, and more.</p>
          <Link to="/articles">
            <button>Explore</button>
          </Link>
        </div>
      </section>

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

      <section className='button-section'>
        <button className="button-style" onClick={() => navigate("/create")}>
          Create Post
        </button>
      </section>

  
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

    <section>
      <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
            <li class="nav-item"><a href="/create" class="nav-link px-2 text-body-secondary">Create</a></li>
            <li class="nav-item"><a href="/articles" class="nav-link px-2 text-body-secondary">Articles</a></li>
          </ul>
          <p class="text-center text-body-secondary">© 2025 VITSphere, Inc</p>
        </footer>
      </div>
    </section>

    </div>
  );
}

export default HomePage;
