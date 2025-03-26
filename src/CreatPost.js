import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import './CreatePost.css'

const CreatePost = ({ addArticle }) => {

  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && shortDescription && content) {
      addArticle({ title, shortDescription, content });  
      navigate("/articles");
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className='container'>
      <div className='create-post'>
        <form className='post-form' onSubmit={handleSubmit}>
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

          <button className='btn' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;

