import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './CreatePost.css'


const EditPost = ({ articles, handleUpdate }) => {
  const { index } = useParams();
  const navigate = useNavigate();

  const articleIndex = parseInt(index);

  // ✅ Set the initial state with existing article details
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [content, setContent] = useState("");

  // ✅ Load the article details when the component mounts
  useEffect(() => {
    if (articles[articleIndex]) {
      const article = articles[articleIndex];
      setTitle(article.title);
      setShortDescription(article.shortDescription);
      setContent(article.content);
    }
  }, [articleIndex, articles]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedArticle = { title, shortDescription, content };
    
    // ✅ Update the article
    handleUpdate(articleIndex, updatedArticle);

    // ✅ Navigate back to articles page
    navigate("/articles");
  };

  return (
    <div className="container">
      <div className="create-post">        
        <form className='post-form' onSubmit={handleSubmit}>
          <h2 className="edit-header">Edit Post</h2>
          <label htmlFor="name">Post Name: </label>
          <input className='post-name'
            type="text"
            id="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            required
          />

          <label htmlFor="short">Short Description:</label>
          <input className='short-desc'
            type="text"
            id="short"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            placeholder="Enter short description"
            required
          />

          <label htmlFor="content">Content: </label>
          <textarea className='post-content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter post content"
            required
            id="content"
          />

          <button  className="btn" type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
