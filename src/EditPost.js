import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


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
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Post Name: </label>
        <input
          type="text"
          id="name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          required
        />

        <label htmlFor="short">Short Description:</label>
        <input
          type="text"
          id="short"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          placeholder="Enter short description"
          required
        />

        <label htmlFor="content">Content: </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter post content"
          required
          id="content"
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditPost;
