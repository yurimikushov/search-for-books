import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useBookPopup } from '../../store/hooks'

const FoundBook = ({ book }) => {
  const { onShow } = useBookPopup()

  const onOpenHandler = () => {
    onShow(book)
  }

  return (
    <div className='found-book' onClick={onOpenHandler}>
      <div
        className='found-book__cover'
        style={{ backgroundImage: `url(${book.img})` }}
      ></div>
      <div className='found-book__description'>
        <span className='found-book__title'>{book.title}</span>
        <span className='found-book__author'>
          {book.author || 'Unknown author'}
        </span>
      </div>
    </div>
  )
}

FoundBook.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
}

export default FoundBook
