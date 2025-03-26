import React from 'react';
import { useLocation, useNavigate,useParams} from 'react-router-dom';
import './BlogDetails.css';

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
      <button className='btn' onClick={() => navigate('/articles')}>← Go Back</button>  
      
      <div className="blog-cont" style={{ maxWidth: '800px', margin: '0 auto' }}>
       
        <h1 className='art-title'>{article.title}</h1>
        <h3 className='art-desc'>{article.shortDescription}</h3>
        <p className='art-cont'>{article.content}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
