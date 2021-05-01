import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useBookPopup } from '../../store/hooks'

const FoundBook = ({ id: bookId, title, author, img }) => {
  const { onShow } = useBookPopup()

  const onOpenHandler = () => {
    onShow(bookId)
  }

  return (
    <div className='found-book' onClick={onOpenHandler}>
      <div
        className='found-book__cover'
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className='found-book__info'>
        <span className='found-book__title'>{title}</span>
        <span className='found-book__author'>{author}</span>
      </div>
    </div>
  )
}

FoundBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

export default FoundBook
