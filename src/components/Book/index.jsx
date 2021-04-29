import React from 'react'
import './index.css'

const Book = ({ title, author, publicationDate, publisher, isbn }) => (
  <div className='book'>
    <div className='book__cover'></div>
    <div className='book__title'>{title}</div>
    <div className='book__author'>{author}</div>
    <div className='book__publication-date'>{publicationDate}</div>
    <div className='book__publisher'>{publisher}</div>
    <div className='book__isbn'>{isbn}</div>
    <div>
      {JSON.stringify(
        { title, author, publicationDate, publisher, isbn },
        null,
        2
      )}
    </div>
  </div>
)

Book.propTypes = {}

export default Book
