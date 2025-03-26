import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";

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
    <>
      <div>
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

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;

