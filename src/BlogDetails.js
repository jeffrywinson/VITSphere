import React from 'react';
import { useLocation, useNavigate,useParams} from 'react-router-dom';

const BlogDetails = ({articles}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { index } = useParams();
  const article = articles[parseInt(index)];

  if (!article) {
    return <div>Blog not found!</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/articles')}>← Go Back</button>  
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
       
        <h1>{article.title}</h1>
        <h3>{article.shortDescription}</h3>
        <p>{article.content}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
