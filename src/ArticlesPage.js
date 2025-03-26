import React, {useState} from 'react';
import './ArticlesPage.css';
import Article from './components/Article';

function ArticlesPage(props) {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState({
    title: "",
    desc: "",
    content: ""
  });
  function addArticle(newNote) {
    setArticles(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteArticle(id) {
    setArticles(prevNotes => {
      return prevNotes.filter((article, index) => {
        return index !== id;
      });
    });
  }

  function submitNote(event) {
    props.onAdd(article);
    setArticle({
      title: "",
      desc: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div className="articles-page">
      <h1>Explore Our Articles</h1>
      <div className='createArticle'>
        <button onClick={submitNote}>Create Article</button>
      </div>
      <div className="article-list">
        {articles.map((article, index)=>{
          return (
            <Article key = {index}
            id = {index}
            title = {article.title}
            desc = {article.desc}
            />
          )
        })}
      </div>
    </div>
  );
}

export default ArticlesPage;
