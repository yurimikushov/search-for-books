import React from 'react'
import PropTypes from 'prop-types'

const FoundBook = ({ title, author, img, onOpen }) => (
  <div className='found-book' onClick={onOpen}>
    <div className='found-book__cover'>
      <img
        className='found-book__cover-img'
        src={img}
        alt={`${title} / ${author}`}
      />
    </div>
    <div className='found-book__info'>
      <span className='found-book__title'>{title}</span>
      <span className='found-book__author'>{author}</span>
    </div>
  </div>
)

FoundBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired,
}

export default FoundBook
