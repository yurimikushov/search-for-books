import React from 'react'
import PropTypes from 'prop-types'

const FoundBook = ({ book }) => (
  <div className='found-book'>
    <div
      className='found-book__cover'
      style={{ backgroundImage: `url(${book.img})` }}
    ></div>
    <div className='found-book__description'>
      <span className='found-book__title'>{book.title || 'unknown'}</span>
      <span className='found-book__author'>{book.author || 'unknown'}</span>
    </div>
  </div>
)

FoundBook.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
}

export default FoundBook
