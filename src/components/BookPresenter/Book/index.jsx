import React from 'react'
import './index.css'

const Book = ({ img, title, author, publishDate, publisher, isbn }) => (
  <div className='book'>
    <div className='book__cover'>
      {img && <img className='book__cover-img' src={img} />}
    </div>
    <div className='book__info'>
      <div className='book__title'>{title}</div>
      <div className='book__author'>{author}</div>
      <div className='book__isbn'>ISBN: {isbn}</div>
      <div className='book__publication-info'>
        <span className='book__publisher'>{publisher}, </span>
        <span className='book__published'>{publishDate}</span>
      </div>
    </div>
  </div>
)

Book.propTypes = {}

export default Book
