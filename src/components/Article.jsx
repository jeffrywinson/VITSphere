import React from 'react'
import '../ArticlesPage.css'

export default function Article(props) {
  return (
    <div className='a-card'>
      <h3>Article Title {props.id}</h3>
      <p>Short description of article {props.id}.</p>
      <button>Read More</button>
    </div>
  )
}
